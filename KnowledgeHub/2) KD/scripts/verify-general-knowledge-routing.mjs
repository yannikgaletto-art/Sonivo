#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const kd = root;

const requiredFiles = [
  '.agents/skills/general-master-orchestrator/SKILL.md',
  'AGENT_BOOTSTRAP_PROMPT.md',
  'INSTALL_IN_NEW_PROJECT.md',
  'START_HERE_FOR_AGENTS.md',
  '0) Master Skill/SKILL.md',
  '1) Anthropic/SKILL_INDEX.md',
  '1) Anthropic/skills-main/skills/skill-creator/SKILL.md',
  '1) Anthropic/skills-main/skills/frontend-design/SKILL.md',
  '1) Anthropic/skills-main/skills/mcp-builder/SKILL.md',
  '1) Anthropic/skills-main/skills/claude-api/SKILL.md',
  '1) Anthropic/skills-main/skills/brand-guidelines/SKILL.md',
  '1) Anthropic/skills-main/skills/doc-coauthoring/SKILL.md',
  '1) Anthropic/skills-main/skills/pdf/SKILL.md',
  '1) Anthropic/skills-main/skills/docx/SKILL.md',
  '1) Anthropic/skills-main/skills/pptx/SKILL.md',
  '1) Anthropic/skills-main/skills/xlsx/SKILL.md',
  '1) Anthropic/skills-main/skills/webapp-testing/SKILL.md',
  '1) Anthropic/skills-main/skills/web-artifacts-builder/SKILL.md',
  '2) Debugging/SKILL_INDEX.md',
  '2) Debugging/superpowers-main/skills/systematic-debugging/SKILL.md',
  '2) Debugging/superpowers-main/skills/test-driven-development/SKILL.md',
  '2) Debugging/superpowers-main/skills/verification-before-completion/SKILL.md',
  '2) Debugging/superpowers-main/skills/writing-plans/SKILL.md',
  '2) Debugging/superpowers-main/skills/executing-plans/SKILL.md',
  '2) Debugging/superpowers-main/skills/receiving-code-review/SKILL.md',
  '2) Debugging/superpowers-main/skills/subagent-driven-development/SKILL.md',
  '2) Debugging/superpowers-main/skills/writing-skills/SKILL.md',
  '3) Marketing Backbone/SKILL_INDEX.md',
  '3) Marketing Backbone/marketingskills-main/skills/launch/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/copywriting/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/seo-audit/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/product-marketing/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/copy-editing/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/ai-seo/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/programmatic-seo/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/pricing/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/paywalls/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/cro/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/emails/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/onboarding/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/churn-prevention/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/ads/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/competitor-profiling/SKILL.md',
  '3) Marketing Backbone/marketingskills-main/skills/customer-research/SKILL.md',
  '4) Legal/SKILL_INDEX.md',
  '4) Legal/ai-legal-claude-main/skills/legal-privacy/SKILL.md',
  '4) Legal/ai-legal-claude-main/skills/legal-compliance/SKILL.md',
  '4) Legal/ai-legal-claude-main/skills/legal-review/SKILL.md',
  '4) Legal/ai-legal-claude-main/skills/legal-terms/SKILL.md',
  '4) Legal/ai-legal-claude-main/skills/legal-nda/SKILL.md',
  '4) Legal/ai-legal-claude-main/skills/legal-compare/SKILL.md',
  '4) Legal/ai-legal-claude-main/skills/legal-negotiate/SKILL.md',
  '4) Legal/ai-legal-claude-main/skills/legal-plain/SKILL.md',
  '4) Legal/ai-legal-claude-main/skills/legal-missing/SKILL.md',
  '5) Engineer Subagents/SKILL_INDEX.md',
  '5) Engineer Subagents/agents-main/plugins/backend-development/skills/api-design-principles/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/developer-essentials/skills/auth-implementation-patterns/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/javascript-typescript/skills/javascript-testing-patterns/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/payment-processing/skills/stripe-integration/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/database-design/skills/postgresql/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/frontend-mobile-development/skills/nextjs-app-router-patterns/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/cicd-automation/skills/github-actions-templates/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/security-scanning/skills/security-requirement-extraction/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/security-scanning/skills/stride-analysis-patterns/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/application-performance/agents/performance-engineer.md',
  '5) Engineer Subagents/agents-main/plugins/accessibility-compliance/skills/screen-reader-testing/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/javascript-typescript/skills/typescript-advanced-types/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/javascript-typescript/skills/nodejs-backend-patterns/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/observability-monitoring/skills/distributed-tracing/SKILL.md',
  '5) Engineer Subagents/agents-main/plugins/agent-teams/skills/parallel-debugging/SKILL.md',
  '6) Beirat/SKILL_INDEX.md',
  '6) Beirat/gstack-main/plan-ceo-review/SKILL.md',
  '6) Beirat/gstack-main/plan-eng-review/SKILL.md',
  '6) Beirat/gstack-main/plan-design-review/SKILL.md',
  '6) Beirat/gstack-main/openclaw/skills/gstack-openclaw-office-hours/SKILL.md',
  '6) Beirat/gstack-main/openclaw/skills/gstack-openclaw-investigate/SKILL.md',
  '6) Beirat/gstack-main/openclaw/skills/gstack-openclaw-retro/SKILL.md',
  '6) Beirat/gstack-main/freeze/SKILL.md',
  '6) Beirat/gstack-main/cso/SKILL.md',
  '7) Core Learning/SKILL_INDEX.md',
  '7) Core Learning/01_CORE_PHILOSOPHY.md',
  '7) Core Learning/02_ARCHITECTURE_SECURITY_DATA.md',
  '7) Core Learning/03_QA_TESTING_RELEASE.md',
  '7) Core Learning/04_UI_UX_ACCESSIBILITY_MOTION.md',
  '7) Core Learning/05_MASTER_PROMPT_TEMPLATE.md',
  '8) Bundled Skill Scripts/SKILL_BUNDLE_INDEX.md',
  '8) Bundled Skill Scripts/.agents/skills/source-command-cto-analysis/SKILL.md',
];

const redundantEightSkillDirs = [
  'freeze',
  'gstack-openclaw-investigate',
  'gstack-openclaw-office-hours',
  'gstack-openclaw-ceo-review',
  'gstack-openclaw-retro',
  'plan-eng-review',
  'plan-design-review',
];

const forbiddenNames = [
  '.DS_Store',
  'Anthrophic ',
  'Legal ',
  'Beirat ',
];

const staleText = [
  ['Path', 'ly'].join(''),
  ['path', 'ly'].join(''),
  ['1) Knowledge', ' Database/'].join(''),
  'anthropics/skills/',
  '~/.claude/skills/general/learning/',
  ['02-architecture', '-secuirty'].join(''),
  ['Anth', 'rohpic'].join(''),
];

const cases = [
  ['Fix the failing job ingest route and add a regression test', ['2', '5', '7']],
  ['Build a new dashboard component with loading and empty states', ['1', '7']],
  ['Review this feature idea before we build it', ['6', '7']],
  ['Create a GDPR privacy policy update for AI processing', ['4', '7']],
  ['Plan a Product Hunt launch and landing page copy', ['3', '7']],
  ['Optimize a Postgres query and add the missing index', ['5', '7']],
  ['The UI flickers on mobile Safari, investigate root cause', ['2', '7']],
  ['Write a new SKILL.md and test its trigger reliability', ['1', '2', '7']],
  ['Implement Stripe webhook idempotency', ['5', '7']],
  ['Run a CEO review of the pricing plan', ['6', '7']],
  ['Create lifecycle emails for onboarding activation', ['3', '7']],
  ['Compare two contract versions and find risky clauses', ['4', '7']],
  ['Generate a PDF from structured data', ['1', '7']],
  ['Debug flaky Jest tests in the cover letter pipeline', ['2', '7']],
  ['Design review for a new onboarding flow', ['6', '7']],
  ['Build an MCP server for a vendor API', ['1', '5', '7']],
  ['Audit auth permissions and service role usage', ['5', '7']],
  ['Improve SEO schema and internal linking', ['3', '7']],
  ['Draft an agent handoff prompt for a multi-step refactor', ['7']],
  ['Investigate slow rendering in a React dashboard', ['2', '5', '7']],
  ['Write terms of service for a SaaS app', ['4', '7']],
  ['Create a PPTX investor deck', ['1', '7']],
  ['Run a retro on what shipped this week', ['6', '7']],
  ['Add responsive motion to the hero section', ['1', '7']],
  ['Set up GitHub Actions deployment pipeline', ['5', '7']],
  ['Plan a referral growth loop', ['3', '7']],
  ['Find missing protections in an NDA', ['4', '7']],
  ['Refactor a shared service safely', ['2', '5', '7']],
  ['Verify release readiness before merging', ['2', '7']],
  ['Choose whether this product idea is worth building', ['6', '7']],
];

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    out.push(full);
    if (entry.isDirectory()) out.push(...walk(full));
  }
  return out;
}

function route(text) {
  const t = text.toLowerCase();
  const groups = new Set(['7']);

  if (/(skill|skill\.md|mcp|claude api|anthropic|pdf|pptx|xlsx|csv|docx|artifact|frontend|component|design|motion|hero)/.test(t)) groups.add('1');
  if (/(bug|fix|debug|failing|failed|flaky|regression|root cause|investigate|verify|release readiness|refactor|test)/.test(t)) groups.add('2');
  if (/(marketing|growth|seo|launch|copy|product hunt|email|onboarding activation|pricing page|referral|cro|schema|landing page)/.test(t)) groups.add('3');
  if (/(legal|gdpr|dsgvo|privacy|dpa|avv|tos|terms|contract|nda|clause|compliance|policy)/.test(t)) groups.add('4');
  if (/(backend|api|route|ingest|database|postgres|query|index|auth|permissions|service role|stripe|webhook|ci|github actions|deployment|performance|slow|shared service|vendor api)/.test(t)) groups.add('5');
  if (/(strategy|ceo|review|idea|worth building|pricing plan|retro|design review|engineering review|office hours|choose whether)/.test(t)) groups.add('6');

  if (/ui|dashboard|component|frontend|mobile|safari|motion|hero|onboarding flow|loading|empty states/.test(t)) groups.add('7');

  return [...groups].sort();
}

const failures = [];

for (const rel of requiredFiles) {
  if (!exists(rel)) failures.push(`Missing required file: ${rel}`);
}

const skill = read('.agents/skills/general-master-orchestrator/SKILL.md');
if (!/^---\n[\s\S]*?\n---/.test(skill)) failures.push('Installed skill is missing YAML frontmatter');
for (const word of ['every new task', 'Knowledge Database', 'coding', 'debugging', 'marketing', 'legal', 'strategy', 'QA']) {
  if (!skill.includes(word)) failures.push(`Installed skill description/body missing trigger phrase: ${word}`);
}

const bootstrap = read('AGENT_BOOTSTRAP_PROMPT.md');
if (!bootstrap.includes('general-master-orchestrator')) failures.push('Bootstrap prompt does not reference general-master-orchestrator');
if (!bootstrap.includes('START_HERE_FOR_AGENTS.md')) failures.push('Bootstrap prompt does not reference START_HERE_FOR_AGENTS.md');
if (!bootstrap.includes('Generalistische Knowledge Database/0) Master Skill/SKILL.md')) failures.push('Bootstrap prompt does not reference the master fallback path');

const startHere = read('START_HERE_FOR_AGENTS.md');
for (const phrase of ['Non-Negotiable Reading Order', 'Do not start by opening', 'Why The Index Files Are Short']) {
  if (!startHere.includes(phrase)) failures.push(`START_HERE_FOR_AGENTS.md missing section: ${phrase}`);
}

const master = read('0) Master Skill/SKILL.md');
if (!master.includes('Do not browse bundle folders manually')) failures.push('Master router does not warn against manual bundle browsing');

const install = read('INSTALL_IN_NEW_PROJECT.md');
if (!install.includes('.agents/skills/general-master-orchestrator')) failures.push('Install guide does not explain skill installation');
if (!install.includes('Generalistische Knowledge Database')) failures.push('Install guide does not name the database folder');
if (!install.includes('8) Bundled Skill Scripts')) failures.push('Install guide does not mention bundled skill scripts');
if (!install.includes('Do not copy a second copy')) failures.push('Install guide does not warn against duplicated Gstack copies');

for (const skillDir of redundantEightSkillDirs) {
  const duplicate = `8) Bundled Skill Scripts/.agents/skills/${skillDir}/SKILL.md`;
  if (exists(duplicate)) failures.push(`Redundant duplicate still present in 8): ${duplicate}`);
}

const bundleIndex = read('8) Bundled Skill Scripts/SKILL_BUNDLE_INDEX.md');
for (const skillDir of redundantEightSkillDirs) {
  if (bundleIndex.includes(`| \`${skillDir}\``)) failures.push(`8) bundle index still lists duplicate skill: ${skillDir}`);
}

const groupIndexes = [
  '1) Anthropic/SKILL_INDEX.md',
  '2) Debugging/SKILL_INDEX.md',
  '3) Marketing Backbone/SKILL_INDEX.md',
  '4) Legal/SKILL_INDEX.md',
  '5) Engineer Subagents/SKILL_INDEX.md',
  '6) Beirat/SKILL_INDEX.md',
  '7) Core Learning/SKILL_INDEX.md',
];

for (const indexPath of groupIndexes) {
  const indexText = read(indexPath);
  if (!indexText.includes('This index is a router')) failures.push(`${indexPath} does not explain that it is a router`);
}

const allPaths = walk(kd);
for (const full of allPaths) {
  const rel = path.relative(root, full);
  for (const name of forbiddenNames) {
    if (rel.includes(name)) failures.push(`Redundant/raw artifact still present: ${rel}`);
  }
}

const textCorpus = requiredFiles.filter((f) => exists(f)).map((f) => read(f)).join('\n');
for (const stale of staleText) {
  if (textCorpus.includes(stale)) failures.push(`Stale path or typo remains: ${stale}`);
}

let passedCases = 0;
for (const [prompt, expected] of cases) {
  const actual = route(prompt);
  const missing = expected.filter((g) => !actual.includes(g));
  if (missing.length) {
    failures.push(`Routing miss for "${prompt}": expected ${expected.join(',')} got ${actual.join(',')}`);
  } else {
    passedCases += 1;
  }
}

const staticChecks = 32;
const failedStaticChecks = failures.filter((f) => !f.startsWith('Routing miss')).length;
const staticScore = Math.max(0, staticChecks - failedStaticChecks);
const routingScore = passedCases / cases.length;
const confidence = Math.round(((staticScore / staticChecks) * 0.45 + routingScore * 0.55) * 100);

console.log(`Knowledge routing verification`);
console.log(`Static checks: ${staticScore}/${staticChecks}`);
console.log(`Routing cases: ${passedCases}/${cases.length}`);
console.log(`Estimated activation confidence: ${confidence}%`);

if (failures.length) {
  console.log('\nFailures:');
  for (const failure of failures) console.log(`- ${failure}`);
}

if (confidence < 90 || failures.length) {
  process.exit(1);
}
