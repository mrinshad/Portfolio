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

### Deprecated

### Removed

### Fixed

### Security
