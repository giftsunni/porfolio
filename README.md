# Gift Sunday Abeng — Developer Portfolio

A single-page personal portfolio for **Gift Sunday Abeng**, Full Stack Developer based in Port Harcourt, Nigeria. Built as one self-contained HTML file — no build step, no dependencies to install.

**File:** `gift-portfolio.html`

---

## Concept

The whole page is styled as a **live status dashboard** — a nod to the idea that a developer's job is to build systems that stay online. This shows up throughout:

- A pulsing green **"● Live"** status dot on every deployed project
- A `status.json` terminal panel in the hero showing role, education, certifications, and current status
- A `learning.log` terminal panel in the About section tracking Flutter as a work-in-progress skill, with an animated progress bar
- A sticky top bar with a live **"N systems live"** counter

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--ink` | `oklch(0.19 0.03 264.45)` | Primary background |
| `--live` | `oklch(0.72 0.15 161.89)` | Accent / "online" signal color |
| `--paper` | `oklch(0.95 0.01 264)` | Primary text |
| `--muted` / `--muted-2` | greys derived from the ink hue | Secondary text |

Fonts: **Fraunces** (display/serif headings), **Inter** (body), **JetBrains Mono** (labels, code panels, status tags) — loaded from Google Fonts via `@import`.

## Sections

1. **Hero** — intro, CTAs (Hire me / Download CV), socials, `status.json` panel
2. **Stats strip** — years of experience, live systems count, certification, education
3. **Skills** — tech stack grouped by Frontend / Backend / Database / Tools & Workflow
4. **Work** — 7 deployed projects, each with live status, description, key features, tags, and a link to the live site
5. **Services** — what Gift offers (web dev, full-stack apps, backend/DB, IT consulting)
6. **About** — bio + `learning.log` panel (currently learning Flutter)
7. **Experience** — work history timeline (Luzoma Microsystems Technologies)
8. **Education** — B.Sc. Computer Science (River State University, in progress) + certifications (IBM, Luzoma Microsystems, freeCodeCamp)
9. **Contact** — email and LinkedIn CTAs

## Interactivity

- **Scroll reveal animations** — sections and cards fade + rise into view via `IntersectionObserver`, staggered for grids (skills, projects, services, education) so items animate in sequence
- **"Hire me" pulse** — the hero CTA fades in and out continuously to draw attention
- All animation respects `prefers-reduced-motion: reduce` (motion is disabled for users who request it)

## How to use / edit

Open `gift-portfolio.html` directly in any browser — it's fully self-contained (styles and script inline, fonts loaded from CDN).

To edit:
- **Text content** — search the HTML body for the relevant section (`<section id="...">`) and edit directly
- **Colors** — change the two CSS custom properties at the top of `<style>`: `--ink` (background) and `--live` (accent)
- **Add a new project** — copy one `<article class="p-card">...</article>` block inside `#work .project-grid` and update the name, description, features, tags, and link
- **Add a new certification** — copy one `.edu-card` block inside `#education .edu-grid`

## Hosting

Since it's a single static HTML file, it can be deployed anywhere with zero configuration:
- **GitHub Pages** — push to a repo and enable Pages (rename file to `index.html`)
- **Netlify / Vercel** — drag-and-drop deploy
- Any static file host

---

© 2026 Gift Sunday Abeng. All rights reserved.
