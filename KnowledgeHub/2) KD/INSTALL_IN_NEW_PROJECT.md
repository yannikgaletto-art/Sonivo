# Install In A New Project

Use this folder as the general-purpose agent knowledge base.

## 1. Place The Database

Place this folder in the root of the general project:

```text
Generalistische Knowledge Database/
```

This includes full bundles for the main groups:

```text
Generalistische Knowledge Database/1) Anthropic/skills-main/skills/
Generalistische Knowledge Database/2) Debugging/superpowers-main/skills/
Generalistische Knowledge Database/3) Marketing Backbone/marketingskills-main/skills/
Generalistische Knowledge Database/4) Legal/ai-legal-claude-main/
Generalistische Knowledge Database/5) Engineer Subagents/agents-main/
Generalistische Knowledge Database/6) Beirat/gstack-main/
Generalistische Knowledge Database/7) Core Learning/
```

## 2. Install The Router Skill

Copy this bundled skill:

```text
Generalistische Knowledge Database/.agents/skills/general-master-orchestrator/
```

to the target project's skill folder:

```text
<target-project>/.agents/skills/general-master-orchestrator/
```

## 3. Optional: Install Bundled Skill Scripts

If you also want extra custom local skills as direct `.agents` skills, copy selected folders from:

```text
Generalistische Knowledge Database/8) Bundled Skill Scripts/.agents/skills/
```

to:

```text
<target-project>/.agents/skills/
```

Available custom skills are listed in:

```text
Generalistische Knowledge Database/8) Bundled Skill Scripts/SKILL_BUNDLE_INDEX.md
```

Gstack, OpenClaw, Freeze, and plan-review skills are already included in `6) Beirat/gstack-main/`. Do not copy a second copy of those into `8)`.

## 4. Add A Project Instruction

Add this to the target project's `AGENTS.md` or equivalent:

```text
Before any non-trivial task, use the `general-master-orchestrator` skill.
Fallback: read `Generalistische Knowledge Database/START_HERE_FOR_AGENTS.md`, then `Generalistische Knowledge Database/0) Master Skill/SKILL.md`.
```

## 5. Verify

From the target project root, run:

```bash
node "Generalistische Knowledge Database/scripts/verify-general-knowledge-routing.mjs"
node scripts/verify-knowledge-chat-scenarios.mjs
```

Expected result:

```text
Static checks: 32/32
Routing cases: 30/30
Estimated activation confidence: 100%
Chat scenarios: 6/6
```
