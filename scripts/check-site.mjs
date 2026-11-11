// Post-build QA on dist/: internal links, hreflang reciprocity, titles,
// descriptions, H1 count, canonical, sitemap coverage, redirect targets.
// Usage: npm run build && npm run check
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SITE = 'https://agencechance.com';
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f === 'index.html') files.push(p);
  }
})(DIST);

const urlOf = (f) => '/' + path.relative(DIST, path.dirname(f)).split(path.sep).join('/') + (path.dirname(f) === DIST ? '' : '/');
const pages = new Map();
for (const f of files) pages.set(urlOf(f).replace('//', '/'), fs.readFileSync(f, 'utf8'));
const redirects = JSON.parse(fs.readFileSync('src/data/redirects.json', 'utf8'));

const errors = [];
const warn = [];
const exists = (p) => pages.has(p) || fs.existsSync(path.join(DIST, decodeURIComponent(p)));
const titles = new Map();

for (const [url, html] of pages) {
  if (url === '/') continue;
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canon = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (!title) errors.push(`${url}: no <title>`);
  if (!noindex) {
    if (titles.has(title)) errors.push(`${url}: duplicate title with ${titles.get(title)}`);
    titles.set(title, url);
    if (!desc) errors.push(`${url}: no meta description`);
    if (canon !== SITE + url) errors.push(`${url}: canonical ${canon}`);
    if (h1 !== 1) errors.push(`${url}: ${h1} <h1>`);
    if (title.length > 70) warn.push(`${url}: title ${title.length} chars`);
  }
  // hreflang reciprocity
  for (const [, lang, href] of html.matchAll(/<link rel="alternate" hreflang="([a-z-]+)" href="([^"]+)"/g)) {
    const p = href.replace(SITE, '');
    if (!pages.has(p)) errors.push(`${url}: hreflang ${lang} -> missing ${p}`);
    else if (lang !== 'x-default' && !pages.get(p).includes(`href="${SITE}${url}"`)) errors.push(`${url}: hreflang ${lang} not reciprocal (${p})`);
  }
  // internal links + assets
  for (const [, attr, raw] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|#|data:|javascript:)/.test(raw) && !raw.startsWith(SITE)) continue;
    let p = raw.replace(SITE, '').split('#')[0].split('?')[0];
    if (!p || p.startsWith('/api/')) continue;
    if (!p.startsWith('/')) continue;
    if (redirects[p]) errors.push(`${url}: links to redirected ${p}`);
    else if (!exists(p) && !exists(p.replace(/\/$/, '') + '/')) errors.push(`${url}: broken ${attr} ${p}`);
  }
}

// sitemap
const sm = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ''));
for (const l of locs) if (!pages.has(l)) errors.push(`sitemap: missing page ${l}`);
for (const [url, html] of pages) {
  if (url === '/' || /noindex/.test(html.match(/<meta name="robots"[^>]*>/)?.[0] ?? '')) continue;
  if (!locs.includes(url)) errors.push(`sitemap: ${url} not listed`);
}
// redirect targets
for (const [from, to] of Object.entries(redirects)) {
  if (!pages.has(to)) errors.push(`redirect ${from} -> missing ${to}`);
  if (pages.has(from)) errors.push(`redirect source still exists as a page: ${from}`);
}

console.log(`${pages.size} pages, ${locs.length} sitemap URLs, ${Object.keys(redirects).length} redirects`);
if (warn.length) console.log(`\n${warn.length} warnings:\n` + [...new Set(warn)].slice(0, 40).join('\n'));
if (errors.length) {
  console.log(`\n${errors.length} errors:\n` + [...new Set(errors)].slice(0, 80).join('\n'));
  process.exit(1);
}
console.log('OK');
