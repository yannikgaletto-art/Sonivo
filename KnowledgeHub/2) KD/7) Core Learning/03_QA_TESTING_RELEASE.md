---
name: 03-qa-testing-release
description: Load before debugging, writing tests, release checks, final verification, or declaring a task done. Defines evidence-based completion and zero-false-success QA.
status: mandatory-for-qa-completion
---

# 03 QA, Testing, Release

Nothing is complete until it is verified.

## Completion Requires

1. Relevant automated gates pass.
2. The changed flow has been exercised.
3. Durable state matches expected state.
4. UI reflects real backend state.
5. Failure paths are considered.
6. Unverified risk is stated clearly.

## Test Selection

Use the project's real commands. Discover them before inventing commands.

Common gates:

```bash
npx tsc --noEmit
npm run lint
npx jest --no-coverage
npm run build
```

Run the smallest gate that proves the change, then broader gates when the blast radius is larger.

## Bug Protocol

1. Reproduce or identify the failure.
2. Trace root cause.
3. Fix the smallest responsible code path.
4. Add or update a test when feasible.
5. Verify with evidence.

## UI Verification

For user-facing changes, inspect the browser or equivalent rendered output. Code review alone is not enough.
