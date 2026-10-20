# Architecture and repository map

## Current implementation

The application uses Nuxt 4, Vue 3, TypeScript, and Vue Flow. Pinia, a Markdown rendering pipeline, a backend, and authentication are not implemented.

```text
app/
|-- app.vue                     # Route announcer and NuxtPage
|-- types/roadmap.ts            # Empty learning entry point; domain models not implemented
|-- pages/
|   `-- index.vue               # Demo project-plan list, not the learning roadmap
|-- components/
|   `-- ui/
|       |-- UiBadge.vue
|       |-- UiBox.vue
|       |-- UiButton.vue
|       |-- UiCheckbox.vue
|       |-- UiInput.vue
|       |-- UiLine.vue          # Custom Vue Flow edge
|       `-- UiNavItem.vue
`-- assets/css/
    `-- tokens.css             # Tokens and global Vue Flow styles
public/                        # Static assets
nuxt.config.ts                 # Configuration and CSS entry point
package.json                   # Dependencies and executable commands
```

The map describes responsibilities, not temporary build files. Inspect the repository for its latest state; do not restore unrelated deleted files to match documentation.

## Proposed structure

Create these boundaries incrementally when needed; this is not an instruction to generate every folder now.

```text
app/
|-- pages/[locale]/            # Home and nested path/section/topic routes
|-- layouts/                  # Shared application shell
|-- components/
|   |-- ui/                   # Generic controls
|   |-- roadmap/              # Graph, nodes, lists, viewport controls
|   `-- lesson/               # Material, code samples, resources, navigation
|-- composables/              # Reusable behavior and view/session integration
|-- stores/                   # Pinia, introduced in its learning task
|-- types/                    # Agreed domain contracts
|-- data/                     # Path structure, relationships, fixtures
`-- assets/css/               # Tokens and shared styles
content/                      # Proposed localized lessons; tooling undecided
docs/
|-- architecture.md
|-- conventions.md
|-- decisions.md
|-- learning-workflow.md
|-- product.md
`-- exercises/                # Briefs created when exercises start
```

The page hierarchy must support `product.md`. Agree on domain field names in the data-contract task. Choose content tooling in its own task, not by interpreting this tree as a dependency specification.

## Responsibility and data flow

1. A page validates route context and selects a path, section, or topic.
2. Domain data supplies the same entities to the list and graph.
3. A graph adapter converts relationships into Vue Flow nodes/edges. Presentation emits intent such as topic selection.
4. Progress records completed topic IDs. Derived values supply section/path counts; locale is not part of a completion ID.
5. Session persistence sits behind the progress interface, rather than duplicated storage access in components.
6. A lesson view renders localized content, examples, and resource links.

First practice shared state through a small composable. A dedicated Pinia exercise can then move shared progress ownership into a store, retaining a composable facade if useful. Never keep competing sources of truth.

Graph selection, viewport, and view preference are presentation state, separate from completion records. User-specific state must not leak across SSR requests.

## Maintenance

Update the map when responsibilities move or a proposed layer becomes implemented. Do not inventory every small component. Record significant accepted choices in `decisions.md`.
