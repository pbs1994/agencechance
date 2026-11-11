import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { LANGS, ROUTES, type Lang, type RouteKey } from '../i18n';
import { PAGES } from '../data/pages';
import { postUrl, postLang } from '../lib/blog';

type Entry = { loc: string; alts: Partial<Record<Lang, string>>; lastmod?: string };

export const GET: APIRoute = async ({ site }) => {
  const origin = site!.origin;
  const entries: Entry[] = [];
  // legal pages are noindex
  const keys = [...(Object.keys(PAGES) as RouteKey[]), 'blog'] as RouteKey[];
  for (const k of keys) for (const l of LANGS) entries.push({ loc: ROUTES[k][l], alts: ROUTES[k] });

  const posts = await getCollection('blog');
  const byKey = new Map<string, Partial<Record<Lang, string>>>();
  for (const p of posts) byKey.set(p.data.key, { ...byKey.get(p.data.key), [postLang(p)]: postUrl(p) });
  for (const p of posts) entries.push({ loc: postUrl(p), alts: byKey.get(p.data.key)!, lastmod: p.data.updated || p.data.date });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (e) => `  <url>
    <loc>${origin}${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}
${LANGS.filter((l) => e.alts[l]).map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${origin}${e.alts[l]}"/>`).join('\n')}${e.alts.fr ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${e.alts.fr}"/>` : ''}
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
