// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  // SEO
  app: {
    head: {
      title: 'Zac\'s Nuxt App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@nuxt/eslint',
  ],
  css: ['~/assets/css/main.css'],
  supabase: {
    redirect: false
  },
  ui: {
    colorMode: false
  },
})