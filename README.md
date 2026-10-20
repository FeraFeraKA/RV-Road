# Roadmap

Стартовый проект на Nuxt 4, Vue 3 и TypeScript.

## Запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Команды

- `npm run dev` — локальная разработка.
- `npm run build` — production-сборка.
- `npm run preview` — просмотр production-сборки.
- `npm run generate` — генерация статического сайта.

Страницы находятся в `app/pages`, общие компоненты — в `app/components`, стили — в `app/assets/css`.

## UI-компоненты

Базовые компоненты находятся в `app/components/ui` и автоматически доступны в Nuxt:

- `UiButton`, `UiBox`, `UiInput`, `UiBadge`, `UiCheckbox`, `UiNavItem`.
- `UiLine` — кастомное ребро VueFlow с кривой Безье, вариантами `accent`/`muted` и анимацией.

Цвет акцента задаётся атрибутом `data-framework`: `vue` — зелёный, `react` — синий. Текущий интерфейс использует тему Vue. Базовые стили VueFlow уже подключены глобально.

```vue
<UiCheckbox v-model="enabled">Включено</UiCheckbox>
```

Для ребра VueFlow зарегистрируйте `UiLine` как edge type:

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
