import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

/**
 * Returns one entry per translationId. German is always the baseline; for
 * `locale: 'en'`, any post that also has an English version is swapped in,
 * but posts without one stay as their German entry so nothing 404s or
 * disappears. Templates can compare `post.data.locale !== locale` to show
 * a "not yet translated" note in that case.
 */
export async function getPostsForLocale(locale: Locale): Promise<CollectionEntry<'blog'>[]> {
	const all = await getCollection('blog', (entry) => !entry.data.draft);

	const byTranslationId = new Map<string, CollectionEntry<'blog'>>();
	for (const entry of all.filter((e) => e.data.locale === 'de')) {
		byTranslationId.set(entry.data.translationId, entry);
	}
	if (locale === 'en') {
		for (const entry of all.filter((e) => e.data.locale === 'en')) {
			byTranslationId.set(entry.data.translationId, entry);
		}
	}

	return [...byTranslationId.values()].sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);
}
