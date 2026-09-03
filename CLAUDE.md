# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Roomie's marketing/docs site — a static Astro site for a broker-less, ESP32-S3-based room-to-room intercom project. Bilingual (German default, English opt-in), no backend. Work happens on the `development` branch.

`_draft/` (gitignored) holds the original visual mockup (`roomie-draft-v1.html`) and `requirements.txt` — reference material, not part of the build.

## Commands

```
npm run dev       # dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npx astro check   # type-check .astro files (needs @astrojs/check + typescript, already installed)
```

No test suite or linter is configured. `astro check` is the only correctness gate — run it after every change.

## i18n architecture

Uses Astro's built-in `i18n` config (`astro.config.mjs`): `defaultLocale: 'de'`, `locales: ['de', 'en']`, `prefixDefaultLocale: false`. So `/` is German and `/en/...` is English.

**There is no middleware generating locale routes** — every localized page is a separate physical file: `src/pages/index.astro` + `src/pages/en/index.astro`, `src/pages/blog/[slug].astro` + `src/pages/en/blog/[slug].astro`, etc. When adding a new translated page, create both files (DE at the unprefixed path, EN under `en/`).

Translation strings live in `src/i18n/ui.ts` — a flat, typed dictionary keyed by locale (`ui.de['key']` / `ui.en['key']`), not a full i18n library. Helpers in `src/i18n/utils.ts`:
- `useTranslations(locale)` → returns `t(key)`, falls back to German if a key is missing in English.
- `getLocale(pathname)` → derives the active locale from a URL path.
- `getLocalizedPath(pathname, targetLocale)` → swaps the locale prefix of an arbitrary path while preserving the rest; used by `LanguageSwitch.astro` so the toggle round-trips to the *equivalent* page in the other locale, not just that locale's homepage.

For known static routes (nav links, blog index/post links), prefer `getRelativeLocaleUrl(locale, path)` from `astro:i18n` over manual string concatenation — it returns a **trailing-slash path**, so build the full path (including any slug) in one call rather than concatenating a cached "base" with more segments (this caused a double-slash bug once).

Legal pages (Impressum, Datenschutz) are a deliberate exception: German-only, unprefixed (`/impressum`, `/datenschutz`), one instance linked identically from both locale footers — not translated, matching common German-site convention. Content is currently `[PLACEHOLDER]` text pending real legal copy from the site owner.

## Blog content collection

Declared in **`src/content.config.ts`** (Astro 7's content-layer convention — note this is under `src/`, not project root, despite some older docs/examples suggesting otherwise). Uses the `glob()` loader from `astro/loaders` over `src/content/blog/**/*.md`.

Schema requires `locale: 'de' | 'en'` and `translationId` (a shared string key pairing a German post with its English counterpart, e.g. `roomie-intro.de.md` and `roomie-intro.en.md` both use `translationId: roomie-intro`). Import `z` from `astro/zod`, not `astro:content` (the latter re-export is deprecated in this Astro version). To render a post body, import `render` from `astro:content` and call `render(entry)` — the legacy `entry.render()` method doesn't exist in the content-layer API.

**Fallback logic lives in `src/lib/blog.ts` (`getPostsForLocale`)**: German is always the baseline — the result map is seeded from every German entry first, then for `locale: 'en'` any post that also has an English version overlays it. A post without an English translation still appears under `/en/blog` as its German entry, so nothing 404s or vanishes. Templates check `post.data.locale !== locale` to show a "not yet translated" note (`t('blog.notTranslated')`). Any new page that lists or links posts should go through this helper rather than calling `getCollection('blog', ...)` directly, to keep the fallback behavior consistent.

## Components & styling

`BaseLayout.astro` wraps every page (`<html lang={locale}>`, imports `fonts.css`/`tokens.css`/`global.css`, renders `Header` + `<slot />` + `Footer`). `StartPageBody.astro` composes the Start page's locale-driven sections so `src/pages/index.astro` / `en/index.astro` stay thin `locale` prop wrappers instead of two hand-synced copies.

All colors and fonts are CSS custom properties defined once in `src/styles/tokens.css` — component styles must reference tokens (`var(--ink)`, etc.), never hardcode hex values. This is the hook point for a future dark-mode toggle (`[data-theme="dark"]` / `prefers-color-scheme` override on the same tokens); no toggle exists yet.

Fonts are self-hosted via `@fontsource/space-grotesk` and `@fontsource/jetbrains-mono` (imported in `src/styles/fonts.css`), not loaded from Google's CDN — deliberate GDPR choice for a German site (avoids leaking visitor IPs to Google). Don't reintroduce a `fonts.googleapis.com`/`fonts.gstatic.com` `<link>`.

## Astro syntax gotchas hit during this build

- **`<iframe>` children are not parsed as markup** by Astro's compiler (and modern browsers ignore iframe fallback content anyway) — putting JSX-like children inside `<iframe>...</iframe>` breaks the surrounding fragment's parsing. Self-close it (`<iframe src={...} />`) instead.
- SVG child elements (`<path>`, etc.) must be self-closing (`<path ... />`); a non-self-closed `<path ...></path>` broke the astro-to-tsx transform for everything after it in the same file.

## Deployment

Hosted on deploybase.eu (EU infrastructure, connected to this GitHub repo) — minimal visitor data collection (IP in server logs only, 30-day retention, no third-party analytics/cookies), relevant when writing the real Datenschutzerklärung.
