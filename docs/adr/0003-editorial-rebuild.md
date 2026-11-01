# ADR 0003 — Editorial "Engineering Ledger" rebuild and removal of UI libraries

- **Status**: Accepted
- **Date**: 2026-11-01
- **Branch**: `feat/rebuild-editorial`

## Context

The previous portfolio passed through several visual iterations that accumulated
patterns the project's own design rules forbid: a dark-glass and aurora hero, a
3D object rendered in a canvas-like component, pointer-glow effects, an infinite
marquee, gradient mesh backgrounds, and tracked-caps kicker labels above every
heading. The stack also carried `framer-motion`, Radix primitives and
`lucide-react` for what had become a small, mostly static set of surfaces.

The design detector run against a production build confirmed the problem
objectively: 7 anti-patterns on the home route alone, including the cream
default palette, the hero eyebrow chip, kicker-above-heading on three sections,
an oversized full-sentence headline, and the marquee.

## Decision

1. **Replace the visual world rather than polish it.** The incumbent look was
   treated as anti-reference. The new world is an "Engineering Ledger": a cool
   drawing-paper ground, warm ink, a single vermilion signal colour, hairline
   rules and a two-family type system (Instrument Serif display, Inter Tight
   body) with JetBrains Mono for metadata.
2. **Remove the UI library layer.** `framer-motion`, Radix/shadcn primitives and
   `lucide-react` were replaced by purpose-built SVG marks, CSS transitions and
   a native `<dialog>` for the mobile menu. Motion is CSS plus one
   IntersectionObserver.
3. **Keep content as the single source of truth.** All copy and project data
   live in `data/content.ts`, rewritten to state concrete engineering facts and
   per-project "the hard part" notes instead of marketing phrasing.
4. **Make motion progressive.** Reveals are visible by default; JavaScript opts
   into hiding elements only after confirming it can animate them, and
   `prefers-reduced-motion` disables all of it.
5. **Verify against the rendered page, not the source.** Acceptance is a
   production build scanned by the design detector on every route, plus an
   automated contrast/overflow/labelling audit in both themes.

## Consequences

- **Positive**: zero detector anti-patterns on all 8 routes; zero WCAG AA
  contrast failures; one `h1` per page; no horizontal overflow; smaller
  dependency surface; a distinctive identity that does not read as generated UI.
- **Positive**: first-load JS is 103 kB shared, with no animation or icon
  library in the bundle.
- **Negative**: custom SVG marks mean adding an icon is now a deliberate act
  rather than an import.
- **Negative**: the contact form composes a `mailto:` instead of delivering
  mail server-side, so there is no delivery telemetry. Recorded as debt D1 in
  `PROJECT_STATE.md`.
- **Neutral**: the `--muted-foreground` and `.measure` values are tuned to this
  specific type pairing; changing the body font requires re-checking both.

## Alternatives considered

- **Polish the incumbent dark-glass world.** Rejected: the detected patterns are
  structural to that world, not incidental to it.
- **Keep Radix and restyle it.** Rejected: the remaining surfaces (one dialog,
  one form, a gallery) are simpler to build accessibly with native elements than
  to restyle, and native `<dialog>` gives focus trapping and Escape handling for
  free.
- **Use a component library for speed.** Rejected: it would reintroduce the
  generic look the rebuild exists to remove.
