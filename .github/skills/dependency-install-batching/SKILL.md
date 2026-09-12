---
name: dependency-install-batching
description: 'Plan and batch local dependency installs (npm/pnpm/yarn) to reduce repeated install commands, token usage, and command executions. Use when tasks may require multiple libraries across upcoming steps.'
argument-hint: 'Describe the upcoming steps and expected dependencies so installs can be batched.'
user-invocable: true
disable-model-invocation: false
---

# Dependency Install Batching

## When to Use
- Any implementation where local packages may be installed with `npm install`, `pnpm add`, or `yarn add`
- Multi-step tasks where additional dependencies may appear later
- Migration, linting, testing, and tooling setup tasks that often add several libraries

## Outcome
Produce one minimal install plan that:
- batches known dependencies into the fewest commands,
- postpones installs when near-term steps are likely to add more packages,
- and avoids unnecessary repeated command executions.

## Procedure
1. Collect dependency requirements from the current request and immediate next steps.
2. Classify each dependency by scope:
- runtime dependency (`dependencies`)
- development dependency (`devDependencies`)
- optional or peer-related dependency
3. Check whether near-term steps are likely to add more libraries.
4. Branch:
- If no additional libraries are expected soon, install now in one grouped command per scope.
- If additional libraries are likely within the next steps, defer and aggregate the list.
5. Before running any install command, re-validate the aggregated list to avoid duplicates and version conflicts.
6. Execute the smallest set of install commands needed, grouped by scope.
7. Continue implementation and only run a new install if a truly new dependency appears.

## Decision Rules
- Prefer one install burst over multiple scattered installs.
- Do not install immediately when upcoming steps are likely to introduce additional packages.
- Keep scope separation clear: runtime and dev packages should not be mixed unless package manager conventions and task constraints justify it.
- If version pinning is required, pin during the batched install instead of later patch installs.
- If uncertainty is high, ask for confirmation before installing.

## Branching Checklist
Use this quick gate before each install:
1. Do I already know all packages needed for the next implementation block?
2. Are upcoming steps likely to require eslint/plugins/build/test libraries?
3. Can I wait a short moment to gather all required packages first?
4. Is there any blocker that requires installing immediately?

If answers are mostly yes to waiting, defer and batch.
If a blocker exists, install only the minimal package set to unblock work, then continue batching.

## Quality Criteria
A good execution satisfies all checks:
- No redundant install commands were run.
- Dependencies were installed in grouped commands where possible.
- Dependency scopes are correct.
- No missing package blocked later steps due to poor planning.
- Commands remained minimal and purposeful.

## Completion Check
Before closing the task, verify:
- A dependency plan was made before running installs.
- Installs were batched whenever practical.
- Any deferred install decision was explicit and justified.
- Any exception (urgent unblock install) was documented and minimized.

## Example Prompts
- "Plan dependency installation for this Angular migration and batch npm installs."
- "Before coding, identify all likely packages and run the fewest install commands."
- "Apply dependency-install-batching while adding lint, test, and formatting tools."
