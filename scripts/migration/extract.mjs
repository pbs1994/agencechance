// One-off migration helper: turns the crawled WordPress HTML (TranslatePress,
// Elementor/10Web) into structured JSON (pages) and Markdown (blog posts).
// Usage: node scripts/migration/extract.mjs <crawl.json> <rawDir> <outDir>
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const [crawlPath, rawDir, outDir] = process.argv.slice(2);
const crawl = JSON.parse(fs.readFileSync(crawlPath, 'utf8'));
const SITE = 'https://agencechance.com';
const rel = (u) => u.replace(SITE, '');
const rawFile = (u) =>
  path.join(rawDir, (rel(u).replace(/^\/|\/$/g, '').replace(/\//g, '__') || 'root') + '.html');

const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', emDelimiter: '*' });
td.remove(['script', 'style', 'noscript', 'svg', 'button', 'form']);
td.addRule('img', {
  filter: 'img',
  replacement: (_, node) => {
    const src = bestSrc(node.getAttribute('data-lzl-src') || node.getAttribute('src'), node.getAttribute('data-lzl-srcset') || node.getAttribute('srcset'));
    return src && !src.startsWith('data:') ? `\n\n![${(node.getAttribute('alt') || '').trim()}](${src})\n\n` : '';
  },
});

function bestSrc(src, srcset) {
  // Prefer the original upload (strip -WxH size suffix).
  let s = src || '';
  if (srcset && !srcset.startsWith('data:')) {
    const c = srcset.split(',').map((x) => x.trim().split(/\s+/));
    c.sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
    s = c[0][0] || s;
  }
  return s.replace(/-\d+x\d+(\.\w+)$/, '$1');
}

function images($, root) {
  const out = [];
  $(root).find('img').each((_, el) => {
    const $el = $(el);
    const src = bestSrc($el.attr('data-lzl-src') || $el.attr('src'), $el.attr('data-lzl-srcset') || $el.attr('srcset'));
    if (!src || src.startsWith('data:') || /logo|cropped-2|flag|trustindex|google/i.test(src)) return;
    if (!out.find((o) => o.src === src)) out.push({ src, alt: ($el.attr('alt') || '').trim() });
  });
  // Elementor background images
  $(root).find('[data-settings]').each((_, el) => {
    const m = ($(el).attr('data-settings') || '').match(/"background_image":\{"url":"([^"]+)"/);
    if (m) {
      const src = m[1].replace(/\\\//g, '/');
      if (!out.find((o) => o.src === src)) out.push({ src, alt: '', bg: true });
    }
  });
  const styleBg = $.html(root).match(/background-image:\s*url\(["']?(https:\/\/agencechance\.com\/wp-content\/uploads\/[^"')]+)/g) || [];
  for (const s of styleBg) {
    const src = s.replace(/.*url\(["']?/, '');
    if (!out.find((o) => o.src === src)) out.push({ src, alt: '', bg: true });
  }
  return out;
}

function blocks($, root) {
  // Ordered text blocks of an Elementor page, skipping widgets we rebuild ourselves.
  const out = [];
  $(root)
    .find('h1,h2,h3,h4,h5,h6,p,li,.elementor-counter-title,.elementor-counter-number-wrapper,.elementor-button-text,.elementor-icon-box-title,.elementor-icon-box-description,blockquote')
    .each((_, el) => {
      const $el = $(el);
      if ($el.closest('.ti-widget,[class*="trustindex"],.elementor-widget-twbb_table-of-contents,.elementor-widget-tenweb-posts,.elementor-widget-twbb-nav-menu,form,.trp-language-switcher').length) return;
      if ($el.parents('p,li,h1,h2,h3,h4,h5,h6').length) return;
      const tag = el.tagName.toLowerCase();
      const text = $el.text().replace(/\s+/g, ' ').trim();
      if (!text) return;
      const kind = /^h\d$/.test(tag) ? tag : $el.hasClass('elementor-button-text') ? 'button' : tag === 'li' ? 'li' : 'p';
      out.push({ t: kind, text, ...(kind === 'button' ? { href: $el.closest('a').attr('href') || '' } : {}) });
    });
  return out;
}

const groups = {};
for (const [u, v] of Object.entries(crawl)) {
  if (v.status !== 200) continue;
  const key = rel(v.alt?.ru || u);
  const lang = rel(u).split('/')[1];
  (groups[key] ||= {})[lang] = u;
}

fs.mkdirSync(path.join(outDir, 'pages'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'posts'), { recursive: true });
const index = [];

for (const [key, langs] of Object.entries(groups)) {
  const isPost = /\/blog\/info\/[^/]+\/$/.test(key);
  const entry = { key, isPost, langs: {} };
  for (const [lang, u] of Object.entries(langs)) {
    const html = fs.readFileSync(rawFile(u), 'utf8');
    const $ = cheerio.load(html);
    const meta = {
      url: rel(u),
      title: crawl[u].title,
      description: crawl[u].desc,
      ogImage: $('meta[property="og:image"]').attr('content') || '',
      published: $('meta[property="article:published_time"]').attr('content') || '',
      modified: $('meta[property="article:modified_time"]').attr('content') || $('meta[property="og:updated_time"]').attr('content') || '',
    };
    if (isPost) {
      const content = $('.elementor-widget-twbbpost-content .elementor-widget-container').first();
      content.find('.elementor-widget-twbb_table-of-contents,.elementor-toc__header').remove();
      const h1 = $('.elementor-widget-twbb_post-title').text().replace(/\s+/g, ' ').trim();
      const featured = bestSrc(
        $('.elementor-widget-twbb_featured-image img').attr('data-lazy-src') || $('.elementor-widget-twbb_featured-image img').attr('src'),
        $('.elementor-widget-twbb_featured-image img').attr('data-lazy-srcset') || $('.elementor-widget-twbb_featured-image img').attr('srcset'),
      );
      let md = td.turndown(content.html() || '');
      md = md.replace(/\n{3,}/g, '\n\n').trim();
      entry.langs[lang] = { ...meta, h1, featured: featured && !featured.startsWith('data:') ? featured : meta.ogImage, images: images($, content), md };
    } else {
      const root = $('[data-elementor-type="wp-page"]').toArray();
      const gallery = [];
      $('.elementor-widget-twbb_gallery [data-thumbnail]').each((_, a) => {
        const h = bestSrc($(a).attr('data-thumbnail'));
        if (!gallery.find((g) => g.src === h)) gallery.push({ src: h, w: +$(a).attr('data-width'), h: +$(a).attr('data-height') });
      });
      const videos = [];
      $('[data-widget_type="video.default"]').each((_, el) => {
        const m = ($(el).attr('data-settings') || '').match(/"youtube_url":"([^"]+)"/);
        if (m) videos.push(m[1].replace(/\\\//g, '/'));
      });
      entry.langs[lang] = { ...meta, h1: crawl[u].h1, images: root.flatMap((r) => images($, r)), gallery, videos, blocks: root.flatMap((r) => blocks($, r)) };
    }
  }
  const file = key.replace(/^\/ru\/?|\/$/g, '').replace(/\//g, '__') || 'home';
  fs.writeFileSync(path.join(outDir, isPost ? 'posts' : 'pages', file + '.json'), JSON.stringify(entry, null, 1));
  index.push({ file, key, isPost, langs: Object.fromEntries(Object.entries(entry.langs).map(([l, v]) => [l, v.url])) });
}
fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(index, null, 1));
console.log(index.length, 'groups;', index.filter((i) => i.isPost).length, 'posts');
