export const LANGS = ['fr', 'en', 'ru'] as const;
export type Lang = (typeof LANGS)[number];
export type T<V = string> = Record<Lang, V>;

export const LOCALE: T = { fr: 'fr_FR', en: 'en_US', ru: 'ru_RU' };
export const HTML_LANG: T = { fr: 'fr-FR', en: 'en-US', ru: 'ru-RU' };

/** Every non-blog page of the site, with its (legacy, SEO-preserved) URL per language. */
export const ROUTES = {
  home: { fr: '/fr/', en: '/en/', ru: '/ru/' },
  about: { fr: '/fr/a-propos-de-nous/', en: '/en/about-us/', ru: '/ru/about-us/' },
  services: { fr: '/fr/services/', en: '/en/services/', ru: '/ru/services/' },
  planning: { fr: '/fr/organisation-complete-dun-mariage/', en: '/en/full-wedding-planning/', ru: '/ru/full-wedding-planning/' },
  coordination: { fr: '/fr/organisation-de-mariages/', en: '/en/wedding-coordination/', ru: '/ru/wedding-coordination/' },
  host: { fr: '/fr/animateur-de-mariage/', en: '/en/wedding-host/', ru: '/ru/wedding-host/' },
  vendors: { fr: '/fr/prestataires-de-mariage/', en: '/en/wedding-vendors/', ru: '/ru/wedding-vendors/' },
  proposal: { fr: '/fr/proposition-a-paris/', en: '/en/proposal-in-paris/', ru: '/ru/proposal-in-paris/' },
  forTwo: { fr: '/fr/un-mariage-a-deux/', en: '/en/wedding-for-two/', ru: '/ru/wedding-for-two/' },
  weekend: { fr: '/fr/week-end-a-paris/', en: '/en/weekend-in-paris/', ru: '/ru/weekend-paris/' },
  anniversary: { fr: '/fr/anniversaire-de-mariage/', en: '/en/wedding-anniversary/', ru: '/ru/wedding-anniversary/' },
  venues: { fr: '/fr/lieux-de-mariage-en-france/', en: '/en/wedding-venues-france/', ru: '/ru/wedding-venues-france/' },
  bonnemare: {
    fr: '/fr/lieux-de-mariage-en-france/chateau-de-bonnemare/',
    en: '/en/wedding-venues-france/chateau-de-bonnemare/',
    ru: '/ru/wedding-venues-france/chateau-de-bonnemare/',
  },
  bouffemont: {
    fr: '/fr/lieux-de-mariage-en-france/chateau-de-bouffemont/',
    en: '/en/wedding-venues-france/chateau-bouffemont/',
    ru: '/ru/wedding-venues-france/chateau-bouffemont/',
  },
  cascade: {
    fr: '/fr/lieux-de-mariage-en-france/la-grande-cascade/',
    en: '/en/wedding-venues-france/the-great-waterfall/',
    ru: '/ru/wedding-venues-france/la-grande-cascade/',
  },
  portfolio: { fr: '/fr/portfolio/', en: '/en/portfolio/', ru: '/ru/portfolio/' },
  ekaterina: { fr: '/fr/portfolio/ekaterina-et-christoph/', en: '/en/portfolio/ekaterina-and-christoph/', ru: '/ru/portfolio/ekaterina-and-christoph/' },
  maria: { fr: '/fr/maria-et-andre/', en: '/en/maria-and-andre/', ru: '/ru/maria-and-andre/' },
  jasmine: { fr: '/fr/jasmine-ramil/', en: '/en/jasmine-ramil/', ru: '/ru/jasmine-ramil/' },
  veronica: { fr: '/fr/veronica-mohamed/', en: '/en/veronica-mohamed/', ru: '/ru/veronica-mohamed/' },
  blog: { fr: '/fr/blog/', en: '/en/blog/', ru: '/ru/blog/' },
  contacts: { fr: '/fr/contacts/', en: '/en/contacts/', ru: '/ru/contacts/' },
  legal: { fr: '/fr/mentions-legales/', en: '/en/legal-notice/', ru: '/ru/mentions-legales/' },
  privacy: { fr: '/fr/rgpd/', en: '/en/gdpr/', ru: '/ru/rgpd/' },
  cookies: { fr: '/fr/cookies/', en: '/en/cookies/', ru: '/ru/cookies/' },
} satisfies Record<string, T>;
export type RouteKey = keyof typeof ROUTES;

export const BLOG_BASE: T = { fr: '/fr/blog/info/', en: '/en/blog/information/', ru: '/ru/blog/info/' };

export const CONTACT = {
  phone: '+33 7 44 60 35 45',
  phoneHref: 'tel:+33744603545',
  whatsapp: 'https://wa.me/33744603545',
  telegram: 'https://t.me/tatashelia',
  email: 'contact@agencechance.com',
  instagram: 'https://instagram.com/agence.chance/',
  address: '231 rue Saint-Honoré, 75001 Paris',
};

export const UI = {
  nav: {
    fr: { about: 'Agence', services: 'Services', venues: 'Lieux', portfolio: 'Mariages', blog: 'Journal', contacts: 'Contact', menu: 'Menu', close: 'Fermer' },
    en: { about: 'Agency', services: 'Services', venues: 'Venues', portfolio: 'Weddings', blog: 'Journal', contacts: 'Contact', menu: 'Menu', close: 'Close' },
    ru: { about: 'Агентство', services: 'Услуги', venues: 'Площадки', portfolio: 'Свадьбы', blog: 'Журнал', contacts: 'Контакты', menu: 'Меню', close: 'Закрыть' },
  },
  cta: {
    fr: { consult: 'Consultation', book: 'Réserver une consultation', talk: 'Parlons de votre mariage', more: 'Découvrir', read: 'Lire', all: 'Voir tout', back: 'Retour' },
    en: { consult: 'Consultation', book: 'Book a consultation', talk: 'Let’s talk about your wedding', more: 'Discover', read: 'Read', all: 'View all', back: 'Back' },
    ru: { consult: 'Консультация', book: 'Записаться на консультацию', talk: 'Обсудить вашу свадьбу', more: 'Подробнее', read: 'Читать', all: 'Смотреть все', back: 'Назад' },
  },
  footer: {
    fr: { tagline: 'Mariages multiculturels en France', rights: 'Tous droits réservés', legal: 'Mentions légales', privacy: 'RGPD', cookies: 'Cookies', follow: 'Suivez-nous', write: 'Écrivez-nous' },
    en: { tagline: 'Multicultural weddings in France', rights: 'All rights reserved', legal: 'Legal notice', privacy: 'GDPR', cookies: 'Cookies', follow: 'Follow us', write: 'Write to us' },
    ru: { tagline: 'Мультикультурные свадьбы во Франции', rights: 'Все права защищены', legal: 'Правовая информация', privacy: 'Конфиденциальность', cookies: 'Cookies', follow: 'Мы в соцсетях', write: 'Напишите нам' },
  },
  form: {
    fr: {
      title: 'Parlons de votre mariage',
      lead: 'Un premier échange en ligne de 30 à 45 minutes. Vous recevez ensuite une proposition détaillée.',
      name: 'Nom et prénom', email: 'E-mail', phone: 'Téléphone / WhatsApp', date: 'Date envisagée', guests: 'Nombre d’invités',
      place: 'Lieu ou région', message: 'Votre projet en quelques mots', consent: 'J’accepte que mes données soient utilisées pour être recontacté(e).',
      send: 'Envoyer la demande', sending: 'Envoi…', ok: 'Merci. Nous revenons vers vous sous 24 heures.', error: 'L’envoi n’a pas abouti. Écrivez-nous sur WhatsApp ou par e-mail.',
      or: 'ou directement',
    },
    en: {
      title: 'Let’s talk about your wedding',
      lead: 'A first 30–45 minute online conversation. You then receive a detailed proposal.',
      name: 'Full name', email: 'Email', phone: 'Phone / WhatsApp', date: 'Planned date', guests: 'Number of guests',
      place: 'Venue or region', message: 'Your project in a few words', consent: 'I agree that my details are used to contact me back.',
      send: 'Send request', sending: 'Sending…', ok: 'Thank you. We will get back to you within 24 hours.', error: 'Sending failed. Please write to us on WhatsApp or by email.',
      or: 'or directly',
    },
    ru: {
      title: 'Расскажите о вашей свадьбе',
      lead: 'Первая встреча — онлайн, 30–45 минут. После неё вы получите подробное предложение.',
      name: 'Имя и фамилия', email: 'E-mail', phone: 'Телефон / WhatsApp', date: 'Планируемая дата', guests: 'Количество гостей',
      place: 'Площадка или регион', message: 'Несколько слов о проекте', consent: 'Я согласен(на) на обработку данных для обратной связи.',
      send: 'Отправить заявку', sending: 'Отправка…', ok: 'Спасибо. Мы свяжемся с вами в течение 24 часов.', error: 'Не удалось отправить. Напишите нам в WhatsApp или на e-mail.',
      or: 'или напрямую',
    },
  },
  blog: {
    fr: { title: 'Journal', lead: 'Conseils, traditions et inspirations pour un mariage en France.', minutes: 'min de lecture', related: 'À lire aussi', updated: 'Mis à jour le' },
    en: { title: 'Journal', lead: 'Advice, traditions and inspiration for a wedding in France.', minutes: 'min read', related: 'Read next', updated: 'Updated' },
    ru: { title: 'Журнал', lead: 'Советы, традиции и вдохновение для свадьбы во Франции.', minutes: 'мин чтения', related: 'Читайте также', updated: 'Обновлено' },
  },
} as const;

export const path = (key: RouteKey, lang: Lang) => ROUTES[key][lang];
