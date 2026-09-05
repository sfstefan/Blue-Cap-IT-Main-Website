import sharp from 'sharp';
const files = [
  'public/images/verkada-partner.webp',
  'public/Coro/coro-logo-wide-indigo.webp',
  'public/meter/Meter-purple.webp',
];
for (const f of files) {
  try {
    const m = await sharp(f).metadata();
    console.log(`${f}: ${m.width}x${m.height}`);
  } catch (e) { console.log(`${f}: MISSING`); }
}
