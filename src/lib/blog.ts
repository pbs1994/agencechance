import { getCollection, type CollectionEntry } from 'astro:content';
import { BLOG_BASE, type Lang } from '../i18n';

export type Post = CollectionEntry<'blog'>;
export const postLang = (p: Post) => p.id.split('/')[0] as Lang;
export const postSlug = (p: Post) => p.id.split('/')[1];
export const postUrl = (p: Post) => BLOG_BASE[postLang(p)] + postSlug(p) + '/';

export async function postsFor(lang: Lang) {
  const all = await getCollection('blog');
  return all.filter((p) => postLang(p) === lang).sort((a, b) => b.data.date.localeCompare(a.data.date));
}

/** URLs of the same article in every language */
export async function postAlternates(key: string) {
  const all = await getCollection('blog');
  return Object.fromEntries(all.filter((p) => p.data.key === key).map((p) => [postLang(p), postUrl(p)])) as Partial<Record<Lang, string>>;
}

export const readingTime = (body = '') => Math.max(2, Math.round(body.split(/\s+/).length / 220));
