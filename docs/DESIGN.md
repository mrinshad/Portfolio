# Visual Design System & Tokens Specification — `docs/DESIGN.md`

This document defines the authoritative design tokens, typographic hierarchy, component standards, and UX craft requirements for the **Rinshad Portfolio & ByteN Engineering Systems**.

---

## 1. Design Philosophy & Aesthetic Foundation

- **Core Tenet**: Engineering clarity, understated confidence, and high signal-to-noise ratio.
- **Philosophy**: *"Content → Hierarchy → Visuals → Interaction → Decoration"*. Never reverse this hierarchy.
- **Anti-Patterns & Forbidden Clichés**:
  - **No Unjustified Gradients**: Never wrap cards, headers, or hero sections in multi-stop purple/blue/pink radial or linear gradients.
  - **No Card Clutter**: Do not default to wrapping every single item in heavy borders and drop shadows. Use whitespace and typography for grouping.
  - **No Gimmick Animations**: Avoid particle effects, 3D canvases, glowing neon borders, and scroll-hijacking.
  - **No Meaningless Microcopy**: Use precise, professional engineering descriptions instead of generic marketing buzzwords.

---

## 2. Color System & Semantic Tokens

The color architecture is built on restrained neutral surface layers with a single selective, purposeful electric blue accent (`accent-blue`).

### CSS Variables (`app/globals.css`)

#### Light Theme
| Token | HSL Value | Hex Equivalent | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--background` | `0 0% 100%` | `#FFFFFF` | Default canvas background |
| `--foreground` | `0 0% 5%` | `#0D0D0D` | Primary text and headings |
| `--card` | `0 0% 98%` | `#FAFAFA` | Elevated surfaces and containers |
| `--card-foreground` | `0 0% 5%` | `#0D0D0D` | Text on card surfaces |
| `--primary` | `0 0% 9%` | `#171717` | High-emphasis interactive elements |
| `--primary-foreground` | `0 0% 98%` | `#FAFAFA` | Contrast text on primary buttons |
| `--secondary` | `0 0% 95%` | `#F2F2F2` | Secondary button backgrounds, subtle tags |
| `--secondary-foreground` | `0 0% 9%` | `#171717` | Text on secondary elements |
| `--muted` | `0 0% 94%` | `#F0F0F0` | Subtle fills, dividers, disabled states |
| `--muted-foreground` | `0 0% 40%` | `#666666` | Supporting text, captions, metadata |
| `--accent` | `0 0% 92%` | `#EBEBEB` | Hover states and subtle highlights |
| `--accent-foreground` | `0 0% 9%` | `#171717` | Foreground for hover states |
| `--border` | `0 0% 88%` | `#E0E0E0` | Hairline borders and structural separators |
| `--input` | `0 0% 85%` | `#D9D9D9` | Form input borders |
| `--accent-blue` | `221 83% 53%` | `#2563EB` | Selective accent, active indicators, focus rings |
| `--accent-blue-foreground`| `0 0% 100%` | `#FFFFFF` | Contrast text over accent-blue |
| `--ring` | `221 83% 53%` | `#2563EB` | Keyboard accessibility focus rings |

#### Dark Theme (`.dark`)
| Token | HSL Value | Hex Equivalent | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--background` | `0 0% 4%` | `#0A0A0A` | Dark canvas background |
| `--foreground` | `0 0% 98%` | `#FAFAFA` | High-contrast body text & titles |
| `--card` | `0 0% 7%` | `#121212` | Elevated cards and surfaces |
| `--card-foreground` | `0 0% 98%` | `#FAFAFA` | Text on card surfaces |
| `--primary` | `0 0% 98%` | `#FAFAFA` | Prominent buttons & highlights |
| `--primary-foreground` | `0 0% 9%` | `#171717` | Inverted text on dark primary |
| `--secondary` | `0 0% 12%` | `#1F1F1F` | Subtle dark surfaces and chips |
| `--secondary-foreground`| `0 0% 98%` | `#FAFAFA` | Secondary label text |
| `--muted` | `0 0% 12%` | `#1F1F1F` | Dark dividers and inactive fills |
| `--muted-foreground` | `0 0% 65%` | `#A6A6A6` | Low-emphasis secondary typography |
| `--accent` | `0 0% 14%` | `#242424` | Interactive hover highlights |
| `--accent-foreground` | `0 0% 98%` | `#FAFAFA` | Hover text |
| `--border` | `0 0% 16%` | `#292929` | Restrained card & section separators |
| `--input` | `0 0% 18%` | `#2E2E2E` | Input field borders |
| `--accent-blue` | `217 91% 60%` | `#3B82F6` | Vibrant accent blue for dark mode |
| `--accent-blue-foreground`| `0 0% 100%` | `#FFFFFF` | Contrast text over accent-blue |
| `--ring` | `217 91% 60%` | `#3B82F6` | Keyboard focus ring |

---

## 3. Typography & Scale

### Font Families
- **Sans-Serif (`font-sans`)**: `var(--font-sans), system-ui, -apple-system, sans-serif` (Clean, geometric, modern readability).
- **Cursive Signature (`font-dancing`)**: `var(--font-dancing), cursive` (Reserved specifically for personal signature mark: `m.rinshad`).
- **Monospace (`font-mono`)**: `var(--font-mono), monospace` (Used for version tags, code snippets, timestamps, architecture status).

### Typographic Hierarchy
- **Display Headlines**: `text-4xl sm:text-6xl font-bold tracking-tight`
- **Section Headers (H2)**: `text-2xl sm:text-3xl font-semibold tracking-tight`
- **Subheadings (H3)**: `text-lg sm:text-xl font-medium text-foreground`
- **Eyebrow / Section Metadata**: `text-xs uppercase tracking-widest font-mono text-muted-foreground`
- **Body Regular**: `text-base leading-relaxed text-muted-foreground`
- **Microcopy & Captions**: `text-sm text-muted-foreground`

---

## 4. Spacing, Radii & Grid System

- **Base Radius (`--radius`)**: `0.25rem` (4px).
  - `rounded-sm`: `calc(var(--radius) - 4px)` (0px - sharp utility)
  - `rounded-md`: `calc(var(--radius) - 2px)` (2px)
  - `rounded-lg`: `var(--radius)` (4px)
- **Container**: Max width `1152px` (`2xl`), centered with `px-6` (1.5rem) horizontal padding.
- **Section Rhythm**: Vertical spacing `py-16 sm:py-24` between major content stages.

---

## 5. Accessibility & Interaction Standards

- **Contrast Guarantee**: Minimum 4.5:1 for standard body text, 3:1 for large headers (WCAG AA).
- **Keyboard Navigation**: Always include focus visible styles: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
- **Motion Restraint**: Use Framer Motion for subtle fade-in and translation transitions (duration 200–300ms, easing `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Reduced Motion Support**: Honor `@media (prefers-reduced-motion: reduce)` by disabling non-essential positional motion.
- **Automated Validation**: Run `npx impeccable detect` before verifying any UI change.
