# Grok Bot landing page — replica

A pixel-level replica of **https://x.ai/bot**, rebuilt as a Vite + React + TypeScript app.

**Live:** https://grokbot-landing.mecurylab.workers.dev · **Source:** https://github.com/ajagatobby/grokbot-landing-page

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle
npm run preview
```

## What is reproduced

**Chrome**
- Sticky header, blur backdrop, scroll-activated hairline border
- Morphing nav dropdown — the panel springs between menus, resizing and cross-sliding its contents
- Products menu with the five live previews, including the canvas-rendered voice orb
- Split Download button menu, mobile drawer, pointer-following hover highlight
- Footer light/dark toggle wired to the same `theme` localStorage contract as the original

**Mascot** — `src/lib/grok-bot-mark/` runs the site's own compiled mascot engine (39 states, blinks, gaze
tracking, orbit ribbons, morphs) behind a small Turbopack shim, so `<GrokBot state="…">` behaves
exactly as it does on x.ai. It drives the hero avatars, pending indicators, statement character
(`humming`), use-case pills and the outlined footer character.

**Hero** — the full scripted Grok Bot demo: greeting, the outbound prompt, thread rename, the
computer-use card stepping through *Action needed → You're in control → Working → Done* with its
simulated CRM screen, receipts, cross-agent context, reaction and routine creation. Sidebar preview
text, timestamps and typing state track the transcript. The Rive wordmark plays its reveal and pushes
the nav across as it draws. The sidebar collapses to an avatar rail below 768 px, like the original.

**Sections** — statement card, the four feature cards (each replaying its animation loop: the Zendesk
sign-in typing with the "You" cursor, the recording timer, the memory bubbles, the cycling handoff
pill), use-case tabs with per-tab phone transcripts, the trailer with its custom lightbox player
(seek, volume, fullscreen, Esc), pricing with rolling-digit prices and swapping CTA labels and
feature lists, FAQ accordion (with the page's FAQ JSON-LD), download, guides, get-started, footer.

**Responsive** — the use-case pills are greedily packed into centred rows from their measured
widths, reproducing the original's row grouping at every width tested; below `sm` the section
becomes the same swipeable phone carousel, virtualised the way the original is (only the slides
near the one in view build a phone) with per-slide captions, while between `sm` and `lg` it shows
a single phone with the active use case's caption centred beneath it; the hero's app sidebar
collapses to an avatar rail under 768 px.

## Fidelity

Measured against the live page across seven viewport widths.

- **Geometry** — every `<section>`'s offset and height matches exactly at 1920, 1440, 1280,
  1024, 768, 430 and 390 px. Page height is identical at all seven (8608 px at 1440,
  10 652 px at 390). No horizontal overflow at any width.
- **Pixels, static sections** — header, trailer, pricing, download, guides, FAQs and footer
  are byte-for-byte identical (0.00 % differing pixels) at both 1440 and 390 px.
- **Pixels, hero** — 0.14 % once the scripted demo has run to its end state.
- **Pixels, continuously animating sections** — the statement card, feature cards, use-case
  phone and footer mascot never settle, so a single frame always differs. Comparing every
  captured frame against a full loop of the original instead, the closest match averages
  0.28 % for the feature cards and 0.78 % for the statement card, i.e. the animation content
  matches and only the phase differs.
- **Hero transcript** — the thread's scroll height matches the original exactly (1162 px at
  1440, 1474 px at 390), with the same entries, spacing and grouping.
- **Clocks** — the sidebar's relative stamps agree with the live page at every time of day
  tested, including each "Yesterday" boundary.

## Layout

```
src/
  sections/      one component per page section
  components/
    hero/        HeroShell (parameterised app chrome), HeroDemo (timeline), transcript entries, screens
    nav/         dropdown panels + the five product previews
    usecases/    phone frame + the eight transcripts
    features/    feature-card figures + TimelinePlayer
    NumberFlow   rolling-digit price
  lib/
    grok-bot-mark/  the site's mascot engine + a minimal Turbopack runtime shim
  styles/        the page stylesheets, in cascade order
  data/          feature-card animation timelines
```

Assets and code originate from x.ai and belong to their owners; this is a study replica.
