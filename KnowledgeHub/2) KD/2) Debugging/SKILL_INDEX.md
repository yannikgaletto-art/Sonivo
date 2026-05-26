---
name: knowledge-debugging
description: Router for the 14-skill superpowers debugging bundle. Use when a task involves uncertainty (bugs, regressions, test failures), an implementation plan (writing, executing, reviewing), or verification before claiming completion. This file is the router only — load exactly one subskill SKILL.md after deciding.
status: active
version: 2.0.0
last-curated: 2026-05-26
duplicate-mirror: /Users/yannik/YInnovation/KnowledgeHub/2) KD/2) Debugging/SKILL_INDEX.md
---

# 2) Debugging — Router

This index routes to **14 subskills** in `superpowers-main/skills/`. Never load this whole bundle. Read this router, decide one subskill, open that SKILL.md only.

## How To Use This Router

1. Read the **Decision Tree** below from top to bottom.
2. Match the user's signal to a row.
3. Open only the listed `SKILL.md` path.
4. If two rows match, the higher row wins.
5. If no row matches, this group is **not the right group** — return to `START_HERE_FOR_AGENTS.md` and pick another.

## Decision Tree — Pick The First Match

| Order | User Signal / Trigger Phrase | Open This Subskill |
|---|---|---|
| 1 | First message in a conversation, before any other action | `superpowers-main/skills/using-superpowers/SKILL.md` |
| 2 | "Idee", "brainstorm", "Feature überlegen", "lass uns durchdenken", any creative/spec work before code exists | `superpowers-main/skills/brainstorming/SKILL.md` |
| 3 | "Plan schreiben", "Implementation Plan", "Spec to plan", multi-step work, no plan file yet | `superpowers-main/skills/writing-plans/SKILL.md` |
| 4 | "Plan ausführen", "execute plan", you have a plan file AND subagents are available | `superpowers-main/skills/subagent-driven-development/SKILL.md` |
| 5 | "Plan ausführen" but no subagent support OR work in separate session | `superpowers-main/skills/executing-plans/SKILL.md` |
| 6 | "Branch fertig", "merge", "ship", "PR aufmachen", "wie schließe ich ab" | `superpowers-main/skills/finishing-a-development-branch/SKILL.md` |
| 7 | "Isolated workspace", "worktree", "neue Branch isoliert starten" | `superpowers-main/skills/using-git-worktrees/SKILL.md` |
| 8 | Multiple **independent** failures or tasks running concurrently | `superpowers-main/skills/dispatching-parallel-agents/SKILL.md` |
| 9 | "Bug", "broken", "regression", "test failure", "unexpected", "flaky", "fehler", "warum funktioniert das nicht" | `superpowers-main/skills/systematic-debugging/SKILL.md` |
| 10 | About to write any new feature/bugfix code — test must come first | `superpowers-main/skills/test-driven-development/SKILL.md` |
| 11 | "Code review starten", "lass jemanden drüber schauen", before merge | `superpowers-main/skills/requesting-code-review/SKILL.md` |
| 12 | "Review-Kommentare", "PR-Feedback bekommen", reviewer left notes | `superpowers-main/skills/receiving-code-review/SKILL.md` |
| 13 | "Fertig", "Done", "passes", "complete", "behoben" — about to make a success claim | `superpowers-main/skills/verification-before-completion/SKILL.md` |
| 14 | "Neuen Skill bauen", "Skill schreiben", "improve skill" | `superpowers-main/skills/writing-skills/SKILL.md` |

## Mandatory Skills (always enforce, no exception)

These three skills are **gates** — they are not optional and apply at fixed points in every workflow:

| Gate | Skill | Enforce when |
|---|---|---|
| **Bootstrap gate** | `using-superpowers` | First turn of any conversation that is not a trivial chat |
| **RED gate** | `test-driven-development` | Before writing any production code |
| **GREEN gate** | `verification-before-completion` | Before saying "done", "passes", "fixed", "ready" |

If you skip a gate, you violate the bundle's iron law.

## Workflow Map (start → finish)

```text
1) Idea / Spec     → brainstorming
2) Plan            → writing-plans
3) Workspace       → using-git-worktrees   (only if isolation needed)
4) Execute Plan    → subagent-driven-development  OR  executing-plans
                     ├── for each task: test-driven-development
                     ├── for each task: requesting-code-review
                     ├── if reviewer comments: receiving-code-review
                     └── if many failures: dispatching-parallel-agents
5) Bug-hunt        → systematic-debugging        (anytime something fails)
6) Done-check      → verification-before-completion  (always before claiming done)
7) Wrap-up         → finishing-a-development-branch
8) Meta            → writing-skills              (only when authoring new skills)
9) Always-on       → using-superpowers           (first turn)
```

## Subskill Summary (one-line each)

For each subskill, the trigger and the iron rule. The iron rule is the non-negotiable behavior the skill enforces.

| Subskill | Iron Rule |
|---|---|
| `using-superpowers` | If a skill might apply, invoke it. Period. |
| `brainstorming` | No code until a design doc is approved by the user. |
| `writing-plans` | A plan is bite-sized tasks (2–5 min each), TDD-mapped, file-by-file scoped. |
| `subagent-driven-development` | Fresh subagent per task + two-stage review (spec then quality). |
| `executing-plans` | Read plan critically → if concerns, raise them BEFORE starting. |
| `using-git-worktrees` | Detect existing isolation first. Native tool > git worktree > nothing. |
| `dispatching-parallel-agents` | One agent per independent problem domain — never share state. |
| `systematic-debugging` | No fixes without root-cause investigation first. |
| `test-driven-development` | No production code without a failing test first. |
| `requesting-code-review` | Reviewer gets crafted context — never your session history. |
| `receiving-code-review` | Verify before implementing. No "you're right!" responses. |
| `verification-before-completion` | No completion claim without fresh evidence from a fresh command. |
| `finishing-a-development-branch` | Verify tests → detect env → present options → execute → clean up. |
| `writing-skills` | TDD applied to skill docs: watch subagent fail without skill first. |

## Load When This Group Applies

- The user reports an error, broken behavior, failed test, regression, flaky behavior, or unexpected output.
- You need root-cause analysis before changing code.
- You are implementing a feature or bugfix where TDD reduces risk.
- You have a written plan to execute.
- You are about to claim work is done.
- You receive review feedback and need to decide what is valid.
- You need to author or revise a skill.

## Do Not Load When

- Task is purely strategic with no diagnosis needed → use `6) Beirat`.
- Task is only copywriting or marketing → use `3) Marketing Backbone`.
- Task is legal analysis only → use `4) Legal`.
- Task is pure UI/visual design with no logic risk → use `1) Anthropic` + `7) Core Learning/04_UI_UX_ACCESSIBILITY_MOTION.md`.

## Pair With

| If your task also involves… | Also load |
|---|---|
| Backend, DB, auth, payments, AI calls | `5) Engineer Subagents/SKILL_INDEX.md` + `7) Core Learning/02_ARCHITECTURE_SECURITY_DATA.md` |
| UI bug or frontend regression | `7) Core Learning/04_UI_UX_ACCESSIBILITY_MOTION.md` |
| Final release readiness | `7) Core Learning/03_QA_TESTING_RELEASE.md` |
| CEO/scope challenge on plan | `6) Beirat/gstack-main/plan-ceo-review/SKILL.md` |
| Engineering review on plan | `6) Beirat/gstack-main/plan-eng-review/SKILL.md` |
| Design review on plan with UI | `6) Beirat/gstack-main/plan-design-review/SKILL.md` |

## Cross-Folder Overlap Awareness

The following subskills have **adjacent siblings** in other folders. If the agent already loaded one of these, do NOT also load the debugging version — they overlap intentionally:

| Debugging subskill | Adjacent in | When to prefer the sibling |
|---|---|---|
| `systematic-debugging` | `6) Beirat/gstack-main/investigate/SKILL.md` | When the user asked for "investigate", "office-hours-style root cause", or a hypothesis-driven deep dive (gstack flavor). |
| `brainstorming` | `6) Beirat/gstack-main/office-hours/SKILL.md` | When the user asked for "office hours" — that skill has YC-style forcing questions. |
| `writing-plans` | `6) Beirat/gstack-main/autoplan/SKILL.md` | When the user wants an automated plan generation. |

## Bundle Inventory (do not load default)

```text
superpowers-main/
├── skills/                  ← 14 SKILL.md routed above
│   ├── brainstorming/
│   ├── dispatching-parallel-agents/
│   ├── executing-plans/
│   ├── finishing-a-development-branch/
│   ├── receiving-code-review/
│   ├── requesting-code-review/
│   ├── subagent-driven-development/
│   ├── systematic-debugging/
│   ├── test-driven-development/
│   ├── using-git-worktrees/
│   ├── using-superpowers/
│   ├── verification-before-completion/
│   ├── writing-plans/
│   └── writing-skills/
├── docs/                    ← Upstream docs. Load only if a SKILL.md references a path.
├── tests/                   ← Upstream test fixtures. Ignore by default.
├── hooks/                   ← Plugin hooks for Claude Code / Codex / OpenCode.
├── assets/                  ← Branding only. Ignore.
├── scripts/                 ← Used by `brainstorming/scripts/` and others.
└── CLAUDE.md, AGENTS.md     ← Project rules for the upstream repo.
```

## Debug Protocol (when this group is active)

1. Reproduce or identify the exact failure.
2. Collect evidence from logs, tests, code paths, and current data.
3. Trace root cause before proposing a fix (`systematic-debugging`).
4. Write the failing test first (`test-driven-development`).
5. Make the smallest safe change.
6. Add or update the test that would have caught it.
7. Run verification before claiming success (`verification-before-completion`).
8. Decide how to ship (`finishing-a-development-branch`).

## Maintenance Notes

- This router was rebuilt **2026-05-26** to cover all 14 bundle skills (previous version routed only 8).
- The duplicate mirror at `/Users/yannik/YInnovation/KnowledgeHub/2) KD/2) Debugging/SKILL_INDEX.md` must stay in sync — both files are edited together.
- Subskill content lives upstream in `superpowers-main/` — do not edit the SKILL.md files there. If a subskill is wrong, fix it via local skill in `~/.claude/skills/` and add an "Adjacent in" row above.
