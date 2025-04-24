// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
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
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  }
})