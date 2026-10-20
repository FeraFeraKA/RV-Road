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

Размеры UI-кита заданы токенами в `app/assets/css/tokens.css`. Базовая единица `--ui-unit: calc(1rem / 16)` позволяет задавать размеры целыми числами и сохраняет масштабирование относительно корневого шрифта. Размер шрифта `html` не переопределяется.

- Отступы: `--space-2xs`, `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl` — 2, 4, 8, 12, 16, 24 единицы.
- Шрифты: `--font-size-xs`, `--font-size-sm`, `--font-size-md`, `--font-size-lg` — 12, 13, 14, 16 единиц.
- Высота контролов: `--control-height-sm`, `--control-height-md`, `--control-height-lg` — 32, 40, 48 единиц.
- Скругления: `--radius-sm`, `--radius-md`, `--radius-control`, `--radius-card` — 4, 6, 8, 10 единиц. Бейджи используют небольшое скругление без искусственного радиуса для капсулы.

Типографика дополнительно умножается на `--text-scale: 1.5`: например, базовые 12/14/16 единиц отображаются как 18/21/24 при стандартном корневом шрифте. Текст страницы также использует эти токены. Масштаб текста меняется отдельно от отступов и размеров иконок.

Компоненты используют готовые токены, например `padding: var(--space-sm) var(--space-md)`. Новые размеры добавляйте в общую шкалу по необходимости. Толщина границ, контура фокуса и SVG-линий задана в пикселях для чёткости; breakpoint навигации остаётся в пикселях относительно ширины окна.

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
