import { readFileSync, writeFileSync } from 'fs';
const map = {
  'about': '/images/about-hero.webp',
  'services': '/images/services-hero.webp',
  'managed-services': '/images/managed-services-hero.webp',
  'cybersecurity': '/images/cybersecurity-hero.webp',
  'naas': '/images/naas-hero.webp',
  'verkada': '/Cameras_Family_Portrait_Pillars.webp',
  'huntress': '/images/huntress-hero.webp',
  'meter': '/meter/dashboard-network.webp',
  'spotai': '/images/spotai-hero.webp',
};
for (const [page, img] of Object.entries(map)) {
  const f = `src/pages/${page}.astro`;
  let c = readFileSync(f, 'utf8');
  if (c.includes('ogImage=')) { console.log(`${page}: already has ogImage, skipped`); continue; }
  const next = c.replace(/<MainLayout\b/, `<MainLayout ogImage="${img}"`);
  if (next === c) { console.log(`${page}: NO MainLayout tag found!`); continue; }
  writeFileSync(f, next, 'utf8');
  console.log(`${page}: ogImage -> ${img}`);
}
