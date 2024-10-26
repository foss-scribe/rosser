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
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-reading-time', 'remark-gfm']
    }
  },
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      version: 2
    }
  },
  routeRules: {
    '/posts/2018/08/11/review-omnioutliner/': { redirect: 'https://chrisrosser.medium.com/omnioutliner-review-68bd3b1e5735'}
  }
})