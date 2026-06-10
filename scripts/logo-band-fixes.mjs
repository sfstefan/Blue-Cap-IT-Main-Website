// One-time: (1) tighten partner logo band spacing (section default padding is
// 6rem top+bottom; bands shrink to 1.5rem), (2) swap Verkada gold badge for
// the Authorized Reseller logo used in the footer.
import { promises as fs } from 'fs';
import path from 'path';

const PAGES = path.join(process.cwd(), 'src', 'pages');
let padFixed = 0, logoSwapped = 0;

for (const name of await fs.readdir(PAGES)) {
  if (!name.endsWith('.astro')) continue;
  const f = path.join(PAGES, name);
  let c = await fs.readFile(f, 'utf8');
  const orig = c;

  // (1) Logo band sections: plain <section> followed by the centered band div
  c = c.replace(
    /<section>(\s*)<div class="section-inner" style="text-align:center;padding:2rem 1\.5rem;">/g,
    '<section style="padding:1.5rem 4%;">$1<div class="section-inner" style="text-align:center;padding:0 1.5rem;">'
  );
  if (c !== orig) padFixed++;

  // (2) Verkada logo swap (verkada family pages only)
  const beforeSwap = c;
  c = c.replace(
    /<img src="\/verkada-gold-partner-badge\.webp" alt="[^"]*" style="max-height:60px;width:auto;" width="520" height="100"/g,
    '<img src="/images/verkada-partner.webp" alt="Verkada Authorized Reseller" style="max-height:48px;width:auto;" width="1600" height="226"'
  );
  if (c !== beforeSwap) logoSwapped++;

  if (c !== orig) await fs.writeFile(f, c, 'utf8');
}
console.log(`Band padding tightened in ${padFixed} files; Verkada logo swapped in ${logoSwapped} files`);
