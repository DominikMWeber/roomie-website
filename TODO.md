# TODO

Open items for the roomie-website project. Update this file as things get resolved or new items come up — check it off / remove it rather than leaving it stale.

## Content

- [ ] No real GitHub repo URL anywhere in the project. `feature.build.desc` (DE+EN, `src/i18n/ui.ts`) references "the linked repository" and the nav "GitHub ↗" item (`src/components/Nav.astro`) is a non-clickable placeholder — both need the real URL once the repo is public.
- [ ] "Kurse"/"Courses" nav item is a non-clickable placeholder (`src/components/Nav.astro`) with no page or content behind it yet. The blog intro post mentions a planned free self-study course on professional firmware development — this is presumably where it'll land.
- [ ] Revisit blog categories / target-group legend on the `/blog` overview once there's more than one post and the Kurse section has real content — premature with the current volume (see conversation 2026-09-20).

## Legal / compliance

- [ ] eRecht24-sourced Datenschutzerklärung still has some hedged commercial boilerplate language that doesn't quite fit a non-commercial hobby project — not a blocker, just flagged for a cleanup pass.

## Infrastructure

- [ ] No production domain configured — `astro.config.mjs` has no `site:` set.
- [ ] Production-launch decision itself is still open — this is the site owner's call, not a technical blocker.

## Design (nice-to-have, no urgency)

- [ ] Dark-mode toggle: CSS tokens in `src/styles/tokens.css` are structured to support `[data-theme="dark"]` / `prefers-color-scheme`, but no toggle UI exists yet.
