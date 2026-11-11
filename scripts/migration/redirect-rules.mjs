// URL decisions taken during the WordPress -> Astro migration.
// OVERRIDES win over the redirects observed on the live WordPress site, so
// every legacy URL resolves to its final destination in a single 301.

const VENUES = { fr: '/fr/lieux-de-mariage-en-france/', en: '/en/wedding-venues-france/', ru: '/ru/wedding-venues-france/' };
const BLOG = { fr: '/fr/blog/', en: '/en/blog/', ru: '/ru/blog/' };
const ABOUT = { fr: '/fr/a-propos-de-nous/', en: '/en/about-us/', ru: '/ru/about-us/' };

export const OVERRIDES = [
  // Duplicate "copy" pages (draft of the venues page) and the expired webinar landing
  [/^\/(fr|ru)\/agence-chance-copy\/$/, (m) => VENUES[m[1]]],
  [/^\/en\/chance-agency-copy\/$/, () => VENUES.en],
  [/^\/(fr)\/webinaire\/$/, () => '/fr/'],
  [/^\/(en|ru)\/webinar\/$/, (m) => `/${m[1]}/`],
  // Category archive duplicated the blog; pagination folded into one page
  [/^\/(fr|ru)\/info\/(page\/\d+\/)?$/, (m) => BLOG[m[1]]],
  [/^\/en\/information\/(page\/\d+\/)?$/, () => BLOG.en],
  [/^\/(fr|en|ru)\/blog\/page\/\d+\/$/, (m) => BLOG[m[1]]],
  [/^\/(fr|en|ru)\/blog\/\d{4}\/\d{2}\/\d{2}\/$/, (m) => BLOG[m[1]]],
  // Menu "About" pointed to /about/ which redirected to the home page
  [/^\/(fr|en)\/about\/$/, (m) => ABOUT[m[1]]],
  [/^\/about\/$/, () => ABOUT.ru],
  // Old venue slugs (were 404 or redirected to the home page)
  [/^\/(?:fr\/lieux-de-mariage-en-france|en\/wedding-venues-france|wedding-venues-france)\/(chateau-bouffemont|chateau-de-bonnemare|la-grande-cascade)(?:-paris)?-wedding(?:-diner)?\/$/, (m, p) => {
    const lang = p.startsWith('/fr/') ? 'fr' : p.startsWith('/en/') ? 'en' : 'ru';
    const map = {
      fr: { 'chateau-bouffemont': 'chateau-de-bouffemont', 'chateau-de-bonnemare': 'chateau-de-bonnemare', 'la-grande-cascade': 'la-grande-cascade' },
      en: { 'chateau-bouffemont': 'chateau-bouffemont', 'chateau-de-bonnemare': 'chateau-de-bonnemare', 'la-grande-cascade': 'the-great-waterfall' },
      ru: { 'chateau-bouffemont': 'chateau-bouffemont', 'chateau-de-bonnemare': 'chateau-de-bonnemare', 'la-grande-cascade': 'la-grande-cascade' },
    };
    return VENUES[lang] + map[lang][m[1]] + '/';
  }],
  // Post slugs that did not match the article topic
  [/^\/fr\/blog\/info\/en-route-pour-le-mariage\/$/, () => '/fr/blog/info/animateur-de-mariage-franco-russe/'],
  [/^\/en\/blog\/information\/wedding-host-2\/$/, () => '/en/blog/information/wedding-host-guide/'],
  // Untranslated duplicate (served Russian content under /fr/)
  [/^\/fr\/blog\/info\/wedding-cake-france\/$/, () => '/fr/blog/info/gateau-de-mariage-france/'],
  // Root without language
  [/^\/$/, () => '/fr/'],
];

export function normalize(p) {
  p = p.replace(/^https?:\/\/(www\.)?agencechance\.com/, '').split('#')[0].split('?')[0] || '/';
  if (!p.startsWith('/')) p = '/' + p;
  if (!/\.[a-z0-9]{2,4}$/i.test(p) && !p.endsWith('/')) p += '/';
  return p;
}

/** Final URL of a legacy path: overrides first, then the live site's 301 chain. */
export function finalUrl(input, crawl) {
  let p = normalize(input);
  for (let hop = 0; hop < 10; hop++) {
    const o = OVERRIDES.find(([re]) => re.test(p));
    if (o) {
      const next = o[1](p.match(o[0]), p);
      if (next === p) return p;
      p = next;
      continue;
    }
    const c = crawl['https://agencechance.com' + p] || crawl['https://agencechance.com' + p.replace(/\/$/, '')];
    if (c && c.status === 301 && c.location) {
      const next = normalize(c.location);
      if (next === p) return p;
      p = next;
      continue;
    }
    return p;
  }
  return p;
}
