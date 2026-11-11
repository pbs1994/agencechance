import type { Lang, T } from '../i18n';

export type Link = { label: string; href: string };

export type Block =
  | { t: 'intro'; eyebrow?: string; title?: string; text: string; cta?: Link; tone?: Tone }
  | {
      t: 'split';
      image: string;
      alt?: string;
      eyebrow?: string;
      title: string;
      text?: string[];
      list?: string[];
      cta?: Link;
      reverse?: boolean;
      tone?: Tone;
      ratio?: 'portrait' | 'land' | 'tall';
      caption?: string;
      position?: string;
    }
  | { t: 'full'; image: string; alt?: string; quote?: string; cite?: string; position?: string }
  | { t: 'features'; eyebrow?: string; title: string; lead?: string; items: { title: string; text: string }[]; tone?: Tone }
  | { t: 'steps'; eyebrow?: string; title: string; lead?: string; items: { title: string; text: string }[]; tone?: Tone }
  | {
      t: 'pricing';
      eyebrow?: string;
      title: string;
      price: string;
      note?: string;
      text?: string[];
      includes?: { title: string; items: string[] };
      extras?: { title: string; items: string[] };
      cta?: Link;
      image?: string;
    }
  | { t: 'cards'; id?: string; eyebrow?: string; title?: string; lead?: string; items: Card[]; layout?: 'three' | 'two' | 'four'; tone?: Tone }
  | { t: 'gallery'; eyebrow?: string; title?: string; images: string[]; alt?: string; credit?: string }
  | { t: 'video'; youtube: string; title: string; eyebrow?: string; credit?: string; poster?: string }
  | { t: 'stats'; items: { value: string; label: string }[] }
  | { t: 'quote'; text: string; cite?: string }
  | { t: 'cta'; image: string; eyebrow?: string; title: string; text?: string; button: Link; position?: string }
  | { t: 'contact'; title?: string; lead?: string }
  | { t: 'reviews'; eyebrow?: string; title?: string }
  | { t: 'prose'; eyebrow?: string; title?: string; html: string; tone?: Tone };

export type Tone = 'ivory' | 'sand' | 'ink';
export type Card = { image: string; title: string; text?: string; href: string; label?: string; meta?: string };

export type PageData = {
  meta?: T<{ title: string; description: string }>;
  hero: T<{ eyebrow?: string; title: string; lead?: string; cta?: Link; cta2?: Link }> & { image?: string; video?: boolean; position?: string; size?: 'full' | 'tall' };
  blocks: (lang: Lang) => Block[];
  image?: string;
};
