import { readFileSync } from 'fs';
const pages = ['index','about','services','managed-services','cybersecurity','naas','verkada','huntress','meter','spotai'];
for (const p of pages) {
  const c = readFileSync(`src/pages/${p}.astro`, 'utf8');
  const m = c.match(/<img[^>]*src=["']([^"']+)["']/);
  console.log(`${p}: ${m ? m[1] : 'NO IMG'}`);
}
