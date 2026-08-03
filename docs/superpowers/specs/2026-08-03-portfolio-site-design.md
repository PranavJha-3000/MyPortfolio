# Pranav Jha — Portfolio Site

**Date:** 2026-08-03
**Status:** Approved

## Goal

Rebuild the exported Claude design (`design-reference/`) as a production Next.js site. The export is a
design reference only — it depends on a proprietary streaming runtime (`support.js`) and cannot run
standalone. Fidelity target is **pixel-perfect**: colors, type, spacing, copy and interactions in the
handoff are final design intent.

The finished site is Pranav Jha's public portfolio, deployed on Vercel.

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| Framework | Next.js 15, App Router, React 19, TypeScript | Handoff recommendation; `next/image` for the three large artworks; built-in metadata/OG |
| Styling | Tailwind CSS v4 with `@theme` tokens | Design tokens live in one place, not scattered hex in JSX |
| Motion | Framer Motion (reveals, masked lines) + raw rAF (cursor glow) + Lenis (smooth scroll) | Framer is overhead for a 60fps cursor lerp; Lenis is what the handoff names |
| Fonts | `next/font/google` — Anton 400, Space Grotesk 300–700, Caveat 600–700 | Self-hosted, no layout shift, no third-party request |
| Content | Typed data files under `src/data/`, seeded with the design's placeholder copy | Swapping in real jobs/projects is a one-file edit, type-checked |
| Missing images | `FramedImage` renders an on-brand placeholder when `src` is absent | Layout is final before real photos exist |
| Contact form | `mailto:` as designed | No backend, no cost, works on any host |
| Deployment | Vercel | Zero-config for Next.js |

## Architecture

Single page (`/`), no data fetching, no server state, no database. All interactivity is client-side.

```
src/
  app/
    layout.tsx        fonts, metadata, OG tags, <html> shell
    page.tsx          assembles the 11 sections in order
    globals.css       Tailwind v4 @theme tokens + keyframes
  components/
    sections/         Hero, Intro, TopNav, AboutArt, AboutProfile, SkillsArt,
                      TechStack, Experience, Projects, Contact, Footer
    ui/               SectionLabel, Chip, Button, MaskedHeading, Reveal,
                      TiltCard, FramedImage, Gauge, OutlinedWord, CaveatNote
    fx/               FilmGrain, MouseGlow, AmbientGlow, LaserLine, SmoothScroll
  data/               profile.ts, skills.ts, experience.ts, projects.ts, links.ts
  hooks/              useReveal, useTilt, useMagnetic, useReducedMotion, useIsTouch
  lib/                config.ts (atmosphere settings)
public/
  artwork/            the three PNGs, unmodified
design-reference/     the export, kept in git as the fidelity source of truth
```

**Boundary rationale:** every effect in the design (grain, mouse glow, tilt, magnetic buttons, masked
lines, scroll reveals) is a behaviour applied to many elements. Each becomes exactly one hook or one
wrapper component, so a section file reads as layout plus content and nothing else. No section file
reimplements an effect.

Server/client split: `layout.tsx` and `page.tsx` are Server Components. Sections containing only
markup stay server-rendered; only components with hooks (`TopNav`, `TechStack`, `Contact`,
`TiltCard`, `MouseGlow`, `SmoothScroll`, `Reveal`) are `"use client"`.

## Design tokens

Defined once in `globals.css` under `@theme`:

```
--color-bg          #090909      page background
--color-bg-alt      #0a0a0a      Experience section
--color-surface     #111111      cards, inputs
--color-line        #1f1f23      card borders          (variants #1e1e21 #1a1a1e #1d1d20)
--color-line-strong #26262a      chips, portrait frame
--color-line-input  #232327      form inputs
--color-line-warm   #3d2b1e      card hover border
--color-text        #F5F5F5      primary
--color-muted       #A1A1AA      body gray
--color-body        #d4d4d8      bullet body
--color-red         #E11D2E      accent
--color-warm        #FF9F43      glows, hovers, gauge, Caveat
--ease-out          cubic-bezier(0.22, 1, 0.36, 1)
```

Type scale (all `clamp()`, from the handoff): intro headline `clamp(46px,7.2vw,96px)`; outlined
section words `clamp(58px,10.5vw,164px)`; contact headline `clamp(54px,10vw,150px)`; skill names
`clamp(30px,4vw,52px)`; project titles `clamp(38px,4.6vw,60px)`; section h2 `clamp(36px,4.4vw,56px)`.

Layout constants: content `max-width: 1240px` centered; section padding `130px 28px`; **square
corners everywhere** — no `border-radius` except on circles.

## Sections (in page order)

1. **Hero** (`#top`) — full-bleed artwork with baked-in nav text. Five percent-positioned invisible
   `<a>` hotspots over the nav words (top 2.4%, height 3.4%; ABOUT 35.2%/5.1%, SKILLS 44.4%/4.7%,
   EXPERIENCE 52.9%/7.9%, PROJECTS 64.1%/6.9%, CONTACT 74.7%/6.6%), each with `aria-label`, hover
   showing a 2px red inset underline. On load at top: `blur(22px) brightness(0.55) scale(1.04)` →
   sharp over 1.1s/1.5s.
2. **Intro** — scroll cue, roles row, two-line masked headline, paragraph, two CTAs, ambient glow,
   red laser line.
3. **TopNav** — fixed, appears once `scrollY > heroHeight - 90`, slides down over 0.5s.
   `rgba(9,9,9,0.86)` + `backdrop-blur(14px)`.
4. **About artwork** (`#about`) — full-bleed, blur-to-sharp on scroll (threshold 0.2).
5. **About profile** — portrait card (4:5, tilt, caption row) + `01 — ABOUT` heading, paragraph, and
   a 7-row resume table (`190px | 1fr`, hairline dividers, red uppercase labels).
6. **Skills artwork** (`#skills`) — full-bleed, blur-to-sharp.
7. **Tech stack accordion** (`02 — TECH STACK`) — five rows. Opens on hover *or* click, one at a
   time, first open by default. Panel animates `max-height: 0 → scrollHeight` over 0.65s. Each panel
   holds a description, two Anton stats, and a 104px SVG gauge (r=52, dasharray 326.7) that sweeps
   from 0 to its percentage over 1.1s.
8. **Experience** (`#experience`) — `#0a0a0a` plus a 48px green cutting-mat grid; outlined
   "EXPERIENCE"; three full-width cards with tilt and warm hover border.
9. **Projects** (`#projects`, `04 — SELECTED WORK`) — outlined "PROJECTS", Caveat note, three
   alternating feature rows (row 2 is `row-reverse`), 16:10 framed screenshot with tilt + inner zoom.
10. **Contact** (`#contact`) — masked two-line headline, Caveat note, form (1.2fr) + links (1fr).
11. **Footer** — copyright, Caveat note, back-to-top.

## Data shapes

```ts
// skills.ts
type Skill = {
  id: string; index: string; name: string; chips: string[];
  description: string; years: string; count: string; countLabel: string;
  percent: number;   // 88 | 79 | 63 | 71 | 54
}
```

Percentages come from the prototype's `Math.round(100 * lit / count)` over `lit` values 21/19/15/17/13
of 24. This yields **63%** for CLOUD; the handoff README's prose says 62%. The code is authoritative,
so percentages are stored explicitly as literals rather than recomputed.

```ts
type Experience = { period: string; company: string; role: string; chips: string[]; bullets: string[] }
type Project    = { category: string; title: string; description: string; chips: string[];
                    image?: string; demoUrl?: string; repoUrl?: string }
```

Placeholder content ships as-is from the design: three roles (Independent Studio, Series-A SaaS,
Digital Product Studio), three projects (Insight Engine, Ledgerline, Atlas UI), `hello@pranavjha.in`,
LinkedIn `/in/pranav-jha-3000s`, GitHub `@PranavJha-3000`. Project `demoUrl`/`repoUrl` and the resume
PDF are `undefined`; buttons pointing at a missing URL render disabled rather than linking to `#`.

## Interactions

- **Scroll reveals** — IntersectionObserver threshold 0.12, `opacity 0 / translateY(38px)` → visible,
  0.9s ease-out, per-element delay 60–280ms, fires once.
- **Masked headlines** — line starts `translateY(112%)` inside an `overflow:hidden` wrapper, 1s,
  ~140ms stagger. **Observe the wrapper, not the line** — the line is clipped and never intersects.
- **Blur-to-sharp** artwork reveals — threshold 0.2.
- **Mouse-follow glow** — 560px radial orange div, `position:fixed`, `mix-blend:screen`, lerping at
  0.09/frame via rAF.
- **Magnetic buttons** — translate `dx*0.2 / dy*0.3` toward cursor, spring back over 0.45s.
- **Card tilt** — `perspective(950px)`, `rotateX(-py*4)` / `rotateY(px*5)`, inner `[data-zoom]` scales
  to 1.045, both reset over 0.6s.
- All decorative layers are `pointer-events: none`.

## Configuration

`lib/config.ts` exposes the prototype's three atmosphere settings as constants: `mouseGlow` (true),
`filmGrain` (true), `glowIntensity` (70 → multiplies each ambient glow's own opacity factor). No
runtime tweak panel ships.

## Accessibility and responsive

- Desktop-first; columns are flex-wrap with min-widths (300–460px) so they stack on mobile.
- Hit targets ≥44px on touch.
- Tilt, magnetic and mouse-glow are disabled on touch devices (`useIsTouch`).
- `prefers-reduced-motion` skips all reveals, loops and blur entrances — content renders in its final
  state immediately. This is checked in `useReducedMotion` and respected by every effect hook.
- Hero nav hotspots are real anchors with `aria-label`s, so the nav baked into the PNG is still
  keyboard-reachable and legible to screen readers.
- Artworks carry descriptive `alt` text; decorative layers are `aria-hidden`.

## Out of scope

- Blog, CMS, or any second route
- Analytics
- Real project screenshots and portrait (placeholders until provided)
- Server-side contact handling
- Light theme
- Porting `image-slot.js` (prototype-only drop-zone component)

## Verification

- `npm run build` and `npx tsc --noEmit` pass clean
- `npm run lint` passes
- Every section renders and matches the reference side by side at 1440px and 390px
- Accordion, gauge, tilt, magnetic, reveals and masked lines all behave as specced
- Reduced-motion and touch paths verified
- No console errors or hydration warnings
