# Start Here For Agents

This is the first file to read when a new agent enters a general project with this Knowledge Database.

The database is intentionally large because it includes full skill bundles. Do not explore it like a normal folder tree. Use the routers.

## Non-Negotiable Reading Order

1. Read the project rules first: `AGENTS.md`, `CLAUDE.md`, and any mandatory directive named there.
2. Read `Generalistische Knowledge Database/0) Master Skill/SKILL.md`.
3. Read `Generalistische Knowledge Database/7) Core Learning/01_CORE_PHILOSOPHY.md`.
4. Choose the smallest useful group set from `1)` through `7)`.
5. Read only the chosen groups' `SKILL_INDEX.md` files.
6. Open only the exact `SKILL.md` or core directive selected by the index.
7. Keep active context small: default 2 to 3 groups, hard cap 5.

## What Not To Read First

Do not start by opening these folders:

```text
Generalistische Knowledge Database/1) Anthropic/skills-main/
Generalistische Knowledge Database/2) Debugging/superpowers-main/
Generalistische Knowledge Database/3) Marketing Backbone/marketingskills-main/
Generalistische Knowledge Database/4) Legal/ai-legal-claude-main/
Generalistische Knowledge Database/5) Engineer Subagents/agents-main/
Generalistische Knowledge Database/6) Beirat/gstack-main/
```

Those are source bundles. They contain many useful skills, but also upstream docs, tests, fixtures, examples, and assets. Load a bundle file only when an index points to a specific path.

## Fast Group Choice

| User task signal | Read next |
|---|---|
| Bug, broken behavior, regression, failed test, root cause | `2) Debugging/SKILL_INDEX.md` + `7) Core Learning/03_QA_TESTING_RELEASE.md` |
| Backend, API, DB, auth, billing, Stripe, Supabase, AI calls | `5) Engineer Subagents/SKILL_INDEX.md` + `7) Core Learning/02_ARCHITECTURE_SECURITY_DATA.md` |
| UI, frontend, component, dashboard, motion, accessibility | `7) Core Learning/04_UI_UX_ACCESSIBILITY_MOTION.md` + optionally `1) Anthropic/SKILL_INDEX.md` |
| Skill creation, MCP, Claude API, PDF, DOCX, PPTX, XLSX | `1) Anthropic/SKILL_INDEX.md` |
| Marketing, launch, SEO, copy, pricing, lifecycle | `3) Marketing Backbone/SKILL_INDEX.md` |
| Legal, privacy, GDPR, DPA, ToS, contract, NDA | `4) Legal/SKILL_INDEX.md` |
| Strategy, CEO review, design review, office hours, retro | `6) Beirat/SKILL_INDEX.md` |
| Agent prompt, task brief, handoff | `7) Core Learning/05_MASTER_PROMPT_TEMPLATE.md` |

## Why The Index Files Are Short

`SKILL_INDEX.md` files are not the actual skills. They are routing pages.

They should be read often and quickly. Their purpose is to select the exact subskill, not to teach the whole domain. After the index selects a path, open that concrete `SKILL.md`.

Example:

```text
Task: Implement Stripe webhook idempotency.
Read:
1. 0) Master Skill/SKILL.md
2. 7) Core Learning/01_CORE_PHILOSOPHY.md
3. 7) Core Learning/02_ARCHITECTURE_SECURITY_DATA.md
4. 5) Engineer Subagents/SKILL_INDEX.md
5. 5) Engineer Subagents/agents-main/plugins/payment-processing/skills/stripe-integration/SKILL.md
6. 7) Core Learning/03_QA_TESTING_RELEASE.md
```

## Completion Rule

Before saying the work is done, run the relevant verification and read:

```text
Generalistische Knowledge Database/7) Core Learning/03_QA_TESTING_RELEASE.md
```
