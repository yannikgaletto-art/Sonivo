---
name: 02-architecture-security-data
description: Load before backend, API, database, auth, storage, AI calls, payments, queues, migrations, shared files, or any work that can affect user data, privacy, durable state, or system trust.
status: mandatory-for-backend-data-security
---

# 02 Architecture, Security, Data

Use when the task touches backend, state, data, auth, privacy, AI calls, billing, queues, storage, or shared architecture.

## Core Contracts

1. No user data loss.
2. No false success responses.
3. No blast radius on unrelated features.
4. Server validates, database enforces.
5. Current code and authoritative migrations beat old docs.

## Double Assurance

No route may return success until durable state proves it.

```text
Write -> Read back -> Validate -> Success
```

Use this for onboarding, settings, uploads, generated documents, credits, deletes, billing, and status transitions.

## Security Defaults

- Auth first.
- Scope every user query by user id where applicable.
- Never expose service-role secrets to the client.
- Never log PII.
- Sanitize user data before external AI calls.
- Use idempotency for webhooks, payments, imports, retries, and queues.

## Shared File Rule

Before touching shared/global files, create an impact map:

```text
File:
Consumers:
Risk:
Required tests:
Rollback:
```

Stop if the user has not approved a high-blast-radius change.
