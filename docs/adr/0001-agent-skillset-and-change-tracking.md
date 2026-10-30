# 0001. Adoption of Agentic Engineering & Design System (Impeccable, Intent, Ponytail, Graphify, Track Changes)

- **Status**: Accepted
- **Date**: 2026-10-29

## Context
As development and engineering tasks in this repository increasingly involve autonomous AI agents and pair-programming assistants, we require clear engineering standards, design quality verification, architectural discipline, and change auditing to prevent code rot, technical debt accumulation, and UI anti-patterns.

## Decision
We adopt the Byten Agentic Engineering & Design System across this repository, comprising:
1. **Impeccable (`pbakaus/impeccable`)**: UI/UX craft enforcement, visual polish, token adherence, and automated anti-pattern detection (`npx impeccable detect`).
2. **Intent (`ghaida/intent`)**: Strategic UX, wireframing, user journey modeling, and content articulation.
3. **Ponytail (`dietrichgebert/ponytail`)**: Code minimalism and YAGNI discipline through the 7-Step Necessity Ladder, with explicit tracking of deferred complexity (`shortcut:` / `ponytail:` comments in `ponytail-debt`).
4. **Graphify (`graphify-labs/graphify`)**: AST-based code knowledge graph to query codebase architecture and maintain dependency visibility.
5. **Change Tracking & Governance**: Structured tracking via `CHANGELOG.md` (Keep a Changelog format), living project status in `PROJECT_STATE.md`, and Architecture Decision Records (ADRs) under `docs/adr/`.
6. **Tooling & IDE Integration**: Git pre/post hooks, `.codex/hooks.json` for linting and UI verification, and codified agent rules in `.agents/rules/`.

## Consequences
- AI agents and developers must consult authoritative documents (`docs/DESIGN.md`, `docs/PRODUCT.md`, `PROJECT_STATE.md`) before generating code.
- All code modifications require updating `CHANGELOG.md` under `## [Unreleased]` and running `graphify update .`.
- UI changes must pass contrast and craft checks without generic styling anti-patterns.
- Deliberate technical debt must be logged in `PROJECT_STATE.md` under the debt ledger.
