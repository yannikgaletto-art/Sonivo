# Curation Audit

This file records what is intentionally kept, what may be removed, and what agents should ignore.

## Keep

Keep all decisive skill content:

- Every `SKILL.md`.
- Every folder that is directly referenced by a selected `SKILL.md`.
- Scripts, templates, reference files, and assets that a selected skill explicitly uses.
- core directives in `7) Core Learning/`.
- The bundled source trees under groups `1)` through `6)`.

## Ignore Unless Selected

Agents should not load these by default:

- Upstream `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `LICENSE`, package metadata, and CI files.
- Test fixtures and benchmark outputs.
- Branding images, extension icons, README screenshots, and generated demo files.
- Full bundle folders such as `skills-main`, `superpowers-main`, `agents-main`, and `gstack-main`.

These may exist because they came from upstream skill bundles. Their existence does not mean they are part of normal task context.

## Safe Removal Rule

Only remove files when all are true:

1. The file is not a `SKILL.md`.
2. No selected `SKILL.md` references it.
3. It is not a script/template/reference needed by a selected skill.
4. It is a branding/demo/test artifact that distracts from routing.

When unsure, keep the file and improve routing instead.

## Removed As Redundant

The following files were removed because they are visual branding or README illustration artifacts, not skill instructions or required skill resources:

```text
2) Debugging/superpowers-main/assets/app-icon.png
2) Debugging/superpowers-main/assets/superpowers-small.svg
4) Legal/ai-legal-claude-main/assets/banner.svg
6) Beirat/gstack-main/docs/images/github-2013.png
6) Beirat/gstack-main/docs/images/github-2026.png
```

## Kept Despite Being Media Or Large

These files are intentionally kept:

```text
1) Anthropic/skills-main/skills/theme-factory/theme-showcase.pdf
4) Legal/ai-legal-claude-main/sample-contract.pdf
6) Beirat/gstack-main/extension/icons/
6) Beirat/gstack-main/scripts/app/icon.icns
6) Beirat/gstack-main/browse/test/fixtures/security-bench-haiku-responses.json
```

Reason: they are referenced by a skill, script, manifest, or test fixture inside the upstream bundle. Removing them could break an upstream workflow even if normal general routing will not load them.
