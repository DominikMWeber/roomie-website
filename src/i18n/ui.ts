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
		'nav.build': 'Bauen',
		'nav.courses': 'Kurse',
		'nav.dev': 'Dev',
		'nav.github': 'GitHub',
		'nav.docs': 'Docs',
		'nav.comingSoon': 'Bald verfügbar',

		'brand.sub': 'Ein freies pädagogisches Intercom-Projekt',

		'hero.tagline.prefix':
			'Lasst mich roomie vorstellen: Ein nerdiges und personalisierbares Old-School-Intercom, mit dem sich Groß und Klein Zuhause unterhält — ',
		'hero.tagline.highlight': 'roomie ist ein unabhängiges, nicht-kommerzielles Open-Source-Projekt zum Lernen und Selberbauen.',

		'quote.text':
			'Als Patenonkel eines kleinen Bubs wollte ich ein technisches System schaffen, das Kinder spielerisch an Kommunikationstechnik heranführt. Wichtig war mir hierbei, auf Bildschirmzeit mit funktionsüberladenen, süchtig machenden Smartphones zu verzichten.',
		'quote.attribution': 'Dominik',
		'quote.role': 'Erfinder von roomie',
		'quote.readMore': '→ den ganzen Blogbeitrag lesen',


		'slogan.talk': 'Quatschen.',
		'slogan.build': 'Bauen.',
		'slogan.code': 'Coden.',

		'audience.title': 'Für wen ist roomie?',
		'audience.level': 'Schwierigkeit {n} von 3',
		'audience.talk.title': 'Quatschen',
		'audience.talk.who': 'Für alle, sobald roomie eingerichtet ist',
		'audience.talk.desc':
			'Grünen Knopf halten zum Anrufen, roten Knopf antippen zum Auflegen – mehr musst Du nicht wissen. Das klappt schon bei den Kleinsten.',
		'audience.talk.cta': 'So bedienst Du roomie',
		'audience.build.title': 'Bauen & einrichten',
		'audience.build.who': 'Mit Grundkenntnissen in Elektronik',
		'audience.build.desc':
			'Du hattest schon mal einen Lötkolben in der Hand? Dann baust Du mit der Schritt-für-Schritt-Anleitung Deine eigenen roomie-Einheiten und richtest sie in Deinem WLAN ein.',
		'audience.build.cta': 'Zur Bauanleitung',
		'audience.code.title': 'Coden',
		'audience.code.who': 'Mit Vorkenntnissen in Programmierung und Elektronik',
		'audience.code.desc':
			'Du willst verstehen, wie roomie unter der Haube funktioniert, und es verändern oder weiterentwickeln? Dann bist Du hier richtig.',
		'audience.code.cta': 'Zu den Kursen',

		'features.title': 'Was roomie ausmacht',
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

		'build.title': 'Bauen',
		'build.sub': 'Roomie Schritt für Schritt selbst nachbauen',

		'courses.title': 'Kurse',
		'courses.sub': 'Kostenlose Selbstlernkurse rund um roomie und Firmware-Entwicklung',
		'courses.notice':
			'Hier entstehen bald kostenlose Moodle-Selbstlernkurse rund um roomie und professionelle Firmware-Entwicklung.',

		'guide.title': 'Kurzanleitung',
		'guide.desc':
			'Ein kurzer Überblick als Comic: Oben richtest Du roomie ein, unten siehst Du, wie alle roomie bedienen. Hier direkt lesen oder als PDF herunterladen.',
		'guide.setup.label': 'Einrichten',
		'guide.setup.where': 'Schritte 1–6 · für alle, die roomie gebaut haben',
		'guide.use.label': 'Bedienen',
		'guide.use.where': 'unterste Reihe · für alle',
		'guide.openPdf': 'PDF öffnen ↗',
		'guide.deOnly': '',

		'blog.index.title': 'Blog',
		'blog.index.sub': 'Neuigkeiten und Hintergründe rund um roomie',
		'blog.recent.title': 'Neueste Blogbeiträge',
		'blog.viewAll': 'Zu allen Blogposts',
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
		'nav.build': 'Build',
		'nav.courses': 'Courses',
		'nav.dev': 'Dev',
		'nav.github': 'GitHub',
		'nav.docs': 'Docs',
		'nav.comingSoon': 'Coming soon',

		'brand.sub': 'A free educational intercom project',

		'hero.tagline.prefix':
			'Let me introduce roomie: a nerdy and customizable old-school intercom that lets young and old talk to each other at home — ',
		'hero.tagline.highlight':
			"roomie is an independent, non-commercial open-source project for learning and building it yourself.",

		'quote.text':
			"As a godfather raising a young lad, I wanted to provide a system that introduces kids to communication technology through real conversations, in a setup that's fun to use. A setup that reduces screen time away from feature-overloaded, addictive smartphones.",
		'quote.attribution': 'Dominik',
		'quote.role': 'Creator of roomie',
		'quote.readMore': '→ read the whole blog post',


		'slogan.talk': 'Talk.',
		'slogan.build': 'Build.',
		'slogan.code': 'Code.',

		'audience.title': 'Who is roomie for?',
		'audience.level': 'Difficulty {n} of 3',
		'audience.talk.title': 'Talk',
		'audience.talk.who': 'For everyone, once roomie is set up',
		'audience.talk.desc':
			"Hold the green button to call, tap the red one to hang up – that's all you need to know. Even the little ones can do it.",
		'audience.talk.cta': 'How to use roomie',
		'audience.build.title': 'Build & set up',
		'audience.build.who': 'With basic electronics skills',
		'audience.build.desc':
			"Held a soldering iron before? Then the step-by-step instructions will help you build your own roomie units and set them up on your WiFi.",
		'audience.build.cta': 'To the build guide',
		'audience.code.title': 'Code',
		'audience.code.who': 'With prior knowledge of programming and electronics',
		'audience.code.desc':
			'Want to understand how roomie works under the hood, and change it or develop it further? Then this is for you.',
		'audience.code.cta': 'To the courses',

		'features.title': 'What makes roomie special',
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

		'build.title': 'Build',
		'build.sub': 'Build your own roomie, step by step',

		'courses.title': 'Courses',
		'courses.sub': 'Free self-paced courses on roomie and firmware development',
		'courses.notice':
			'Free self-paced Moodle courses on roomie and professional firmware development are coming here soon.',

		'guide.title': 'Quick setup guide',
		'guide.desc':
			'A short overview as a comic: the top shows how to set roomie up, the bottom shows how everyone uses it. Read it right here or download the PDF.',
		'guide.setup.label': 'Set up',
		'guide.setup.where': 'steps 1–6 · for everyone who built roomie',
		'guide.use.label': 'Use',
		'guide.use.where': 'bottom row · for everyone',
		'guide.openPdf': 'Open PDF ↗',
		'guide.deOnly': 'The guide is currently only available in German.',

		'blog.index.title': 'Blog',
		'blog.index.sub': 'News and background on roomie',
		'blog.recent.title': 'Recent blog posts',
		'blog.viewAll': 'View all blog posts',
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
