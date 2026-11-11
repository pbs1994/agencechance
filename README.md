# agencechance.com

Static site of **Agence Chance** (wedding planner, Paris) — migrated from WordPress (Elementor/10Web + TranslatePress + RankMath) to [Astro](https://astro.build) in November 2026.

- 3 languages: `fr` (default, `x-default`), `en`, `ru` — every legacy URL kept as is.
- Output is plain HTML/CSS/JS + one PHP file for the contact form → runs on any OVH shared hosting.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # generates public/.htaccess + vercel.json, then builds dist/
npm run check      # QA on dist/: links, hreflang, titles, canonical, H1, sitemap, redirects
npm run preview    # serve dist/
```

## Where things live

| What | Where |
| --- | --- |
| URLs of every page in every language | `src/i18n.ts` → `ROUTES` |
| UI strings (menu, footer, form) | `src/i18n.ts` → `UI` |
| Page content (FR/EN/RU in one file) | `src/data/pages/*.ts` (home, about, offers, venues, portfolio) |
| Meta title / description of pages | `src/data/legacy-meta.json` (taken from RankMath, typos fixed) |
| Blog posts | `src/content/blog/<lang>/<slug>.md` — same `key` in frontmatter = translations of each other |
| Legal pages | `src/content/legal/<lang>/*.md` (noindex) |
| Google reviews | `src/data/reviews.ts` |
| Images | `public/media/<name>-<width>.webp`, registry in `src/data/media.json` |
| Legacy URL → new URL | `src/data/redirects.json` |
| Design tokens | `src/styles/global.css` (`:root`) |

### Add a blog post

Create `src/content/blog/fr/my-slug.md` (and `en/…`, `ru/…` with the **same `key`**):

```md
---
key: "my-article"
title: "H1 of the article"
metaTitle: "SEO title (≤ 60 chars, brand is appended)"
description: "Meta description"
date: "2026-12-01"
cover: "202605-0016-resized"   # base name of an image in public/media
legacyUrl: ""
---
Text in Markdown…
```

New images: put them through the same pipeline (WebP 640/1280/1920) and add an entry to `src/data/media.json`, or use a plain `![alt](/media/file.webp)` in Markdown.

## Redirects

`src/data/redirects.json` holds every legacy URL that changed (WordPress archives, duplicates, broken links, the old root-level URLs…). On build, `scripts/gen-redirects.mjs` turns it into:

- `public/.htaccess` (production on OVH): HTTPS + bare domain, one-hop 301s, legacy `/wp-content/uploads/*` (all WP size variants) → `/media/*.webp`, 410 for `wp-admin`, `xmlrpc.php`…, caching and security headers;
- `vercel.json` (previews): same page redirects + `X-Robots-Tag: noindex`.

**Never edit `.htaccess` or `vercel.json` by hand** — edit `redirects.json`.

## Contact form

`public/api/contact.php` (PHP ≥ 8.1, uses `mail()` of OVH):
- suspicious leads (honeypot, sent in < 4 s, invalid email, many links, no consent) are **flagged** in the subject `[À VÉRIFIER: …]`, never dropped;
- every lead is also appended to `~/agencechance-leads.log` (outside `www/`) as a backup;
- optional overrides in `~/agencechance-config.php` (not in git):
  ```php
  <?php return ['to' => 'contact@agencechance.com', 'from' => 'site@agencechance.com', 'cc' => ''];
  ```
- on success the page pushes `dataLayer.push({event: 'generate_lead'})` → create a GTM trigger on `generate_lead` to fire the Google Ads conversion (AW-17852208284).

On Vercel there is no PHP: test the form on OVH.

## Tracking & consent

GTM `GTM-MTL73M9Q` + Google Ads tag, behind Google Consent Mode v2 (everything denied until the visitor clicks “Accept”; choice stored in `localStorage`).

## Deploy

**Preview (Vercel):** import the repo, framework “Astro”, build `npm run build`, output `dist`. Previews are `noindex`.

**Production (OVH):**
1. Back up the current WordPress (FTP `www/` + database export from the OVH manager). Keep it for a few months.
2. `npm run build && npm run check`.
3. Empty `www/` (keep the backup!) and upload the **content** of `dist/` (including the hidden `.htaccess`).
4. Create `~/agencechance-config.php` if needed; make sure PHP ≥ 8.1 in the OVH manager.
5. Test: `/`, a few legacy URLs, the form, the cookie banner.
6. Search Console: submit `https://agencechance.com/sitemap.xml`, watch *Pages* and *404* for 2–4 weeks.

## Migration scripts (one-off, kept for reference)

`scripts/migration/*` — crawl → extraction → Markdown/WebP → redirect map. They need the crawl data (not in the repo) and **must not be re-run** on the current content: blog posts and legal pages were translated/edited by hand afterwards (`build-content.mjs` refuses without `--force`).
