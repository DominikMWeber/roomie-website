import { ui, defaultLocale, languages, type Locale } from './ui';

export function getLocale(pathname: string): Locale {
	const [, maybeLocale] = pathname.split('/');
	return maybeLocale in languages ? (maybeLocale as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale) {
	return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
		return ui[locale][key] || ui[defaultLocale][key];
	};
}

/** Swaps the locale prefix of a pathname, preserving the rest of the path. */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
	const segments = pathname.split('/').filter(Boolean);
	if (segments[0] in languages) {
		segments.shift();
	}
	const rest = segments.join('/');
	if (targetLocale === defaultLocale) {
		return `/${rest}`;
	}
	return `/${targetLocale}${rest ? `/${rest}` : ''}`;
}
