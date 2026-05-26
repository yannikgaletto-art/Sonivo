---
name: knowledge-legal
description: Use for GDPR, privacy policy, DPA, AVV, ToS, contracts, NDA, compliance, legal risk, plain-English legal review, missing protections, negotiation clauses, and regulated workflow questions.
status: active
---

# 4) Legal

Use this group when legal, compliance, privacy, contract, or regulatory risk affects the task.

This index is a router, not the skill content. Read it to select one exact subskill, then open only that subskill's `SKILL.md`.

## Actual Skill Bundle

This file is only the router/index.

The full legal bundle is included here:

```text
Generalistische Knowledge Database/4) Legal/ai-legal-claude-main/
```

Bundled skills: 14 `SKILL.md` files, including legal review, privacy, compliance, NDA, terms, contract comparison, plain-English translation, missing protections, and risk analysis.

Load the exact skill's `SKILL.md` only when the router below selects it. Do not load the whole bundle at once.

## Load When

- The task mentions GDPR, DSGVO, privacy, DPA, AVV, ToS, terms, policy, cookie consent, data retention, subprocessors, DPIA, EU AI Act, or compliance.
- The user asks to review, compare, draft, summarize, or negotiate a contract.
- The user asks for NDA, freelancer agreement, risk analysis, missing protections, or plain-English translation.
- The task affects user data, personal data, AI processing of personal data, billing terms, or externally visible legal text.

## Do Not Load When

- The task is normal implementation with no legal or privacy decision.
- The task is security engineering only. Use `5) Engineer Subagents` and `7) Core Learning/02`.
- The task is marketing copy with no legal claims. Use `3) Marketing Backbone`.

## Subskill Router

| Signal | Use |
|---|---|
| `privacy policy`, `GDPR`, `DSGVO`, `DPA`, `AVV`, `data processing` | `ai-legal-claude-main/skills/legal-privacy/SKILL.md` |
| `compliance`, `regulated workflow`, `EU AI Act`, `risk controls` | `ai-legal-claude-main/skills/legal-compliance/SKILL.md` |
| `terms`, `ToS`, `terms of service` | `ai-legal-claude-main/skills/legal-terms/SKILL.md` |
| `NDA`, `confidentiality` | `ai-legal-claude-main/skills/legal-nda/SKILL.md` |
| `contract review`, `risky clause`, `legal risk` | `ai-legal-claude-main/skills/legal-review/SKILL.md` |
| `compare contracts`, `redline`, `version diff` | `ai-legal-claude-main/skills/legal-compare/SKILL.md` |
| `negotiate`, `counter proposal`, `replacement clause` | `ai-legal-claude-main/skills/legal-negotiate/SKILL.md` |
| `plain English`, `legalese` | `ai-legal-claude-main/skills/legal-plain/SKILL.md` |
| `missing clause`, `protections` | `ai-legal-claude-main/skills/legal-missing/SKILL.md` |

## Safety Rule

Legal output is not legal advice. State assumptions, jurisdiction, and unresolved questions. For high-stakes legal decisions, recommend review by a qualified professional.
