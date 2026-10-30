# 0002. Adoption of OpenDesigner Design System Engine & Visual Review

- **Status**: Accepted
- **Date**: 2026-10-30

## Context
While Intent provides high-level UX strategy and Impeccable enforces craft polish and eliminates anti-patterns, the project requires an authoritative design token architecture, design system standard verification, multi-viewport responsive review, and seamless token export to Tailwind CSS, CSS custom properties, and DTCG (Design Tokens Community Group) format.

## Decision
We adopt **OpenDesigner** (`opendesigner.dev` / `ckryptickunal/OpenDesigner`) as the foundational design system engine for this project.

1. **Token Architecture & Synthesis (`opendesigner`, `opendesigner-export`)**:
   - Maintain the design system state and DTCG 2025.10 tokens via `engine.py`.
   - Export tokens to Tailwind CSS themes and CSS custom properties directly aligned with `docs/DESIGN.md`.
2. **Automated Visual & Quality Review (`opendesigner-review`, `opendesigner-preflight`)**:
   - Run automated audits checking measured spacing, typographic hierarchy, responsive breakpoints, contrast, and accessibility floors.
3. **Palette-Aligned Artwork (`opendesigner-illustrate`, `opendesigner-paint`)**:
   - Generate code-based illustrations and visual elements derived directly from the project's semantic color palette.
4. **Integration with Orchestration Lifecycle**:
   - Integrated as Phase 2 (Design System & Token Architecture) and Phase 5 (Automated Verification & Review) alongside Impeccable and Intent.

## Consequences
- Design tokens and theme settings can be synthesized, validated, and reviewed reproducibly using Python standard library tooling.
- Agents can run `/opendesigner-review` and `/opendesigner-preflight` prior to final verification of user interfaces.
