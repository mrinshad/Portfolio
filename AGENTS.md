# Engineering & Design System Guidelines

This workspace is governed by strict agent skillsets, design craft standards, code discipline, and change tracking.

## 1. Project Context & Authoritative Documents
- **Brand & Services**: docs/PRODUCT.md
- **Visual Design & Tokens**: docs/DESIGN.md
- **Agent Orchestration**: docs/ORCHESTRATION.md
- **Active State & Roadmap**: PROJECT_STATE.md
- **Version History & Changes**: CHANGELOG.md
- **Architecture Decisions**: docs/adr/
- **Codebase Knowledge Graph**: graphify-out/GRAPH_REPORT.md

## 2. Core Agent Rules
All agents operating in this workspace must respect the rules in `.agents/rules/`:
1. **UI & UX Craft** (`.agents/rules/ui-craft.md`): Reject generic "AI slop", unprompted gradients, low contrast, and unverified mockups.
2. **Code Discipline** (`.agents/rules/code-discipline.md`): Enforce the Ponytail 7-step Necessity Ladder. Rely on standard library and native features before adding packages.
3. **Change Tracking** (`.agents/rules/change-tracking.md`): Log modifications in CHANGELOG.md, keep PROJECT_STATE.md updated, and record ADRs for structural changes.
4. **Knowledge Graph** (`.agents/rules/graphify.md`): Query `graphify-out/` before answering complex codebase architecture questions.

## 3. Available Skill Commands
- **Design Systems (OpenDesigner)**: `/opendesigner`, `/opendesigner-export`, `/opendesigner-review`, `/opendesigner-preflight`, `/opendesigner-extend`, `/opendesigner-extract`, `/opendesigner-illustrate`, `/opendesigner-paint`
- **UI Craft (Impeccable)**: `/audit`, `/critique`, `/polish`, `/typeset`, `/adapt`, `/bolder`, `/quieter`
- **UX Strategy (Intent)**: `/strategize`, `/wireframe`, `/articulate`, `/evaluate`, `/fortify`
- **Code Quality (Ponytail)**: `/ponytail`, `/ponytail-review`, `/ponytail-audit`, `/ponytail-debt`
- **Knowledge Graph (Graphify)**: `/graphify`, `/graphify update`
- **Change Management**: `/track-changes`
