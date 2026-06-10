import sharp from 'sharp';
const files = [
  'public/verkada-gold-partner-badge.webp',
  'public/images/verkada-partner.webp',
  'public/Verkada Authorized Reseller Logo- Horizontal.webp',
  'public/Partner_Program_Gold_Member_Logo.webp',
  'public/Coro/coro-logo-wide-indigo.webp',
  'public/meter/Meter-purple.webp',
];
for (const f of files) {
  try {
    const m = await sharp(f).metadata();
    console.log(`${f}: ${m.width}x${m.height}`);
  } catch (e) { console.log(`${f}: MISSING`); }
}
