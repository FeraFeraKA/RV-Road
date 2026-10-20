# 01: Learning data models

## Context

- Source card: [01. Модели учебных данных](https://trello.com/c/FJS0bI5h)
- Developer: Fera
- Reviewer: DIMUZ
- Objective: describe a contract that can represent both learning paths and supply a list, graph, and topic page.
- Vue focus: TypeScript contracts and separation of domain data from component presentation. This exercise does not implement reactivity.
- Prerequisites: TypeScript object types, interfaces, unions, arrays, and references; read `docs/product.md` and `docs/architecture.md`.

## Agent-owned preparation

- Create `app/types/roadmap.ts` as an empty TypeScript module with a learning entry point.
- Document the expected behavior and review scenarios without choosing the model fields for the learner.
- Verify formatting and the application build. The new module is intentionally unused until the contract is implemented.

## Human-owned implementation

- Define and export `Roadmap`, `Section`, `Topic`, and `Resource`, with supporting types as needed.
- Entry point: `app/types/roadmap.ts`, `TODO(learn: 01-learning-models)`.
- Inputs/outputs: the contract must describe React and Vue paths, RU/EN content, stable entity identities, publication states, resources, dependencies, and graph positions.
- Decide how paths refer to sections and sections refer to topics. Be able to explain the choice using a topic shared by both paths.
- Keep shared topic identity independent of framework and locale. A topic can appear at different coordinates in different graphs.
- Support the planned navigation: path overview opens a section; section opens a topic; topic opens its material. A separate graph view does not require a recursively nested roadmap model.
- Agree on field names and relationships with DIMUZ before downstream tasks consume the contract. Agreement has not yet been recorded.
- Boundaries: no UI changes, populated learning paths, graph adapter, routing, progress implementation, storage, Pinia, Markdown tooling, quizzes, or arbitrary recursive maps.
- Empty interfaces, `any`, and broad assertions do not demonstrate a completed domain contract. Choose meaningful constraints yourself.

## Acceptance criteria

- [ ] The four domain models and necessary supporting types are exported.
- [ ] React/Vue paths and RU/EN content can be described without duplicating the identity of a shared topic.
- [ ] Published and draft topics are distinguishable; an upcoming topic can be described without pretending it has a completed lesson.
- [ ] Section membership and topic dependencies are distinguishable and can supply both a list and graph.
- [ ] Graph placement allows the same topic to occupy different positions in different graphs.
- [ ] A topic can have no resources; an empty section can be represented.
- [ ] Unsupported locale, framework, and publication values are rejected by the chosen types.
- [ ] Domain models do not depend on Vue, Vue Flow, browser APIs, or a persistence format.
- [ ] DIMUZ has reviewed the contract and both developers agree on the relationships and field names.

## How to verify

- Run `pnpm exec prettier --check app/types/roadmap.ts docs/exercises/01-learning-models.md`.
- Run `pnpm build` to check application integration. This command does not establish TypeScript assignability or completion of the exercise.
- In an editor with TypeScript diagnostics, construct temporary examples against your exported models: React and Vue paths sharing HTML, RU/EN content, distinct placements of HTML, a draft topic, an empty section, and a topic without resources.
- Try unsupported locale, framework, and publication values and inspect the diagnostics. Do not use assertions to suppress them.
- Trace how a list, graph, and topic page would find their data from those examples; review the trace with DIMUZ.
- Current placeholder behavior: the module exports no models and the existing demo remains unchanged. All feature acceptance criteria above remain unfinished.

## Reflection

- What identifies a topic independently of where and in which language it appears?
- Which information belongs to a topic, and which belongs to its placement in a graph?
- How does your relationship model affect consumers and future updates?
- Which invalid values can TypeScript reject, and which relationships still require runtime validation?

## Observed milestones

- Scaffold prepared: 2026-10-20; initial scaffold commit is recorded in Git history for this file.
- Human implementation reviewed: not yet.
- Remaining work: implement the domain contract, verify the review scenarios, and agree on the contract with DIMUZ.
