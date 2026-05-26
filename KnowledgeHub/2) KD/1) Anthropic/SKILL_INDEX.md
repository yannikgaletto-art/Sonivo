---
name: knowledge-anthropic
description: Use for skill creation, skill improvement, MCP servers, Claude API work, frontend design guidance, brand/style guidance, documentation collaboration, and file artifacts such as PDF, DOCX, PPTX, XLSX, CSV, and HTML artifacts.
status: active
---

# 1) Anthropic

Use this group when the task needs a base capability, a file/artifact workflow, or skill-system knowledge.

This index is a router, not the skill content. Read it to select one exact subskill, then open only that subskill's `SKILL.md`.

## Actual Skill Bundle

This file is only the router/index.

The full Anthropic skill bundle is included here:

```text
Generalistische Knowledge Database/1) Anthropic/skills-main/skills/
```

Key bundled skills:

| Skill | Path |
|---|---|
| `skill-creator` | `skills-main/skills/skill-creator/SKILL.md` |
| `mcp-builder` | `skills-main/skills/mcp-builder/SKILL.md` |
| `claude-api` | `skills-main/skills/claude-api/SKILL.md` |
| `frontend-design` | `skills-main/skills/frontend-design/SKILL.md` |
| `brand-guidelines` | `skills-main/skills/brand-guidelines/SKILL.md` |
| `doc-coauthoring` | `skills-main/skills/doc-coauthoring/SKILL.md` |
| `pdf` | `skills-main/skills/pdf/SKILL.md` |
| `docx` | `skills-main/skills/docx/SKILL.md` |
| `pptx` | `skills-main/skills/pptx/SKILL.md` |
| `xlsx` | `skills-main/skills/xlsx/SKILL.md` |
| `webapp-testing` | `skills-main/skills/webapp-testing/SKILL.md` |
| `web-artifacts-builder` | `skills-main/skills/web-artifacts-builder/SKILL.md` |
| `canvas-design` | `skills-main/skills/canvas-design/SKILL.md` |
| `algorithmic-art` | `skills-main/skills/algorithmic-art/SKILL.md` |
| `theme-factory` | `skills-main/skills/theme-factory/SKILL.md` |
| `internal-comms` | `skills-main/skills/internal-comms/SKILL.md` |
| `slack-gif-creator` | `skills-main/skills/slack-gif-creator/SKILL.md` |

Load the exact skill's `SKILL.md` only when the router below selects it. Do not load the whole bundle at once.

## Load When

- The user asks to create, edit, audit, install, or test a skill.
- The user asks for MCP, tool integration, Claude API, Anthropic SDK, or prompt-caching guidance.
- The output is a PDF, DOCX, PPTX, XLSX, CSV, or structured document artifact.
- The task is frontend/design-heavy and needs design composition guidance.
- The task is documentation, technical writing, proposal writing, or co-authoring.
- The task needs brand guidelines or visual system consistency.

## Do Not Load When

- The task is ordinary bugfix work with no skill, artifact, file-format, or design-specific need.
- The task is strategic only. Use `6) Beirat`.
- The task is legal/compliance. Use `4) Legal`.
- The task is product marketing/growth. Use `3) Marketing Backbone`.

## Subskill Router

| Signal | Use |
|---|---|
| `skill`, `SKILL.md`, `trigger`, `frontmatter`, `eval`, `routing` | `skills-main/skills/skill-creator/SKILL.md` |
| `MCP`, `tool server`, `external API integration` | `skills-main/skills/mcp-builder/SKILL.md` |
| `Claude API`, `Anthropic SDK`, `model migration`, `prompt caching` | `skills-main/skills/claude-api/SKILL.md` |
| `frontend`, `component`, `landing page`, `visual polish` | `skills-main/skills/frontend-design/SKILL.md` |
| `brand`, `style guide`, `visual identity` | `skills-main/skills/brand-guidelines/SKILL.md` |
| `doc`, `proposal`, `technical spec`, `decision doc` | `skills-main/skills/doc-coauthoring/SKILL.md` |
| `.pdf`, form filling, merge/split/rotate | `skills-main/skills/pdf/SKILL.md` |
| `.docx`, Word document | `skills-main/skills/docx/SKILL.md` |
| `.pptx`, slide deck, pitch deck | `skills-main/skills/pptx/SKILL.md` |
| `.xlsx`, `.csv`, spreadsheet | `skills-main/skills/xlsx/SKILL.md` |
| `browser test`, `webapp test`, `Playwright`, `visual verification` | `skills-main/skills/webapp-testing/SKILL.md` |
| `HTML artifact`, `single page artifact`, `interactive artifact` | `skills-main/skills/web-artifacts-builder/SKILL.md` |

## Pairing Rules

- UI implementation: pair with `7) Core Learning/04_UI_UX_ACCESSIBILITY_MOTION.md`.
- Bug or visual regression: pair with `2) Debugging/SKILL_INDEX.md`.
- Backend/API work with Claude or MCP: pair with `5) Engineer Subagents/SKILL_INDEX.md`.

## Reliability Notes

Skill trigger reliability depends mainly on `name` and `description` frontmatter. Keep descriptions explicit, broad enough to match real user phrasing, and short enough to be remembered.

For repository code tasks, this group should usually be secondary to `2) Debugging`, `5) Engineer Subagents`, or `7) Core Learning`.
