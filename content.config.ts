import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
       schema: z.object({
        type: z.string()
      })
    }),
    books: defineCollection({
      type: 'page',
      source: 'books/*.md',
       schema: z.object({
        type: z.string()
      })
    }),
    readingList: defineCollection({
      type: 'data',
      source: 'data/reading_list.json',
      schema: z.object({
        title: z.string(),
        cover: z.string(),
        status: z.string()
      })
    }),
    writingList: defineCollection({
      type: 'data',
      source: 'data/writing_list.json',
      schema: z.object({
        title: z.string(),
        progress: z.number(),
        url: z.string()
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/foss-scribe/crnet-blog/tree/master',
        include: "posts/**/*.md",
      }
    }),
    alashiya: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/foss-scribe/alashiya/tree/master',
        include: "docs/**/*",
      }
    }),
  }
})