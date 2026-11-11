import { ROUTES, CONTACT, type Lang } from '../i18n';

const SITE = 'https://agencechance.com';

export const orgSchema = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE + '/#agency',
  name: 'Agence Chance',
  description: {
    fr: 'Agence de wedding planning à Paris : mariages multiculturels et destination weddings en France, en français, russe et anglais.',
    en: 'Paris wedding planning agency: multicultural and destination weddings in France, in French, Russian and English.',
    ru: 'Свадебное агентство в Париже: мультикультурные свадьбы и destination weddings во Франции на французском, русском и английском.',
  }[lang],
  url: SITE + ROUTES.home[lang],
  logo: SITE + '/icon-192.png',
  image: SITE + '/og-default.jpg',
  telephone: CONTACT.phone.replace(/\s/g, ''),
  email: CONTACT.email,
  address: { '@type': 'PostalAddress', streetAddress: '231 rue Saint-Honoré', postalCode: '75001', addressLocality: 'Paris', addressCountry: 'FR' },
  areaServed: 'FR',
  knowsLanguage: ['fr', 'ru', 'en'],
  founder: { '@type': 'Person', name: 'Tatiana Chance' },
  sameAs: [CONTACT.instagram],
});

export const breadcrumb = (items: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + url })),
});
