---
name: bundled-skill-scripts-index
description: Portable index of custom local skill scripts that can be copied into a project's .agents/skills folder when the project should have extra project-owner review skills available.
status: optional-bundle
---

# 8) Bundled Skill Scripts

This folder contains actual installable custom skill folders, not only routing summaries.

Use it only for local custom skills that are not already included in groups `1)` through `7)`.

Gstack, OpenClaw, Freeze, and plan-review skills are already included once in:

```text
Generalistische Knowledge Database/6) Beirat/gstack-main/
```

Do not duplicate those skills here.

## Bundled Skills

| Skill | Source | Use for |
|---|---|---|
| `source-command-cto-analysis` | Local custom skill | CTO-style feature health analysis. This one is intentionally custom and should be reviewed before using outside the original context. |

## Install

Copy one or more folders from:

```text
Generalistische Knowledge Database/8) Bundled Skill Scripts/.agents/skills/
```

to:

```text
<target-project>/.agents/skills/
```

Install only the skills you actually want available in the destination project.

## Caution

Bundled custom skills may contain opinions and project-specific phrasing. For general projects, review each `SKILL.md` before relying on it.
