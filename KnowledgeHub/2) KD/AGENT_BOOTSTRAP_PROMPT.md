# Agent Bootstrap Prompt

Copy this into the first message of a new general project chat:

```text
Please use the `general-master-orchestrator` skill for this entire chat.
If that skill is not installed, use the fallback file directly.

You have access to:
`Generalistische Knowledge Database/`

Before every new non-trivial task:
1. Read `Generalistische Knowledge Database/START_HERE_FOR_AGENTS.md`.
2. Read `Generalistische Knowledge Database/0) Master Skill/SKILL.md`.
3. Decide which Knowledge Database groups from `1)` to `7)` are relevant.
4. Load only those relevant groups' `SKILL_INDEX.md` files.
5. Open only the exact `SKILL.md` or core directive selected by the index.
6. Use `7) Core Learning/01_CORE_PHILOSOPHY.md` as the base for meaningful work.
7. Keep active context small: default 2 to 3 groups, hard cap 5.
8. If code changes are involved, include QA from `7) Core Learning/03_QA_TESTING_RELEASE.md` or group `2) Debugging`.
9. If backend, data, auth, payments, storage, AI calls, or shared files are involved, include `7) Core Learning/02_ARCHITECTURE_SECURITY_DATA.md` and group `5) Engineer Subagents`.
10. If UI, user-facing copy, motion, accessibility, or frontend behavior is involved, include `7) Core Learning/04_UI_UX_ACCESSIBILITY_MOTION.md` and group `1) Anthropic` when design guidance is useful.
```

Shortest version:

```text
Use `general-master-orchestrator`, read `Generalistische Knowledge Database/START_HERE_FOR_AGENTS.md`, and route every task through `Generalistische Knowledge Database/0) Master Skill/SKILL.md` before working.
```
