<script setup lang="ts">
import { computed, ref } from 'vue';

useSeoMeta({
  title: 'Проекты — Roadmap',
  description: 'Обзор проектов и их прогресса.',
});

const query = ref('');
const projects = [
  {
    name: 'Обновление сайта',
    detail: 'Редизайн и новая главная страница',
    status: 'В работе',
    tone: 'info',
    date: 'Обновлён сегодня',
    mark: 'O',
  },
  {
    name: 'Мобильное приложение',
    detail: 'Первый релиз для iOS и Android',
    status: 'Планирование',
    tone: 'warning',
    date: 'Обновлён вчера',
    mark: 'M',
  },
  {
    name: 'Дизайн-система',
    detail: 'Общие компоненты и визуальные правила',
    status: 'Завершён',
    tone: 'success',
    date: 'Обновлён 12 окт.',
    mark: 'D',
  },
  {
    name: 'Онбординг команды',
    detail: 'Документация и первые задачи',
    status: 'В работе',
    tone: 'info',
    date: 'Обновлён 10 окт.',
    mark: 'T',
  },
  {
    name: 'Интеграция аналитики',
    detail: 'События и продуктовые метрики',
    status: 'Планирование',
    tone: 'warning',
    date: 'Обновлён 8 окт.',
    mark: 'A',
  },
  {
    name: 'Публичный запуск',
    detail: 'Подготовка к открытой бете',
    status: 'Черновик',
    tone: 'neutral',
    date: 'Обновлён 4 окт.',
    mark: 'P',
  },
] as const;

const filteredProjects = computed(() => {
  const value = query.value.trim().toLocaleLowerCase('ru');
  return projects.filter((project) =>
    `${project.name} ${project.detail}`.toLocaleLowerCase('ru').includes(value),
  );
});
</script>

<template>
  <div :class="$style.shell">
    <aside :class="$style.sidebar">
      <div :class="$style.workspace">
        <span :class="$style.workspaceMark">R</span>
        <span :class="$style.workspaceName">Roadmap</span>
        <UiBadge :class="$style.teamBadge">Команда</UiBadge>
        <span :class="$style.chevron" aria-hidden="true">⌄</span>
      </div>

      <label :class="$style.find">
        <span aria-hidden="true">⌕</span>
        <span>Быстрый поиск</span>
        <kbd>⌘ K</kbd>
      </label>

      <nav :class="$style.navigation" aria-label="Основная навигация">
        <UiNavItem to="/" :active="true"><template #icon>▦</template>Проекты</UiNavItem>
        <UiNavItem to="/#roadmaps"><template #icon>◇</template>Дорожные карты</UiNavItem>
        <UiNavItem to="/#activity"><template #icon>◷</template>Активность</UiNavItem>
      </nav>

      <div :class="$style.sidebarBottom">
        <div :class="$style.usageLabel"><span>Использование</span><span>2 из 5 проектов</span></div>
        <div :class="$style.progress"><span /></div>
        <div :class="$style.profile">
          <span :class="$style.avatar">N</span><span>Николай</span
          ><span :class="$style.more">···</span>
        </div>
      </div>
    </aside>

    <div :class="$style.mainColumn">
      <header :class="$style.topbar">
        <span :class="$style.breadcrumb">Все проекты <span aria-hidden="true">⌄</span></span>
        <span :class="$style.topbarCenter">Обзор</span>
        <UiButton variant="ghost" size="sm">Помощь</UiButton>
      </header>

      <main :class="$style.content">
        <div :class="$style.headingRow">
          <div>
            <p :class="$style.eyebrow">РАБОЧЕЕ ПРОСТРАНСТВО</p>
            <h1>Проекты</h1>
            <p :class="$style.subtitle">Все планы команды в одном месте.</p>
          </div>
          <UiButton :class="$style.newButton"
            ><span aria-hidden="true">＋</span> Новый проект</UiButton
          >
        </div>

        <div :class="$style.toolbar">
          <label :class="$style.search">
            <span aria-hidden="true">⌕</span>
            <UiInput
              v-model="query"
              size="sm"
              placeholder="Найти проект..."
              aria-label="Найти проект"
            />
            <kbd>/</kbd>
          </label>
          <UiButton variant="secondary" size="md"
            ><span aria-hidden="true">☷</span> Фильтры</UiButton
          >
          <UiButton variant="secondary" size="md" aria-label="Изменить вид"
            >▦ <span :class="$style.buttonDivider" />☰</UiButton
          >
        </div>

        <div :class="$style.sectionHeading">
          <h2>Недавно обновлённые</h2>
          <span>{{ filteredProjects.length }} проекта</span>
        </div>

        <div v-if="filteredProjects.length" :class="$style.projectGrid">
          <UiBox
            v-for="project in filteredProjects"
            :key="project.name"
            :class="$style.projectCard"
            padding="md"
          >
            <div :class="$style.cardTop">
              <span :class="$style.projectMark">{{ project.mark }}</span>
              <UiBadge :tone="project.tone">{{ project.status }}</UiBadge>
            </div>
            <h3>{{ project.name }}</h3>
            <p :class="$style.projectDetail">{{ project.detail }}</p>
            <div :class="$style.cardBottom">
              <span :class="$style.cardDate"
                ><span aria-hidden="true">◷</span>{{ project.date }}</span
              >
              <button
                :class="$style.cardMenu"
                type="button"
                :aria-label="`Действия: ${project.name}`"
              >
                ···
              </button>
            </div>
          </UiBox>
        </div>
        <UiBox v-else :class="$style.empty" padding="lg">
          <span :class="$style.emptyIcon" aria-hidden="true">⌕</span>
          <h3>Ничего не найдено</h3>
          <p>Попробуйте изменить запрос.</p>
        </UiBox>

        <footer :class="$style.footer">
          © 2026 Roadmap <span>·</span> Собрано для ясного движения вперёд
        </footer>
      </main>
    </div>
  </div>
</template>

<style module>
.shell {
  display: flex;
  min-height: 100vh;
  background: var(--color-canvas);
}
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 0.75rem;
  border-right: 1px solid var(--color-border);
  background: #050505;
}
.workspace {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  min-height: 2.75rem;
  padding: 0 0.25rem;
}
.workspaceMark {
  display: grid;
  width: 1.75rem;
  height: 1.75rem;
  place-items: center;
  border-radius: 0.5rem;
  color: #080808;
  background: #ededed;
  font-size: 0.875rem;
  font-weight: 700;
}
.workspaceName {
  font-size: 0.8125rem;
  font-weight: 600;
}
.teamBadge {
  flex: 0 0 auto;
}
.chevron {
  margin-left: auto;
  color: var(--color-muted);
}
.find {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.25rem;
  margin: 1rem 0 1.25rem;
  padding: 0 0.625rem;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  color: var(--color-muted);
  font-size: 0.8125rem;
}
.find kbd,
.search kbd {
  margin-left: auto;
  padding: 0.125rem 0.35rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  color: var(--color-subtle);
  font: inherit;
  font-size: 0.6875rem;
}
.navigation {
  display: grid;
  gap: 0.125rem;
}
.sidebarBottom {
  margin-top: auto;
  padding: 0.75rem 0.25rem 0;
  border-top: 1px solid var(--color-border);
}
.usageLabel {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 0.25rem 0 0.625rem;
  color: var(--color-muted);
  font-size: 0.6875rem;
}
.usageLabel span:last-child {
  color: var(--color-subtle);
}
.progress {
  height: 0.25rem;
  overflow: hidden;
  border-radius: 99px;
  background: #222;
}
.progress span {
  display: block;
  width: 40%;
  height: 100%;
  border-radius: inherit;
  background: #ededed;
}
.profile {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: 1rem;
  padding: 0.375rem 0;
  font-size: 0.8125rem;
}
.avatar {
  display: grid;
  width: 1.75rem;
  height: 1.75rem;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  background: #343434;
  font-size: 0.75rem;
}
.more {
  margin-left: auto;
  color: var(--color-muted);
  font-size: 1.125rem;
}
.mainColumn {
  width: calc(100% - 240px);
  min-height: 100vh;
  margin-left: 240px;
}
.topbar {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-border);
  background: rgb(0 0 0 / 88%);
  backdrop-filter: blur(12px);
}
.breadcrumb {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 550;
}
.breadcrumb span {
  color: var(--color-muted);
}
.topbarCenter {
  color: var(--color-muted);
  font-size: 0.75rem;
}
.content {
  width: min(100%, 1320px);
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
}
.headingRow {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
}
.eyebrow {
  margin: 0 0 0.5rem;
  color: var(--color-subtle);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.09em;
}
.headingRow h1 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.045em;
}
.subtitle {
  margin: 0.5rem 0 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}
.toolbar {
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
}
.search {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-control);
  color: var(--color-muted);
  background: var(--color-surface);
}
.buttonDivider {
  align-self: stretch;
  width: 1px;
  margin: 0 0.125rem;
  background: var(--color-border);
}
.sectionHeading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 0.875rem;
}
.sectionHeading h2 {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 550;
}
.sectionHeading > span {
  color: var(--color-subtle);
  font-size: 0.75rem;
}
.projectGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.875rem;
}
.projectCard {
  min-width: 0;
  padding: 1rem;
  transition:
    border-color 140ms ease,
    background-color 140ms ease;
}
.projectCard:hover {
  border-color: var(--color-border-strong);
  background: #0d0d0d;
}
.cardTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.projectMark {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: #d4d4d4;
  background: #141414;
  font-size: 0.8125rem;
  font-weight: 600;
}
.projectCard h3 {
  overflow: hidden;
  margin: 1.125rem 0 0.375rem;
  font-size: 0.875rem;
  font-weight: 550;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.projectDetail {
  overflow: hidden;
  margin: 0;
  color: var(--color-muted);
  font-size: 0.75rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cardBottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1.375rem;
  padding-top: 0.75rem;
  border-top: 1px solid #1c1c1c;
}
.cardDate {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  overflow: hidden;
  color: var(--color-subtle);
  font-size: 0.6875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cardMenu {
  width: 1.75rem;
  height: 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  color: var(--color-muted);
  background: transparent;
  cursor: pointer;
}
.cardMenu:hover {
  color: var(--color-text);
  background: var(--color-surface-hover);
}
.empty {
  display: grid;
  justify-items: center;
  padding: 3rem 1rem;
  text-align: center;
}
.emptyIcon {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-muted);
}
.empty h3 {
  margin: 1rem 0 0.375rem;
  font-size: 0.875rem;
}
.empty p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.8125rem;
}
.footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  color: var(--color-subtle);
  font-size: 0.6875rem;
}

@media (max-width: 1050px) {
  .projectGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .topbarCenter {
    display: none;
  }
}

@media (max-width: 700px) {
  .sidebar {
    width: 3.75rem;
    align-items: center;
    padding: 0.625rem 0.375rem;
  }
  .workspace {
    justify-content: center;
    padding: 0;
  }
  .workspaceName,
  .teamBadge,
  .chevron,
  .find,
  .sidebarBottom {
    display: none;
  }
  .navigation {
    width: 100%;
    margin-top: 1rem;
  }
  .mainColumn {
    width: calc(100% - 3.75rem);
    margin-left: 3.75rem;
  }
  .topbar {
    height: 3.25rem;
    padding: 0 1rem;
  }
  .content {
    padding: 2rem 1rem 1.5rem;
  }
  .headingRow {
    align-items: flex-start;
  }
  .headingRow h1 {
    font-size: 1.5rem;
  }
  .newButton {
    flex-shrink: 0;
  }
  .toolbar {
    flex-wrap: wrap;
  }
  .search {
    flex-basis: 100%;
  }
  .projectGrid {
    grid-template-columns: 1fr;
  }
}
</style>
