---
name: knowledge-beirat
description: Use for strategy, CEO review, engineering review, design review, office hours, product decisions, scope challenges, retrospectives, finance/pricing lens, board-style critique, and deciding whether to build.
status: active
---

# 6) Beirat

Use this group for decision-layer work. It helps decide what should happen before execution starts.

This index is a router, not the skill content. Read it to select one exact subskill, then open only that subskill's `SKILL.md`.

## Actual Skill Bundle

This file is only the router/index.

The full Beirat/Gstack bundle is included here:

```text
Generalistische Knowledge Database/6) Beirat/gstack-main/
```

Bundled skills: 57 `SKILL.md` files, including plan reviews, office hours, CEO review, design review, engineering review, retro, browser workflows, QA, ship, freeze, and OpenClaw skills.

Load the exact skill's `SKILL.md` only when the router below selects it. Do not load the whole bundle at once.

## Load When

- Requirements are fuzzy or the user asks to think through an idea.
- The user asks for CEO review, engineering review, design review, office hours, critique, scope challenge, or retro.
- The decision affects product direction, architecture, design, pricing, revenue, positioning, or team focus.
- A plan exists and should be challenged before implementation.

## Do Not Load When

- The task is already clear and implementation should start.
- The issue is a concrete bug. Use `2) Debugging`.
- The task is final verification. Use `7) Core Learning/03`.

## Subskill Router

| Signal | Use |
|---|---|
| `brainstorm`, `office hours`, `is this worth building`, `new idea` | `gstack-main/openclaw/skills/gstack-openclaw-office-hours/SKILL.md` |
| `review plan`, `challenge`, `CEO lens`, `poke holes`, `scope` | `gstack-main/plan-ceo-review/SKILL.md` |
| `architecture review`, `engineering review`, `technical review` | `gstack-main/plan-eng-review/SKILL.md` |
| `design critique`, `UX review`, `visual plan` | `gstack-main/plan-design-review/SKILL.md` |
| `retro`, `what shipped`, `lessons learned` | `gstack-main/openclaw/skills/gstack-openclaw-retro/SKILL.md` |
| `bug investigation`, `root cause`, `deep debug` | `gstack-main/openclaw/skills/gstack-openclaw-investigate/SKILL.md` |
| `freeze`, `restrict edits`, `only edit this folder` | `gstack-main/freeze/SKILL.md` |
| `pricing`, `cash`, `investor`, `metrics`, `board update` | `gstack-main/cso/SKILL.md` |

## Exit Rule

Decision skills do not stay active during implementation unless the task is still a decision task.

After the decision:

1. Record the chosen direction.
2. Drop Beirat context.
3. Continue with execution groups such as `2)`, `5)`, and `7)`.
