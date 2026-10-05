# TODO

Open items for the roomie-website project. Update this file as things get resolved or new items come up — check it off / remove it rather than leaving it stale.

## Content

- [ ] No real GitHub repo URL anywhere in the project. `feature.build.desc` (DE+EN, `src/i18n/ui.ts`) references "the linked repository" and the nav "GitHub ↗" item (`src/components/Nav.astro`) is a non-clickable placeholder — both need the real URL once the repo is public.
- [ ] "Bauen"/"Build" (`src/pages/build.astro` + EN) and "Kurse"/"Courses" (`src/pages/courses.astro` + EN) are placeholder pages with a single notice line. Bauen has an agreed concept (skill-level tags, branching PCBA-vs-DIY flow diagram, BOM split by sourcing category) — next big content step. Kurse is presumably where the free self-study course on professional firmware development (mentioned in the intro blog post) will land. Both should follow the page design rules in `CLAUDE.md` once they get real content.
- [ ] Review the English About-page strings written by Claude (not yet checked by the site owner, though the page's AI note says the EN version was manually revised): "The person behind roomie", "Why I built roomie", "The full story behind roomie is in the first blog post.", "→ read the blog post" (`src/pages/en/about.astro`).
- [ ] Revisit blog categories / target-group legend on the `/blog` overview once there's more than one post and the Kurse section has real content — premature with the current volume (see conversation 2026-09-20).

## Legal / compliance

- [ ] eRecht24-sourced Datenschutzerklärung still has some hedged commercial boilerplate language that doesn't quite fit a non-commercial hobby project — not a blocker, just flagged for a cleanup pass.

## Infrastructure

- [ ] No production domain configured — `astro.config.mjs` has no `site:` set.
- [ ] Production-launch decision itself is still open — this is the site owner's call, not a technical blocker.

## Design (nice-to-have, no urgency)

- [ ] Hobby cards on the About page have no icons yet — waiting for three raster icons in the feature-icon style (drums, chip/code, book).
- [ ] `/blog` overview still has the old left-aligned "Blog" heading; apply `.page-head` with a subline (e.g. "Neuigkeiten und Hintergründe rund um roomie") — deferred on 2026-10-05.
- [ ] Dark-mode toggle: CSS tokens in `src/styles/tokens.css` are structured to support `[data-theme="dark"]` / `prefers-color-scheme`, but no toggle UI exists yet.
