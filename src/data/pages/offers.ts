import { ROUTES, type Lang, type T } from '../../i18n';
import type { Block, PageData } from '../../lib/blocks';

const r = (k: keyof typeof ROUTES, l: Lang) => ROUTES[k][l];
const pick = <V>(v: T<V>, l: Lang) => v[l];
const btn = { fr: 'Réserver une consultation', en: 'Book a consultation', ru: 'Записаться на консультацию' };
const talk = { fr: 'Parlons de <em>votre projet</em>', en: 'Let’s talk about <em>your project</em>', ru: 'Обсудим <em>ваш проект</em>' };
const back = { fr: 'Tous nos services', en: 'All services', ru: 'Все услуги' };

/* ------------------------------------------------------------------ */
export const services = {
  hero: {
    image: '202510-nz7-0004', position: '50% 35%',
    fr: { eyebrow: 'Services', title: 'Les services <em>d’Agence Chance</em>', lead: 'Organisation clé en main, coordination et animation en trois langues.' },
    en: { eyebrow: 'Services', title: 'Agence Chance <em>services</em>', lead: 'Full planning, coordination and hosting in three languages.' },
    ru: { eyebrow: 'Услуги', title: 'Услуги <em>Agence Chance</em>', lead: 'Свадьба под ключ, координация и ведение на трёх языках.' },
  },
  blocks: (l: Lang): Block[] => [
    {
      t: 'intro',
      text: pick({
        fr: 'Un mariage en France, c’est un lieu, des prestataires et des invités à accorder — plus encore quand les cultures se rencontrent. Nous prenons en charge <em>la structure et le pilotage</em> ; vous gardez l’essentiel.',
        en: 'A wedding in France means a venue, vendors and guests to bring together — all the more when cultures meet. We take on <em>the structure and the management</em>; you keep what matters.',
        ru: 'Свадьба во Франции — это площадка, подрядчики и гости, которых нужно соединить, особенно когда встречаются разные культуры. Мы берём на себя <em>структуру и управление</em>, а вам остаётся главное.',
      }, l),
    },
    {
      t: 'split', image: '202510-polnoe-soprovozhdenie-verhnyaya', ratio: 'land',
      eyebrow: pick({ fr: 'À partir de 3 000 €', en: 'From €3,000', ru: 'От 3 000 €' }, l),
      title: pick({ fr: 'Organisation <em>clé en main</em>', en: 'Full <em>wedding planning</em>', ru: 'Свадьба <em>под ключ</em>' }, l),
      text: [pick({
        fr: 'Vous déléguez tout : concept, lieu, prestataires, budget, scénario et coordination du jour J. Un seul interlocuteur, de la première idée à la dernière danse.',
        en: 'You delegate everything: concept, venue, vendors, budget, script and on-the-day coordination. One point of contact, from the first idea to the last dance.',
        ru: 'Вы доверяете нам всё: концепцию, площадку, подрядчиков, бюджет, сценарий и координацию дня. Один ответственный — от первой идеи до последнего танца.',
      }, l)],
      cta: { label: pick({ fr: 'Découvrir', en: 'Discover', ru: 'Подробнее' }, l), href: r('planning', l) },
    },
    {
      t: 'split', image: '202601-kc-wedding-wp-hd-4', ratio: 'land', reverse: true, tone: 'ivory', position: '50% 25%',
      eyebrow: pick({ fr: 'À partir de 2 500 €', en: 'From €2,500', ru: 'От 2 500 €' }, l),
      title: pick({ fr: 'Maître de cérémonie <em>& coordination</em>', en: 'Wedding host <em>& coordination</em>', ru: 'Ведущий <em>и координация</em>' }, l),
      text: [pick({
        fr: 'Vous organisez vous-mêmes ; Tatiana conduit la soirée en français, russe et anglais et coordonne vos prestataires le jour J.',
        en: 'You plan it yourselves; Tatiana hosts the evening in French, Russian and English and coordinates your vendors on the day.',
        ru: 'Вы готовите свадьбу сами, а Татьяна ведёт вечер на французском, русском и английском и координирует ваших подрядчиков в день свадьбы.',
      }, l)],
      cta: { label: pick({ fr: 'Découvrir', en: 'Discover', ru: 'Подробнее' }, l), href: r('host', l) },
    },
    {
      t: 'split', image: '202510-img-7803', ratio: 'land',
      eyebrow: pick({ fr: 'À partir de 1 500 €', en: 'From €1,500', ru: 'От 1 500 €' }, l),
      title: pick({ fr: 'Coordination <em>du jour J</em>', en: 'Day-of <em>coordination</em>', ru: 'Координация <em>дня свадьбы</em>' }, l),
      text: [pick({
        fr: 'Tout est décidé ; nous prenons le relais. Déroulé à la minute, prestataires, invités : vous vivez la journée, nous la tenons.',
        en: 'Everything is decided; we take over. Minute-by-minute timeline, vendors, guests: you live the day, we hold it together.',
        ru: 'Всё решено — дальше работаем мы. Поминутный тайминг, подрядчики, гости: вы проживаете день, а мы держим его под контролем.',
      }, l)],
      cta: { label: pick({ fr: 'Découvrir', en: 'Discover', ru: 'Подробнее' }, l), href: r('coordination', l) },
    },
    {
      t: 'split', image: '202510-podryadchiki-verhnee-foto', ratio: 'land', reverse: true, tone: 'ivory',
      eyebrow: pick({ fr: 'Consultation offerte', en: 'Free consultation', ru: 'Бесплатная консультация' }, l),
      title: pick({ fr: 'Nos <em>prestataires</em>', en: 'Our <em>vendors</em>', ru: 'Наши <em>подрядчики</em>' }, l),
      text: [pick({
        fr: 'Vous préparez votre mariage seuls ? Accédez à notre carnet de prestataires testés sur le terrain, parlant russe, français ou anglais.',
        en: 'Planning on your own? Access our book of field-tested vendors who speak Russian, French or English.',
        ru: 'Готовите свадьбу самостоятельно? Получите доступ к нашей базе проверенных подрядчиков, говорящих по-русски, по-французски или по-английски.',
      }, l)],
      cta: { label: pick({ fr: 'Découvrir', en: 'Discover', ru: 'Подробнее' }, l), href: r('vendors', l) },
    },
    {
      t: 'cards', id: 'paris', layout: 'four', tone: 'sand',
      eyebrow: pick({ fr: 'Moments parisiens', en: 'Parisian moments', ru: 'Парижские моменты' }, l),
      title: pick({ fr: 'Des formats <em>intimes</em> à Paris', en: '<em>Intimate</em> formats in Paris', ru: '<em>Камерные</em> форматы в Париже' }, l),
      items: [
        { image: '202510-predlozhenie-ruki-i-serdca-verhnyaya', href: r('proposal', l), title: pick({ fr: 'Demande en mariage', en: 'Proposal in Paris', ru: 'Предложение руки и сердца' }, l), meta: pick({ fr: 'dès 1 000 €', en: 'from €1,000', ru: 'от 1 000 €' }, l) },
        { image: '202510-1h2a5500', href: r('forTwo', l), title: pick({ fr: 'Mariage à deux', en: 'Wedding for two', ru: 'Свадьба для двоих' }, l), meta: pick({ fr: 'dès 3 500 €', en: 'from €3,500', ru: 'от 3 500 €' }, l) },
        { image: '202510-yubiley-verhnyaya', href: r('anniversary', l), title: pick({ fr: 'Anniversaire de mariage', en: 'Wedding anniversary', ru: 'Годовщина свадьбы' }, l), meta: pick({ fr: 'dès 4 500 €', en: 'from €4,500', ru: 'от 4 500 €' }, l) },
        { image: '202510-romanticheskiy-uzhin-v-parizhe-1', href: r('weekend', l), title: pick({ fr: 'Week-end à Paris', en: 'Weekend in Paris', ru: 'Выходные в Париже' }, l), meta: pick({ fr: 'dès 3 000 €', en: 'from €3,000', ru: 'от 3 000 €' }, l) },
      ],
    },
    {
      t: 'features',
      eyebrow: pick({ fr: 'Que choisir ?', en: 'Which one?', ru: 'Что выбрать?' }, l),
      title: pick({ fr: 'Le bon format, <em>simplement</em>', en: 'The right format, <em>simply</em>', ru: 'Правильный формат — <em>просто</em>' }, l),
      items: [
        { title: pick({ fr: 'Tout déléguer', en: 'Delegate everything', ru: 'Доверить всё' }, l), text: pick({ fr: 'L’organisation clé en main.', en: 'Full wedding planning.', ru: 'Свадьба под ключ.' }, l) },
        { title: pick({ fr: 'Déjà bien avancés', en: 'Already well under way', ru: 'Подготовка уже идёт' }, l), text: pick({ fr: 'Maître de cérémonie & coordination.', en: 'Wedding host & coordination.', ru: 'Ведущий и координация.' }, l) },
        { title: pick({ fr: 'Vous hésitez', en: 'Not sure yet', ru: 'Сомневаетесь' }, l), text: pick({ fr: 'Une consultation suffit pour définir le format et recevoir une proposition sur mesure.', en: 'One consultation is enough to define the format and receive a tailored proposal.', ru: 'Одной консультации достаточно, чтобы определить формат и получить индивидуальное предложение.' }, l) },
      ],
    },
    { t: 'contact' },
  ],
} as unknown as PageData;

/* ------------------------------------------------------------------ */
export const planning = {
  hero: {
    image: '202510-polnoe-soprovozhdenie-verhnyaya',
    fr: { eyebrow: 'Organisation clé en main', title: 'Organisation de mariage <em>clé en main</em> en France', lead: 'Pour les couples qui veulent tout déléguer et vivre une préparation sereine.' },
    en: { eyebrow: 'Full planning', title: 'Full-service <em>wedding planning</em> in France', lead: 'For couples who want to delegate everything and enjoy a calm, structured preparation.' },
    ru: { eyebrow: 'Свадьба под ключ', title: 'Организация свадьбы <em>под ключ</em> во Франции', lead: 'Для пар, которые хотят доверить всё и спокойно пройти подготовку.' },
  },
  blocks: (l: Lang): Block[] => [
    {
      t: 'intro',
      text: pick({
        fr: 'Vous nous parlez de vous ; nous prenons tout en main — organisation, logistique, démarches, horaires. Vous obtenez <em>une structure claire, un budget transparent</em> et la certitude que tout sera maîtrisé le jour J.',
        en: 'You tell us about yourselves; we take care of everything — planning, logistics, paperwork, schedules. You get <em>a clear structure, a transparent budget</em> and the certainty that everything is under control on the day.',
        ru: 'Вы рассказываете о себе — мы берём на себя всё: организацию, логистику, документы, тайминг. Вы получаете <em>понятную структуру, прозрачный бюджет</em> и уверенность, что в день свадьбы всё под контролем.',
      }, l),
    },
    {
      t: 'split', image: '202605-tatiana-chance-wedding-planner-in-france', alt: 'Tatiana Chance',
      eyebrow: pick({ fr: 'Architecture du projet', en: 'Project architecture', ru: 'Архитектура проекта' }, l),
      title: pick({ fr: 'Un seul <em>chef d’orchestre</em>', en: 'One <em>conductor</em>', ru: 'Один <em>дирижёр</em>' }, l),
      text: [
        pick({ fr: 'Tatiana Chance vous accompagne à chaque étape, de la première idée au jour J. Chaque projet est pensé comme un ensemble cohérent, avec une logique claire et le souci du détail.', en: 'Tatiana Chance guides you at every step, from the first idea to the day itself. Each project is designed as a coherent whole, with clear logic and attention to detail.', ru: 'Татьяна Шанс сопровождает вас на каждом этапе — от первой идеи до дня свадьбы. Каждый проект — цельная система с понятной логикой и вниманием к деталям.' }, l),
        pick({ fr: 'Particulièrement adapté aux destination weddings et aux mariages multiculturels, où langues, traditions et invités doivent s’accorder.', en: 'Especially suited to destination and multicultural weddings, where languages, traditions and guests must come together.', ru: 'Особенно подходит для destination weddings и мультикультурных свадеб, где важно учесть языки, традиции и ожидания гостей.' }, l),
      ],
    },
    {
      t: 'features', tone: 'ivory',
      eyebrow: pick({ fr: 'De A à Z', en: 'From A to Z', ru: 'От А до Я' }, l),
      title: pick({ fr: 'Ce que <em>nous prenons en charge</em>', en: 'What <em>we take care of</em>', ru: 'Что <em>мы берём на себя</em>' }, l),
      items: pick({
        fr: [['Concept', 'Style, atmosphère et fil rouge de votre mariage.'], ['Lieux', 'Sélection, visites et réservation.'], ['Prestataires', 'Choix, négociation des prix et contrats.'], ['Scénario', 'Déroulé de la réception et des moments clés.'], ['Jour J', 'Coordination et timing sur place.'], ['Trois langues', 'Accompagnement en français, russe et anglais.']],
        en: [['Concept', 'Style, atmosphere and the common thread of your wedding.'], ['Venues', 'Selection, visits and booking.'], ['Vendors', 'Selection, price negotiation and contracts.'], ['Script', 'Flow of the reception and key moments.'], ['The day', 'On-site coordination and timing.'], ['Three languages', 'Support in French, Russian and English.']],
        ru: [['Концепция', 'Стиль, атмосфера и общая идея свадьбы.'], ['Площадки', 'Подбор, просмотры и бронирование.'], ['Подрядчики', 'Подбор, переговоры о цене и договоры.'], ['Сценарий', 'Ход банкета и ключевые моменты.'], ['День свадьбы', 'Координация и тайминг на месте.'], ['Три языка', 'Сопровождение на французском, русском и английском.']],
      }, l).map(([title, text]) => ({ title, text })),
    },
    {
      t: 'split', image: '202601-img-2192', ratio: 'land', reverse: true,
      eyebrow: pick({ fr: 'L’équipe', en: 'The team', ru: 'Команда' }, l),
      title: pick({ fr: 'Un réseau <em>de confiance</em>', en: 'A <em>trusted</em> network', ru: 'Проверенная <em>команда</em>' }, l),
      text: [pick({
        fr: 'Photographes, vidéastes, décorateurs, musiciens, châteaux : des professionnels testés sur le terrain, qui partagent nos standards d’esthétique et de responsabilité.',
        en: 'Photographers, videographers, decorators, musicians, châteaux: field-tested professionals who share our standards of aesthetics and responsibility.',
        ru: 'Фотографы, видеографы, декораторы, музыканты, замки — профессионалы, проверенные в работе и разделяющие наши стандарты эстетики и ответственности.',
      }, l)],
      cta: { label: pick({ fr: 'Nos prestataires', en: 'Our vendors', ru: 'Наши подрядчики' }, l), href: r('vendors', l) },
    },
    {
      t: 'pricing',
      eyebrow: pick({ fr: 'Honoraires', en: 'Fees', ru: 'Стоимость' }, l),
      title: pick({ fr: 'Tarifs', en: 'Pricing', ru: 'Тарифы' }, l),
      price: pick({ fr: '10 % <small>du budget</small>', en: '10% <small>of the budget</small>', ru: '10 % <small>от бюджета</small>' }, l),
      note: pick({ fr: 'Minimum 3 000 €, hors frais de déplacement et d’hébergement si nécessaire.', en: 'Minimum €3,000, excluding travel and accommodation if needed.', ru: 'Минимум 3 000 €, без учёта транспорта и проживания, если они нужны.' }, l),
      text: [pick({
        fr: 'Les honoraires couvrent la planification, le concept, la gestion du projet et l’accès à notre réseau. Les prestataires (lieu, traiteur, photographe…) sont facturés séparément. Tarif exact après consultation.',
        en: 'Fees cover planning, concept, project management and access to our network. Vendors (venue, catering, photographer…) are billed separately. Exact quote after consultation.',
        ru: 'Гонорар включает планирование, концепцию, управление проектом и доступ к нашей команде. Услуги подрядчиков (площадка, кейтеринг, фотограф…) оплачиваются отдельно. Точная стоимость — после консультации.',
      }, l)],
      extras: {
        title: pick({ fr: 'Options', en: 'Options', ru: 'Опции' }, l),
        items: pick({
          fr: ['Deuxième coordinateur (plusieurs lieux) — 200 € jusqu’à 4 h', 'Accueil des invités la veille : transferts, hébergement, dîner de bienvenue — 1 000 €', 'Confidentialité (NDA) — 500 €'],
          en: ['Second coordinator (several venues) — €200 up to 4 h', 'Guest arrivals the day before: transfers, accommodation, welcome dinner — €1,000', 'Confidentiality (NDA) — €500'],
          ru: ['Второй координатор (несколько локаций) — 200 € до 4 часов', 'Встреча гостей накануне: трансферы, проживание, приветственный ужин — 1 000 €', 'Конфиденциальность (NDA) — 500 €'],
        }, l),
      },
      cta: { label: pick(btn, l), href: '#contact' },
    },
    { t: 'reviews' },
    { t: 'contact' },
  ],
} as unknown as PageData;

/* ------------------------------------------------------------------ */
export const coordination = {
  hero: {
    image: '202510-nz7-0004', position: '50% 30%',
    fr: { eyebrow: 'Coordination', title: 'Coordination <em>du jour J</em>', lead: 'Toutes les décisions sont prises. Vous vivez la journée, nous veillons à ce qu’elle devienne un souvenir parfait.' },
    en: { eyebrow: 'Coordination', title: 'Day-of <em>coordination</em>', lead: 'Every decision is made. You live the day; we make sure it becomes a perfect memory.' },
    ru: { eyebrow: 'Координация', title: 'Координация <em>дня свадьбы</em>', lead: 'Все решения приняты. Вы проживаете день, а мы делаем так, чтобы он стал идеальным воспоминанием.' },
  },
  blocks: (l: Lang): Block[] => [
    {
      t: 'intro',
      text: pick({
        fr: 'Sans coordinateur, le jour J, ce sont des dizaines de décisions à prendre — en robe, au milieu de l’émotion. <em>Avec nous, il n’en reste aucune.</em>',
        en: 'Without a coordinator, the wedding day means dozens of decisions — in your dress, in the middle of the emotion. <em>With us, there are none left.</em>',
        ru: 'Без координатора день свадьбы — это десятки решений, которые приходится принимать в платье и на эмоциях. <em>С нами их не остаётся.</em>',
      }, l),
    },
    {
      t: 'steps',
      eyebrow: pick({ fr: 'Ce qui est inclus', en: 'What’s included', ru: 'Что входит' }, l),
      title: pick({ fr: 'Avant <em>et pendant</em>', en: 'Before <em>and during</em>', ru: 'До <em>и во время</em>' }, l),
      items: pick({
        fr: [['Préparation', 'Nous contactons vos prestataires et établissons un déroulé à la minute, transmis à chacun.'], ['Repérage', 'Visite technique du lieu et placement de chaque prestataire : buffet, tables, arche, décor, scène, DJ.'], ['Accueil', 'Nous accueillons vos invités et accompagnons vos proches, surtout s’ils ne parlent pas français.'], ['Pilotage', 'Gestion des prestataires, respect du timing du service et des animations, règlements finaux si besoin.'], ['Jusqu’au bal', 'Présence sur place jusqu’à l’ouverture du bal.']],
        en: [['Preparation', 'We contact your vendors and build a minute-by-minute timeline shared with each of them.'], ['Site check', 'Technical visit and placement of every vendor: buffet, tables, arch, décor, stage, DJ.'], ['Welcome', 'We greet your guests and look after your family, especially those who don’t speak French.'], ['Management', 'Vendor management, timing of service and entertainment, final payments if needed.'], ['Until the first dance', 'On site until the dance floor opens.']],
        ru: [['Подготовка', 'Связываемся с вашими подрядчиками и составляем поминутный тайминг для каждого.'], ['Осмотр площадки', 'Технический осмотр и расстановка всех подрядчиков: фуршет, столы, арка, декор, сцена, DJ.'], ['Встреча гостей', 'Встречаем гостей и помогаем близким, особенно тем, кто не говорит по-французски.'], ['Управление', 'Работа с подрядчиками, контроль тайминга подачи блюд и программы, финальные расчёты при необходимости.'], ['До открытия танцпола', 'Присутствие на месте до начала танцевальной части.']],
      }, l).map(([title, text]) => ({ title, text })),
    },
    {
      t: 'pricing', image: '202510-img-7803',
      eyebrow: pick({ fr: 'Tarif', en: 'Price', ru: 'Стоимость' }, l),
      title: pick({ fr: 'Coordination du jour J', en: 'Day-of coordination', ru: 'Координация дня' }, l),
      price: pick({ fr: 'dès 1 500 €', en: 'from €1,500', ru: 'от 1 500 €' }, l),
      note: pick({ fr: 'Mariage jusqu’à 100 invités. Tarif exact après consultation.', en: 'Wedding up to 100 guests. Exact quote after consultation.', ru: 'Свадьба до 100 гостей. Точная стоимость — после консультации.' }, l),
      extras: {
        title: pick({ fr: 'Frais éventuels', en: 'Possible extras', ru: 'Возможные доплаты' }, l),
        items: pick({
          fr: ['Coordinateur supplémentaire (plusieurs lieux) — 200 € jusqu’à 4 h', 'Frais de déplacement', 'Hébergement si le lieu est à plus d’une heure', 'Repas du coordinateur le jour J', 'Accueil des invités la veille — 1 000 €'],
          en: ['Additional coordinator (several venues) — €200 up to 4 h', 'Travel costs', 'Accommodation if the venue is more than an hour away', 'Coordinator’s meals on the day', 'Guest arrivals the day before — €1,000'],
          ru: ['Дополнительный координатор (несколько локаций) — 200 € до 4 часов', 'Транспортные расходы', 'Проживание, если площадка дальше часа езды', 'Питание координатора в день свадьбы', 'Встреча гостей накануне — 1 000 €'],
        }, l),
      },
      cta: { label: pick(btn, l), href: '#contact' },
    },
    { t: 'contact' },
  ],
} as unknown as PageData;

/* ------------------------------------------------------------------ */
export const host = {
  hero: {
    image: '202601-cmi-7241', position: '50% 25%',
    fr: { eyebrow: 'Maître de cérémonie · FR · RU · EN', title: 'Coordinatrice et <em>animatrice</em> de mariage', lead: 'Une animation bilingue élégante pour les mariages franco-russes et internationaux.' },
    en: { eyebrow: 'Wedding host · FR · RU · EN', title: 'Wedding coordinator <em>& host</em>', lead: 'Elegant bilingual hosting for French-Russian and international weddings.' },
    ru: { eyebrow: 'Ведущая · FR · RU · EN', title: 'Координатор и <em>ведущая</em> свадьбы', lead: 'Элегантное двуязычное ведение для франко-русских и международных свадеб.' },
  },
  blocks: (l: Lang): Block[] => [
    {
      t: 'intro',
      text: pick({
        fr: 'Pour les couples qui organisent eux-mêmes mais veulent une soirée conduite avec élégance. Deux rôles réunis en une personne : <em>pas de rupture entre coordination et animation</em>.',
        en: 'For couples who plan their own wedding but want an elegantly led evening. Two roles in one person: <em>no gap between coordination and hosting</em>.',
        ru: 'Для пар, которые готовят свадьбу сами, но хотят элегантно проведённый вечер. Две роли в одном человеке: <em>без разрыва между координацией и ведением</em>.',
      }, l),
    },
    {
      t: 'split', image: '202510-001300', ratio: 'land',
      eyebrow: pick({ fr: 'En journée', en: 'During the day', ru: 'Днём' }, l),
      title: pick({ fr: 'La <em>coordinatrice</em>', en: 'The <em>coordinator</em>', ru: '<em>Координатор</em>' }, l),
      text: [pick({
        fr: 'En amont, je contacte vos prestataires et construis le déroulé. Le jour J, j’arrive en avance et coordonne décorateur, traiteur, photographe et DJ — pendant que vous vous préparez.',
        en: 'Beforehand, I contact your vendors and build the timeline. On the day, I arrive early and coordinate decorator, caterer, photographer and DJ — while you get ready.',
        ru: 'Заранее я связываюсь с вашими подрядчиками и составляю тайминг. В день свадьбы приезжаю раньше всех и координирую декоратора, кейтеринг, фотографа и DJ, пока вы собираетесь.',
      }, l)],
    },
    {
      t: 'split', image: '202601-kc-wedding-wp-hd-4', reverse: true, tone: 'ivory', position: '50% 20%',
      eyebrow: pick({ fr: 'Le soir', en: 'In the evening', ru: 'Вечером' }, l),
      title: pick({ fr: 'L’<em>animatrice</em>', en: 'The <em>host</em>', ru: '<em>Ведущая</em>' }, l),
      text: [pick({
        fr: 'J’accueille vos invités dans leur langue, je donne le rythme du dîner, traduis les discours, accompagne les surprises — et crée du lien entre des convives venus de pays différents.',
        en: 'I welcome your guests in their language, set the pace of dinner, translate speeches, guide the surprises — and bring together guests from different countries.',
        ru: 'Я встречаю гостей на их языке, задаю ритм ужина, перевожу тосты, сопровождаю сюрпризы — и объединяю гостей из разных стран.',
      }, l)],
    },
    {
      t: 'pricing',
      eyebrow: pick({ fr: 'Animation & coordination', en: 'Hosting & coordination', ru: 'Ведение и координация' }, l),
      title: pick({ fr: 'Tarif', en: 'Price', ru: 'Стоимость' }, l),
      price: pick({ fr: 'dès 2 500 €', en: 'from €2,500', ru: 'от 2 500 €' }, l),
      note: pick({ fr: '+ déplacement et hébergement si nécessaire', en: '+ travel and accommodation if needed', ru: '+ транспорт и проживание при необходимости' }, l),
      includes: {
        title: pick({ fr: 'Détails', en: 'Details', ru: 'Детали' }, l),
        items: pick({
          fr: ['Langues : français, russe, anglais', 'Jusqu’à 10 heures, de la coordination en journée à l’ouverture du bal'],
          en: ['Languages: French, Russian, English', 'Up to 10 hours, from daytime coordination to the first dance'],
          ru: ['Языки: французский, русский, английский', 'До 10 часов — от дневной координации до открытия танцпола'],
        }, l),
      },
      extras: {
        title: pick({ fr: 'Services complémentaires', en: 'Additional services', ru: 'Дополнительно' }, l),
        items: pick({
          fr: ['Cérémonie personnalisée, française, russe ou bilingue (30–45 min) — 500 €', 'Musiciens : violon dès 400 € / heure', 'DJ, son et lumière — dès 1 200 €', 'Dîner de bienvenue la veille — dès 1 000 €', 'Confidentialité (NDA) — 500 €', 'Heures supplémentaires — sur demande'],
          en: ['Personalised ceremony in French, Russian or both (30–45 min) — €500', 'Musicians: violin from €400 / hour', 'DJ, sound and lighting — from €1,200', 'Welcome dinner the day before — from €1,000', 'Confidentiality (NDA) — €500', 'Extra hours — on request'],
          ru: ['Выездная церемония на французском, русском или двух языках (30–45 мин) — 500 €', 'Музыканты: скрипка от 400 € / час', 'DJ, звук и свет — от 1 200 €', 'Приветственный ужин накануне — от 1 000 €', 'Конфиденциальность (NDA) — 500 €', 'Дополнительные часы — по запросу'],
        }, l),
      },
      cta: { label: pick({ fr: 'Demander un devis', en: 'Request a quote', ru: 'Запросить расчёт' }, l), href: '#contact' },
    },
    { t: 'reviews' },
    { t: 'contact' },
  ],
} as unknown as PageData;

/* ------------------------------------------------------------------ */
export const vendors = {
  hero: {
    image: '202510-podryadchiki-verhnee-foto',
    fr: { eyebrow: 'Prestataires', title: 'Prestataires <em>de mariage</em>', lead: 'Des spécialistes fiables, à prix négociés, parlant russe, français ou anglais.' },
    en: { eyebrow: 'Vendors', title: 'Wedding <em>vendors</em>', lead: 'Reliable specialists at negotiated prices, speaking Russian, French or English.' },
    ru: { eyebrow: 'Подрядчики', title: 'Свадебные <em>подрядчики</em>', lead: 'Надёжные специалисты по согласованным ценам, говорящие по-русски, по-французски или по-английски.' },
  },
  blocks: (l: Lang): Block[] => [
    {
      t: 'intro',
      text: pick({
        fr: 'Inutile de chercher au hasard sur Internet. Nous avons vérifié, sélectionné et négocié pour vous : notre carnet est le fruit de <em>treize ans d’expérience</em>.',
        en: 'No need to search blindly online. We have checked, selected and negotiated for you: our book is the result of <em>thirteen years of experience</em>.',
        ru: 'Не нужно искать вслепую в интернете. Мы проверили, отобрали и договорились за вас: наша база — результат <em>тринадцати лет опыта</em>.',
      }, l),
    },
    {
      t: 'steps',
      eyebrow: pick({ fr: 'Comment ça marche', en: 'How it works', ru: 'Как это работает' }, l),
      title: pick({ fr: 'Six étapes, <em>zéro hasard</em>', en: 'Six steps, <em>no guesswork</em>', ru: 'Шесть шагов — <em>без случайностей</em>' }, l),
      items: pick({
        fr: [['Consultation offerte', 'Vous nous dites qui vous cherchez et dans quel style.'], ['Sélection', 'Nous préparons une sélection personnalisée.'], ['Comparaison', 'Vous consultez portfolios, notes et commentaires.'], ['Choix', 'Vous choisissez librement.'], ['Mise en relation', 'Nous vous présentons, et parlons pour vous si besoin.'], ['Réservation', 'Vous réservez — à prix négociés, sous notre contrôle qualité.']],
        en: [['Free consultation', 'Tell us who you are looking for and in what style.'], ['Selection', 'We prepare a personalised shortlist.'], ['Comparison', 'You review portfolios, ratings and comments.'], ['Choice', 'You choose freely.'], ['Introduction', 'We introduce you and talk on your behalf if needed.'], ['Booking', 'You book — at negotiated prices, under our quality control.']],
        ru: [['Бесплатная консультация', 'Расскажите, кого вы ищете и в каком стиле.'], ['Подборка', 'Мы готовим персональную подборку.'], ['Сравнение', 'Вы смотрите портфолио, наши оценки и комментарии.'], ['Выбор', 'Вы выбираете сами.'], ['Знакомство', 'Мы знакомим вас и при необходимости ведём переговоры.'], ['Бронирование', 'Вы бронируете — по согласованным ценам и под нашим контролем качества.']],
      }, l).map(([title, text]) => ({ title, text })),
    },
    {
      t: 'features', tone: 'ivory',
      eyebrow: pick({ fr: 'Notre sélection', en: 'How we choose', ru: 'Как мы выбираем' }, l),
      title: pick({ fr: 'Le label <em>Agence Chance</em>', en: 'The <em>Agence Chance</em> label', ru: 'Знак качества <em>Agence Chance</em>' }, l),
      items: pick({
        fr: [['Connus personnellement', 'Nous les avons vus travailler, sous pression, à de nombreuses reprises.'], ['À l’écoute', 'Pas de poses imposées ni de palettes toutes faites : votre mariage, pas le leur.'], ['Budgets négociés', 'Nous négocions, réaffectons, optimisons — souvent en formules groupées.'], ['Votre langue', 'Si votre mère ne parle que russe, la maquilleuse la comprendra.']],
        en: [['Personally known', 'We have seen them work, under pressure, many times.'], ['They listen', 'No imposed poses or ready-made palettes: your wedding, not theirs.'], ['Negotiated budgets', 'We negotiate, reallocate, optimise — often as packages.'], ['Your language', 'If your mother only speaks Russian, the make-up artist will understand her.']],
        ru: [['Знаем лично', 'Мы много раз видели их в работе — и в стрессовых ситуациях тоже.'], ['Слышат клиента', 'Никаких навязанных поз и чужих палитр: это ваша свадьба, а не их.'], ['Согласованный бюджет', 'Договариваемся, перераспределяем, оптимизируем — часто пакетом.'], ['Ваш язык', 'Если ваша мама говорит только по-русски, визажист её поймёт.']],
      }, l).map(([title, text]) => ({ title, text })),
    },
    {
      t: 'cards', layout: 'four',
      eyebrow: pick({ fr: 'Notre carnet', en: 'Our book', ru: 'Наша база' }, l),
      title: pick({ fr: 'Ceux qui <em>font la magie</em>', en: 'The people who <em>make the magic</em>', ru: 'Те, кто <em>создаёт волшебство</em>' }, l),
      items: [
        { image: '202510-2h7a6718', title: pick({ fr: 'Photographes', en: 'Photographers', ru: 'Фотографы' }, l), text: pick({ fr: 'Fine art, reportage, éditorial — la lumière et l’émotion.', en: 'Fine art, documentary, editorial — light and emotion.', ru: 'Fine art, репортаж, editorial — свет и эмоции.' }, l), href: r('contacts', l) },
        { image: '202510-1h2a5931', title: pick({ fr: 'Coiffure & maquillage', en: 'Hair & make-up', ru: 'Стилисты и визажисты' }, l), text: pick({ fr: 'Subtil, aérien, français. Tenue toute la journée.', en: 'Subtle, airy, French. Lasting all day.', ru: 'Тонко, легко, по-французски. Держится весь день.' }, l), href: r('contacts', l) },
        { image: '202510-viddeograf-1', title: pick({ fr: 'Vidéastes', en: 'Videographers', ru: 'Видеографы' }, l), text: pick({ fr: 'Films courts, drone, sous-titres multilingues.', en: 'Short films, drone, multilingual subtitles.', ru: 'Короткие фильмы, дрон, субтитры на нескольких языках.' }, l), href: r('contacts', l) },
        { image: '202510-2025-10-16-16-37-19-1', title: pick({ fr: 'Fleuristes & décor', en: 'Florists & décor', ru: 'Флористы и декор' }, l), text: pick({ fr: 'Fleurs de saison, pensées avec l’architecture du lieu.', en: 'Seasonal flowers, designed with the venue’s architecture.', ru: 'Сезонные цветы в гармонии с архитектурой площадки.' }, l), href: r('contacts', l) },
        { image: '202510-img-6072', title: pick({ fr: 'Traiteurs & chefs', en: 'Caterers & chefs', ru: 'Кейтеринг и шефы' }, l), text: pick({ fr: 'Du chic champêtre à la haute gastronomie.', en: 'From rustic chic to haute cuisine.', ru: 'От рустик-шика до высокой кухни.' }, l), href: r('contacts', l) },
        { image: '202510-1h2a3660', title: pick({ fr: 'Transport', en: 'Transport', ru: 'Транспорт' }, l), text: pick({ fr: 'Voitures de collection, navettes, chauffeurs multilingues.', en: 'Vintage cars, shuttles, multilingual drivers.', ru: 'Ретро-автомобили, трансферы, водители со знанием языков.' }, l), href: r('contacts', l) },
        { image: '202510-img-6089', title: pick({ fr: 'Musiciens', en: 'Musicians', ru: 'Музыканты' }, l), text: pick({ fr: 'Jazz, chanson française, violon, DJ.', en: 'Jazz, chanson, violin, DJ.', ru: 'Джаз, французский шансон, скрипка, DJ.' }, l), href: r('contacts', l) },
        { image: '202510-veduschiy', title: pick({ fr: 'Animateurs', en: 'Hosts', ru: 'Ведущие' }, l), text: pick({ fr: 'Le pont entre vos deux mondes.', en: 'The bridge between your two worlds.', ru: 'Мост между вашими двумя мирами.' }, l), href: r('host', l) },
      ],
    },
    { t: 'contact', title: pick({ fr: 'Composons <em>votre équipe</em>', en: 'Let’s build <em>your team</em>', ru: 'Соберём <em>вашу команду</em>' }, l) },
  ],
} as unknown as PageData;

/* ------------------------------------------------------------------ */
type Pkg = {
  image: string; position?: string; eyebrow: T; title: T; lead: T; intro: T;
  steps: T<[string, string][]>; stepsTitle: T; price: T; note?: T; includes: T<string[]>; extras?: T<string[]>; extrasTitle?: T; image2: string;
};
const pkgPage = (p: Pkg) => ({
  hero: { image: p.image, position: p.position, fr: { eyebrow: p.eyebrow.fr, title: p.title.fr, lead: p.lead.fr }, en: { eyebrow: p.eyebrow.en, title: p.title.en, lead: p.lead.en }, ru: { eyebrow: p.eyebrow.ru, title: p.title.ru, lead: p.lead.ru } },
  blocks: (l: Lang): Block[] => [
    { t: 'intro', text: p.intro[l] },
    { t: 'steps', eyebrow: pick({ fr: 'Comment ça se passe', en: 'How it works', ru: 'Как это проходит' }, l), title: p.stepsTitle[l], items: p.steps[l].map(([title, text]) => ({ title, text })) },
    { t: 'full', image: p.image2 },
    {
      t: 'pricing', eyebrow: pick({ fr: 'Tarif', en: 'Price', ru: 'Стоимость' }, l), title: p.eyebrow[l], price: p.price[l], note: p.note?.[l],
      includes: { title: pick({ fr: 'Le forfait comprend', en: 'The package includes', ru: 'В пакет входит' }, l), items: p.includes[l] },
      extras: p.extras ? { title: p.extrasTitle?.[l] ?? pick({ fr: 'En option', en: 'Options', ru: 'Дополнительно' }, l), items: p.extras[l] } : undefined,
      cta: { label: pick(btn, l), href: '#contact' },
    },
    { t: 'contact', title: pick(talk, l) },
  ],
}) as unknown as PageData;

export const proposal = pkgPage({
  image: '202510-predlozhenie-ruki-i-serdca-verhnyaya', image2: '202510-dm9a7074',
  eyebrow: { fr: 'Demande en mariage', en: 'Proposal in Paris', ru: 'Предложение руки и сердца' },
  title: { fr: 'Demande en mariage <em>à Paris</em>', en: 'A proposal <em>in Paris</em>', ru: 'Предложение <em>в Париже</em>' },
  lead: { fr: 'Pour un « oui » inoubliable — et des images qui restent.', en: 'For an unforgettable “yes” — and pictures that last.', ru: 'Для незабываемого «да» — и кадров на всю жизнь.' },
  intro: {
    fr: 'Une promenade photo « Love Story » dans Paris — votre partenaire ne se doute de rien. Au détour d’une rue, <em>une violoniste joue votre air</em>. C’est le moment.',
    en: 'A “Love Story” photo walk through Paris — your partner suspects nothing. Around a corner, <em>a violinist plays your song</em>. That’s the moment.',
    ru: 'Фотопрогулка Love Story по Парижу — ваша вторая половинка ни о чём не догадывается. За поворотом <em>скрипачка играет вашу мелодию</em>. Это тот самый момент.',
  },
  stepsTitle: { fr: 'Le scénario', en: 'The script', ru: 'Сценарий' },
  steps: {
    fr: [['La promenade', 'Une séance photo « Love Story » dans les plus beaux lieux de Paris.'], ['La surprise', 'Le photographe vous conduit au lieu convenu, où attend une violoniste déguisée en musicienne de rue.'], ['Le « oui »', 'Elle joue l’air choisi : vous faites votre demande. Tout est filmé et photographié.']],
    en: [['The walk', 'A “Love Story” photo session in the most beautiful spots in Paris.'], ['The surprise', 'The photographer leads you to the agreed place, where a violinist waits, disguised as a street musician.'], ['The “yes”', 'She plays your chosen song: you propose. Everything is filmed and photographed.']],
    ru: [['Прогулка', 'Фотосессия Love Story в самых красивых местах Парижа.'], ['Сюрприз', 'Фотограф приводит вас в условленное место, где ждёт скрипачка в образе уличного музыканта.'], ['«Да»', 'Звучит выбранная мелодия — вы делаете предложение. Всё снимается на фото и видео.']],
  },
  price: { fr: 'dès 1 000 €', en: 'from €1,000', ru: 'от 1 000 €' },
  includes: {
    fr: ['Organisation via WhatsApp, sans limite', 'Séance « Love Story » — 2 h, 100 photos sous un mois', 'Séance « She said Oui in Paris » — 15 min, 20 photos sous 2 jours', 'Violon — 15 min', 'Un reel et des stories sous 2 jours'],
    en: ['Unlimited planning via WhatsApp', '“Love Story” session — 2 h, 100 photos within a month', '“She said Oui in Paris” session — 15 min, 20 photos within 2 days', 'Violin — 15 min', 'A reel and stories within 2 days'],
    ru: ['Подготовка в WhatsApp без ограничений', 'Фотосессия Love Story — 2 часа, 100 фото в течение месяца', 'Съёмка «She said Oui in Paris» — 15 мин, 20 фото за 2 дня', 'Скрипка — 15 минут', 'Reels и сторис в течение 2 дней'],
  },
  extras: {
    fr: ['Bouquet livré — 120 €', 'Coiffure et maquillage à l’hôtel — 350 €', 'Voiture de collection avec chauffeur, 3 h — 700 €', 'Restaurant, hébergement, guide… et, plus tard, le mariage'],
    en: ['Delivered bouquet — €120', 'Hair and make-up at the hotel — €350', 'Vintage car with driver, 3 h — €700', 'Restaurant, accommodation, guide… and, later, the wedding'],
    ru: ['Букет с доставкой — 120 €', 'Причёска и макияж в отеле — 350 €', 'Ретро-автомобиль с водителем, 3 часа — 700 €', 'Ресторан, проживание, гид… а потом и свадьба'],
  },
});

export const forTwo = pkgPage({
  image: '202510-1h2a5500', image2: '202510-001412',
  eyebrow: { fr: 'Mariage à deux', en: 'Wedding for two', ru: 'Свадьба для двоих' },
  title: { fr: 'Un mariage <em>pour deux</em> à Paris', en: 'A wedding <em>for two</em> in Paris', ru: 'Свадьба <em>для двоих</em> в Париже' },
  lead: { fr: 'La beauté d’un mariage à Paris, sans les contraintes ni la foule.', en: 'The beauty of a Paris wedding, without the hassle or the crowd.', ru: 'Красота свадьбы в Париже — без хлопот и толпы гостей.' },
  intro: {
    fr: 'Une cérémonie symbolique en plein air, un discours qui raconte <em>votre histoire</em>, Paris en toile de fond. Pour deux — et jusqu’à dix proches.',
    en: 'A symbolic outdoor ceremony, a speech that tells <em>your story</em>, Paris as the backdrop. For two — and up to ten loved ones.',
    ru: 'Выездная церемония под открытым небом, речь о <em>вашей истории</em>, Париж вокруг. Для двоих — и до десяти близких.',
  },
  stepsTitle: { fr: 'Votre journée', en: 'Your day', ru: 'Ваш день' },
  steps: {
    fr: [['Préparatifs', 'Coiffure et maquillage à votre hôtel, le photographe saisit les derniers instants.'], ['First look', 'Le marié découvre sa future épouse.'], ['Cérémonie', 'Voiture de collection, maître de cérémonie, violon : environ 15 minutes d’émotion.'], ['Paris', 'Séance photo dans la ville, puis retour à l’hôtel.']],
    en: [['Getting ready', 'Hair and make-up at your hotel; the photographer captures the last moments.'], ['First look', 'The groom sees his bride for the first time.'], ['Ceremony', 'Vintage car, celebrant, violin: about 15 minutes of emotion.'], ['Paris', 'Photo session in the city, then back to the hotel.']],
    ru: [['Сборы', 'Причёска и макияж в отеле, фотограф ловит последние минуты ожидания.'], ['First look', 'Жених впервые видит невесту.'], ['Церемония', 'Ретро-автомобиль, ведущий, скрипка — около 15 минут эмоций.'], ['Париж', 'Фотопрогулка по городу и возвращение в отель.']],
  },
  price: { fr: 'dès 3 500 €', en: 'from €3,500', ru: 'от 3 500 €' },
  note: { fr: 'Pour 2 personnes + jusqu’à 10 invités, lieu extérieur à Paris.', en: 'For 2 + up to 10 guests, outdoor venue in Paris.', ru: 'Для 2 человек + до 10 гостей, площадка под открытым небом в Париже.' },
  includes: {
    fr: ['Préparation via WhatsApp et 5–6 h de présence le jour J', 'Coiffure et maquillage à l’hôtel (2–3 h)', 'Bouquet et boutonnière livrés', 'Photographe 3 h, 100 photos sous une semaine', 'Voiture avec chauffeur (2 h)', 'Maître de cérémonie et violon (15 min)', 'Reel et rushes pour les stories sous une semaine'],
    en: ['Planning via WhatsApp and 5–6 h on the day', 'Hair and make-up at the hotel (2–3 h)', 'Bouquet and buttonhole delivered', 'Photographer 3 h, 100 photos within a week', 'Car with driver (2 h)', 'Celebrant and violin (15 min)', 'Reel and story footage within a week'],
    ru: ['Подготовка в WhatsApp и 5–6 часов работы в день свадьбы', 'Причёска и макияж в отеле (2–3 часа)', 'Букет и бутоньерка с доставкой', 'Фотограф 3 часа, 100 фото в течение недели', 'Автомобиль с водителем (2 часа)', 'Ведущий и скрипка (15 минут)', 'Reels и материалы для сторис в течение недели'],
  },
  extras: {
    fr: ['Déjeuner ou dîner au restaurant', 'Transport et hébergement des invités', 'Réception pour un nombre illimité d’invités'],
    en: ['Lunch or dinner at a restaurant', 'Guest transport and accommodation', 'A reception for any number of guests'],
    ru: ['Обед или ужин в ресторане', 'Транспорт и проживание гостей', 'Банкет для любого числа гостей'],
  },
});

export const anniversary = pkgPage({
  image: '202510-yubiley-verhnyaya', image2: '202510-img-7822',
  eyebrow: { fr: 'Anniversaire de mariage', en: 'Wedding anniversary', ru: 'Годовщина свадьбы' },
  title: { fr: 'Se dire <em>« oui »</em> à nouveau', en: 'Say <em>“yes”</em> again', ru: 'Сказать <em>«да»</em> снова' },
  lead: { fr: 'Un an, cinq ans ou vingt-cinq ans : revivre votre grand jour au cœur de Paris.', en: 'One, five or twenty-five years: relive your big day in the heart of Paris.', ru: 'Год, пять или двадцать пять лет — заново прожить свой главный день в сердце Парижа.' },
  intro: {
    fr: 'Préparatifs à l’hôtel, renouvellement des vœux en plein air, dîner face à la tour Eiffel. <em>L’amour, toujours le même.</em>',
    en: 'Getting ready at the hotel, renewing your vows outdoors, dinner facing the Eiffel Tower. <em>Love, just the same.</em>',
    ru: 'Сборы в отеле, обновление клятв под открытым небом, ужин с видом на Эйфелеву башню. <em>Любовь — всё та же.</em>',
  },
  stepsTitle: { fr: 'Votre journée', en: 'Your day', ru: 'Ваш день' },
  steps: {
    fr: [['Préparatifs', 'Coiffure et maquillage à l’hôtel, le photographe vous rejoint.'], ['First look', 'Les retrouvailles, les rires, les émotions sincères.'], ['Les vœux', 'Maître de cérémonie et violoniste dans un lieu parisien choisi.'], ['Le dîner', 'Restaurant avec vue sur la tour Eiffel, une coupe de champagne.']],
    en: [['Getting ready', 'Hair and make-up at the hotel; the photographer joins you.'], ['First look', 'Reunion, laughter, sincere emotion.'], ['The vows', 'Celebrant and violinist at a chosen Paris location.'], ['Dinner', 'A restaurant with an Eiffel Tower view and a glass of champagne.']],
    ru: [['Сборы', 'Причёска и макияж в отеле, к вам присоединяется фотограф.'], ['First look', 'Встреча, смех, искренние эмоции.'], ['Клятвы', 'Ведущий и скрипачка в выбранном месте Парижа.'], ['Ужин', 'Ресторан с видом на Эйфелеву башню и бокал шампанского.']],
  },
  price: { fr: 'dès 4 500 €', en: 'from €4,500', ru: 'от 4 500 €' },
  includes: {
    fr: ['Préparation via WhatsApp et environ 6 h le jour même', 'Coiffure et maquillage à l’hôtel (2–3 h)', 'Bouquet et boutonnière livrés', 'Photographe 3 h, 100 photos sous une semaine', 'Voiture avec chauffeur (2 h)', 'Maître de cérémonie et violon (15 min)', 'Reel et rushes sous une semaine'],
    en: ['Planning via WhatsApp and about 6 h on the day', 'Hair and make-up at the hotel (2–3 h)', 'Bouquet and buttonhole delivered', 'Photographer 3 h, 100 photos within a week', 'Car with driver (2 h)', 'Celebrant and violin (15 min)', 'Reel and footage within a week'],
    ru: ['Подготовка в WhatsApp и около 6 часов в сам день', 'Причёска и макияж в отеле (2–3 часа)', 'Букет и бутоньерка с доставкой', 'Фотограф 3 часа, 100 фото в течение недели', 'Автомобиль с водителем (2 часа)', 'Ведущий и скрипка (15 минут)', 'Reels и материалы в течение недели'],
  },
  extras: {
    fr: ['Déjeuner ou dîner au restaurant', 'Transport et hébergement des invités', 'Programme de divertissement', 'Réception pour un nombre illimité d’invités'],
    en: ['Lunch or dinner at a restaurant', 'Guest transport and accommodation', 'Entertainment programme', 'A reception for any number of guests'],
    ru: ['Обед или ужин в ресторане', 'Транспорт и проживание гостей', 'Развлекательная программа', 'Банкет для любого числа гостей'],
  },
});

export const weekend = pkgPage({
  image: '202510-romanticheskiy-uzhin-v-parizhe-1', image2: '202510-img-7757',
  eyebrow: { fr: 'Week-end à Paris', en: 'Weekend in Paris', ru: 'Выходные в Париже' },
  title: { fr: 'Un week-end <em>romantique</em> à Paris', en: 'A <em>romantic</em> weekend in Paris', ru: '<em>Романтические</em> выходные в Париже' },
  lead: { fr: 'Pour les couples qui veulent remettre un peu de magie dans leur histoire.', en: 'For couples who want to add a little magic to their story.', ru: 'Для пар, которые хотят добавить в отношения немного волшебства.' },
  intro: {
    fr: 'Trois jours, deux nuits à Saint-Germain-des-Prés. Une promenade photo façon <em>cinéma français</em>, des dîners à deux, et Paris la nuit.',
    en: 'Three days, two nights in Saint-Germain-des-Prés. A photo walk in the style of <em>French cinema</em>, dinners for two, and Paris by night.',
    ru: 'Три дня и две ночи в Сен-Жермен-де-Пре. Фотопрогулка в стиле <em>французского кино</em>, ужины вдвоём и ночной Париж.',
  },
  stepsTitle: { fr: '3 jours / 2 nuits', en: '3 days / 2 nights', ru: '3 дня / 2 ночи' },
  steps: {
    fr: [['Jour 1', 'Accueil à l’aéroport, boutique-hôtel à Saint-Germain-des-Prés, dîner au Procope.'], ['Jour 2', 'Coiffure et maquillage, promenade photo « Cinéma français », puis soirée parisienne : cabaret, club chic ou club privé.'], ['Jour 3', 'Petit-déjeuner, transfert vers l’aéroport.']],
    en: [['Day 1', 'Airport pick-up, boutique hotel in Saint-Germain-des-Prés, dinner at Le Procope.'], ['Day 2', 'Hair and make-up, “French cinema” photo walk, then a Parisian night: cabaret, chic club or private club.'], ['Day 3', 'Breakfast, transfer to the airport.']],
    ru: [['День 1', 'Встреча в аэропорту, бутик-отель в Сен-Жермен-де-Пре, ужин в Le Procope.'], ['День 2', 'Причёска и макияж, фотопрогулка «Французское кино», вечером — кабаре, модный клуб или закрытый клуб.'], ['День 3', 'Завтрак и трансфер в аэропорт.']],
  },
  price: { fr: 'dès 3 000 €', en: 'from €3,000', ru: 'от 3 000 €' },
  note: { fr: 'Pour deux personnes', en: 'For two people', ru: 'На двоих' },
  includes: {
    fr: ['Programme et suivi via WhatsApp', 'Transferts aéroport – hôtel – aéroport', '2 nuits en boutique-hôtel 3–4* avec petit-déjeuner', 'Dîner au Procope (ou équivalent)', 'Dîner-spectacle le deuxième soir', 'Coiffure et maquillage à l’hôtel', 'Photographe 2 h, 50 photos sous une semaine'],
    en: ['Programme and follow-up via WhatsApp', 'Airport – hotel – airport transfers', '2 nights in a 3–4* boutique hotel with breakfast', 'Dinner at Le Procope (or similar)', 'Dinner and show on the second night', 'Hair and make-up at the hotel', 'Photographer 2 h, 50 photos within a week'],
    ru: ['Программа и сопровождение в WhatsApp', 'Трансферы аэропорт – отель – аэропорт', '2 ночи в бутик-отеле 3–4* с завтраком', 'Ужин в Le Procope (или аналог)', 'Ужин и шоу во второй вечер', 'Причёска и макияж в отеле', 'Фотограф 2 часа, 50 фото в течение недели'],
  },
  extrasTitle: { fr: 'Non inclus', en: 'Not included', ru: 'Не входит' },
  extras: {
    fr: ['Déjeuner du deuxième jour', 'Club privé (sur demande) — 100 € par personne'],
    en: ['Lunch on day two', 'Private club (on request) — €100 per person'],
    ru: ['Обед во второй день', 'Закрытый клуб (по запросу) — 100 € с человека'],
  },
});
