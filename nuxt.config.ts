// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Chris Rosser'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content','nuxt-primevue'],
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-reading-time', 'remark-gfm']
    }
  },
  css: [
    "primeflex/primeflex.css",
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primeicons/primeicons.css",
  ],
  primevue: {
    options: {
      ripple: true
    },
    components: {
      include: '*',
    }
  },
})