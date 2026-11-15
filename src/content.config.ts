import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedText = z.object({
  en: z.string(),
  pt: z.string(),
});

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.json',
  }),
  schema: z.object({
    title: localizedText,
    description: localizedText,
    tech: z.array(z.string()),
    image: z.enum([
      'java',
      'patents',
      'portfolio',
      'physics-simulation',
      'z-score',
      'condensed-matter',
    ]),
    link: z.string().url(),
    order: z.number().int().positive(),
  }),
});

export const collections = { projects };
