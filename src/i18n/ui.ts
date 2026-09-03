export const languages = {
	de: 'Deutsch',
	en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'de';

export const ui = {
	de: {
		'site.title': 'Roomie',
		'site.description': 'Roomie ist eine broker-lose Zimmer-zu-Zimmer-Gegensprechanlage.',

		'nav.home': 'Start',
		'nav.blog': 'Blog',

		'brand.sub': 'Ein pädagogisches Intercom-Projekt',

		'hero.tagline.prefix': 'Roomie ist eine ',
		'hero.tagline.highlight': 'broker-lose Zimmer-zu-Zimmer-Gegensprechanlage.',

		'quote.text':
			'Ich wollte ein System schaffen, das Kindern echte Kommunikationstechnologie über reale Gespräche näherbringt — mit einem Aufbau, der Spaß macht und die Bildschirmzeit weg von funktionsüberladenen, süchtig machenden Smartphones reduziert.',
		'quote.attribution': '— Dominik',
		'quote.readMore': '→ ganzen Blogbeitrag lesen',


		'feature.aec.title': 'Vollduplex, echofrei',
		'feature.aec.desc':
			'Beide Seiten können gleichzeitig sprechen. Eingebautes AEC verhindert, dass ein Gerät seinen eigenen Lautsprecher über das Mikrofon hört.',
		'feature.mdns.title': 'Findet seinen Partner selbst',
		'feature.mdns.desc':
			'Geräte finden sich gegenseitig per mDNS im lokalen Netzwerk — keine App, kein Konto, nichts läuft über das Internet.',

		'guide.title': 'Anleitung',
		'guide.desc':
			'Eine kurze, comicartige Anleitung zur Einrichtung deines Geräts — hier direkt lesen oder als PDF öffnen.',
		'guide.openPdf': 'PDF öffnen ↗',

		'blog.index.title': 'Blog',
		'blog.recent.title': 'Neueste Blogbeiträge',
		'blog.viewAll': 'Zu allen Blogposts',
		'blog.publishedOn': 'Veröffentlicht am',
		'blog.notTranslated': '',

		'footer.impressum': 'Impressum',
		'footer.datenschutz': 'Datenschutz',
	},
	en: {
		'site.title': 'Roomie',
		'site.description': 'Roomie is a broker-less room-to-room intercom.',

		'nav.home': 'Home',
		'nav.blog': 'Blog',

		'brand.sub': 'An educational intercom project',

		'hero.tagline.prefix': 'Roomie is a ',
		'hero.tagline.highlight': 'broker-less room-to-room intercom.',

		'quote.text':
			'I wanted to provide a system that introduces kids to communication technology via real conversations under a fun to use setup. A setup that reduces screentime away from feature-overloaded, addictive smartphones.',
		'quote.attribution': '— Dominik',
		'quote.readMore': '→ read the whole blog post',


		'feature.aec.title': 'Full-duplex, echo-free',
		'feature.aec.desc':
			'Both sides can talk at once. Onboard AEC keeps each unit from hearing its own speaker through the mic.',
		'feature.mdns.title': 'Finds its own peer',
		'feature.mdns.desc':
			'Units discover each other over mDNS on your local network — no app, no account, nothing routed through the internet.',

		'guide.title': 'Setup guide',
		'guide.desc':
			"A short comic-style walkthrough for setting up your unit — read it right here or open the PDF.",
		'guide.openPdf': 'Open PDF ↗',

		'blog.index.title': 'Blog',
		'blog.recent.title': 'Recent blog posts',
		'blog.viewAll': 'View all blog posts',
		'blog.publishedOn': 'Published on',
		'blog.notTranslated':
			"This post isn't translated into English yet — showing the German version.",

		'footer.impressum': 'Impressum',
		'footer.datenschutz': 'Privacy Policy',
	},
} as const satisfies Record<Locale, Record<string, string>>;
