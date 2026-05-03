import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';

const DIR = 'public/images';
const QUALITY = 75;
const MAX_WIDTH = 1600;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;
const results = [];

for (const f of files) {
  const src = join(DIR, f);
  const tmp = join(DIR, '__tmp__' + f);
  const before = (await stat(src)).size;
  totalBefore += before;
  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp);
  const after = (await stat(tmp)).size;
  if (after < before) {
    await unlink(src);
    await rename(tmp, src);
    totalAfter += after;
    results.push({ f, before, after, savedPct: Math.round((1 - after / before) * 100) });
  } else {
    await unlink(tmp);
    totalAfter += before;
    results.push({ f, before, after: before, savedPct: 0 });
  }
}

results.sort((a, b) => b.before - a.before);
for (const r of results) {
  const beforeKB = (r.before / 1024).toFixed(0);
  const afterKB = (r.after / 1024).toFixed(0);
  console.log(`${r.f.padEnd(50)} ${beforeKB}KB → ${afterKB}KB  (-${r.savedPct}%)`);
}

console.log('---');
console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
console.log(`Saved: ${((totalBefore - totalAfter) / 1024).toFixed(0)}KB (${Math.round((1 - totalAfter / totalBefore) * 100)}%)`);
console.log(`Files processed: ${results.length}`);
