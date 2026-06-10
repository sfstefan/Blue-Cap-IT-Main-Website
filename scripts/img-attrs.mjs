// One-time pass: add width/height (from real image metadata), loading="lazy",
// and decoding="async" to <img> tags in pages, layout, and blog markdown.
// The first image in each page file stays eager (likely the hero/LCP image).
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');

async function* walk(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const targets = [];
for await (const f of walk(path.join(ROOT, 'src'))) {
  if (/\.(astro|md|mdx)$/i.test(f)) targets.push(f);
}

const dimCache = new Map();
async function dims(src) {
  if (!src.startsWith('/') || src.startsWith('//')) return null;
  const clean = decodeURI(src.split(/[?#]/)[0]);
  if (dimCache.has(clean)) return dimCache.get(clean);
  let d = null;
  try {
    const m = await sharp(path.join(PUBLIC, clean.slice(1))).metadata();
    if (m.width && m.height) d = { w: m.width, h: m.height };
  } catch {}
  dimCache.set(clean, d);
  return d;
}

let filesChanged = 0, tagsChanged = 0;
for (const file of targets) {
  let content = await fs.readFile(file, 'utf8');
  const tags = [...content.matchAll(/<img\b[^>]*?\/?>/gs)];
  if (!tags.length) continue;
  let changed = false, isFirst = true, out = content;
  for (const m of tags) {
    const tag = m[0];
    let newTag = tag;
    const srcMatch = tag.match(/src=["']([^"']+)["']/);
    const first = isFirst; isFirst = false;
    const hasW = /\bwidth=/.test(tag), hasH = /\bheight=/.test(tag);
    const hasLoading = /\bloading=/.test(tag), hasDecoding = /\bdecoding=/.test(tag);
    let inject = '';
    if (srcMatch && !hasW && !hasH) {
      const d = await dims(srcMatch[1]);
      if (d) inject += ` width="${d.w}" height="${d.h}"`;
    }
    if (!hasLoading && !first) inject += ' loading="lazy"';
    if (!hasDecoding && !first) inject += ' decoding="async"';
    if (first && !/\bfetchpriority=/.test(tag) && srcMatch) inject += ' fetchpriority="high"';
    if (inject) {
      newTag = tag.endsWith('/>')
        ? tag.slice(0, -2).trimEnd() + inject + ' />'
        : tag.slice(0, -1) + inject + '>';
      out = out.replace(tag, newTag);
      tagsChanged++;
      changed = true;
    }
  }
  if (changed) {
    await fs.writeFile(file, out, 'utf8');
    filesChanged++;
  }
}
console.log(`Updated ${tagsChanged} <img> tags across ${filesChanged} files`);
