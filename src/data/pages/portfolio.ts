import { ROUTES, type Lang, type T } from '../../i18n';
import type { Block, PageData } from '../../lib/blocks';
import galleries from '../galleries.json';

const r = (k: keyof typeof ROUTES, l: Lang) => ROUTES[k][l];
type G = keyof typeof galleries;

const couples: { key: 'ekaterina' | 'maria' | 'jasmine' | 'veronica'; cover: string; name: T; place: T; story: T<string[]>; credit: T }[] = [
  {
    key: 'ekaterina',
    cover: '202605-1h2a5344-resized',
    name: { fr: 'Ekaterina & Christoph', en: 'Ekaterina & Christoph', ru: 'Екатерина и Кристоф' },
    place: { fr: 'Château aux portes de Paris · 8 pays', en: 'Château near Paris · 8 countries', ru: 'Шато под Парижем · 8 стран' },
    story: {
      fr: [
        'Un mariage multiculturel dans l’intimité d’un château aux portes de Paris, avec des invités venus de huit pays.',
        'Le défi : que les convives anglophones, francophones et russophones se sentent chacun à leur place — et impliqués du premier toast à la dernière danse.',
      ],
      en: [
        'A multicultural wedding in the intimacy of a château near Paris, with guests from eight countries.',
        'The challenge: making English, French and Russian-speaking guests each feel at home — and involved from the first toast to the last dance.',
      ],
      ru: [
        'Мультикультурная свадьба в камерном шато недалеко от Парижа — гости из восьми стран мира.',
        'Главная задача: чтобы англо-, франко- и русскоязычные гости чувствовали себя комфортно и были вовлечены от первого тоста до последнего танца.',
      ],
    },
    credit: { fr: 'Photo : Xenchik Wed', en: 'Photo: Xenchik Wed', ru: 'Фото: Xenchik Wed' },
  },
  {
    key: 'maria',
    cover: '202601-9p4a9802-resized',
    name: { fr: 'Maria & André', en: 'Maria & André', ru: 'Мария и Андрэ' },
    place: { fr: 'Château de Bonnemare · Normandie', en: 'Château de Bonnemare · Normandy', ru: 'Château de Bonnemare · Нормандия' },
    story: {
      fr: [
        'Un projet d’image qui résume notre approche du mariage clé en main dans un château : une journée pensée en détail, les traditions françaises et russophones, le confort des invités internationaux.',
        'Une élégance sans ostentation, une coordination précise, un accompagnement en trois langues.',
      ],
      en: [
        'An editorial project that sums up our approach to a turnkey château wedding: a carefully structured day, French and Russian traditions, comfort for international guests.',
        'Understated elegance, precise coordination, support in three languages.',
      ],
      ru: [
        'Имиджевый проект, который показывает наш подход к свадьбе под ключ в шато: продуманная структура дня, французские и русские традиции, комфорт гостей из разных стран.',
        'Элегантность без показной роскоши, чёткая координация и сопровождение на трёх языках.',
      ],
    },
    credit: { fr: 'Vidéo : Volodymyr Gerashchenko · Photos : Fox Slav', en: 'Video: Volodymyr Gerashchenko · Photos: Fox Slav', ru: 'Видео: Volodymyr Gerashchenko · Фото: Fox Slav' },
  },
  {
    key: 'jasmine',
    cover: '202510-1h2a5475',
    name: { fr: 'Jasmine & Ramil', en: 'Jasmine & Ramil', ru: 'Жасмин и Рамиль' },
    place: { fr: 'Paris · Années folles', en: 'Paris · Roaring Twenties', ru: 'Париж · «Безумные двадцатые»' },
    story: {
      fr: [
        'Jasmine et Ramil rêvaient d’un mariage à thème à Paris, dans le luxe et l’art des Années folles.',
        'Un voyage dans le temps, de 2025 à 1925 : un salon artistique dans l’esprit du Paris des années 20, puis un dîner dans un restaurant gastronomique.',
      ],
      en: [
        'Jasmine and Ramil dreamt of a themed wedding in Paris, in the luxury and artistry of the Roaring Twenties.',
        'A journey back in time, from 2025 to 1925: an artistic salon in the spirit of 1920s Paris, followed by dinner in a gastronomic restaurant.',
      ],
      ru: [
        'Жасмин и Рамиль мечтали о тематической свадьбе в Париже — в атмосфере роскоши и артистизма «безумных двадцатых».',
        'Путешествие во времени из 2025 года в 1925-й: артистический салон в духе Парижа эпохи Les Années Folles и ужин в гастрономическом ресторане.',
      ],
    },
    credit: {
      fr: 'Vidéo : Natalya Bogdanovska · Préparatifs, mairie et bar : Xenchik · Paris et dîner : Mila Shoot',
      en: 'Video: Natalya Bogdanovska · Getting ready, town hall and bar: Xenchik · Paris and dinner: Mila Shoot',
      ru: 'Видео: Natalya Bogdanovska · Сборы, мэрия и бар: Xenchik · Париж и ужин: Mila Shoot',
    },
  },
  {
    key: 'veronica',
    cover: '202510-verhnyaya-2-1',
    name: { fr: 'Veronika & Mohamed', en: 'Veronika & Mohamed', ru: 'Вероника и Мухамед' },
    place: { fr: 'Normandie · Ukraine & Maroc', en: 'Normandy · Ukraine & Morocco', ru: 'Нормандия · Украина и Марокко' },
    story: {
      fr: [
        'Un mariage étudiant : maîtriser le budget sans renoncer à l’émotion ni au style.',
        'L’accent sur l’image — un château pour la séance photo — et une salle de réception en formule complète : repas, décor, animation.',
      ],
      en: [
        'A student wedding: keeping to budget without giving up emotion or style.',
        'The focus on imagery — a château for the photo session — and a reception venue with an all-inclusive package: food, décor, entertainment.',
      ],
      ru: [
        'Студенческая свадьба: уложиться в бюджет, не отказываясь от эмоций и стиля.',
        'Акцент на визуале — шато для фотосессии — и банкетный зал с полным пакетом: питание, декор, анимация.',
      ],
    },
    credit: { fr: 'Vidéo : Julien Frame · Photos : Mila Shoot', en: 'Video: Julien Frame · Photos: Mila Shoot', ru: 'Видео: Julien Frame · Фото: Mila Shoot' },
  },
];

const common = {
  fr: { film: 'Le film', gallery: 'Galerie', next: 'Mariage suivant', plan: 'Imaginons <em>le vôtre</em>', planBtn: 'Réserver une consultation', all: 'Tous nos mariages' },
  en: { film: 'The film', gallery: 'Gallery', next: 'Next wedding', plan: 'Let’s imagine <em>yours</em>', planBtn: 'Book a consultation', all: 'All our weddings' },
  ru: { film: 'Фильм', gallery: 'Галерея', next: 'Следующая свадьба', plan: 'Представим <em>вашу</em>', planBtn: 'Записаться на консультацию', all: 'Все наши свадьбы' },
};

export const portfolio = {
  hero: {
    image: '202510-portfolio-hab-verhnee-foto',
    fr: { eyebrow: 'Portfolio', title: 'Les mariages <em>d’Agence Chance</em>', lead: 'Des histoires vraies, des cultures qui se rencontrent.' },
    en: { eyebrow: 'Portfolio', title: 'Weddings by <em>Agence Chance</em>', lead: 'Real stories, cultures coming together.' },
    ru: { eyebrow: 'Портфолио', title: 'Свадьбы <em>Agence Chance</em>', lead: 'Настоящие истории, где встречаются культуры.' },
  },
  blocks: (l: Lang): Block[] => [
    ...couples.map((c, i): Block => ({
      t: 'split',
      image: c.cover,
      alt: c.name[l],
      eyebrow: c.place[l],
      title: c.name[l],
      text: c.story[l],
      reverse: i % 2 === 1,
      tone: i % 2 === 1 ? 'ivory' : undefined,
      cta: { label: { fr: 'Voir le mariage', en: 'View the wedding', ru: 'Смотреть свадьбу' }[l], href: r(c.key, l) },
    })),
    { t: 'cta', image: '202510-1h2a1901-retouched', title: common[l].plan, button: { label: common[l].planBtn, href: r('contacts', l) } },
  ],
} satisfies Omit<PageData, 'meta'> as unknown as PageData;

export const couplePages = Object.fromEntries(
  couples.map((c, i) => {
    const g = galleries[c.key as G];
    const next = couples[(i + 1) % couples.length];
    const page = {
      hero: {
        image: c.cover,
        fr: { eyebrow: c.place.fr, title: c.name.fr },
        en: { eyebrow: c.place.en, title: c.name.en },
        ru: { eyebrow: c.place.ru, title: c.name.ru },
      },
      blocks: (l: Lang): Block[] => [
        { t: 'intro', text: c.story[l].join(' ') },
        ...(g.videos.length ? [{ t: 'video', youtube: g.videos[0], title: common[l].film, credit: c.credit[l] } as Block] : []),
        { t: 'gallery', eyebrow: common[l].gallery, images: g.gallery, alt: c.name[l], credit: g.videos.length ? undefined : c.credit[l] },
        {
          t: 'cards', eyebrow: common[l].next, layout: 'two',
          items: [
            { image: next.cover, title: next.name[l], meta: next.place[l], href: r(next.key, l) },
            { image: '202510-portfolio-hab-verhnee-foto', title: common[l].all, href: r('portfolio', l) },
          ],
          tone: 'ivory',
        },
        { t: 'cta', image: '202510-1h2a1402-retouched', title: common[l].plan, button: { label: common[l].planBtn, href: r('contacts', l) } },
      ],
    } as unknown as PageData;
    return [c.key, page];
  }),
) as Record<'ekaterina' | 'maria' | 'jasmine' | 'veronica', PageData>;

export { couples };
