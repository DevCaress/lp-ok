// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/reset.css'  
  ],

  modules: ['vue3-carousel-nuxt']
})