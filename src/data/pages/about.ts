import { ROUTES, type Lang, type T } from '../../i18n';
import type { Block, PageData } from '../../lib/blocks';

const r = (k: keyof typeof ROUTES, l: Lang) => ROUTES[k][l];
const pick = <V>(v: T<V>, l: Lang) => v[l];

export const about = {
  hero: {
    image: '202605-tatiana-chance-wedding-planner-france-2', position: '50% 30%',
    fr: { eyebrow: 'Paris · Normandie · France', title: 'Tatiana Chance, <em>votre organisatrice</em> de mariage en France' },
    en: { eyebrow: 'Paris · Normandy · France', title: 'Tatiana Chance, <em>your wedding planner</em> in France' },
    ru: { eyebrow: 'Париж · Нормандия · Франция', title: 'Татьяна Шанс — <em>организатор свадеб</em> во Франции' },
  },
  blocks: (l: Lang): Block[] => [
    {
      t: 'intro',
      text: pick({
        fr: '« Je crée des mariages où se rencontrent cultures, langues et histoires familiales — avec fluidité, élégance et <em>sérénité</em>. »',
        en: '“I create weddings where cultures, languages and family stories meet — with ease, elegance and <em>serenity</em>.”',
        ru: '«Я создаю свадьбы, где встречаются культуры, языки и семейные истории, — легко, элегантно и <em>спокойно</em>».',
      }, l),
    },
    {
      t: 'split', image: '202509-img-5169-1', alt: 'Tatiana Chance',
      eyebrow: pick({ fr: 'La fondatrice', en: 'The founder', ru: 'Основательница' }, l),
      title: pick({ fr: 'Treize ans, <em>trois langues</em>', en: 'Thirteen years, <em>three languages</em>', ru: 'Тринадцать лет, <em>три языка</em>' }, l),
      text: pick({
        fr: [
          'Fondatrice et directrice d’Agence Chance, je travaille depuis plus de treize ans en français, en russe et en anglais.',
          'Installée en France depuis plus de vingt ans, je comprends aussi bien la culture française que la sensibilité des clients russophones. Je définis la stratégie, orchestre chaque étape et réponds du résultat — du choix du lieu jusqu’au jour J.',
        ],
        en: [
          'Founder and director of Agence Chance, I have been working for more than thirteen years in French, Russian and English.',
          'Living in France for over twenty years, I understand French culture as well as the sensitivity of Russian-speaking clients. I set the strategy, orchestrate every step and answer for the result — from choosing the venue to the day itself.',
        ],
        ru: [
          'Я основательница и руководитель Agence Chance и уже более тринадцати лет работаю на французском, русском и английском.',
          'Я живу во Франции больше двадцати лет и одинаково хорошо понимаю французскую культуру и ожидания русскоязычных клиентов. Я выстраиваю стратегию, веду каждый этап и отвечаю за результат — от выбора площадки до дня свадьбы.',
        ],
      }, l),
    },
    {
      t: 'split', image: '202510-001335', reverse: true, tone: 'ivory',
      eyebrow: pick({ fr: 'Parcours', en: 'Background', ru: 'Опыт' }, l),
      title: pick({ fr: 'Vécu <em>de l’intérieur</em>', en: 'Lived <em>from the inside</em>', ru: 'Пережито <em>лично</em>' }, l),
      text: pick({
        fr: [
          'Mariée moi-même à un Français, j’ai vécu un mariage multiculturel avec ses traditions, ses langues et ses attentes. Des années dans un environnement international et diplomatique ont affiné ma compréhension des cultures et de l’étiquette.',
          'C’est ce qui ne s’apprend pas, mais se vit : faire de la différence <em>une richesse</em>.',
        ],
        en: [
          'Married to a Frenchman myself, I lived a multicultural wedding with its traditions, languages and expectations. Years in an international and diplomatic environment refined my understanding of cultures and etiquette.',
          'It is something you cannot learn, only live: turning difference into <em>richness</em>.',
        ],
        ru: [
          'Я сама вышла замуж за француза и прошла через мультикультурную свадьбу — с её традициями, языками и ожиданиями. Годы в международной и дипломатической среде научили меня тонко понимать культуры и этикет.',
          'Этому нельзя научиться, это можно только прожить: превращать различия в <em>богатство</em>.',
        ],
      }, l),
    },
    { t: 'full', image: '202509-1h2a1027-uluchsheno-um-shuma-1', quote: pick({ fr: 'Pas la quantité, <em>la profondeur</em>.', en: 'Not quantity, <em>depth</em>.', ru: 'Не количество, <em>а глубина</em>.' }, l), cite: pick({ fr: 'Un nombre limité de mariages par an', en: 'A limited number of weddings each year', ru: 'Ограниченное число свадеб в год' }, l) },
    {
      t: 'features',
      eyebrow: pick({ fr: 'Agence Chance', en: 'Agence Chance', ru: 'Agence Chance' }, l),
      title: pick({ fr: 'Une agence <em>boutique</em>', en: 'A <em>boutique</em> agency', ru: '<em>Бутик</em>-агентство' }, l),
      lead: pick({
        fr: 'Spécialisée dans les destination weddings et les mariages multiculturels, à Paris, en Normandie et partout en France.',
        en: 'Specialising in destination and multicultural weddings in Paris, Normandy and throughout France.',
        ru: 'Специализация — destination weddings и мультикультурные свадьбы в Париже, Нормандии и по всей Франции.',
      }, l),
      items: pick({
        fr: [['Multilingue', 'Un accompagnement fluide en français, russe et anglais.'], ['Lieux d’exception', 'Châteaux, domaines privés et adresses emblématiques.'], ['De A à Z', 'De la conception au jour J : coordination, pilotage, cohérence.']],
        en: [['Multilingual', 'Seamless support in French, Russian and English.'], ['Exceptional venues', 'Châteaux, private estates and iconic addresses.'], ['From A to Z', 'From concept to the day: coordination, management, coherence.']],
        ru: [['На трёх языках', 'Сопровождение на французском, русском и английском.'], ['Исключительные места', 'Замки, частные поместья и знаковые адреса.'], ['От А до Я', 'От концепции до дня свадьбы: координация, управление, целостность.']],
      }, l).map(([title, text]) => ({ title, text })),
    },
    {
      t: 'steps', tone: 'ivory',
      eyebrow: pick({ fr: 'Pour qui', en: 'Who we work with', ru: 'Для кого' }, l),
      title: pick({ fr: 'Les couples <em>que nous accompagnons</em>', en: 'The couples <em>we work with</em>', ru: 'Пары, <em>с которыми мы работаем</em>' }, l),
      items: pick({
        fr: [
          ['Couple multiculturel en France', 'Vous parlez des langues différentes, vos invités viennent de plusieurs pays : une célébration où chacun est à l’aise et impliqué.'],
          ['Couple russophone en France', 'Faire découvrir la France dans toute son élégance à vos invités, en gardant la proximité de votre langue maternelle.'],
          ['Destination wedding', 'Vous vivez à l’étranger et cherchez un partenaire de confiance pour tout organiser, quelle que soit l’ampleur.'],
        ],
        en: [
          ['Multicultural couple in France', 'You speak different languages, your guests come from several countries: a celebration where everyone feels at ease and involved.'],
          ['Russian-speaking couple in France', 'Show your guests France in all its elegance, while keeping the closeness of your mother tongue.'],
          ['Destination wedding', 'You live abroad and need a trusted partner to organise everything, whatever the scale.'],
        ],
        ru: [
          ['Мультикультурная пара во Франции', 'Вы говорите на разных языках, гости приедут из нескольких стран: праздник, где всем комфортно и интересно.'],
          ['Русскоязычная пара во Франции', 'Показать гостям Францию во всей её элегантности — и сохранить теплоту родного языка.'],
          ['Destination wedding', 'Вы живёте за границей и ищете надёжного партнёра, который организует всё, независимо от масштаба.'],
        ],
      }, l).map(([title, text]) => ({ title, text })),
    },
    { t: 'reviews' },
    { t: 'cta', image: '202510-chetkaya-organizaciya1', title: pick({ fr: 'Parlons de <em>votre mariage</em>', en: 'Let’s talk about <em>your wedding</em>', ru: 'Обсудим <em>вашу свадьбу</em>' }, l), button: { label: pick({ fr: 'Prendre rendez-vous', en: 'Book a consultation', ru: 'Записаться на консультацию' }, l), href: r('contacts', l) } },
  ],
} as unknown as PageData;

export const contacts = {
  hero: {
    image: '202510-1h2a9297-retouched', size: 'tall',
    fr: { eyebrow: 'Contact', title: 'Consultation <em>personnalisée</em>', lead: 'Commencez à imaginer votre mariage en France.' },
    en: { eyebrow: 'Contact', title: 'Personal <em>consultation</em>', lead: 'Start imagining your wedding in France.' },
    ru: { eyebrow: 'Контакты', title: 'Персональная <em>консультация</em>', lead: 'Начните представлять свою свадьбу во Франции.' },
  },
  blocks: (l: Lang): Block[] => [
    { t: 'contact', lead: pick({ fr: 'Écrivez-nous sur WhatsApp ou Telegram, ou laissez votre demande : nous revenons vers vous pour convenir d’un premier échange en ligne de 30 à 45 minutes.', en: 'Message us on WhatsApp or Telegram, or leave a request: we will get back to you to arrange a first 30–45 minute online call.', ru: 'Напишите нам в WhatsApp или Telegram или оставьте заявку — мы свяжемся с вами, чтобы договориться о первой онлайн-встрече на 30–45 минут.' }, l) },
  ],
} as unknown as PageData;
