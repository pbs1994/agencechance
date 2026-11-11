// One-off: builds src/data/redirects.json (legacy URL -> final URL) from the
// crawl of the WordPress site + the URL decisions in redirect-rules.mjs.
// Usage: node scripts/migration/build-redirects.mjs <crawl.json> <distDir>
import fs from 'node:fs';
import path from 'node:path';
import { finalUrl, normalize } from './redirect-rules.mjs';

const [crawlPath, dist] = process.argv.slice(2);
const crawl = JSON.parse(fs.readFileSync(crawlPath, 'utf8'));
const exists = (p) => fs.existsSync(path.join(dist, p, 'index.html'));

const redirects = {};
const problems = [];
for (const [u, v] of Object.entries(crawl)) {
  const from = u.replace('https://agencechance.com', '') || '/';
  if (from === '/' ) continue; // handled by a dedicated rule
  const to = finalUrl(from, crawl);
  const fromNorm = normalize(from);
  if (to === fromNorm && exists(to)) continue; // page kept at the same URL
  if (!exists(to)) { problems.push([from, to, v.status]); continue; }
  redirects[fromNorm] = to;
}
// Old URLs we know about that the crawl did not reach
for (const extra of ['/fr/about/', '/en/about/', '/about/', '/en/leading/', '/fr/leading/', '/leading/']) {
  const to = finalUrl(extra, crawl);
  if (exists(to)) redirects[extra] = to;
}
const sorted = Object.fromEntries(Object.entries(redirects).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync('src/data/redirects.json', JSON.stringify(sorted, null, 1) + '\n');
console.log(Object.keys(sorted).length, 'redirects');
if (problems.length) console.log('UNRESOLVED', problems);
