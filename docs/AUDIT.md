# Codebase Audit Findings — `docs/AUDIT.md`

This document records the technical audit of the original codebase and key architectural takeaways.

---

## 1. Technical Audit Summary

| Dimension | Findings in Legacy Codebase | Modern Rebuild Decision |
|---|---|---|
| **Framework & Architecture** | Static HTML5, Bootstrap 5.3 CDN, vanilla JS (`script.js`), 1,736 lines of custom CSS (`style.css`). | Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui primitives. |
| **Styling Specificity** | Heavy CSS specificity conflicts between Bootstrap and custom overrides, frequent `!important` flags. | Atomic Tailwind utility classes and CSS variables with zero runtime collision. |
| **Icons & Media** | Raster PNG icons with CSS color filter invert hacks. | Scalable Lucide React SVG vectors with native theme awareness. |
| **Scroll Performance** | Unthrottled scroll event listeners checking bounding rects without passive listeners. | Lightweight, throttled or intersection-observer hooks. |
| **Accessibility (a11y)** | Missing ARIA attributes on mobile menu toggles and icon buttons. | Accessible Radix UI primitives with full keyboard and screen reader support. |
| **Unused Assets & Fonts** | Render-blocking Google font imports (`Climate Crisis`, `Lilita One`, `Passion One`) and unused background images. | Purged unused fonts and dead assets. |

---

## 2. What Was Preserved, Redesigned & Removed

### Preserved
- Clean, focused personal branding (`m.rinshad` cursive signature).
- Accurate career track record and project history.
- Core 5-section intuitive user flow.

### Redesigned
- Simplified 5-stage layout: *Identity → Selected Work → Experience → Capabilities/About → Contact*.
- High-impact, concise project stories replacing generic card grids.
- Responsive mobile Sheet drawer replacing Bootstrap navbar collapse.

### Removed
- 1,700+ lines of monolithic legacy CSS and Bootstrap CDN dependency.
- Non-functional stub alert popups.
- Dead font imports and unreferenced raster images.
