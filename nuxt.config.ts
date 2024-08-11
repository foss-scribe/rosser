// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Chris Rosser'
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    documentDriven: false,
    markdown: {
      remarkPlugins: ['remark-reading-time', 'remark-gfm']
    }
  },
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      version: 2
    }
  }
})