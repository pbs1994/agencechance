// One-off: converts downloaded WordPress uploads into responsive WebP files
// in public/media and writes src/data/media.json (old URL -> new asset).
// Usage: node scripts/migration/media.mjs <media-src-dir> <media_urls.json>
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const [srcDir, urlsFile] = process.argv.slice(2);
const OUT = 'public/media';
const WIDTHS = [640, 1280, 1920, 2560];
fs.mkdirSync(OUT, { recursive: true });

const tr = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm',
  н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch',
  ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
};
const slugify = (s) =>
  s
    .toLowerCase()
    .split('')
    .map((c) => tr[c] ?? c)
    .join('')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const urls = JSON.parse(fs.readFileSync(urlsFile, 'utf8'));
const manifest = {};
const used = new Set();
let i = 0;
for (const url of urls) {
  const rel = url.split('/uploads/')[1];
  const file = path.join(srcDir, rel.replace(/\//g, '__'));
  if (!fs.existsSync(file)) continue;
  const [y, m, ...rest] = rel.split('/');
  let base = slugify(rest.join('-').replace(/\.[a-z0-9]+$/i, '').replace(/-scaled$|-e\d{10,}$/g, ''));
  base = `${y}${m}-${base}`.slice(0, 80);
  while (used.has(base)) base += '-x';
  used.add(base);
  const img = sharp(file, { failOn: 'none' }).rotate();
  const meta = await img.metadata();
  const w0 = meta.autoOrient?.width ?? meta.width;
  const h0 = meta.autoOrient?.height ?? meta.height;
  const widths = WIDTHS.filter((w) => w < w0);
  if (!widths.length || w0 - widths.at(-1) > 200) widths.push(Math.min(w0, 2560));
  for (const w of widths) {
    const out = path.join(OUT, `${base}-${w}.webp`);
    if (!fs.existsSync(out)) await sharp(file, { failOn: 'none' }).rotate().resize({ width: w }).webp({ quality: 78 }).toFile(out);
  }
  manifest[url] = { base, w: w0, h: h0, widths };
  if (++i % 25 === 0) console.log(i, '/', urls.length);
}
fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/media.json', JSON.stringify(manifest, null, 1));
console.log('done', Object.keys(manifest).length);
