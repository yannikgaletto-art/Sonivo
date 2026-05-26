---
name: 05-master-prompt-template
description: Load when creating task prompts, agent briefs, handoffs, feature plans, bugfix briefs, delegated work, or multi-step execution contracts.
status: active
---

# 05 Master Prompt Template

A good agent prompt is an execution contract, not a wish.

## A Complete Brief Defines

1. Mission.
2. Current state.
3. Exact scope.
4. Protected files and systems.
5. Expected output.
6. Verification standard.
7. Stop conditions.
8. Final reporting format.

## Task Brief Skeleton

```text
Task:
Why:
Scope:
Out of scope:
Relevant files:
Forbidden/shared files:
Required directives:
Acceptance criteria:
Verification:
Stop conditions:
Final report:
```

## Use For

- New features.
- Bugfixes.
- Refactors.
- Backend/API/database work.
- Frontend/UI work.
- Security/privacy changes.
- AI/prompt/generation workflows.
- QA/release tasks.
- Delegation to another agent.

If the task cannot fill this skeleton, it is not ready for execution.
