# Decision log

Record accepted choices and reasons. Proposed APIs/tooling remain proposals until agreed. Add a dated entry when a decision changes.

## 2026-10-20: Scaffold-first learning

Default agent output for development tasks is a runnable scaffold and brief; humans implement the selected behavior. Hints/review precede complete solutions unless explicitly delegated. Both developers need independent practice.

Reason: accelerate preparation while preserving active learning.

## 2026-10-20: Reuse the existing stack

Continue with Nuxt 4, Vue 3, TypeScript, Vue Flow, the existing UI kit, and tokens. This does not authorize additional packages.

Reason: spend learning time on application behavior instead of replacing the foundation.

## 2026-10-20: Composables before Pinia

Practice a small shared-state behavior through a composable, then introduce Pinia in a focused exercise. Shared progress has one source of truth. Pinia is not yet installed.

Reason: understand reactivity/state ownership before learning store integration.

## 2026-10-20: Bilingual content and session progress

Use RU/EN with stable topic IDs across translations; initially persist completion in `sessionStorage`. Accounts/backend synchronization are future work.

Reason: keep initial behavior bounded and isolate future persistence changes.

## 2026-10-20: Keep the provisional Trello plan

Documentation work does not modify existing tasks. The week targets an application with starter content; detailed bilingual courses continue later.

Reason: adapt exercise briefs to actual progress without silently rewriting team commitments.
