// One-time image optimization: convert public/ PNG/JPG to resized WebP,
// rewrite references in src/ and netlify/, and (with --delete) remove
// tracked originals. Untracked files and the EXCLUDE list are never deleted.
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, 'public');
const DELETE = process.argv.includes('--delete');

// URL paths (relative to public/) that must keep their original format
const EXCLUDE = new Set([
  '/logo.png',
  '/apple-touch-icon.png',
  '/images/og-default.png',
]);
const EXCLUDE_DIRS = ['/social/'];

const trackedRaw = execSync('git ls-files -z -- public', { cwd: ROOT }).toString('utf8');
const tracked = new Set(trackedRaw.split('\0').filter(Boolean).map(p => p.replace(/\\/g, '/')));

async function* walk(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const isImg = f => /\.(png|jpe?g)$/i.test(f);
const toUrl = abs => '/' + path.relative(PUBLIC, abs).replace(/\\/g, '/');

const results = [];
for await (const file of walk(PUBLIC)) {
  if (!isImg(file)) continue;
  const url = toUrl(file);
  if (EXCLUDE.has(url) || EXCLUDE_DIRS.some(d => url.startsWith(d))) {
    results.push({ url, action: 'excluded' });
    continue;
  }
  const webpAbs = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const webpUrl = toUrl(webpAbs);
  try {
    const meta = await sharp(file).metadata();
    const width = Math.min(meta.width ?? 1600, 1600);
    await sharp(file).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(webpAbs);
    const [oldSize, newSize] = [(await fs.stat(file)).size, (await fs.stat(webpAbs)).size];
    const gitPath = 'public' + url;
    results.push({
      url, webpUrl, oldKB: Math.round(oldSize / 1024), newKB: Math.round(newSize / 1024),
      tracked: tracked.has(gitPath), file,
      newWidth: width, newHeight: Math.round((meta.height ?? 0) * (width / (meta.width ?? width))),
    });
  } catch (err) {
    results.push({ url, action: 'error', error: String(err) });
  }
}

// Rewrite references in source files (raw path and %20-encoded variant)
const SRC_DIRS = ['src', 'netlify'];
const textFiles = [];
for (const d of SRC_DIRS) {
  try {
    for await (const f of walk(path.join(ROOT, d))) {
      if (/\.(astro|md|mdx|css|js|mjs|json|html)$/i.test(f)) textFiles.push(f);
    }
  } catch {}
}

const replacements = new Map(); // file -> count
for (const r of results) {
  if (!r.webpUrl) continue;
  const variants = [...new Set([r.url, encodeURI(r.url)])];
  r.refs = 0;
  for (const tf of textFiles) {
    let content = await fs.readFile(tf, 'utf8');
    let hit = false;
    for (const v of variants) {
      if (content.includes(v)) {
        content = content.split(v).join(r.webpUrl);
        hit = true;
      }
    }
    if (hit) {
      await fs.writeFile(tf, content, 'utf8');
      r.refs++;
      replacements.set(tf, (replacements.get(tf) ?? 0) + 1);
    }
  }
}

// Deletion pass: only tracked originals, only when --delete
let deleted = 0, kept = [];
if (DELETE) {
  for (const r of results) {
    if (!r.webpUrl) continue;
    if (r.tracked) { await fs.unlink(r.file); deleted++; }
    else kept.push(r.url + ' (untracked — kept)');
  }
}

const converted = results.filter(r => r.webpUrl);
const totalOld = converted.reduce((s, r) => s + r.oldKB, 0);
const totalNew = converted.reduce((s, r) => s + r.newKB, 0);
console.log(`Converted: ${converted.length} images`);
console.log(`Size: ${(totalOld / 1024).toFixed(1)} MB -> ${(totalNew / 1024).toFixed(1)} MB`);
console.log(`Referenced (files with rewrites): ${replacements.size}`);
console.log(`Unreferenced images: ${converted.filter(r => r.refs === 0).map(r => r.url).join(', ') || 'none'}`);
console.log(`Errors: ${results.filter(r => r.action === 'error').map(r => r.url + ': ' + r.error).join('; ') || 'none'}`);
if (DELETE) console.log(`Deleted originals: ${deleted}; kept: ${kept.join(', ') || 'none'}`);
await fs.writeFile(path.join(ROOT, 'scripts', 'image-report.json'), JSON.stringify(results, null, 2));
console.log('Full report: scripts/image-report.json');
