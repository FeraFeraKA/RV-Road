# Agent instructions

## Purpose and context

Fera and DIMUZ are learning Vue by building a React/Vue roadmap application. Optimize for working software and independent understanding for both developers.

Before a development task, read this file, `docs/learning-workflow.md`, `docs/architecture.md`, and `docs/conventions.md`. Consult `docs/product.md` and `docs/decisions.md` for relevant behavior and choices. Inspect actual source files: planned folders and APIs in documentation are not implemented code.

## Default: scaffold an exercise

- A development-task request means prepare a runnable learning scaffold, unless the human explicitly delegates full implementation.
- Identify the learner, learning objective, observable result, prerequisites, and acceptance criteria. Infer these from task context where possible; ask only when a material learning boundary is unclear.
- Create a task brief using the template in `docs/learning-workflow.md`. Give the human a meaningful behavior to implement, not isolated syntax to fill in.
- Prepare necessary supporting files, fixtures, interfaces, route wiring, and safe placeholders. Keep the application runnable. Do not generate infrastructure for unrelated future tasks.
- Leave the selected learning behavior unimplemented. Do not reveal its answer through another file, fixtures, comments, tests, or the handoff.
- Mark entry points with `TODO(learn: <task-id>)` and reference the brief. Describe inputs, outputs, and expected behavior without giving the algorithm.
- An error report or review request does not authorize solving the exercise. Diagnose, explain, and offer progressively stronger hints when requested.
- If the human explicitly requests a solution or full implementation, honor that scope and explain key choices. Preserve unrelated exercises.
- Explicitly delegated documentation, setup, and supporting work may be completed normally. Do not turn every edit into an exercise or require repeated permission for already authorized steps.

## Learning and collaboration

- Both developers must implement core Vue concepts themselves. Reviewing another developer's implementation does not replace independent practice.
- Use the coverage guide and task briefs in `docs/learning-workflow.md`. Do not promise mastery of all Vue in seven days.
- Introduce Pinia after a small composable-based shared-state exercise. Pinia is planned, not currently installed. Do not add it during unrelated tasks or documentation work.
- Trello cards are provisional planning inputs. For authorized new product work outside the current task's scope, create a separate `task/<task-id>-<short-name>` branch and a short Trello card on the project board before implementation. Check for an existing card first and reuse it when it already covers the work. Include the intended result and branch name, then add the PR link when available. This standing authorization covers card creation for such work; it does not authorize inventing unrelated work or rewriting, moving, assigning, or completing other cards without a human request.
- Distinguish a prepared scaffold from an implemented, reviewed feature. Do not mark unfinished learning work complete.
- Preserve other developers' work and unrelated local changes.

## Code and documentation

- Reuse the current Nuxt, Vue, TypeScript, Vue Flow, UI kit, and CSS tokens. Avoid new dependencies without a concrete need in the current task.
- Prefer `<script setup lang="ts">` and existing CSS Modules conventions. Separate page composition, reusable presentation, domain data, and state responsibilities.
- Keep documentation, exercise briefs, and instructional TODO comments in English. Product translations follow the selected locale. Speak to humans in their language.
- Use the package manager declared in `package.json`. Verify available scripts; do not invent test, lint, or typecheck commands.
- Keep browser APIs out of server rendering. Clearly distinguish fixtures and placeholder behavior from completed behavior.
- Update affected documentation when structure or architectural choices change. State what exists and what is only proposed.

## Checks, commits, and handoff

- Workflow-only infrastructure and agent changes (for example agent instructions, development conventions, formatting tools, and CI configuration) may be committed and pushed directly to `main` without a separate task branch or PR. This exception applies only to changes governing development, not application behavior or product infrastructure such as i18n, routing, or storage. Preserve unrelated work and run the relevant checks normally.
- Verify the edit at the appropriate level: formatting/links for documentation, available build and relevant behavior checks for code/scaffolds.
- A scaffold's checks should pass for its stated contract. List unfinished feature criteria explicitly; do not hide failures or present placeholder output as completion.
- After each implementation or scaffold delivery, make a Conventional Commit and run `git push`. This includes documentation changes. Stage only task-owned files.
- Use truthful messages, for example `chore(learning): scaffold progress exercise` or `docs: document scaffold-first learning`. Do not describe a scaffold as a completed feature.
- When creating a pull request, immediately request review from the other developer: Fera's work is reviewed by DIMUZ, and DIMUZ's work is reviewed by Fera. Resolve and verify the reviewer's GitHub account before requesting review; do not guess the username or request self-review. If the account cannot be identified or GitHub rejects the request, report it explicitly in the handoff.
- Read-only mentoring/review needs no commit. Do not amend, force-push, or discard changes to bypass a push problem. Report blocked commit/push accurately.
- Handoff: what is prepared, what the human must implement, exact TODO locations, verification steps, checks actually run, and commit/push status. Stop after delivering a scaffold; do not continue into the human-owned implementation.
