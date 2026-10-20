<script setup lang="ts">
import { computed, ref } from 'vue';

useSeoMeta({
  title: 'Дорожные карты — Roadmap',
  description: 'Планируйте этапы, связывайте задачи и следите за прогрессом.',
});

const query = ref('');
const mineOnly = ref(false);
const plans = [
  {
    name: 'Запуск продукта',
    id: 'rm_01e9267dd8b88bc2b44cdb9216e4ddaf',
    jobs: 8,
    roots: 3,
    updated: '20 окт, 10:42',
    status: 'В работе',
    tone: 'info',
    mine: true,
  },
  {
    name: 'Редизайн интерфейса',
    id: 'rm_01925b36fa99bf5e1d6a334f757924',
    jobs: 12,
    roots: 4,
    updated: '19 окт, 18:10',
    status: 'Планирование',
    tone: 'warning',
    mine: true,
  },
  {
    name: 'Мобильное приложение',
    id: 'rm_01d2a8c86fe3a99dc41266d5a277ab',
    jobs: 16,
    roots: 2,
    updated: '18 окт, 13:24',
    status: 'Завершено',
    tone: 'success',
    mine: false,
  },
  {
    name: 'Дизайн-система',
    id: 'rm_01a55d2480fca217c446b8f27711aa',
    jobs: 6,
    roots: 1,
    updated: '16 окт, 09:05',
    status: 'В работе',
    tone: 'info',
    mine: true,
  },
] as const;

const visiblePlans = computed(() => {
  const term = query.value.trim().toLocaleLowerCase('ru');
  return plans.filter((plan) => {
    return (
      (!mineOnly.value || plan.mine) &&
      `${plan.name} ${plan.id}`.toLocaleLowerCase('ru').includes(term)
    );
  });
});
</script>

<template>
  <div :class="$style.shell" data-framework="vue">
    <aside :class="$style.sidebar">
      <div :class="$style.brandRow">
        <span :class="$style.brandMark">R</span>
        <span :class="$style.brandName">ROADMAP</span>
      </div>

      <p :class="$style.sideLabel">РАБОЧАЯ ОБЛАСТЬ / ЛОКАЛЬНО</p>
      <nav :class="$style.nav" aria-label="Основная навигация">
        <UiNavItem to="/" :active="true"><template #icon>⌘</template>Дорожные карты</UiNavItem>
        <UiNavItem to="/#tasks"><template #icon>＋</template>Новый план</UiNavItem>
      </nav>

      <div :class="$style.sideStatus">
        <span :class="$style.connected"><span /> СИСТЕМА АКТИВНА</span>
        <span :class="$style.environment">ENV / DEVELOPMENT</span>
      </div>
    </aside>

    <div :class="$style.mainColumn">
      <header :class="$style.topbar">
        <div :class="$style.topStatus"><span /> СИСТЕМА АКТИВНА</div>
        <UiButton size="sm"><span aria-hidden="true">＋</span> СОЗДАТЬ</UiButton>
      </header>

      <main :class="$style.content">
        <div :class="$style.headingRow">
          <div>
            <p :class="$style.eyebrow">ОРКЕСТРАЦИЯ / ROADMAPS</p>
            <h1>Планы и дорожные карты</h1>
            <p :class="$style.subtitle">
              Определяйте этапы, связывайте задачи и наблюдайте за прогрессом.
            </p>
          </div>
          <UiButton><span aria-hidden="true">＋</span> НОВАЯ ДОРОЖНАЯ КАРТА</UiButton>
        </div>

        <div :class="$style.toolbar">
          <label :class="$style.search">
            <span aria-hidden="true">⌕</span>
            <UiInput
              v-model="query"
              size="sm"
              placeholder="Поиск планов..."
              aria-label="Поиск планов"
            />
            <kbd>/</kbd>
          </label>
          <UiCheckbox v-model="mineOnly">МОИ ПЛАНЫ</UiCheckbox>
          <UiButton variant="secondary" size="sm">☷ ФИЛЬТР</UiButton>
        </div>

        <div :class="$style.sectionHeader">
          <h2>Дорожные карты</h2>
          <span>{{ visiblePlans.length }} ВСЕГО</span>
        </div>

        <div v-if="visiblePlans.length" :class="$style.grid">
          <UiBox v-for="plan in visiblePlans" :key="plan.id" :class="$style.planCard" padding="md">
            <div :class="$style.cardHead">
              <span :class="$style.flowIcon" aria-hidden="true">⌘</span>
              <UiBadge :tone="plan.tone">{{ plan.status }}</UiBadge>
              <span :class="$style.openArrow" aria-hidden="true">↗</span>
            </div>
            <h3>{{ plan.name }}</h3>
            <p :class="$style.planId">ID / {{ plan.id }}</p>
            <div :class="$style.cardMeta">
              <span><span aria-hidden="true">▱</span> {{ plan.jobs }} ЗАДАЧ</span>
              <span><span aria-hidden="true">⌘</span> {{ plan.roots }} ЭТАПА</span>
              <span><span aria-hidden="true">◷</span> {{ plan.updated }}</span>
            </div>
          </UiBox>
        </div>
        <UiBox v-else :class="$style.empty" padding="lg">
          <h3>Планы не найдены</h3>
          <p>Измените поисковый запрос или фильтр.</p>
        </UiBox>
      </main>
    </div>
  </div>
</template>

<style module>
.shell {
  position: relative;
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  background: var(--color-canvas);
}
.shell::before {
  position: fixed;
  inset: 0 0 0 228px;
  pointer-events: none;
  background-image:
    linear-gradient(rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2.5%) 1px, transparent 1px);
  background-size: 40px 40px;
  content: '';
}
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 228px;
  border-right: 1px solid var(--color-border);
  background: #080808;
}
.brandRow {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  height: 4rem;
  padding: 0 1rem;
  border-bottom: 1px solid var(--color-border);
}
.brandMark {
  display: grid;
  width: 1.5rem;
  height: 1.5rem;
  place-items: center;
  border-radius: 0.1875rem;
  color: var(--color-on-accent);
  background: var(--color-accent);
  font-size: var(--font-size-xs);
  font-weight: 800;
}
.brandName {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 0.035em;
}
.sideLabel {
  margin: 1.25rem 1rem 0.625rem;
  color: var(--color-subtle);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-caption);
  letter-spacing: 0.1em;
}
.nav {
  display: grid;
  gap: 0.125rem;
  padding: 0 0.5rem;
}
.nav :global(a) {
  border-radius: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-xs);
}
.nav :global(a[class*='active']) {
  color: var(--color-accent);
  background: var(--color-accent-soft);
}
.sideStatus {
  display: grid;
  gap: 0.5rem;
  margin-top: auto;
  padding: 1rem;
  border-top: 1px solid var(--color-border);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-caption);
  letter-spacing: 0.04em;
}
.connected {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-accent);
}
.connected span,
.topStatus span {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: var(--color-accent);
}
.environment {
  color: var(--color-subtle);
}
.mainColumn {
  width: calc(100% - 228px);
  min-height: 100vh;
  margin-left: 228px;
}
.topbar {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--color-border);
  background: rgb(8 8 8 / 88%);
}
.topStatus {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-subtle);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-caption);
  letter-spacing: 0.06em;
}
.content {
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 3rem 1.75rem 2rem;
}
.headingRow {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}
.eyebrow {
  margin: 0 0 0.75rem;
  color: var(--color-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-label);
  letter-spacing: 0.12em;
}
.headingRow h1 {
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-heading);
  font-weight: 500;
  letter-spacing: -0.045em;
}
.subtitle {
  max-width: 38rem;
  margin: 0.625rem 0 0;
  color: var(--color-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-xs);
  line-height: 1.6;
}
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin: 1.25rem 0 1.5rem;
}
.search {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.625rem;
  min-width: 0;
  min-height: var(--control-height-md);
  padding: 0 0.75rem;
  border: 1px solid var(--color-border-strong);
  background: #090909;
  color: var(--color-muted);
}
.search kbd {
  padding: 0.125rem 0.375rem;
  border: 1px solid var(--color-border);
  color: var(--color-subtle);
  font: inherit;
  font-size: var(--font-size-key);
}
.sectionHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.sectionHeader h2 {
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-xs);
  font-weight: 500;
}
.sectionHeader > span {
  color: var(--color-subtle);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-caption);
  letter-spacing: 0.06em;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.875rem;
}
.planCard {
  min-width: 0;
  padding: 1rem;
  border-radius: 0;
  background: rgb(14 14 14 / 94%);
  transition:
    border-color 140ms ease,
    background-color 140ms ease;
}
.planCard:hover {
  border-color: var(--color-accent);
  background: #101010;
}
.cardHead {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.flowIcon {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border: 1px solid var(--color-border-strong);
  color: var(--color-accent);
  background: #0a0a0a;
  font-size: var(--font-size-lg);
}
.openArrow {
  margin-left: auto;
  color: var(--color-muted);
}
.planCard h3 {
  overflow: hidden;
  margin: 1.5rem 0 0.375rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.planId {
  overflow: hidden;
  margin: 0;
  color: var(--color-subtle);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-caption);
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cardMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem 1.25rem;
  margin-top: 1.25rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-caption);
}
.cardMeta span {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}
.empty {
  grid-column: 1 / -1;
  border-radius: 0;
  text-align: center;
}
.empty h3 {
  margin: 0 0 0.375rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--font-size-sm);
  font-weight: 500;
}
.empty p {
  margin: 0;
  color: var(--color-muted);
  font-size: var(--font-size-xs);
}

@media (max-width: 850px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .headingRow {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 620px) {
  .sidebar {
    width: 3.5rem;
  }
  .brandRow {
    justify-content: center;
    padding: 0;
  }
  .brandName,
  .sideLabel,
  .nav :global(a > span[class*='label']),
  .sideStatus {
    display: none;
  }
  .nav {
    padding: 0 0.375rem;
  }
  .mainColumn {
    width: calc(100% - 3.5rem);
    margin-left: 3.5rem;
  }
  .shell::before {
    left: 3.5rem;
  }
  .topbar {
    height: 3.5rem;
    padding: 0 0.75rem;
  }
  .content {
    padding: 2rem 0.875rem 1.5rem;
  }
  .toolbar {
    align-items: stretch;
    flex-wrap: wrap;
    gap: 0.625rem;
  }
  .search {
    flex-basis: 100%;
  }
}
</style>
