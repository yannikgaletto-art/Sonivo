---
name: general-master-orchestrator
description: Use at the start of every new task in this repository, and in any project that contains the Generalistische Knowledge Database. Routes the agent to the smallest correct Knowledge Database group from 1 to 7 before coding, debugging, planning, reviewing, UI work, backend/API/database/security work, marketing/growth work, legal/compliance work, strategy work, QA, release, or agent-prompt work.
metadata:
  short-description: Route every task to the right Knowledge Database skill group
---

# General Master Orchestrator

Use this skill first for every non-trivial task in this workspace.

The goal is not to load everything. The goal is to choose the smallest useful set of Knowledge Database groups before work begins.

Primary source:

```text
Generalistische Knowledge Database/START_HERE_FOR_AGENTS.md
Generalistische Knowledge Database/0) Master Skill/SKILL.md
```

## Required Startup

1. Read `Generalistische Knowledge Database/START_HERE_FOR_AGENTS.md`.
2. Read `Generalistische Knowledge Database/0) Master Skill/SKILL.md`.
3. Classify the task by outcome, risk, and affected area.
4. Load only the selected groups' `SKILL_INDEX.md` files from `Generalistische Knowledge Database/1)` through `7)`.
5. Open only the exact `SKILL.md` or core directive selected by the index.
6. Keep the active set small: default 2 to 3 groups, hard cap 5.
7. If code changes are involved, include QA from group 7 or group 2.
8. If backend, data, auth, payments, storage, AI calls, or shared files are involved, include group 7 architecture/security and group 5 engineering.
9. If UI, frontend, motion, accessibility, or user-facing copy is involved, include group 7 UI/UX and optionally group 1 frontend/design.
10. If the task is fuzzy or strategic, use group 6 first, then deactivate it before execution.

## Group Map

| Group | Use for |
|---|---|
| `1) Anthropic` | Skill creation, artifacts, files, frontend design, MCP, docs, PDFs, PPTX, XLSX, Claude/API patterns. |
| `2) Debugging` | Bugs, regressions, TDD, plans, verification, code review, root-cause work. |
| `3) Marketing Backbone` | Growth, SEO, launch, positioning, copy, lifecycle, paid, CRO, pricing, activation. |
| `4) Legal` | GDPR, privacy, DPA, ToS, contracts, NDA, compliance, legal risk. |
| `5) Engineer Subagents` | Backend, API, database, security, performance, CI, observability, TypeScript, architecture. |
| `6) Beirat` | Strategy, CEO review, engineering review, design review, office hours, retro, CFO lens. |
| `7) Core Learning` | Universal operating principles, architecture/security, QA, UI/UX, master task prompts. |

## Fast Routing

Always load `7) Core Learning/01_CORE_PHILOSOPHY.md` for meaningful work.

Then add:

- Backend/API/database/security/payments/storage/AI calls: `7) Core Learning/02_ARCHITECTURE_SECURITY_DATA.md` and `5) Engineer Subagents/SKILL_INDEX.md`.
- Debugging/fix/test failure/regression: `2) Debugging/SKILL_INDEX.md` and `7) Core Learning/03_QA_TESTING_RELEASE.md`.
- UI/frontend/design/motion/copy: `7) Core Learning/04_UI_UX_ACCESSIBILITY_MOTION.md` and optionally `1) Anthropic/SKILL_INDEX.md`.
- Marketing/growth/SEO/launch/copy/pricing: `3) Marketing Backbone/SKILL_INDEX.md`.
- Legal/privacy/GDPR/contracts/policy: `4) Legal/SKILL_INDEX.md`.
- Strategy/planning/feature decision: `6) Beirat/SKILL_INDEX.md`.
- Agent brief/new project prompt/delegation: `7) Core Learning/05_MASTER_PROMPT_TEMPLATE.md`.

## Stop Conditions

Stop and ask before execution when:

- The task touches a shared or forbidden file.
- The selected groups conflict.
- The user asks for a destructive action without a clear target.
- A legal, privacy, billing, or production-release decision needs human approval.
- The task requires credentials or systems not available locally.

## Verification

Before claiming this routing system works, run:

```bash
node "Generalistische Knowledge Database/scripts/verify-general-knowledge-routing.mjs"
```

Passing threshold: at least 90 percent routing confidence.
