# Roadmap

A Nuxt 4, Vue 3, and TypeScript application for React/Vue learning roadmaps. Two developers practice Vue through real features while AI prepares exercises and reviews their work.

## Getting started

Use the pnpm version declared in `package.json` (currently 10.32.1).

```sh
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

| Command             | Purpose                                                          |
| ------------------- | ---------------------------------------------------------------- |
| `pnpm build`        | Build for production.                                            |
| `pnpm preview`      | Preview a production build locally.                              |
| `pnpm generate`     | Generate a static site.                                          |
| `pnpm format:check` | Check repository formatting.                                     |
| `pnpm format`       | Rewrite formatting; avoid running over others' uncommitted work. |

There is currently no dedicated test, lint, or typecheck script.

## Documentation and AI collaboration

- [AGENTS.md](AGENTS.md): shared agent instructions and learning boundaries.
- [Learning workflow](docs/learning-workflow.md): scaffolding, independent implementation, hints, review, and the exercise brief template.
- [Architecture](docs/architecture.md): existing code, proposed folders, and data flow.
- [Product](docs/product.md): intended routes and first-release scope.
- [Conventions](docs/conventions.md): Vue, styling, state, verification, and Git.
- [Decisions](docs/decisions.md): accepted choices and rationale.

By default, the agent prepares a runnable task scaffold and leaves a meaningful behavior for you to implement. Explicitly request full implementation when desired. A prepared scaffold is not a finished feature. Existing Trello tasks remain provisional planning inputs.

The current application is a demo plan list and UI kit. Learning routes, materials, progress, translations, and Pinia integration are planned, not implemented.

## UI kit

Components in `app/components/ui` are automatically available through Nuxt:

- `UiButton`, `UiBox`, `UiInput`, `UiBadge`, `UiCheckbox`, `UiNavItem`.
- `UiLine`: a custom Vue Flow Bezier edge with `accent`/`muted` tones and optional animation.

Use `data-framework="vue"` for green accents and `data-framework="react"` for blue accents. Vue Flow base styles are imported globally.

```vue
<UiCheckbox v-model="enabled">Enabled</UiCheckbox>
```

Register `UiLine` as a custom edge type:

```vue
<script setup lang="ts">
import { VueFlow } from '@vue-flow/core';
import UiLine from '~/components/ui/UiLine.vue';

const edgeTypes = { roadmap: UiLine };
const edges = [{ id: 'edge-1-2', source: '1', target: '2', type: 'roadmap' }];
</script>

<template>
  <VueFlow :edges="edges" :edge-types="edgeTypes" />
</template>
```

This illustrates edge registration; the caller still supplies the graph's nodes.

## Design tokens

Shared tokens live in `app/assets/css/tokens.css`. One unit is `--ui-unit: calc(1rem / 16)`, preserving root-font scaling without overriding the HTML font size.

- Spacing: `--space-2xs`, `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl` are 2, 4, 8, 12, 16, and 24 units.
- Fonts: `--font-size-xs`, `--font-size-sm`, `--font-size-md`, `--font-size-lg` start at 12, 13, 14, and 16 units.
- Control heights: `--control-height-sm`, `--control-height-md`, `--control-height-lg` are 32, 40, and 48 units.
- Radii: `--radius-sm`, `--radius-md`, `--radius-control`, `--radius-card` are 4, 6, 8, and 10 units. Badges use a small radius rather than a pill shape.

Typography also uses `--text-scale: 1.5`: base sizes 12, 14, and 16 render as 18, 21, and 24 at the standard root font size. Text scales separately from spacing and icons.

Reuse tokens such as `padding: var(--space-sm) var(--space-md)` and extend the shared scale when needed. Borders, focus outlines, SVG stroke widths, and navigation breakpoints use pixels.
