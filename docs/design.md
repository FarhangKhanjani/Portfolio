# Design direction: "Chapters"

Locked in Phase 2. This replaces the original brief's orange accent and Big Shoulders Display.

## Idea

The home page reads like a short story told in chapters. A cinematic hero image opens it,
the projects are the evidence inside the story, and the practical sections (skills,
experience, contact) stay plain and scannable.

Inspired by: cinematic full-bleed photography, a small figure seen from behind in a big
scene, elegant serif type next to a clean sans, light inside darkness, and a bracketed
"narrator" caption.

## Rules

- Your name is small (nav and signature). The headline is the story, not the name.
- Key facts (status, location, hours, CV) must stay visible on the first screen: the
  bracketed caption and the two buttons carry them.
- The accent is **light, not paint**: pale gold for italic emphasis, iridescent teal and
  violet only for small labels, lines and glows. No orange.
- Motion is slow and optional: image drift, film grain, chapter fade-ins. No JS needed.
  Everything stops under `prefers-reduced-motion`.
- Text over the photo always sits on a soft dark scrim for contrast.

## Typography

| Role | Font | Notes |
|---|---|---|
| Headings, story lines | Instrument Serif 400 + italic | italic part of a headline is set in the accent color |
| Body, UI | Inter (variable) | |
| Chapter markers | Vazirmatn, subset to 3 KB (`public/fonts/vazirmatn-persian-subset.woff2`) | ۱ to ۴ for chapters, "آغاز" (beginning) for the prologue, "فردا" (tomorrow) for the epilogue. Decorative, hidden from screen readers |

## Color tokens

Sampled from the hero image so the photo blends into the page. Contrast measured on `bg`.

| Token | Value | Contrast | Use |
|---|---|---|---|
| `bg` | `#0e1710` | | page background (olive near-black) |
| `surface` | `#152016` | | cards, panels |
| `surface-raised` | `#1c2a1d` | | hover, raised panels |
| `border` | `#26301f` | | hairlines |
| `text` | `#ece8dc` | 14.9:1 | body text |
| `text-muted` | `#a3a893` | 7.5:1 | labels, secondary text |
| `accent` | `#ecdcab` | 13.4:1 | italic emphasis, links, focus ring |
| `iris-teal` | `#9ad4c8` | 11.0:1 | small labels, lines |
| `iris-violet` | `#bfb0ea` | 9.2:1 | gradient lines, glows |

If the final hero image changes, re-sample `bg`/`surface` from its darkest area so the
image edge stays invisible.

## Images

Generated with Higgsfield (GPT Image), chosen in Phase 2:

- Hero: `src/assets/images/hero-rising-light.jpg`, light rising from a laptop at blue hour
  ("Now I build things that work").
- Chapter I: `src/assets/images/monster-light-tunnel.jpg`, a tunnel of fragments
  ("Every idea grew into a monster").

Astro serves them as AVIF/WebP in several widths. The hero loads eagerly with
`fetchpriority="high"`, the chapter image lazily. Widths above the source size are skipped,
so replacing a file with a larger version improves quality without code changes.
