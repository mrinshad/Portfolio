# Project State & Living Ledger — `PROJECT_STATE.md`

This document maintains the real-time operational status, active milestones, architecture matrix, and technical debt ledger for the **ByteN Portfolio & Engineering System**.

---

## 1. Project Overview

- **Project Name**: `rinshad-portfolio`
- **Identity**: Mohammed Rinshad P (`m.rinshad`) — Full-Stack Software Engineer & Technical Lead
- **Organization**: ByteN
- **Framework**: Next.js 15.5 (App Router), React 19, TypeScript 5.7, Tailwind CSS 3.4
- **Design World**: "Engineering Ledger" — drawing-paper ground, warm ink, single vermilion signal, hairline rules
- **Repository Health**: Active branch `feat/rebuild-editorial`, clean build, lint and typecheck
- **Runtime**: Bun 1.4.4 available at `~/.bun/bin/bun` (symlinked to `/opt/homebrew/bin/bun`)

---

## 2. Active Milestones & Roadmap

| Milestone | Scope / Deliverables | Status | Notes |
| :--- | :--- | :--- | :--- |
| **M1: Multi-Page Architecture** | Routes `/`, `/work`, `/work/[id]`, `/about`, `/contact`, `not-found` | **Done** | App Router, 13 static routes |
| **M2: Editorial Design System** | Ledger tokens, Instrument Serif / Inter Tight / JetBrains Mono, light + dark | **Done** | Zero detector anti-patterns |
| **M3: Work Index & Case Studies** | Cursor-following index, 4 flagships + 3 client sites, scope and engineering notes | **Done** | Content grounded in verified project facts |
| **M4: About & Career Track** | Narrative, leadership, experience, 6 capability groups, education | **Done** | Verified résumé data |
| **M5: Contact** | Direct channels, availability, mailto-composing form with validation | **Done** | No data leaves the browser |
| **M6: Custom Assets** | SVG marks, schematic figure, generated OG image, SVG favicon | **Done** | No icon library dependency |
| **M7: Motion & A11y** | Scroll reveals, line-mask masthead, reduced-motion, print styles | **Done** | WCAG AA verified both themes |
| **M8: Verification** | Build, typecheck, lint, detector sweep, contrast/overflow audit, interaction tests | **Done** | See section 5 |

---

## 3. Architecture Matrix

| Layer | Technology | Key Files | Responsibility |
| :--- | :--- | :--- | :--- |
| **Routing** | Next.js App Router | `app/**/page.tsx`, `app/not-found.tsx` | Static pages and case-study routes |
| **Design Tokens** | Tailwind + CSS vars | `app/globals.css`, `tailwind.config.ts` | Paper/ink/rule/accent semantics, type scale |
| **Content** | Static TypeScript | `data/content.ts`, `data/types.ts` | Single source of truth for all copy and project data |
| **Components** | React 19, no UI library | `components/*.tsx` | Header, footer, work index, gallery, form, SVG marks |
| **Motion** | CSS + IntersectionObserver | `components/reveal.tsx`, `components/scroll-progress.tsx` | Progressive enhancement; visible without JS |
| **SEO** | Next Metadata API | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` | JSON-LD, Open Graph, canonical URLs |
| **Design Engine** | OpenDesigner / Impeccable | `.agents/skills/`, `docs/DESIGN.md` | Token synthesis and anti-pattern verification |

---

## 4. Technical Debt Ledger (`ponytail-debt`)

| ID | Location | Shortcut Description | Deferred Work / Resolution | Severity |
| :--- | :--- | :--- | :--- | :--- |
| D1 | `components/contact-form.tsx` | Contact uses a client-side `mailto:` composition rather than a transactional email service. | Introduce a server route with an email provider if delivery analytics or spam filtering are needed. | Low |
| D2 | `public/assets/*` | Project screenshots are 2880×1800 PNGs; Next/Image optimises on demand but originals are large. | Pre-encode to WebP/AVIF at 2× display size and drop the PNG originals. | Low |

---

## 5. Verification Record

Run against a production build (`next build` + `next start`):

- `npx tsc --noEmit` — clean.
- `next lint` — no warnings or errors.
- `impeccable detect` on all 8 routes — **0 anti-patterns**.
- Automated contrast audit (light + dark, all routes) — **0 WCAG AA failures**, 0 horizontal overflow, exactly one `h1` per page, 0 unlabeled controls.
- Interaction tests — skip link, tab order, `T` theme shortcut, hover previews, native `<dialog>` menu open/close, gallery paging, form validation with focus management.

---

## 6. Maintenance & Quality Checklist

Before completing work in any session:
- [ ] Run `git status --short` to inspect the working tree.
- [ ] Run `npx tsc --noEmit` and `next lint`.
- [ ] Run `impeccable detect <url>` on every route against a production build.
- [ ] Update `CHANGELOG.md` under `## [Unreleased]`.
- [ ] Update this file's milestone and debt tables.
- [ ] Author an ADR under `docs/adr/` if architecture changes.

