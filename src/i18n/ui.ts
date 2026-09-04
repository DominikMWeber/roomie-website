export const languages = {
	de: 'Deutsch',
	en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'de';

export const ui = {
	de: {
		'site.title': 'roomie',
		'site.description': 'Ein pädagogisches Intercom-Projekt',

		'nav.home': 'Start',
		'nav.blog': 'Blog',

		'brand.sub': 'Ein pädagogisches Intercom-Projekt',

		'hero.tagline.prefix':
			'Lasst mich roomie vorstellen: Ein nerdiges und personalisierbares Old-School-Intercom, mit dem sich Groß und Klein Zuhause unterhalten kann — ',
		'hero.tagline.highlight': 'realisiert mit ESP32-Mikrocontrollern.',

		'quote.text':
			'Als Patenonkel eines kleinen Bubs wollte ich ein technisches System schaffen, das Kinder spielerisch an Kommunikationstechnik heranführt. Wichtig war mir hierbei, auf Bildschirmzeit mit funktionsüberladenen, süchtig machenden Smartphones zu verzichten.',
		'quote.attribution': '— Dominik',
		'quote.readMore': '→ den ganzen Blogbeitrag lesen',


		'feature.aec.title': 'Vollduplex, echofrei',
		'feature.aec.desc':
			'Beide Seiten können gleichzeitig sprechen. Eingebautes AEC verhindert, dass ein Gerät seinen eigenen Lautsprecher über das Mikrofon hört.',
		'feature.mdns.title': 'Findet seinen Partner selbst',
		'feature.mdns.desc':
			'Geräte finden sich gegenseitig per mDNS im lokalen Netzwerk — keine App, kein Konto, nichts läuft über das Internet.',

		'guide.title': 'Kurzanleitung',
		'guide.desc':
			'Eine kurze, comicartige Anleitung zur Einrichtung deines Geräts — hier direkt lesen oder als PDF herunterladen.',
		'guide.openPdf': 'PDF öffnen ↗',
		'guide.deOnly': '',

		'blog.index.title': 'Blog',
		'blog.recent.title': 'Neueste Blogbeiträge',
		'blog.viewAll': 'Zu allen Blogposts',
		'blog.publishedOn': 'Veröffentlicht am',
		'blog.by': 'von',
		'blog.notTranslated': '',

		'footer.about': 'Über mich',
		'footer.impressum': 'Impressum',
		'footer.datenschutz': 'Datenschutz',
		'footer.aiUsage': 'KI-Nutzung',

		'lang.notAvailable': 'Diese Seite ist nur auf Deutsch verfügbar',
	},
	en: {
		'site.title': 'roomie',
		'site.description': 'An educational intercom project',

		'nav.home': 'Home',
		'nav.blog': 'Blog',

		'brand.sub': 'An educational intercom project',

		'hero.tagline.prefix':
			'Let me introduce roomie: an old-school, nerdy and customizable intercom system that lets roommates talk to each other at home — ',
		'hero.tagline.highlight': 'running on ESP32 platforms.',

		'quote.text':
			"As a godfather raising a young lad, I wanted to provide a system that introduces kids to communication technology through real conversations, in a setup that's fun to use. A setup that reduces screen time away from feature-overloaded, addictive smartphones.",
		'quote.attribution': '— Dominik',
		'quote.readMore': '→ read the whole blog post',


		'feature.aec.title': 'Full-duplex, echo-free',
		'feature.aec.desc':
			'Both sides can talk at once. Onboard AEC keeps each unit from hearing its own speaker through the mic.',
		'feature.mdns.title': 'Finds its own peer',
		'feature.mdns.desc':
			'Units discover each other over mDNS on your local network — no app, no account, nothing routed through the internet.',

		'guide.title': 'Quick setup guide',
		'guide.desc':
			"A short comic-style walkthrough for setting up your unit — read it right here or download the PDF.",
		'guide.openPdf': 'Open PDF ↗',
		'guide.deOnly': 'The guide is currently only available in German.',

		'blog.index.title': 'Blog',
		'blog.recent.title': 'Recent blog posts',
		'blog.viewAll': 'View all blog posts',
		'blog.publishedOn': 'Published on',
		'blog.by': 'by',
		'blog.notTranslated':
			"This post isn't translated into English yet — showing the German version.",

		'footer.about': 'About me',
		'footer.impressum': 'Impressum',
		'footer.datenschutz': 'Privacy Policy',
		'footer.aiUsage': 'AI Usage',

		'lang.notAvailable': 'This page is only available in German',
	},
} as const satisfies Record<Locale, Record<string, string>>;
