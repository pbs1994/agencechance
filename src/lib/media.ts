import media from '../data/media.json';

type Entry = { base: string; w: number; h: number; widths: number[] };
const byBase = new Map<string, Entry>();
for (const e of Object.values(media as Record<string, Entry>)) byBase.set(e.base, e);

export function getMedia(base: string): Entry {
  const e = byBase.get(base);
  if (!e) throw new Error(`Unknown media "${base}"`);
  return e;
}

export const src = (base: string, w = 1280) => {
  const e = getMedia(base);
  const width = e.widths.find((x) => x >= w) ?? e.widths.at(-1);
  return `/media/${base}-${width}.webp`;
};

export const srcset = (base: string) =>
  getMedia(base).widths.map((w) => `/media/${base}-${w}.webp ${w}w`).join(', ');
