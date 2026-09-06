export const languages = {
	de: 'Deutsch',
	en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'de';

export const ui = {
	de: {
		'site.title': 'roomie',
		'site.description': 'Ein freies pädagogisches Intercom-Projekt',

		'nav.home': 'Start',
		'nav.blog': 'Blog',
		'nav.github': 'GitHub',
		'nav.githubSoon': 'Bald verfügbar',

		'brand.sub': 'Ein freies pädagogisches Intercom-Projekt',

		'hero.wip':
			'Diese Website ist noch im Aufbau. Die aktuelle Version ist lediglich eine Vorschau und repräsentiert nicht den eigentlichen Stand des Projekts.',

		'hero.tagline.prefix':
			'Lasst mich roomie vorstellen: Ein nerdiges und personalisierbares Old-School-Intercom, mit dem sich Groß und Klein Zuhause unterhält — ',
		'hero.tagline.highlight': 'roomie ist ein unabhängiges, nicht-kommerzielles Open-Source-Projekt zum Lernen und Selberbauen.',

		'quote.text':
			'Als Patenonkel eines kleinen Bubs wollte ich ein technisches System schaffen, das Kinder spielerisch an Kommunikationstechnik heranführt. Wichtig war mir hierbei, auf Bildschirmzeit mit funktionsüberladenen, süchtig machenden Smartphones zu verzichten.',
		'quote.attribution': '— Dominik',
		'quote.readMore': '→ den ganzen Blogbeitrag lesen',


		'feature.design.title': 'Einfache Designsprache!',
		'feature.design.desc':
			'Das Design von roomie soll an die Spielkonsolen der 90er und 2000er erinnern. Die Bedienelemente sind selbsterklärend: zwei Arcade-Buttons für eingehende und ausgehende Anrufe und ein analoger Lautstärke-Drehregler.',
		'feature.build.title': 'Zum Nachbauen!',
		'feature.build.desc':
			'Jeder kann sich seinen eigenen roomie zusammenbauen. Natürlich brauchst Du mindestens zwei Einheiten zum Telefonieren. Alle notwendigen Software- und Hardware-Dateien findest Du zur freien Verwendung im verlinkten Repository!',
		'feature.personalize.title': 'Personalisiert losquatschen!',
		'feature.personalize.desc':
			'Für roomie brauchst Du keine App und keinen Account. Das System läuft komplett in Deinem lokalen Netzwerk und spielt dabei Deine persönlichen Lieblingsklänge, die Du auf der eingesteckten SD-Karte ablegst.',
		'feature.dev.title': 'Professionell entwickelt!',
		'feature.dev.desc':
			'roomie basiert auf ESP32S3-Mikrocontrollern mit einer eigens entwickelten Hardwareplatine. Programmiert mit VS Code, PlatformIO und Espressif IDF/FreeRTOS. Die roomie-Einheiten unterhalten sich im Netzwerk über UDP und CoAP.',

		'guide.title': 'Kurzanleitung',
		'guide.desc':
			'Eine kurze, comicartige Anleitung zur Einrichtung deines roomie-Geräts. Hier direkt lesen oder als PDF herunterladen.',
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
		'site.description': 'A free educational intercom project',

		'nav.home': 'Start',
		'nav.blog': 'Blog',
		'nav.github': 'GitHub',
		'nav.githubSoon': 'Coming soon',

		'brand.sub': 'A free educational intercom project',

		'hero.wip': "This website is still under construction. The current version is just a draft and does not represent the actual state of the project.",

		'hero.tagline.prefix':
			'Let me introduce roomie: a nerdy and customizable old-school intercom that lets young and old talk to each other at home — ',
		'hero.tagline.highlight':
			"roomie is an independent, non-commercial open-source project for learning and building it yourself.",

		'quote.text':
			"As a godfather raising a young lad, I wanted to provide a system that introduces kids to communication technology through real conversations, in a setup that's fun to use. A setup that reduces screen time away from feature-overloaded, addictive smartphones.",
		'quote.attribution': '— Dominik',
		'quote.readMore': '→ read the whole blog post',


		'feature.design.title': 'Simple design language!',
		'feature.design.desc':
			"roomie's design takes inspiration from the game consoles of the 90s and 2000s. The controls are self-explanatory: two arcade buttons for incoming and outgoing calls, and an analog volume dial.",
		'feature.build.title': 'Build your own!',
		'feature.build.desc':
			"Anyone can build their own roomie. You'll need at least two units to talk to each other, of course. All the software and hardware files you need are freely available in the linked repository!",
		'feature.personalize.title': 'Personalized chit-chat!',
		'feature.personalize.desc':
			'roomie needs no app and no account. The system runs entirely on your local network, playing your favorite personal sounds from the SD card you plug in.',
		'feature.dev.title': 'Professionally engineered!',
		'feature.dev.desc':
			'roomie runs on ESP32-S3 microcontrollers on a custom-designed hardware board. Built with VS Code, PlatformIO, and the Espressif IDF/FreeRTOS. roomie units talk to each other over the network via UDP and CoAP.',

		'guide.title': 'Quick setup guide',
		'guide.desc':
			"A short comic-style walkthrough for setting up your roomie unit. Read it right here or download the PDF.",
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
