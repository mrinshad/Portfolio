# Visual Design System — `docs/DESIGN.md`

Authoritative tokens, typography and craft rules for the **Rinshad Portfolio**.
This document describes the "Engineering Ledger" world introduced on branch
`feat/rebuild-editorial`; it supersedes the earlier dark-glass specification.

---

## 1. Philosophy

- **Core tenet**: a portfolio is evidence, not a performance. The interface recedes; the work leads.
- **Order of decisions**: Content → Hierarchy → Type → Interaction → Decoration. Decoration never leads.
- **Metaphor**: an engineering ledger. Ruled paper, ink, measured columns, one signal colour marking what matters.
- **Forbidden**: multi-stop gradients, glassmorphism, aurora blobs, 3D hero objects, particle fields, infinite marquees, tracked-caps "eyebrow" chips above headlines, repeated kicker labels above every heading, decorative two-axis grid overlays, card clutter, scroll-jacking.

---

## 2. Colour Tokens

Defined once in `app/globals.css`; consumed through Tailwind semantic names.

| Token | Light | Dark | Role |
| :--- | :--- | :--- | :--- |
| `--paper` / `--background` | `80 7% 95%` | `80 6% 7%` | Page ground — cool drawing paper, deliberately not cream |
| `--surface` | `80 6% 90%` | `80 5% 11%` | Plates, alternating bands |
| `--ink` / `--foreground` | `28 16% 10%` | `80 10% 92%` | Body and heading text |
| `--muted-foreground` | `80 6% 30%` | `80 6% 68%` | Secondary text — tuned to clear 4.5:1 on both grounds |
| `--rule` | `80 5% 79%` | `80 5% 20%` | Hairline borders and dividers |
| `--accent` | `11 74% 41%` | `14 84% 58%` | The single signal colour: links, focus, live status |
| `--accent-foreground` | `80 20% 97%` | `80 10% 8%` | Text on accent |

Rules:
- The accent is a **signal**, never a surface. No accent-filled panels or gradient text.
- Borders are hairlines at `--rule`. Depth comes from rules and spacing, not shadows.
- Contrast is verified, not assumed: every text token clears WCAG AA on every ground it appears over.

---

## 3. Typography

| Role | Family | Usage |
| :--- | :--- | :--- |
| Display | **Instrument Serif** (`--font-serif`) | Masthead, section headings, project names. Weight 400 only. |
| Body | **Inter Tight** (`--font-sans`) | Paragraphs, UI labels, navigation |
| Meta | **JetBrains Mono** (`--font-mono`) | `.label` — tracked uppercase metadata, dates, status |

Scale:
- Masthead: `clamp(2.5rem, 5.6vw, 4.5rem)`, line-height `0.94`, tracking `-0.02em`.
- Section heading: `clamp(1.9rem, 3.6vw, 2.9rem)`.
- Project name in index: `1.75rem` mobile → `2.5rem` desktop.
- Body: `0.975–1.0625rem`, `leading-relaxed`.
- `.label`: `0.75rem`, `0.14em` tracking, uppercase. Never below `0.7rem`.

Measure: `.measure` is `56ch`, which lands near a true 72–75 character line in Inter Tight. Do not exceed it for prose.

---

## 4. Space, Structure, Radius

- Shell: `max-w-[1240px]`, gutters `px-6` / `md:px-10`.
- Section rhythm: `py-20` / `md:py-28`; dividers are single hairlines.
- Radius: `2px`. Buttons are rectangles. Pills and rounded cards are not part of this world.
- Rules carry structure: a section is introduced by a hairline and a heading, not a badge.

---

## 5. Motion

- **Reveals**: `data-reveal` elements translate 16px and fade over 720ms on a `cubic-bezier(0.22, 1, 0.36, 1)` curve. Content is fully visible with JS disabled; `Reveal` only hides elements after confirming it can animate them.
- **Masthead**: lines rise through an overflow mask, staggered 110ms.
- **Links**: an accent underline grows from the left over 320ms.
- **Work index**: rows shift the title 14px and rotate the arrow; a cursor-following preview tracks the pointer on fine-pointer devices only.
- **Reduced motion**: every transform, animation and smooth scroll is disabled; reveals render immediately.
- **Print**: chrome is hidden, reveals are forced visible, and external link URLs are printed.

---

## 6. Component Contracts

| Component | Contract |
| :--- | :--- |
| `SiteHeader` | Sticky, hairline bottom rule, scroll-progress rule, native `<dialog>` menu under `md` |
| `WorkIndex` | Semantic `<ul>`; previews are `aria-hidden` decoration and never the only affordance |
| `PlateGallery` | Keyboard-operable paging, `aria-current` on the active index |
| `ContactForm` | Validates on submit, moves focus to the first invalid field, composes a `mailto:` and stores nothing |
| `SystemSchematic` | A single labelled SVG figure with a text alternative; not decoration |
| `marks.tsx` | Purpose-built SVG icons on a shared 24px grid; no icon library |

---

## 7. Accessibility Baseline

- Semantic landmarks, one `h1` per page, logical heading order.
- Visible focus ring: `2px solid accent`, `3px` offset, applied globally via `:focus-visible`.
- Skip link to `#main` as the first tab stop.
- All interactive targets have accessible names; icon-only buttons carry `aria-label`.
- Verified: 0 contrast failures, 0 horizontal overflow, 0 unlabeled controls across all routes in both themes.

---

## 8. Verification

Before shipping any UI change:

```bash
npx tsc --noEmit
next lint
next build && next start -p 4400
./.agents/skills/impeccable/scripts/impeccable detect http://127.0.0.1:4400/<route>
```

Target: **0 anti-patterns** on every route.
