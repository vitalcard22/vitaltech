# Visual system & structure

## Principles
Typography → Layout → Whitespace → Imagery → Motion. Effects are the last resort.

## Colour (one accent only)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0B0C` | Page background |
| `--bg-raised` | `#121214` | Panels, mockup frames |
| `--line` | `rgba(255,255,255,.09)` | Hairline borders |
| `--text` | `#EDEDE8` | Primary text (warm off-white) |
| `--text-dim` | `#8E8E88` | Secondary text |
| `--accent` | `#C6F432` | Signal colour: links, hover, key marks. Used sparingly |

## Type
- Display: **Inter Tight** 500, tight tracking, uppercase, `clamp()` fluid sizes
- Editorial accent: **Instrument Serif** italic, used for single emphasised words
- Labels / meta: **JetBrains Mono**, small uppercase, wide tracking
- Scale: 12 · 14 · 16 · 20 · 28 · 40 · 64 · 120 (fluid)

## Spacing
8px base. Section padding `clamp(96px, 14vw, 200px)`. Page gutter `clamp(20px, 4vw, 56px)`. Max width 1440px.

## Motion
One easing `cubic-bezier(.2,.7,.1,1)`. Reveal = 24px rise + fade, 700ms. Hover = 300ms. All motion disabled under `prefers-reduced-motion`.

## Structure
```
src/
  components/   Navbar, Button, Reveal, SectionHeading, Footer, BrowserFrame, ProjectPreview, Link
  sections/     Hero, Work, Services, About, Skills, Contact
  pages/        Home, CaseStudy, NotFound
  data/         site.ts (all copy), projects.ts (case studies)
  hooks/        useReveal, useScrolled, useRoute
  styles/       tokens.css, base.css
```
Routes: `/` and `/work/:slug`. Content lives in `data/` so nothing needs editing in components.
