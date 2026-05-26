---
name: knowledge-engineer-subagents
description: Use for backend architecture, API design, database design, security audit, performance engineering, TypeScript, React, Next.js, Node.js, Stripe, Supabase, CI/CD, observability, testing infrastructure, and engineering decomposition.
status: active
---

# 5) Engineer Subagents

Use this group when the task needs engineering-specialist judgment beyond general debugging.

This index is a router, not the skill content. Read it to select one exact subskill, then open only that subskill's `SKILL.md`.

## Actual Skill Bundle

This file is only the router/index.

The full engineering bundle is included here:

```text
Generalistische Knowledge Database/5) Engineer Subagents/agents-main/
```

Bundled skills: 155 `SKILL.md` files across backend, frontend, database, security, CI/CD, observability, payments, TypeScript, Python, cloud, agent teams, accessibility, and more.

Load the exact skill's `SKILL.md` only when the router below selects it. Do not load the whole bundle at once.

## Load When

- The task touches backend, API, database, auth, billing, queues, storage, integrations, or shared architecture.
- The task requires security, performance, observability, CI/CD, TypeScript, React, Next.js, Node.js, SQL, or testing architecture.
- The task has multiple engineering workstreams that benefit from specialist decomposition.
- The task changes a shared service, global contract, or high-blast-radius file.

## Do Not Load When

- The task is a tiny UI/copy change with no engineering risk.
- The task is marketing/legal/strategy-only.
- The task is a simple bug where `2) Debugging` is enough.

## Subskill Router

| Signal | Use |
|---|---|
| `API design`, `service boundary`, `schema`, `architecture` | `agents-main/plugins/backend-development/skills/api-design-principles/SKILL.md` |
| `auth`, `permissions`, `session`, `user ownership` | `agents-main/plugins/developer-essentials/skills/auth-implementation-patterns/SKILL.md` |
| `security`, `PII`, `secrets`, `threat model`, `external calls` | `agents-main/plugins/security-scanning/skills/security-requirement-extraction/SKILL.md` |
| `STRIDE`, `threat analysis` | `agents-main/plugins/security-scanning/skills/stride-analysis-patterns/SKILL.md` |
| `slow`, `latency`, `N+1`, `cache`, `render performance`, `scale` | `agents-main/plugins/application-performance/agents/performance-engineer.md` |
| `Postgres`, `SQL`, `migration`, `index`, `RLS` | `agents-main/plugins/database-design/skills/postgresql/SKILL.md` |
| `Next.js`, `App Router`, `React`, `state management`, `Tailwind` | `agents-main/plugins/frontend-mobile-development/skills/nextjs-app-router-patterns/SKILL.md` |
| `accessibility`, `screen reader`, `WCAG` | `agents-main/plugins/accessibility-compliance/skills/screen-reader-testing/SKILL.md` |
| `TypeScript`, `advanced types` | `agents-main/plugins/javascript-typescript/skills/typescript-advanced-types/SKILL.md` |
| `Jest`, `Testing Library`, `unit test`, `integration test` | `agents-main/plugins/javascript-typescript/skills/javascript-testing-patterns/SKILL.md` |
| `Node.js`, `server code`, `backend TypeScript` | `agents-main/plugins/javascript-typescript/skills/nodejs-backend-patterns/SKILL.md` |
| `Stripe`, `billing`, `payments`, `PCI` | `agents-main/plugins/payment-processing/skills/stripe-integration/SKILL.md` |
| `GitHub Actions`, `deployment`, `CI`, `secrets` | `agents-main/plugins/cicd-automation/skills/github-actions-templates/SKILL.md` |
| `logs`, `traces`, `metrics`, `SLO`, `Grafana`, `Prometheus` | `agents-main/plugins/observability-monitoring/skills/distributed-tracing/SKILL.md` |
| `agent team`, `parallel debugging`, `multi reviewer` | `agents-main/plugins/agent-teams/skills/parallel-debugging/SKILL.md` |

## Engineering Rule

Before changing shared systems, write a brief impact map:

```text
Shared file or contract:
Known consumers:
Risk:
Required tests:
Rollback path:
```

If the impact is unclear, stop and ask.
