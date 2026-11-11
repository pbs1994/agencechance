// One-off: writes blog posts and legal pages as Markdown into src/content,
// rewriting image URLs to /media and internal links to their final URLs.
// Usage: node scripts/migration/build-content.mjs <crawl.json> <exDir> <rawDir>
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { finalUrl } from './redirect-rules.mjs';

const [crawlPath, exDir, rawDir, flag] = process.argv.slice(2);
// Content has been hand-edited/translated since the migration: never overwrite silently.
if (fs.existsSync('src/content/blog') && flag !== '--force') {
  console.error('src/content already exists. Re-running would overwrite translations. Use --force to proceed.');
  process.exit(1);
}
const crawl = JSON.parse(fs.readFileSync(crawlPath, 'utf8'));
const media = JSON.parse(fs.readFileSync('src/data/media.json', 'utf8'));
const SITE = 'https://agencechance.com';

const mediaPath = (u) => {
  const key = decodeURIComponent(u).replace(/-\d+x\d+(\.\w+)$/, '$1');
  const m = media[key];
  return m ? `/media/${m.base}-${m.widths.includes(1280) ? 1280 : m.widths.at(-1)}.webp` : null;
};

function fixLinks(md) {
  // images
  md = md.replace(/!\[([^\]]*)\]\((https:\/\/agencechance\.com\/wp-content\/uploads\/[^)\s]+)\)/g, (all, alt, u) => {
    const p = mediaPath(u);
    return p ? `![${alt}](${p})` : '';
  });
  // internal links
  md = md.replace(/\]\((https?:\/\/(?:www\.)?agencechance\.com)?(\/[^)\s]*)(\s+"[^"]*")?\)/g, (all, host, p, title = '') => {
    if (p.startsWith('/media/')) return all;
    return `](${finalUrl(p, crawl)}${title})`;
  });
  return md;
}

const fm = (o) =>
  '---\n' +
  Object.entries(o)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n') +
  '\n---\n\n';

// ---- posts
const SLUG_FIX = {
  // FR/EN slugs that did not match the article topic (TranslatePress artefacts)
  '/fr/blog/info/en-route-pour-le-mariage/': 'animateur-de-mariage-franco-russe',
  '/en/blog/information/wedding-host-2/': 'wedding-host-guide',
};
let n = 0;
for (const f of fs.readdirSync(path.join(exDir, 'posts'))) {
  const e = JSON.parse(fs.readFileSync(path.join(exDir, 'posts', f), 'utf8'));
  const key = e.key.split('/').filter(Boolean).at(-1);
  for (const [lang, v] of Object.entries(e.langs)) {
    const slug = SLUG_FIX[v.url] || v.url.split('/').filter(Boolean).at(-1);
    let md = fixLinks(v.md)
      .replace(/^\s*(Содержание|Sommaire|Table of contents|Contents)\s*$/gim, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    const cover = media[decodeURIComponent(v.featured || '').replace(/-\d+x\d+(\.\w+)$/, '$1')];
    const out = path.join('src/content/blog', lang, slug + '.md');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(
      out,
      fm({
        key,
        title: v.h1,
        metaTitle: v.title.replace(/\s*\|\s*Agence Chance\s*$/i, ''),
        description: v.description,
        date: (v.published || '').slice(0, 10),
        updated: (v.modified || '').slice(0, 10),
        cover: cover ? cover.base : undefined,
        legacyUrl: v.url,
      }) + md + '\n',
    );
    n++;
  }
}
console.log('posts written', n);

// ---- legal pages (kept verbatim, just cleaned)
const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });
td.remove(['script', 'style', 'noscript', 'svg', 'img', 'form', 'button']);
for (const key of ['mentions-legales', 'rgpd', 'cookies']) {
  const e = JSON.parse(fs.readFileSync(path.join(exDir, 'pages', key + '.json'), 'utf8'));
  for (const [lang, v] of Object.entries(e.langs)) {
    const file = path.join(rawDir, v.url.replace(/^\/|\/$/g, '').replace(/\//g, '__') + '.html');
    const $ = cheerio.load(fs.readFileSync(file, 'utf8'));
    const root = $('[data-elementor-type="wp-page"]').first();
    root.find('h1').first().remove();
    let md = td.turndown(root.find('.elementor-widget-text-editor,.elementor-widget-heading').toArray().map((x) => $(x).html()).join('\n'));
    md = fixLinks(md).replace(/\n{3,}/g, '\n\n').trim();
    const out = path.join('src/content/legal', lang, key + '.md');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, fm({ key, title: v.h1[0], metaTitle: v.title.replace(/\s*\|\s*Agence Chance\s*$/i, ''), description: v.description, legacyUrl: v.url }) + md + '\n');
  }
}
console.log('legal written');
