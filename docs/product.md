# Product behavior and scope

## Purpose

Build a learning roadmap application while two developers practice Vue. Learners choose React or Vue, explore connected sections/topics, read materials, and mark topics studied.

Trello is a provisional delivery plan. This document describes intended behavior, not completed features or permission to change the board.

## Planned routes

| Route                                          | Purpose                                                |
| ---------------------------------------------- | ------------------------------------------------------ |
| `/`                                            | Redirect to `/ru`.                                     |
| `/:locale`                                     | Welcome, product explanation, React/Vue entry points.  |
| `/:locale/roadmaps/:framework`                 | Sections as a list or connected graph.                 |
| `/:locale/roadmaps/:framework/:section`        | Topics and dependencies in a section.                  |
| `/:locale/roadmaps/:framework/:section/:topic` | Full-screen material, examples, resources, completion. |

Locales are `ru`/`en`; frameworks are `react`/`vue`. Technical slugs are shared across languages. Unknown entity/locale combinations show 404. Language switching retains the current location; framework switching opens that path's overview.

Nuxt i18n owns locale prefixes; the route table describes public URLs, not a manual `[locale]` page directory. Only the localized demo home is currently wired; learning routes remain planned.

## Planned first release

- Begin with web fundamentals before framework-specific topics.
- Default to a list on mobile and graph on desktop, with a view switch on both.
- Provide graph pan, zoom, and fit-to-view, without graph editing.
- Navigate path overview -> section -> full-screen topic.
- Show explanation, code examples, resources, and previous/next published-topic links.
- Mark and unmark completion. Count unique published topics; empty sections display 0%.
- Reuse completion IDs for shared topics across paths and locales.
- Preserve progress on reload with `sessionStorage`, subject to the browser's page-session lifecycle. No account or cross-device persistence.
- Restore view preference and viewport when returning to a map.
- Label unpublished topics as upcoming; do not open empty lessons or include them in progress percentages.

The provisional week covers application behavior and six initial bilingual topics: HTML, JavaScript basics, React components/state, and Vue components/reactivity. Detailed courses continue later.

Accounts, backend synchronization, graph editing, bookmarks, notes, comparisons, code execution/grading, and production hosting are outside this first release. Expanding these boundaries requires a human request.
