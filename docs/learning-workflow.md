# Scaffold-first learning workflow

## Working agreement

The agent prepares a bounded exercise inside the real application. The developer implements a meaningful behavior, then the agent helps verify and understand it. A task request does not automatically delegate the learning implementation.

Existing Trello cards are planning inputs. One card may produce multiple exercises or separate practice for both people. Do not modify the board without a human request.

## Lifecycle

1. **Inspect and define:** read relevant code, identify prerequisites and learning goals, and select one observable behavior. State the agent-owned and human-owned work. Ask only when a material boundary is unclear.
2. **Write a brief:** create `docs/exercises/<task-id>-<short-name>.md` using the template below. Reuse the source task identifier; add suffixes for distinct exercises.
3. **Prepare:** add only supporting files, fixtures, contracts, imports, wiring, and safe placeholders. Keep the selected learning behavior unimplemented and the project runnable.
4. **Verify and hand off:** run relevant checks, commit and push the scaffold, provide exact TODO locations and verification steps, then stop for the developer to implement.
5. **Support:** explain errors and provide progressively stronger hints on request. A bug report is not permission to rewrite the exercise.
6. **Review and reflect:** verify acceptance criteria, explain correctness/reactivity issues, and let the developer make corrections. Record only observed milestones. Commit/push any agent-made follow-up edits normally.

Already authorized steps do not require repeated approval. Explicit requests for a complete solution override the learning default for that scope. Documentation and supporting work can be delegated in full.

## Scaffold quality

Leave a coherent problem such as choosing reactive state, deriving progress, connecting component events, handling route context, or moving state into Pinia. Do not leave only isolated syntax blanks.

Do not hide the answer in fixtures, comments, alternate files, or implementation-mirroring tests. Behavioral checks should allow valid alternative solutions unless a particular API is the explicit learning objective.

Use identifiable comments:

```ts
// TODO(learn: 15-progress): Implement the behavior described in
// docs/exercises/15-progress.md. Preserve the public contract.
// Until then, callers receive the documented empty placeholder state.
```

Choose safe placeholders: empty data, a disabled action, or a clearly labeled preview. Avoid exceptions during ordinary navigation and do not pretend a no-op saved data. Document remaining criteria rather than disabling checks. Keep implementation details out of product-facing flows except an appropriate unfinished-state message.

## Hints and review

1. Explain the symptom and ask a targeted diagnostic question.
2. On request, identify the relevant concept and primary documentation.
3. On request, show a small example in another domain or a focused fragment.
4. Provide the actual solution only when explicitly requested, with an explanation.

Prioritize behavior, state ownership, reactivity, props/events, SSR boundaries, and accessibility. Distinguish bugs from reasonable choices. Do not rewrite working learner code just to impose style.

## Practice coverage for the week

This is a guide, not a replacement schedule or a promise to master all Vue. Both developers should independently practice each area in their feature or a small follow-up exercise; review alone is insufficient.

| Area                  | Suitable practice                                          | Evidence of understanding                                                                                       |
| --------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SFCs/templates        | A card with bindings, conditions, and keyed lists.         | Explain rendering and list identity.                                                                            |
| Component contracts   | Props, typed emits, slots, and a two-way input.            | Trace data down/events up without mutating props.                                                               |
| Reactivity            | Selection, filtering, derived progress.                    | Explain ref/reactive/computed and watcher side effects.                                                         |
| Lifecycle/composables | Extract behavior; session persistence or listener cleanup. | Explain ownership, cleanup, client-only APIs.                                                                   |
| Nuxt routing          | Params, layouts, breadcrumbs, direct links.                | Handle unknown routes without prior navigation.                                                                 |
| Async UI              | Load a fixture through an explicit async boundary.         | Show loading, empty, error, success without adding a backend.                                                   |
| Pinia                 | Migrate shared progress and connect another screen.        | Explain state/getters/actions, reactive consumption and storeToRefs where appropriate, and one source of truth. |
| Integration           | Review and change the other person's feature.              | Reproduce, explain, and verify a bug fix.                                                                       |

Start with a composable-based state exercise. Later, inspect the then-current setup and introduce a Nuxt-compatible Pinia integration in a dedicated task. Do not install it or refactor state for unrelated scaffolds. Each developer writes store logic or a meaningful store-consuming behavior themselves.

Advanced APIs can wait for a concrete need. Do not invent product features to tick every framework API off a list.

## Exercise brief template

```markdown
# <Task ID>: <Exercise title>

## Context

- Source card: <URL/identifier, if available>
- Developer: <Fera or DIMUZ>
- Reviewer: <the other developer>
- Objective: <observable result>
- Vue focus: <specific concepts>
- Prerequisites: <existing contracts/completed exercises>

## Agent-owned preparation

- <Supporting files, fixtures, wiring, interfaces>
- <Checks establishing a runnable scaffold>

## Human-owned implementation

- <Meaningful behavior to implement>
- Entry points: <exact files/symbols and TODO IDs after scaffolding>
- Inputs/outputs: <public contract and examples, without the algorithm>
- Boundaries: <out-of-scope work>

## Acceptance criteria

- [ ] <Observable successful interaction>
- [ ] <Relevant empty/invalid/error case>
- [ ] <Integration/accessibility behavior where applicable>

## How to verify

- <Actual command/manual steps>
- <Expected implemented result>
- <Current placeholder behavior and unfinished criteria>

## Reflection

- <Question about ownership or data flow>
- <Question about the Vue mechanism>

## Observed milestones

- Scaffold prepared: <not yet / date and commit>
- Human implementation reviewed: <not yet / date and evidence>
- Remaining work: <specific behavior>
```

Populate only observed milestones. Do not provide reflection answers before the learner has tried. Keep board status changes under human control.
