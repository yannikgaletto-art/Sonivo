---
name: 00-master-skill-orchestrator
description: Mandatory first-read router for the Generalistische Knowledge Database. Use before every non-trivial task to choose the smallest correct set of groups from 1 to 7. Covers coding, debugging, UI, backend, API, database, security, AI calls, billing, marketing, legal, strategy, QA, release, and agent-brief work.
version: 5.0.0
status: active
allowed-tools: Read, LS, Bash
---

# 00 Master Skill Orchestrator

Think first. Load less. Verify twice. Execute only inside the safe scope.

This file is the routing layer for the Knowledge Database. It decides which group from `1)` to `7)` should be loaded for a task.

It does not replace project directives, current code, or user instructions.

## Start Contract

For a new agent, the intended entry point is:

```text
Generalistische Knowledge Database/START_HERE_FOR_AGENTS.md
```

If that file is not loaded, this file is the fallback entry point.

Strict reading order:

1. Read project directives first (`AGENTS.md`, `CLAUDE.md`, and required directive files).
2. Read this master router.
3. Read `7) Core Learning/01_CORE_PHILOSOPHY.md`.
4. Select only the needed groups from `1)` through `7)`.
5. Read only the selected groups' `SKILL_INDEX.md` files.
6. From each selected index, open the exact referenced `SKILL.md` or core directive file needed for the task.

Do not browse bundle folders manually. Do not open repo READMEs, docs, tests, images, package metadata, or fixture folders unless a selected `SKILL.md` explicitly asks for them.

## Prime Directive

Use the smallest sufficient context.

Default active set: 2 to 3 groups.
Hard cap: 5 groups.

Always prefer:

1. Current user request.
2. Current code and runtime behavior.
3. Authoritative project directives.
4. Current schema, migrations, and config.
5. Knowledge Database groups.
6. Historical notes.

## Mandatory Base

For meaningful work, always begin with:

```text
7) Core Learning/01_CORE_PHILOSOPHY.md
```

Then add only the groups required by the task.

## Task Router

| Task signal | Load these groups |
|---|---|
| Backend, API, database, auth, storage, billing, queues, AI calls, shared services | `7) Core Learning/02_ARCHITECTURE_SECURITY_DATA.md`, `5) Engineer Subagents/SKILL_INDEX.md`, and QA if code changes. |
| Bug, broken behavior, regression, flaky test, failed build, root-cause analysis | `2) Debugging/SKILL_INDEX.md`, `7) Core Learning/03_QA_TESTING_RELEASE.md`. |
| New feature | `7) Core Learning/01_CORE_PHILOSOPHY.md`, `7) Core Learning/05_MASTER_PROMPT_TEMPLATE.md`, then `02` or `04` depending on backend/UI. Add `6)` only if product direction is fuzzy. |
| Frontend, UI, UX, component, page, layout, motion, accessibility, user-facing copy | `7) Core Learning/04_UI_UX_ACCESSIBILITY_MOTION.md`, optionally `1) Anthropic/SKILL_INDEX.md`. |
| Skill creation, skill audit, MCP, Claude API, file artifact work, PDF/PPTX/XLSX/DOCX | `1) Anthropic/SKILL_INDEX.md`. |
| Marketing, launch, SEO, copy, positioning, lifecycle, activation, pricing, CRO, paid campaigns | `3) Marketing Backbone/SKILL_INDEX.md`. |
| Legal, privacy, GDPR, DPA, ToS, policy, contracts, NDA, compliance risk | `4) Legal/SKILL_INDEX.md`. |
| Architecture, performance, security, DB schema, CI, observability, TypeScript patterns | `5) Engineer Subagents/SKILL_INDEX.md`. |
| Strategy, CEO review, design review, engineering review, office hours, retro, CFO lens | `6) Beirat/SKILL_INDEX.md`. |
| QA, release, final verification, "is it done?" | `7) Core Learning/03_QA_TESTING_RELEASE.md`, optionally `2) Debugging/SKILL_INDEX.md`. |
| Agent prompt, task brief, delegation, multi-agent handoff | `7) Core Learning/05_MASTER_PROMPT_TEMPLATE.md`. |

## Group Index

| Group | Purpose | File |
|---|---|---|
| `1) Anthropic` | Base skills, artifacts, design, MCP, skill creation, file formats. | `Generalistische Knowledge Database/1) Anthropic/SKILL_INDEX.md` |
| `2) Debugging` | Root cause, TDD, plans, verification, code review. | `Generalistische Knowledge Database/2) Debugging/SKILL_INDEX.md` |
| `3) Marketing Backbone` | Growth, launch, SEO, copy, lifecycle, paid, CRO, pricing. | `Generalistische Knowledge Database/3) Marketing Backbone/SKILL_INDEX.md` |
| `4) Legal` | Privacy, GDPR, compliance, contracts, ToS, NDA, legal risk. | `Generalistische Knowledge Database/4) Legal/SKILL_INDEX.md` |
| `5) Engineer Subagents` | Engineering specialists, architecture, backend, security, performance. | `Generalistische Knowledge Database/5) Engineer Subagents/SKILL_INDEX.md` |
| `6) Beirat` | Decision layer and high-level reviews. | `Generalistische Knowledge Database/6) Beirat/SKILL_INDEX.md` |
| `7) Core Learning` | Universal operating principles and core execution directives. | `Generalistische Knowledge Database/7) Core Learning/SKILL_INDEX.md` |
| `8) Bundled Skill Scripts` | Optional installable custom local skill folders not already included in groups `1)` through `7)`. | `Generalistische Knowledge Database/8) Bundled Skill Scripts/SKILL_BUNDLE_INDEX.md` |

## What The Index Files Are

`SKILL_INDEX.md` files are routers, not the full skill content.

Their job is to answer three questions quickly:

1. Should this group be active for the current task?
2. Which exact subskill file should be opened?
3. Which groups should be paired or avoided?

The index should be short enough to read every time the group is selected. The full content lives in the referenced `SKILL.md` files and should be loaded only after the index selects it.

## Decision Layer Rule

Use `6) Beirat` only for decision work:

- Requirements are fuzzy.
- Scope is high-impact.
- The user asks for review, challenge, CEO lens, office hours, or strategy.
- A plan needs product, design, engineering, or finance review.

Deactivate decision guidance before implementation unless the task is still unresolved.

## Execution Layer Rule

Use execution groups only when they change the work:

- `2)` for debug method and TDD discipline.
- `5)` for implementation architecture and engineering risk.
- `7)` for safety, QA, UI, and task structure.

Do not load marketing, legal, or strategy groups for normal coding unless the task touches those domains.

## Bundled Script Rule

Group `8)` is not part of the default active set. It is a portable custom install bundle.

Use it only when:

- You are installing custom local skills into another project.
- The user asks where custom local skill scripts live.
- You need to inspect or copy a bundled custom local skill.

Do not load bundled skills just because they exist. Gstack, OpenClaw, Freeze, and plan-review skills live in `6) Beirat/gstack-main/`; they must not be duplicated in `8)`.

## Stop Conditions

Stop and produce an impact map before proceeding when:

- A shared or forbidden file would be touched.
- A migration, destructive operation, credential use, deployment, or production action is needed.
- Legal, privacy, billing, or compliance claims could affect users.
- Two selected groups conflict and hierarchy does not resolve it.
- Required context is missing and guessing would create risk.

## Completion Standard

A task is complete only when:

- The selected groups were relevant and minimal.
- The work stayed inside the safe scope.
- Success criteria were verified.
- Tests or manual checks were run, or honestly marked as not run.
- Remaining risks are visible.

## Curation Log

This version replaced the raw unstructured dump with a routed, progressively loadable general-purpose database.

Audit basis before cleanup:

- 2,674 total files.
- 1,229 Markdown files.
- 299 `SKILL.md` files.
- Full source bundles retained under their owning groups.
- core directives retained in `7) Core Learning`.
- Redundant local copies removed from `8)`: Gstack, OpenClaw, Freeze, and plan-review skills now live only in `6) Beirat/gstack-main/`.

The retained structure keeps the actual scripts available while making the router decide which narrow skill file to load.
