// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Chris Rosser'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/robots', '@nuxtjs/sitemap', "nuxt-seo-utils", '@nuxt/image'],
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-reading-time', 'remark-gfm', 'remark-smartypants']
    },
    sources: {
      blog: {
        prefix: '/blog',
        driver: 'github',
        repo: "foss-scribe/crnet-blog",
        branch: "master",
        dir: "posts"
      },
      alashiya: {
        prefix: '/worlds/alashiya',
        driver: 'github',
        repo: "foss-scribe/alashiya",
        branch: "master",
        dir: "docs"
      }
    }
  },
  image: {
    provider: 'netlify',
  },
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      version: 2
    }
  },
  routeRules: {
    '/posts/2018/08/11/review-omnioutliner/': { redirect: 'https://chrisrosser.medium.com/omnioutliner-review-68bd3b1e5735'},
    '/posts/2021/04/27/how-to-create-a-parchment-background-in-procreate/' : { redirect: 'https://chrisrosser.medium.com/how-to-create-a-parchment-background-in-procreate-f1517b129215'},
    '/posts/2020/04/15/how-to-create-a-paperback-with-apple-pages/': { redirect: 'https://chrisrosser.substack.com/p/how-to-create-a-paperback-with-apple'}
  }
})