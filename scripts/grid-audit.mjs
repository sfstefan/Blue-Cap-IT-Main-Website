// List every card grid with its direct card count and inline style.
import { promises as fs } from 'fs';
import path from 'path';

const PAGES = path.join(process.cwd(), 'src', 'pages');
const GRID_RE = /<div ([^>]*class="[^"]*(?:products-grid|specs-grid|why-grid|trust-pillars|cards-grid)[^"]*"[^>]*)>/g;

for (const name of (await fs.readdir(PAGES)).sort()) {
  if (!name.endsWith('.astro')) continue;
  const c = await fs.readFile(path.join(PAGES, name), 'utf8');
  for (const m of c.matchAll(GRID_RE)) {
    // find matching </div> via depth tracking
    let depth = 1, i = m.index + m[0].length;
    const tokens = [...c.slice(i).matchAll(/<div\b|<\/div>/g)];
    let end = c.length;
    for (const t of tokens) {
      depth += t[0] === '<div' ? 1 : -1;
      if (depth === 0) { end = i + t.index; break; }
    }
    const inner = c.slice(i, end);
    const cards = (inner.match(/class="(?:product-card|spec-card|why-card|trust-pillar)[" ]/g) || []).length;
    const line = c.slice(0, m.index).split('\n').length;
    const style = (m[1].match(/style="([^"]*)"/) || [])[1] || '(class only)';
    console.log(`${name}:${line} cards=${cards} ${style.slice(0, 90)}`);
  }
}
