// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
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
    'nuxt-security',
  ],
  imports: {
    dirs: ['types']
  },
  css: ['~/assets/css/main.css'],
  supabase: {
    redirect: false
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
})
