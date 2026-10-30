# Agent Orchestration & Coordination Guide

This guide establishes how Intent, OpenDesigner, Impeccable, Ponytail, Graphify, and Change Tracking coordinate across the product development lifecycle.

## 1. The 6-Phase Coordination Lifecycle
[Phase 1: Strategy & Structure] (Intent UX: /strategize, /wireframe, /articulate)
               │
               ▼
[Phase 2: Design System & Token Architecture] (OpenDesigner: /opendesigner, /opendesigner-export, tokens, DTCG, standards)
               │
               ▼
[Phase 3: Visual Craft & UI Polish] (Impeccable UI: /polish, /audit, craft standards, contrast verification)
               │
               ▼
[Phase 4: Minimalist Implementation] (Ponytail Code: 7-Step Ladder, /ponytail)
               │
               ▼
[Phase 5: Automated Verification & Review] (OpenDesigner Review & Impeccable Detect: /opendesigner-review, /opendesigner-preflight, npx impeccable detect)
               │
               ▼
[Phase 6: Knowledge Graph & Audit Records] (Graphify: AST update | Track Changes: CHANGELOG.md, PROJECT_STATE.md, ADRs)

## 2. Specialized Subagents
| Subagent | Role | Framework | Focus Area |
| :--- | :--- | :--- | :--- |
| **`ux-strategist`** | UX Strategist | Intent | User journeys, wireframing, content articulation |
| **`design-system-architect`** | Design System Architect | OpenDesigner | Token architecture (DTCG), Tailwind themes, design system synthesis & export |
| **`ui-craftsman`** | UI Craftsman | Impeccable | Visual polish, typography, layout rhythm, anti-pattern elimination, contrast checks |
| **`ponytail-engineer`** | Minimalist Dev | Ponytail | 7-step Necessity Ladder, clean code, native APIs, technical debt logging |
| **`ui-qa-reviewer`** | Visual QA Reviewer | OpenDesigner + Impeccable | Measured spacing, multi-viewport tests, responsive preflight, contrast audits |
| **`system-auditor`** | Change Auditor | Change Tracking + Graphify | Git diff audit, CHANGELOG.md, PROJECT_STATE.md, ADRs, AST knowledge graph sync |
