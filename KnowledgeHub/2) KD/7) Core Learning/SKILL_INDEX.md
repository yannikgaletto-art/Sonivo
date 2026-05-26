---
name: knowledge-core-learning
description: Use as the universal base layer: operating philosophy, architecture/security/data guardrails, QA/testing/release, UI/UX/accessibility/motion, and master prompt templates.
status: active
---

# 7) Core Learning

This group is the mandatory base layer for meaningful work.

This index is a router for core directives, not the full directive content. Read it to select the exact directive file.

## Actual Directive Bundle

This folder contains the core directives directly:

```text
Generalistische Knowledge Database/7) Core Learning/
```

Bundled directives:

| File | Use for |
|---|---|
| `01_CORE_PHILOSOPHY.md` | Always-first operating principles. Load for every meaningful task. |
| `02_ARCHITECTURE_SECURITY_DATA.md` | Backend, data, auth, storage, AI calls, billing, shared files, PII, Supabase, Stripe. |
| `03_QA_TESTING_RELEASE.md` | Debugging, tests, release checks, completion claims, "is it done?". |
| `04_UI_UX_ACCESSIBILITY_MOTION.md` | Frontend, UI, UX, motion, accessibility, user-facing copy. |
| `05_MASTER_PROMPT_TEMPLATE.md` | Agent briefs, task prompts, plans, handoffs, delegation. |

Load only the directive needed by the task, except `01_CORE_PHILOSOPHY.md`, which should be read for meaningful work.

## Pairing Rules

- Any code change: include `03_QA_TESTING_RELEASE.md`.
- Backend/API/database/security/billing/AI calls: include `02_ARCHITECTURE_SECURITY_DATA.md` and `5) Engineer Subagents/SKILL_INDEX.md`.
- UI/frontend/motion/accessibility: include `04_UI_UX_ACCESSIBILITY_MOTION.md` and optionally `1) Anthropic/SKILL_INDEX.md`.
- Fuzzy product decision: include `6) Beirat/SKILL_INDEX.md` first, then drop it before implementation.
