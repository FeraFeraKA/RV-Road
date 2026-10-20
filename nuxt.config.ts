// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/tokens.css'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'ru',
    detectBrowserLanguage: false,
    rootRedirect: 'ru',
    locales: [
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
  },
});
