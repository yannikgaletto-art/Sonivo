---
name: 04-ui-ux-accessibility-motion
description: Load before frontend, UI, UX, layout, component, motion, animation, accessibility, responsive behavior, user-facing copy, forms, dialogs, dashboards, or visual verification work.
status: mandatory-for-ui
---

# 04 UI, UX, Accessibility, Motion

The interface is the user's source of truth.

## UI Must Never

- Imply success before success is verified.
- Offer impossible or unsupported choices.
- Hide important failures behind vague copy.
- Fight backend state.
- Ship without visual verification.

## Build Principles

1. One clear primary action.
2. Stable loading, empty, error, disabled, hover, active, and success states.
3. Responsive layouts with no text overlap.
4. Accessible controls, labels, focus, and keyboard behavior.
5. Motion clarifies state; it does not decorate noise.
6. User-facing text follows the project's localization rules.

## Frontend Completion

Frontend work is complete only when:

- It compiles.
- It renders.
- It behaves under loading and error states.
- It works at relevant viewport sizes.
- It matches existing design patterns.
- The user can understand what happened and what to do next.
