# Handoff: Pranav Jha — Cinematic Developer Portfolio

## Overview
A one-page, dark-luxury developer portfolio for **Pranav Jha** (Applied AI Engineer · 0→1 Builder · Systems Thinker). Editorial-magazine aesthetic: matte black, warm orange spotlights, red laser accents, massive Anton typography, handwritten Caveat annotations, film grain. Three finished hero artworks (PNG) are used **verbatim** as full-bleed section openers; everything else is built UI.

## About the Design Files
`Pranav Portfolio.dc.html` is a **design reference created in HTML** — a prototype showing intended look and behavior, NOT production code to copy directly. It uses a proprietary streaming-component runtime (`support.js`, not included) so it will not run standalone; read it as markup + inline styles + one plain-JS behavior class (bottom `<script>`). **Recreate this design in the target stack.** Suggested (from the original brief): Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis smooth scrolling, Lucide icons. If the repo already has a stack, use its patterns instead.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy and interactions are final design intent — recreate pixel-perfectly. The three PNG artworks in `uploads/` must be used unmodified, full-bleed (`width:100%; height:auto`).

## Design Tokens
Colors
- Background: `#090909` (alt section bg `#0a0a0a`)
- Surface / cards / inputs: `#111111`
- Card & hairline borders: `#1f1f23`, `#1e1e21`, `#1a1a1e`, `#26262a`; input border `#232327`
- Text primary: `#F5F5F5`; body gray: `#A1A1AA`; bullet body: `#d4d4d8`; quote body: `#e4e4e7`
- Accent red: `#E11D2E` (labels, squares, filled CTAs, lasers, ::selection)
- Warm orange: `#FF9F43` (glows, hovers, gauge, Caveat notes, stats)
- Warm hover border on cards: `#3a2a1e` / `#3d2b1e`
- Cutting-mat green grid lines: `rgba(38,84,62,0.06–0.07)` on 48px grid (Experience section bg)
- Outlined type: fill `rgba(245,245,245,0.03–0.04)` + `-webkit-text-stroke: 1.4–1.6px rgba(245,245,245,0.22–0.3)`; orange-stroke variant `1.6px #FF9F43`

Typography (Google Fonts)
- Display: **Anton** (400) — headings, giant outlined words, gauge %. Letter-spacing 0.02–0.06em, line-height 0.92–1.08
- Body/UI: **Space Grotesk** 300–700 — body 15–17px/1.7; labels 10–13px, weight 600, letter-spacing 0.2–0.3em, uppercase
- Handwritten accents: **Caveat** 600 — 21–23px, orange, `rotate(-1.5deg to -2deg)`
- Scale refs: intro headline `clamp(46px,7.2vw,96px)`; section outlined words `clamp(58px,10.5vw,164px)`; contact `clamp(54px,10vw,150px)`; skill names `clamp(30px,4vw,52px)`; project titles `clamp(38px,4.6vw,60px)`; section h2 `clamp(34-36px,4.2-4.4vw,54-56px)`

Spacing & misc
- Section padding: 130px top/bottom (intro: 30px top), 28px sides; content max-width 1240px, centered
- Corners: **square everywhere** (no border-radius except circles)
- Chips: `padding:6px 12px; border:1px solid #26262a; color:#A1A1AA; 12px; ls 0.12em`
- Section label: 9px red square + `01 — ABOUT` style text (12px, 600, ls 0.3em, gray)
- Buttons: filled `#E11D2E` (hover: red glow shadow `0 0 48px rgba(225,29,46,0.5)`); outline `1px rgba(245,245,245,0.28)` (hover: orange border/text + soft orange glow); padding 19px 36px (small: 14px 26px); 12–13px, 600, ls 0.2–0.24em
- Film grain: fixed full-screen SVG `feTurbulence` tile (200px), opacity 0.05, `pointer-events:none`, above all content
- Ambient glows: large radial-gradient circles `rgba(255,159,67, 0.16–0.22) → transparent 64%`, `mix-blend: normal`, slow drift keyframes (26–34s), opacity scaled by a "glow intensity" setting (default 70%)

## Screens / Views (single page, in order)

### 1. Hero (`#top`)
Full-bleed artwork `uploads/pasted-1785767998259-0.png` (1672×940). It CONTAINS the nav text (ABOUT/SKILLS/EXPERIENCE/PROJECTS/CONTACT) and title. Overlay **invisible anchor hotspots** on the baked-in nav words (percent-positioned: top 2.4%, height 3.4%; ABOUT left 35.2% w 5.1%; SKILLS 44.4%/4.7%; EXPERIENCE 52.9%/7.9%; PROJECTS 64.1%/6.9%; CONTACT 74.7%/6.6%). Hover shows a 2px red underline (inset box-shadow) at hotspot bottom. On load (when at top): image starts `blur(22px) brightness(0.55) scale(1.04)` → animates sharp over ~1.1–1.5s (cinematic entrance).

### 2. Intro strip
30px below hero: centered scroll cue — Caveat "( scroll down )" + 1px×50px vertical track with a 16px orange segment looping downward (1.7s). Then left-aligned: roles row `APPLIED AI ENGINEER ■ 0→1 BUILDER ■ SYSTEMS THINKER` (red 7px squares as separators); two-line masked headline **BUILDING PRODUCTS / THAT SOLVE `REAL PROBLEMS.`** (last two words orange-outlined); gray paragraph (max 560px); CTAs **VIEW PROJECTS** (filled, → #projects) + **LET'S WORK TOGETHER** (outline, → #contact). Ambient orange glow top-right; thin red laser line (1px gradient, rotate -3deg) near bottom.

### 3. Fixed top nav (appears after scrolling past hero)
Slides down (translateY -100%→0, 0.5s). `rgba(9,9,9,0.86)` + `backdrop-blur(14px)`, bottom hairline. Left: red square + "PRANAV JHA" (12px, 700, ls 0.28em). Center links (11px, ls 0.2em, gray→orange hover). Right: "LET'S TALK" chip (red border; hover fills red).

### 4. About — artwork (`#about`)
Full-bleed `uploads/pasted-1785768006704-0.png`. Scroll-triggered blur-to-sharp reveal (`blur(18px) brightness(0.6) scale(1.02)` → none, threshold 0.2).

### 5. About — profile
Two columns (flex-wrap; left 0-1-400px min 300, right 1-1-460px min 320, gap 72px). Left: framed portrait card — `#111` bg, `#26262a` border, 14px padding, 4:5 **image drop slot** (in production: `<Image>` of real portrait), caption row "PRANAV JHA / EST. 2020" (red), orange radial glow behind, subtle 3D tilt on hover, inner image scales 1.045; Caveat note below: "( caught red-handed, building things )". Right: label `01 — ABOUT`; h2 "THE DEVELOPER BEHIND THE BUILD"; paragraph ("I'm a builder at heart…"); resume table — rows `190px | 1fr`, 16px vertical padding, hairline dividers; red uppercase labels: NAME `Pranav Jha` · ROLE `Full Stack Developer · Entrepreneur` · EXPERIENCE `5+ years shipping web & AI products` · EDUCATION `B.Tech, Computer Science` · TECH STACK `TypeScript · React · Node.js · Python` · LOCATION `India · Working worldwide` · CURRENT FOCUS `AI-first products & premium interfaces`.

### 6. Skills — artwork (`#skills`)
Full-bleed `uploads/pasted-1785768062596-0.png` ("UNLOCK MY SKILLS"), same blur-to-sharp reveal.

### 7. Tech stack accordion (label `02 — TECH STACK`)
Hint text "Hover a discipline to open it." Five rows, hairline-divided, each: red index `01–05` (70px col) | Anton name + tech chips | `+` icon (rotates 45° and turns orange when open). Rows (name → chips → description → stats → gauge %):
1. **FRONTEND** — React, Next.js, TypeScript, Tailwind — "Component architecture, motion design and pixel discipline…" — 5 YRS · 20+ — **88%**
2. **BACKEND** — Node.js, Express, PostgreSQL, MongoDB — "APIs designed like products…" — 5 YRS · 15+ — **79%**
3. **CLOUD** — Docker, AWS, Vercel — "Containerized deploys, CI/CD…" — 3 YRS · 10+ — **62%**
4. **AI** — OpenAI, LangChain, RAG, Python — "From prompt to production…" — 3 YRS · 8+ — **71%**
5. **GAME DEV** — Unreal, Unity — "Gameplay systems, real-time rendering…" — 2 YRS · **5 PROJECTS SHIPPED** — **54%**
Open behavior: hover (mouseenter) or click opens a row and closes others; first row open by default. Panel: max-height 0→scrollHeight + fade, 0.65s cubic-bezier(0.22,1,0.36,1); indent 94px. Panel grid: description (1.4fr) | stats row (EXPERIENCE + PROJECTS BUILT in Anton 26px orange) **inline with** a 104px circular gauge — SVG ring r=52, track `#1d1d21` 6px, orange arc (dasharray 326.7) sweeping from 0 to pct over 1.1s with orange drop-shadow, Anton % label centered.

### 8. Experience (`#experience`)
Bg `#0a0a0a` + faint green 48px grid (cutting-mat echo). Label `03 — EXPERIENCE`; giant outlined word "EXPERIENCE". Three full-width cards (#111, hairline border, 44/46px padding; hover: warm border + orange-tinted shadow; subtle tilt): 
1. `2024 — NOW` (Anton orange) · **INDEPENDENT STUDIO** · FOUNDER & FULL-STACK ENGINEER · chips Next.js/LangChain/AWS · bullets (red 7px squares): "Building AI-first products end to end — two shipped, one in private beta." / "Own the whole surface: brand, interface, infra and the pager."
2. `2022 — 2024` · **SERIES-A SAAS** · SENIOR FRONTEND ENGINEER · TypeScript/React/PostgreSQL · "Led the core dashboard rebuild — first paint down from 2.1s to 400ms." / "Built the design system now used across three product lines."
3. `2020 — 2022` · **DIGITAL PRODUCT STUDIO** · SOFTWARE ENGINEER · Node.js/Express/Docker · "Delivered 12+ client builds across fintech, health and commerce." / "The engineer on call for performance, DX and the hard bugs."

### 9. Projects (`#projects`, label `04 — SELECTED WORK`)
Giant outlined "PROJECTS" + Caveat "( shipped, not just pushed to production )". Three alternating feature rows (flex, gap 64, hairline top border, image side flex 1.2 / text 1; row 2 is `row-reverse`). Image side: 16:10 framed screenshot (#111 + border, orange glow behind, 3D tilt on hover, inner zoom 1.045). Text side: red category label, Anton title, gray description, chips, buttons **LIVE DEMO** (filled) + **GITHUB** (outline) — hrefs are placeholders (`#`), wire to real URLs.
1. AI PLATFORM · **INSIGHT ENGINE** · "Retrieval-augmented research assistant that turns scattered docs into cited, trustworthy answers." · Next.js/LangChain/PostgreSQL/OpenAI
2. WEB APPLICATION · **LEDGERLINE** · "Real-time finance dashboard for founders — burn, runway and forecasts without the spreadsheet." · React/Node.js/WebSockets/AWS
3. UI ENGINEERING · **ATLAS UI** · "A motion-first component system: 40+ primitives, tokens and docs, built for dark interfaces." · TypeScript/Tailwind/Framer Motion

### 10. Contact (`#contact`, label `05 — CONTACT`)
Masked two-line headline: "LET'S BUILD" (white-outlined) / "SOMETHING**.**" (solid, red period). Caveat: "— I usually reply within 24 hours". Two columns (form 1.2fr / links 1fr, gap 64):
- Form: name + email inputs side by side, 6-row textarea (`placeholder: Tell me about the project — problem, timeline, budget`), inputs #111/`#232327` border, focus → orange border + 1px orange ring. **SEND MESSAGE** button (filled red, 20px×46px padding, hover glow) → opens `mailto:hello@pranavjha.in` with subject "Project inquiry — {name}" and body {message + signature}. In production, swap for a real form action if available.
- Links (hairline-divided rows, small gray label over white value, orange ↗): EMAIL `hello@pranavjha.in` → `mailto:`; LINKEDIN `/in/pranav-jha-3000s` → `https://www.linkedin.com/in/pranav-jha-3000s/`; GITHUB `@PranavJha-3000` → `https://github.com/PranavJha-3000`; below: **DOWNLOAD RESUME** outline button, full-width (href placeholder — wire to PDF).
Ambient glow top-center + red laser line (rotate 2.5deg) near top.

### 11. Footer
Hairline top border; flex space-between: `© 2026 PRANAV JHA` · Caveat "currently building the future" (orange) · `BACK TO TOP ↑` (→ #top).

## Interactions & Behavior
- **Smooth scrolling** site-wide (CSS `scroll-behavior:smooth`; Lenis in production).
- **Scroll reveals**: IntersectionObserver (threshold ~0.12); elements start `opacity:0; translateY(38px)` → visible, 0.9s `cubic-bezier(0.22,1,0.36,1)`, staggered 60–280ms via per-element delay. Fire once.
- **Masked headlines**: lines inside `overflow:hidden` wrappers start `translateY(112%)` → 0, 1s, ~140ms stagger. IMPORTANT: observe the **wrapper**, not the translated line (the line is clipped, so it never intersects).
- **Blur-to-sharp** artwork reveals (see sections 1/4/6).
- **Mouse-follow glow**: 560px radial orange gradient div, `position:fixed`, `mix-blend:screen`, lerp-follows cursor at 0.09/frame (rAF).
- **Magnetic buttons**: on mousemove translate toward cursor (dx*0.2 / dy*0.3), spring back on leave (0.45s).
- **Card tilt**: perspective 950px, rotateX ±2deg / rotateY ±2.5deg toward cursor; inner `[data-zoom]` image scales 1.045; both reset on leave (0.6s).
- **Accordion + gauge**: see section 7.
- Hover states: links gray→orange; global `a:hover` orange; filled buttons glow; card borders warm to `#3a2a1e`.
- All decorative layers (`grain`, glows, lasers, mouse glow) are `pointer-events:none`.

## State Management
Minimal, all client-side: `activeSkill` (one open accordion row; default first), `navVisible` (scrollY > hero height − 90), cursor position (rAF lerp), per-element revealed flags (observer-driven, fire once). Settings from the prototype's tweak panel worth keeping as props/config: `mouseGlow` (bool, default true), `filmGrain` (bool, default true), `glowIntensity` (0–100, default 70 → multiplies ambient glow opacity). No data fetching.

## Responsive
Desktop-first. Columns are flex-wrap with min-widths (300–460px) so they stack on mobile; type uses `clamp()`; chips/CTAs wrap. Full-bleed artworks keep their aspect ratio (never crop). Hit targets ≥44px on touch. Disable tilt/magnetic/mouse-glow on touch devices; respect `prefers-reduced-motion` (skip reveals/loops, show content directly).

## Assets
- `uploads/pasted-1785767998259-0.png` — Hero artwork, 1672×940 (contains nav + name; do not alter)
- `uploads/pasted-1785768006704-0.png` — About artwork, 1672×941
- `uploads/pasted-1785768062596-0.png` — Skills artwork "UNLOCK", 2048×1151
- Portrait + 3 project screenshots: NOT included — design uses drop-slot placeholders; request from Pranav
- Fonts: Google Fonts — Anton, Space Grotesk (300–700), Caveat (600–700)
- No icon library used; glyphs are text (＋, ↗, ↑) — Lucide fine as replacement

## Files
- `Pranav Portfolio.dc.html` — full design reference (markup + inline styles; behavior class in bottom script tag)
- `image-slot.js` — prototype-only drop-zone web component (do NOT port; replace slots with real images)
- `uploads/*.png` — the three production artworks
