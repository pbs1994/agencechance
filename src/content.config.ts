import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/blog' }),
  schema: z.object({
    key: z.string(),
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    cover: z.string().optional(),
    legacyUrl: z.string(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/legal' }),
  schema: z.object({
    key: z.string(),
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    legacyUrl: z.string(),
  }),
});

export const collections = { blog, legal };
