import type { Locale } from '../i18n/ui';

// Data for the Bauen/Build page tables, shared by both locales so prices and
// shops only need to be maintained once. `null` means "not decided yet" and
// renders as a dash; the BOM total is only shown once every price is known.

type Localized = Record<Locale, string>;

/** month the BOM prices were last checked; update together with the prices */
export const PRICES_AS_OF = '10/2026';

export interface Part {
	qty: number;
	name: Localized;
	manufacturer: string | null;
	description: Localized | null;
	shop: { label: string; href: string } | null;
	/** price per unit in EUR */
	price: number | null;
	/** small parts the author can send out on request (highlighted in the table) */
	small?: boolean;
}

export interface Tool {
	qty: number;
	name: Localized;
	description: Localized | null;
	source: Localized | null;
}

export const PARTS: Part[] = [
	{ qty: 1, name: { de: 'roomie-Hauptplatine', en: 'roomie main board' }, manufacturer: null, description: null, shop: null, price: null },
	{ qty: 1, name: { de: 'roomie-Erweiterungsplatine', en: 'roomie extension board' }, manufacturer: null, description: null, shop: null, price: null },
	{
		qty: 1,
		name: { de: 'Gehäuse (falls Du das Gehäuse nicht 3D-druckst)', en: "Enclosure (if you don't 3D-print it)" },
		manufacturer: null,
		description: null,
		shop: null,
		price: null,
	},
	{ qty: 1, name: { de: 'Breitbandlautsprecher', en: 'Full-range speaker' }, manufacturer: null, description: null, shop: null, price: null },
	{ qty: 1, name: { de: 'Arcade-Button Grün', en: 'Arcade button, green' }, manufacturer: null, description: null, shop: null, price: null },
	{ qty: 1, name: { de: 'Arcade-Button Rot', en: 'Arcade button, red' }, manufacturer: null, description: null, shop: null, price: null },
	{ qty: 2, name: { de: 'Kabel für Buttons', en: 'Button cable' }, manufacturer: null, description: null, shop: null, price: null },
	{ qty: 1, name: { de: 'Kabel für Lautsprecher', en: 'Speaker cable' }, manufacturer: null, description: null, shop: null, price: null },
	{ qty: 4, name: { de: 'Standfuß', en: 'Rubber foot' }, manufacturer: null, description: null, shop: null, price: null, small: true },
	{ qty: 1, name: { de: 'Lichtleiter', en: 'Light pipe' }, manufacturer: null, description: null, shop: null, price: null, small: true },
	{ qty: 1, name: { de: 'Flachbandkabel', en: 'Ribbon cable' }, manufacturer: null, description: null, shop: null, price: null, small: true },
	{ qty: 1, name: { de: 'roomie-Sticker', en: 'roomie sticker' }, manufacturer: null, description: null, shop: null, price: null, small: true },
	{ qty: 1, name: { de: 'SD-Karte mit mindestens 128 MB', en: 'SD card, at least 128 MB' }, manufacturer: null, description: null, shop: null, price: null },
	{ qty: 1, name: { de: 'USB-Kabel (Daten + Strom)', en: 'USB cable (data + power)' }, manufacturer: null, description: null, shop: null, price: null },
];

export const TOOLS: Tool[] = [
	{ qty: 1, name: { de: 'Schraubendreher', en: 'Screwdriver' }, description: null, source: null },
	{ qty: 1, name: { de: 'Lötkolben mit Lötzinn', en: 'Soldering iron with solder' }, description: null, source: null },
	{ qty: 1, name: { de: 'Akkuschrauber oder Tischbohrmaschine', en: 'Cordless drill or drill press' }, description: null, source: null },
	{
		qty: 1,
		name: { de: 'Satz Spiralbohrer (falls Du das Gehäuse nicht 3D-druckst)', en: "Set of twist drill bits (if you don't 3D-print the enclosure)" },
		description: null,
		source: null,
	},
];

/** Sum of all line items in EUR, or null while any price is still missing. */
export function bomTotal(parts: Part[] = PARTS): number | null {
	if (parts.some((p) => p.price === null)) return null;
	return parts.reduce((sum, p) => sum + p.qty * (p.price ?? 0), 0);
}

export function formatEuro(value: number, locale: Locale): string {
	return new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-GB', { style: 'currency', currency: 'EUR' }).format(value);
}
