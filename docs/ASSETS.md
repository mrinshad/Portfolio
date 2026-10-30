# Visual Assets & Usage Specification — `docs/ASSETS.md`

*This document tracks all visual assets, screenshots, icon vectors, and visual audit findings for the portfolio rebuild.*

---

## 1. Asset Inventory of Existing Project

### Personal Assets
| Asset | Type | Project | Current Location | Potential Usage | Status (Keep / Replace / Review) |
|---|---|---|---|---|---|
| Profile Photo | IMAGE | Personal | `[None in repo]` | Hero / About section | `[TO BE PROVIDED]` |
| `m.rinshad` Signature Logo | TEXT / BRAND MARK | Personal | Code (Font: Dancing Script) | Header brand mark & footer | **REFINE** (Retain signature identity with clean rendering) |

### Project Screenshot Assets
| Asset | Type | Project | Current Location | Potential Usage | Status (Keep / Replace / Review) |
|---|---|---|---|---|---|
| eduByte Screenshots | IMAGE | eduByte | `[None in repo]` | Featured project showcase | `[TO BE PROVIDED]` |
| byteFlow Screenshots | IMAGE | byteFlow | `[None in repo]` | Featured project showcase | `[TO BE PROVIDED]` |
| Crusher ERP Screenshots | IMAGE | Crusher ERP | `[None in repo]` | In-development project showcase | `[TO BE PROVIDED]` *(Subject to client permission)* |
| byteBallot Screenshots | IMAGE | byteBallot | `[None in repo]` | Public product showcase | `[TO BE PROVIDED]` |
| Skyra Screenshots | IMAGE | Skyra | `[None in repo]` | Client website card | `[TO BE PROVIDED]` *(Subject to client permission)* |
| Kids covE Screenshots | IMAGE | Kids covE | `[None in repo]` | Client website card | `[TO BE PROVIDED]` *(Subject to client permission)* |
| SaliChef Screenshots | IMAGE | SaliChef | `[None in repo]` | Client website card | `[TO BE PROVIDED]` *(Subject to client permission)* |

### General & Utility Assets
| Asset | Type | Current Location | Potential Usage | Status (Keep / Replace / Review) |
|---|---|---|---|---|
| `favicon.ico` | ICON / ICO | `public/favicon.ico` | Browser tab icon | **KEEP** |
| `linkedin-logo.png` | ICON (Raster PNG) | `assets/icons/linkedin-logo.png` | Social link | **REPLACE** (Superseded by Lucide SVG vector) |
| `mail.png` | ICON (Raster PNG) | `assets/icons/mail.png` | Contact email | **REPLACE** (Superseded by Lucide SVG vector) |
| `attach-file.png` | ICON (Raster PNG) | `assets/icons/attach-file.png` | File input | **REPLACE** (Superseded by Lucide SVG vector) |
| `right-arrow.png` | ICON (Raster PNG) | `assets/icons/right-arrow.png` | Link indicator | **REPLACE** (Superseded by Lucide SVG vector) |
| `right-arrow 1.png` | ICON (Raster PNG) | `assets/icons/right-arrow 1.png` | Section CTA | **REPLACE** (Superseded by Lucide SVG vector) |
| `bg.jpg` | IMAGE (JPEG, 133 KB) | `assets/bg.jpg` | Legacy background | **REMOVE** (Unreferenced asset) |
| `bg-masthead.jpg` | IMAGE (JPEG, 218 KB) | `assets/bg-masthead.jpg` | Legacy background | **REMOVE** (Unreferenced asset) |
| CSS Keyframes | ANIMATION | `style.css` | Entrance motion | **REFINE** (Replace with subtle Tailwind transitions) |

---

## 2. New Assets (To Be Provided)

- **Profile Photo**: `[TO BE PROVIDED]`
- **eduByte Screenshots** (Institutional overview, fee/financial workflows): `[TO BE PROVIDED]`
- **byteFlow Screenshots** (Kanban board, task view, workflow insights): `[TO BE PROVIDED]`
- **Crusher ERP Screenshots** (Operations view, accounting transaction ledger): `[TO BE PROVIDED]`
- **byteBallot Screenshots** (Homepage, voting interaction, results tally): `[TO BE PROVIDED]`
- **Client Project Screenshots** (Skyra, Kids covE, SaliChef): `[TO BE PROVIDED]`
- **Project Logos / Brand Marks**: `[TO BE PROVIDED]`
- **Other Visual Assets**: `[TO BE PROVIDED]`

*Note: No fake mockups or generic stock images will be generated. Temporary placeholders will be used strictly for layout testing until real assets are supplied.*

---

## 3. Asset Selection Philosophy

Evidence-first visual hierarchy:
```text
1. Real Product Screenshot
   ↓
2. Real Project Visual / Interface Section
   ↓
3. Carefully Designed Editorial Composition
   ↓
4. Decorative Visual (Used sparingly)
```

### Rules
- **No Automatic Device Frames**: Avoid placing every screenshot in standard laptop/phone frames unless it demonstrably aids visual comprehension.
- **No Generic Stock Media**: Software projects must be represented by authentic interface evidence or structured technical data, never abstract stock illustrations.
- **Modern Formats**: Target WebP/AVIF with responsive image sizing to maximize performance.

---

## 4. Project Visual Hierarchy

1. **eduByte** *(Flagship — Primary visual weight)*
2. **byteFlow** *(Flagship — Primary visual weight)*
3. **Crusher ERP** *(Flagship — Primary visual weight, framed as active in-development)*
4. **byteBallot** *(Flagship — Primary visual weight, educational public product)*
5. **Kids covE** *(Supporting client website — Lighter visual weight)*
6. **Skyra** *(Supporting client website — Lighter visual weight)*
7. **SaliChef** *(Supporting client website — Lighter visual weight)*

---

## 5. Existing Portfolio Visual Audit

| Existing Visual Element | Verdict | Rationale |
|---|---|---|
| **Signature `m.rinshad` Cursive Logo** | **KEEP / REFINE** | Authentic, memorable personal touch that sets the portfolio apart from generic agency templates. Keep cleanly styled with crisp vector typography. |
| **High-Contrast Monochrome Base** | **REFINE** | The black/white/gray contrast provides a strong foundation; refine into subtle zinc surface tones (`#09090b` dark / `#ffffff` light) with controlled borders rather than pure stark black-and-white. |
| **Project Card Hover Inversion** | **REFINE** | Inverting card background on hover was a distinctive feature of the original site; refine with subtle elevation, smooth border highlights, and refined micro-interactions. |
| **Back to Top Floating Button** | **REFINE** | Functional and user-friendly; modernize into an unobtrusive, accessible pill trigger with subtle elevation. |
| **Raster PNG Icons (`assets/icons/*.png`)** | **REPLACE** | Replace with scalable, theme-aware Lucide SVG icons to eliminate pixelation and filter hacks. |
| **Rotated Headings (`rotate(-90deg)`)** | **REMOVE** | Fragile CSS transforms in the About section created layout instability and poor mobile readability; replace with clean, authoritative editorial typography. |
| **Legacy Background Images (`bg.jpg`, `bg-masthead.jpg`)** | **REMOVE** | Dead assets from earlier iterations that add unnecessary weight without purpose. |
