// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Chris Rosser'
    }
  },
  content: {
    build: {
      markdown: { 
        remarkPlugins: {
          'remark-reading-time' : {}
        }
      }
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/robots', '@nuxtjs/sitemap', "nuxt-seo-utils", '@nuxt/image', '@nuxthub/core', 'nuxt-umami'],
  umami: {
    id: "a235a069-e115-4729-b868-a38dd310ee95",
    host: "https://my-umami.xyz", 
  }
  // routeRules: {
  //   '/posts/2018/08/11/review-omnioutliner/': { redirect: 'https://chrisrosser.medium.com/omnioutliner-review-68bd3b1e5735' },
  //   '/posts/2021/04/27/how-to-create-a-parchment-background-in-procreate/': { redirect: 'https://chrisrosser.medium.com/how-to-create-a-parchment-background-in-procreate-f1517b129215' },
  //   '/posts/2020/04/15/how-to-create-a-paperback-with-apple-pages/': { redirect: 'https://chrisrosser.substack.com/p/how-to-create-a-paperback-with-apple' }
  // }
})