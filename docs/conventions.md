# Development conventions

## Vue and Nuxt

- Prefer Composition API and `<script setup lang="ts">`.
- Type component props and emits. Follow the existing `modelValue` / `update:modelValue` pattern when appropriate.
- Keep route parsing and screen composition in pages; reusable views in components; reusable behavior in composables/stores.
- Use computed values for derivation and watchers for actual side effects. Avoid redundant copies of derived state.
- Keep exercises simple enough to explain. Do not add abstractions just to demonstrate another API.
- Access DOM, storage, and browser-only graph APIs only in client-safe code. Clean up listeners/subscriptions.
- Lists and graphs share domain data and completion state.

## UI and data

- Reuse `UiButton`, `UiBox`, `UiInput`, `UiBadge`, `UiCheckbox`, `UiNavItem`, and `UiLine`.
- Follow CSS Modules and shared tokens. Select accents with `data-framework="vue"` or `data-framework="react"`.
- Start from narrow layouts and verify at 320 px. Keep graphs/code within their own viewport/scroll container.
- Use semantic controls, visible focus, accessible names, and keyboard navigation. Completion must not rely on color alone.
- Keep lessons and translations outside reusable UI components.
- Agree on stable IDs before wiring progress/navigation; shared topics reuse IDs across paths and languages.
- Distinguish fixtures, published topics, and upcoming topics visibly where relevant.
- Introduce Pinia during its learning task. Its store must own shared state without competing copies.

## Checks

Read `package.json` first. Current scripts: `build`, `dev`, `generate`, `preview`, `format`, `format:check`. No dedicated test, lint, or typecheck script exists yet.

- Documentation: format changed Markdown, check links/paths, and inspect the diff.
- Scaffolds/code: run appropriate available build and behavioral checks. Add focused tests only when justified and supported by tooling.
- Scope formatting writes to task-owned files; do not reformat other developers' changes.
- A passing scaffold check does not satisfy the unfinished feature's acceptance criteria. State that distinction explicitly.

## Git and documentation

- Use a separate `task/<task-id>-<short-name>` branch for each product task. Keep follow-up fixes on the same branch. Workflow-only infrastructure and agent changes may go directly to `main`, as defined in `AGENTS.md`; do not switch another developer's branch without a reason.
- Stage only task-owned files and preserve unrelated changes.
- Make a Conventional Commit and push after implementation, including scaffold/documentation delivery. Report problems; do not force-push or silently rewrite history.
- Documentation, learning briefs, and instructional TODOs are English. Human conversation may be Russian.
- Trello holds delivery status. Briefs hold exercise details and observed learning milestones; do not mirror the whole board into documentation.
