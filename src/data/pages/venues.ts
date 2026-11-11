import { ROUTES, type Lang, type T } from '../../i18n';
import type { Block, PageData } from '../../lib/blocks';
import galleries from '../galleries.json';

const r = (k: keyof typeof ROUTES, l: Lang) => ROUTES[k][l];

type Venue = {
  key: 'bonnemare' | 'bouffemont' | 'cascade';
  cover: string;
  name: string;
  tagline: T;
  short: T;
  heroTitle: T;
  intro: T;
  facts: T<string[]>;
  features: T<[string, string][]>;
  split: { image: string; title: T; text: T<string[]> };
  credit: T;
};

const venues: Venue[] = [
  {
    key: 'bonnemare',
    cover: '202605-0016-resized',
    name: 'Château de Bonnemare',
    tagline: { fr: 'Normandie · à 1 h 30 de Paris', en: 'Normandy · 1h30 from Paris', ru: 'Нормандия · 1,5 часа от Парижа' },
    short: {
      fr: 'Château du XVIe siècle classé Monument historique, suites d’époque et parc de 22 hectares.',
      en: 'A listed 16th-century château with period suites and a 22-hectare park.',
      ru: 'Замок XVI века, исторический памятник, старинные сьюты и парк 22 гектара.',
    },
    heroTitle: { fr: 'Château de Bonnemare — <em>un mariage mythique</em> en Normandie', en: 'Château de Bonnemare — <em>a legendary wedding</em> in Normandy', ru: 'Château de Bonnemare — <em>легендарная свадьба</em> в Нормандии' },
    intro: {
      fr: 'Un authentique château français, une immersion rare dans l’art de vivre du XVIIIe siècle — idéal pour un <em>week-end de mariage</em> avec vos invités sur place.',
      en: 'An authentic French château, a rare immersion in 18th-century art de vivre — ideal for a <em>wedding weekend</em> with your guests staying on site.',
      ru: 'Настоящий французский замок и редкое погружение в атмосферу XVIII века — идеально для <em>свадебного уикенда</em> с проживанием гостей.',
    },
    facts: {
      fr: ['Château du XVIe siècle, Monument historique', 'Suites historiques des XVIIe et XVIIIe siècles', 'Parc privé de 22 hectares', 'Chapelle privée pour une cérémonie symbolique', 'Réceptions jusqu’à 300 invités', 'Hébergement jusqu’à 45 personnes'],
      en: ['16th-century château, listed historic monument', 'Historic 17th and 18th-century suites', 'Private 22-hectare park', 'Private chapel for a symbolic ceremony', 'Receptions for up to 300 guests', 'On-site accommodation for up to 45'],
      ru: ['Замок XVI века, памятник истории', 'Исторические сьюты XVII–XVIII веков', 'Частный парк 22 гектара', 'Собственная часовня для выездной церемонии', 'Банкет до 300 гостей', 'Проживание до 45 человек'],
    },
    features: {
      fr: [['Art de vivre', 'Gastronomie raffinée et intérieurs d’époque préservés.'], ['Chapelle privée', 'Une cérémonie symbolique dans l’intimité du domaine.'], ['Week-end de mariage', 'Vos proches vivent le château avec vous, deux ou trois jours.']],
      en: [['Art de vivre', 'Refined gastronomy and preserved period interiors.'], ['Private chapel', 'A symbolic ceremony in the intimacy of the estate.'], ['Wedding weekend', 'Your loved ones live the château with you for two or three days.']],
      ru: [['Art de vivre', 'Изысканная кухня и сохранившиеся исторические интерьеры.'], ['Частная часовня', 'Выездная церемония в уединении поместья.'], ['Свадебный уикенд', 'Близкие проводят в замке вместе с вами два-три дня.']],
    },
    split: {
      image: '202605-0141-resized',
      title: { fr: 'Pourquoi nous <em>le recommandons</em>', en: 'Why we <em>recommend it</em>', ru: 'Почему мы <em>его рекомендуем</em>' },
      text: {
        fr: ['Rares sont les lieux où l’on dort, se prépare et se marie dans un vrai château historique. Ici, les préparatifs des mariés se déroulent dans des suites d’époque.', 'Nous y organisons des mariages internationaux en trois langues, avec une logistique pensée pour les invités venus de loin.'],
        en: ['Few venues let you sleep, get ready and marry in a genuine historic château. Here, the couple get ready in period suites.', 'We organise international weddings here in three languages, with logistics designed for guests travelling from afar.'],
        ru: ['Немного мест, где можно жить, собираться и венчаться в настоящем историческом замке. Здесь сборы жениха и невесты проходят в старинных сьютах.', 'Мы проводим здесь международные свадьбы на трёх языках, с логистикой для гостей, приезжающих издалека.'],
      },
    },
    credit: { fr: 'Vidéo : Volodymyr Gerashchenko · Photos : Fox Slav', en: 'Video: Volodymyr Gerashchenko · Photos: Fox Slav', ru: 'Видео: Volodymyr Gerashchenko · Фото: Fox Slav' },
  },
  {
    key: 'bouffemont',
    cover: '202605-chateau-bouffemont-france-demi-s-design-333',
    name: 'Château Bouffémont',
    tagline: { fr: 'Aux portes de Paris · 30 minutes', en: 'At the gates of Paris · 30 minutes', ru: 'У ворот Парижа · 30 минут' },
    short: {
      fr: 'Château Belle Époque privatisable, escaliers monumentaux et parc — à 30 minutes de Paris.',
      en: 'A private Belle Époque château with monumental staircases and a park — 30 minutes from Paris.',
      ru: 'Замок эпохи Belle Époque с монументальными лестницами и парком — в 30 минутах от Парижа.',
    },
    heroTitle: { fr: 'Château Bouffémont — <em>l’exception</em> aux portes de Paris', en: 'Château Bouffémont — <em>exceptional</em>, at the gates of Paris', ru: 'Château Bouffémont — <em>исключительная свадьба</em> у ворот Парижа' },
    intro: {
      fr: 'L’élégance de la Belle Époque, l’intimité d’un château privé et la proximité de Paris : une adresse pensée pour une <em>luxury destination wedding</em>.',
      en: 'Belle Époque elegance, the intimacy of a private château and Paris close by: an address made for a <em>luxury destination wedding</em>.',
      ru: 'Элегантность Belle Époque, уединение частного замка и близость Парижа — адрес для <em>luxury destination wedding</em>.',
    },
    facts: {
      fr: ['Château Belle Époque à 30 minutes de Paris', 'Escaliers monumentaux iconiques', 'Privatisation complète du domaine', 'Salons spacieux et parc pour une cérémonie en extérieur', 'Format week-end de mariage', 'Esthétique mode et éditoriale'],
      en: ['Belle Époque château 30 minutes from Paris', 'Iconic monumental staircases', 'Full privatisation of the estate', 'Spacious salons and a park for an outdoor ceremony', 'Wedding weekend format', 'Fashion and editorial aesthetic'],
      ru: ['Замок Belle Époque в 30 минутах от Парижа', 'Знаменитые монументальные лестницы', 'Возможность закрыть поместье целиком', 'Просторные салоны и парк для церемонии на улице', 'Формат свадебного уикенда', 'Эстетика fashion и editorial'],
    },
    features: {
      fr: [['Proximité de Paris', 'Une logistique simple pour vos invités internationaux.'], ['Décor spectaculaire', 'Escaliers, salons et vues sur le parc pour des images éditoriales.'], ['Week-end de luxe', 'Hébergement sur place dans l’atmosphère d’un château privé.']],
      en: [['Close to Paris', 'Simple logistics for your international guests.'], ['Spectacular setting', 'Staircases, salons and park views for editorial imagery.'], ['Luxury weekend', 'On-site accommodation in a private château atmosphere.']],
      ru: [['Рядом с Парижем', 'Простая логистика для гостей из разных стран.'], ['Эффектные декорации', 'Лестницы, салоны и виды на парк для журнальных снимков.'], ['Роскошный уикенд', 'Проживание на месте в атмосфере частного замка.']],
    },
    split: {
      image: '202605-chateau-bouffemont-demi-s-design48-1',
      title: { fr: 'Pourquoi nous <em>le recommandons</em>', en: 'Why we <em>recommend it</em>', ru: 'Почему мы <em>его рекомендуем</em>' },
      text: {
        fr: ['Le château offre le décor d’un grand domaine français sans l’éloignement : vos invités atterrissent à Paris et sont au château une demi-heure plus tard.', 'Nous y associons esthétique française, organisation précise et confort raffiné pour les invités.'],
        en: ['The château offers the setting of a grand French estate without the distance: guests land in Paris and are at the château half an hour later.', 'We pair it with French aesthetics, precise organisation and refined comfort for guests.'],
        ru: ['Замок даёт декорации большого французского поместья без долгой дороги: гости прилетают в Париж и через полчаса уже на месте.', 'Мы сочетаем здесь французскую эстетику, точную организацию и комфорт для гостей.'],
      },
    },
    credit: { fr: 'Vidéo : Keeley Wedding Films · Photos : Demi’s Design', en: 'Video: Keeley Wedding Films · Photos: Demi’s Design', ru: 'Видео: Keeley Wedding Films · Фото: Demi’s Design' },
  },
  {
    key: 'cascade',
    cover: '202605-001151',
    name: 'La Grande Cascade',
    tagline: { fr: 'Paris · Bois de Boulogne', en: 'Paris · Bois de Boulogne', ru: 'Париж · Булонский лес' },
    short: {
      fr: 'Restaurant Belle Époque étoilé au Guide Michelin, pour un dîner de mariage intimiste jusqu’à 30 invités.',
      en: 'A Michelin-starred Belle Époque restaurant for an intimate wedding dinner of up to 30 guests.',
      ru: 'Ресторан Belle Époque со звездой Michelin — камерный свадебный ужин до 30 гостей.',
    },
    heroTitle: { fr: 'La Grande Cascade — <em>un mariage gastronomique</em> à Paris', en: 'La Grande Cascade — <em>a gastronomic wedding</em> in Paris', ru: 'La Grande Cascade — <em>гастрономическая свадьба</em> в Париже' },
    intro: {
      fr: 'Au cœur du Bois de Boulogne, la haute gastronomie parisienne dans un décor Belle Époque : l’adresse d’un <em>dîner de mariage</em> d’exception.',
      en: 'In the heart of the Bois de Boulogne, Parisian haute cuisine in a Belle Époque setting: the address for an exceptional <em>wedding dinner</em>.',
      ru: 'В сердце Булонского леса — высокая парижская кухня в интерьерах Belle Époque: адрес для исключительного <em>свадебного ужина</em>.',
    },
    facts: {
      fr: ['Restaurant étoilé au Guide Michelin', 'Architecture Belle Époque', 'Dîner de mariage gastronomique', 'Mariages intimistes jusqu’à 30 invités', 'Parking privé pour les invités'],
      en: ['Michelin-starred restaurant', 'Belle Époque architecture', 'Gastronomic wedding dinner', 'Intimate weddings up to 30 guests', 'Private parking for guests'],
      ru: ['Ресторан со звездой Michelin', 'Архитектура Belle Époque', 'Гастрономический свадебный ужин', 'Камерные свадьбы до 30 гостей', 'Частная парковка для гостей'],
    },
    features: {
      fr: [['Gastronomie Michelin', 'Une cuisine française d’exception, un service à la française.'], ['Élégance parisienne', 'Verrière, dorures et lumière douce du Bois de Boulogne.'], ['Mariage intimiste', 'Le format idéal pour un dîner avec vos proches.']],
      en: [['Michelin gastronomy', 'Exceptional French cuisine and classic French service.'], ['Parisian elegance', 'Glass canopy, gilding and the soft light of the Bois de Boulogne.'], ['Intimate wedding', 'The ideal format for a dinner with your closest.']],
      ru: [['Кухня Michelin', 'Исключительная французская кухня и классический сервис.'], ['Парижская элегантность', 'Стеклянный купол, позолота и мягкий свет Булонского леса.'], ['Камерная свадьба', 'Идеальный формат для ужина с самыми близкими.']],
    },
    split: {
      image: '202605-001370',
      title: { fr: 'Pourquoi nous <em>la recommandons</em>', en: 'Why we <em>recommend it</em>', ru: 'Почему мы <em>её рекомендуем</em>' },
      text: {
        fr: ['Pour les couples qui placent la table au centre de la fête : une expérience parisienne authentique, à quelques minutes des grands hôtels.', 'Nous orchestrons l’accueil, le déroulé et la séance photo dans Paris.'],
        en: ['For couples who put the table at the heart of the celebration: an authentic Parisian experience, minutes from the grand hotels.', 'We orchestrate the welcome, the timeline and the photo session in Paris.'],
        ru: ['Для пар, у которых в центре праздника — стол: настоящий парижский опыт в нескольких минутах от лучших отелей.', 'Мы берём на себя встречу гостей, тайминг и фотосессию в Париже.'],
      },
    },
    credit: { fr: 'Photos : Mila Shoot', en: 'Photos: Mila Shoot', ru: 'Фото: Mila Shoot' },
  },
];

const c = {
  fr: { highlights: 'Les points forts', gallery: 'L’atmosphère', film: 'Le film', ask: 'Vous envisagez <em>ce lieu</em> ?', btn: 'Demander une consultation', other: 'Autres lieux', more: 'Découvrir' },
  en: { highlights: 'Highlights', gallery: 'The atmosphere', film: 'The film', ask: 'Considering <em>this venue</em>?', btn: 'Request a consultation', other: 'Other venues', more: 'Discover' },
  ru: { highlights: 'Главное', gallery: 'Атмосфера', film: 'Фильм', ask: 'Рассматриваете <em>эту площадку</em>?', btn: 'Записаться на консультацию', other: 'Другие площадки', more: 'Подробнее' },
};

export const venuesHub = {
  hero: {
    image: '202605-1h2a5472-resized',
    fr: { eyebrow: 'Lieux', title: 'Lieux de mariage <em>en France</em>', lead: 'La sélection d’Agence Chance pour les mariages multiculturels et les destination weddings.' },
    en: { eyebrow: 'Venues', title: 'Wedding venues <em>in France</em>', lead: 'Agence Chance’s selection for multicultural and destination weddings.' },
    ru: { eyebrow: 'Площадки', title: 'Свадебные площадки <em>во Франции</em>', lead: 'Подборка Agence Chance для мультикультурных свадеб и destination weddings.' },
  },
  blocks: (l: Lang): Block[] => [
    {
      t: 'intro',
      text: {
        fr: 'Chaque adresse est choisie autant pour sa beauté que pour <em>l’expérience</em> qu’elle offre à des invités venus d’horizons différents. Selon votre projet, nous sélectionnons d’autres propriétés d’exception partout en France.',
        en: 'Every address is chosen as much for its beauty as for the <em>experience</em> it offers guests from different backgrounds. Depending on your project, we select other exceptional properties all over France.',
        ru: 'Каждое место мы выбираем не только за красоту, но и за <em>впечатления</em>, которые оно дарит гостям из разных стран. Под ваш проект подберём и другие исключительные площадки по всей Франции.',
      }[l],
    },
    ...venues.map((v, i): Block => ({
      t: 'split', image: v.cover, alt: v.name, eyebrow: v.tagline[l], title: v.name, text: [v.short[l]], ratio: 'land',
      reverse: i % 2 === 1, tone: i % 2 === 1 ? 'ivory' : undefined, cta: { label: c[l].more, href: r(v.key, l) },
    })),
    {
      t: 'cta', image: '202605-dsc02822dsc02822dsc02822', position: '50% 30%',
      title: { fr: 'Trouvons <em>votre lieu</em>', en: 'Let’s find <em>your venue</em>', ru: 'Найдём <em>вашу площадку</em>' }[l],
      text: { fr: 'Nous orchestrons l’organisation, la coordination et la logistique du jour J.', en: 'We handle the planning, coordination and logistics of the day.', ru: 'Мы берём на себя организацию, координацию и логистику дня свадьбы.' }[l],
      button: { label: c[l].btn, href: r('contacts', l) },
    },
  ],
} as unknown as PageData;

export const venuePages = Object.fromEntries(
  venues.map((v) => {
    const g = galleries[v.key];
    const others = venues.filter((o) => o.key !== v.key);
    const page = {
      hero: {
        image: v.cover,
        fr: { eyebrow: v.tagline.fr, title: v.heroTitle.fr },
        en: { eyebrow: v.tagline.en, title: v.heroTitle.en },
        ru: { eyebrow: v.tagline.ru, title: v.heroTitle.ru },
      },
      blocks: (l: Lang): Block[] => [
        { t: 'intro', text: v.intro[l] },
        { t: 'split', image: g.images[0] ?? v.cover, title: c[l].highlights, list: v.facts[l], ratio: 'tall' },
        { t: 'features', title: v.name, items: v.features[l].map(([title, text]) => ({ title, text })), tone: 'ivory' },
        { t: 'split', image: v.split.image, title: v.split.title[l], text: v.split.text[l], reverse: true, ratio: 'land', cta: { label: c[l].btn, href: r('contacts', l) } },
        ...(g.videos.length ? [{ t: 'video', youtube: g.videos[0], title: c[l].film } as Block] : []),
        { t: 'gallery', eyebrow: c[l].gallery, images: g.gallery, alt: v.name, credit: v.credit[l] },
        { t: 'cards', eyebrow: c[l].other, layout: 'two', tone: 'ivory', items: others.map((o) => ({ image: o.cover, title: o.name, meta: o.tagline[l], href: r(o.key, l) })) },
        { t: 'cta', image: v.cover, title: c[l].ask, button: { label: c[l].btn, href: r('contacts', l) } },
      ],
    } as unknown as PageData;
    return [v.key, page];
  }),
) as Record<Venue['key'], PageData>;
