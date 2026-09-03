import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		author: z.string().default('Dominik Weber'),
		image: z.string().default('/images/blog/placeholder-1.svg'),
		locale: z.enum(['de', 'en']),
		translationId: z.string(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
