# Pranav Jha — Portfolio

A one-page dark-luxury developer portfolio, rebuilt in Next.js from an exported Claude design.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lenis

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Where to edit things

All copy and content lives in `src/data/` — no JSX editing required for routine updates.

| File | Holds |
|---|---|
| `src/data/profile.ts` | Name, roles, headline, about copy, resume table |
| `src/data/skills.ts` | The five accordion disciplines, their stats and gauge percentages |
| `src/data/experience.ts` | Job history cards |
| `src/data/projects.ts` | Featured projects, their links and screenshots |
| `src/data/links.ts` | Email, social links, resume URL, nav items |

Design tokens (colors, fonts, easing) are in the `@theme` block at the top of
`src/app/globals.css`. Atmosphere toggles — film grain, mouse glow, glow intensity — are in
`src/lib/config.ts`.

### Adding the missing images

The design ships with placeholder frames where real photography goes. To replace them:

- **Portrait** — drop the file in `public/`, then set `portrait: "/your-portrait.jpg"` in
  `src/data/profile.ts`.
- **Project screenshots** — drop files in `public/`, then set `image` on each entry in
  `src/data/projects.ts`.
- **Resume** — drop the PDF in `public/`, then set `resumeUrl` in `src/data/links.ts`. The
  download button is disabled until it points somewhere.

Project `demoUrl` and `repoUrl` work the same way: the LIVE DEMO and GITHUB buttons render
disabled until a real URL is supplied.

## Content status

The experience entries and projects currently carry the design's placeholder copy — `SERIES-A
SAAS`, `INSIGHT ENGINE`, `LEDGERLINE`, `ATLAS UI`. Swap them for real work before publishing.

## Deploying

Push to GitHub and import the repo on Vercel; no configuration is needed. The site is fully static
— the contact form opens the visitor's mail client rather than posting to a server, so there is no
backend to provision.

## design-reference/

The original export, kept verbatim as the fidelity source of truth: the prototype HTML, its
handoff `README.md`, and the three artwork PNGs. It is excluded from linting and never built. The
artworks used by the site are copied into `public/artwork/`.
