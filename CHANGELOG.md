# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initialized Byten Agentic Engineering & Design System.
- Installed core agent skill suites via `skills` CLI:
  - `pbakaus/impeccable`: Frontend design polish, typography, and UI anti-pattern detection.
  - `ghaida/intent`: Strategic UX, wireframing, and user journey modeling.
  - `dietrichgebert/ponytail`: Code minimalism, 7-Step Necessity Ladder, and debt management.
  - `graphify-labs/graphify`: AST-based codebase knowledge graph extraction and querying.
  - `ckryptickunal/OpenDesigner`: Local design system engine, token synthesis (DTCG), visual QA review, and responsive preflight.
- Created agent behavior rules in `.agents/rules/`:
  - `ui-craft.md`: UI craftsmanship, gradient/card clutter elimination, WCAG AA compliance.
  - `code-discipline.md`: Ponytail minimalism and strict 7-Step Necessity Ladder.
  - `change-tracking.md`: Change audit trail, changelog maintenance, and ADR governance.
  - `graphify.md`: Knowledge graph querying and update standards.
- Created custom `track-changes` skill in `.agents/skills/track-changes/SKILL.md` and workflow in `.agents/workflows/graphify.md`.
- Configured IDE / Codex tool execution hooks in `.codex/hooks.json`.
- Established architecture governance documentation:
  - Root `AGENTS.md`: Authoritative engineering guidelines and command glossary.
  - `docs/ORCHESTRATION.md`: 5-Phase coordination lifecycle and specialized subagents.
  - `docs/adr/README.md` & `docs/adr/0001-agent-skillset-and-change-tracking.md`: Architecture Decision Records.
  - `docs/DESIGN.md`: Visual design tokens, typography scales, and UI craftsmanship standards.
  - `docs/PRODUCT.md`: Brand positioning, audience personas, and core service offerings.
  - `PROJECT_STATE.md`: Active milestone status, architecture matrix, and technical debt ledger.

### Changed
- **Full visual rebuild on `feat/rebuild-editorial`.** Replaced the dark-glass/aurora/3D hero world with an "Engineering Ledger" editorial system: drawing-paper ground, warm ink type, one vermilion signal accent, hairline rules, no gradients or glassmorphism.
- Typography reset to Instrument Serif (display), Inter Tight (body) and JetBrains Mono (labels), replacing Inter/Dancing Script.
- Rewrote all portfolio copy from generic marketing phrasing to concrete engineering statements; added per-project "the hard part" and data-model notes grounded in the actual systems.
- Rebuilt `/work` as an editorial index with cursor-following project previews, and case studies around scope + engineering notes.
- Rebuilt `/about` around a readable career narrative, leadership, experience, capabilities and education.
- Rebuilt `/contact` with direct channels plus a mailto-composing form that stores nothing.
- Replaced Radix/shadcn primitives and `lucide-react` with purpose-built SVG marks and a native `<dialog>` mobile menu.
- Theme toggle is now a single icon button with a `T` keyboard shortcut; default theme is light.
- Navbar replaced by a document-style header with a hairline scroll-progress rule.

### Removed
- Removed all AI-flavoured surface patterns flagged by the design detector: cream/beige default palette, tracked-caps "eyebrow" chips above headlines, repeated kicker labels above every heading, oversized full-sentence hero type, infinite marquee ticker, decorative two-axis grid overlay and repeating-gradient stripes.
- Removed `framer-motion`, `next-themes`-dependent Radix wrappers, glassmorphism utilities, aurora/3D/pointer-glow hero components, tilt windows, horizontal scroll-jacking showcase, card stacks and the tech-icon sprite map.
- Removed the obsolete `components/ui/` primitive set and the legacy `hero-*`, `project-*`, `*-showcase`, `*-stack` components.

### Fixed
- Fixed dimmed, low-contrast project status labels in the work index.
- Fixed mobile work-index row wrapping and heading/document-header overflow.
- Added a generated Open Graph image at `public/og.png` and an SVG favicon; the previous `og-image.jpg` reference did not exist.
- Added a real `not-found` route instead of the default Next.js 404.

### Security
- Contact form composes a `mailto:` link client-side; no form data is transmitted to or stored by the site.

