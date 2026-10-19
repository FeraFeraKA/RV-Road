<script setup lang="ts">
useSeoMeta({
  title: 'Roadmap',
  description: 'Планируйте работу и следите за прогрессом в одном месте.',
})
</script>

<template>
  <main class="page-shell">
    <header class="topbar">
      <NuxtLink class="brand" to="/" aria-label="Roadmap — на главную">
        <span class="brand-mark" aria-hidden="true">R</span>
        <span>roadmap</span>
      </NuxtLink>
      <span class="topbar-note">Рабочее пространство</span>
    </header>

    <section class="welcome" aria-labelledby="welcome-title">
      <div class="eyebrow"><span class="status-dot" /> Пространство готово к работе</div>
      <h1 id="welcome-title">Большие планы.<br /><span>Понятный путь.</span></h1>
      <p class="welcome-copy">
        Здесь появится ваша дорожная карта — цели, этапы и прогресс команды.
      </p>
      <div class="welcome-card">
        <div class="card-icon" aria-hidden="true">↗</div>
        <div>
          <h2>С чего начнём?</h2>
          <p>Добавьте первую цель, чтобы превратить идею в план.</p>
        </div>
        <span class="card-arrow" aria-hidden="true">→</span>
      </div>
      <footer class="welcome-footer">
        <span>Создано на Vue и Nuxt</span>
        <span class="footer-line" />
        <span>Версия 0.1</span>
      </footer>
    </section>
  </main>
</template>
