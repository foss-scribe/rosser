<template>
  <ContentDoc v-slot="{doc}">
      <article class="p-12">
          <h1 class="border-teal-600 font-medium text-6xl p-3 mb-3 text-900" style="border-left: 8px solid">{{ doc.title }}</h1>
          
          <div class="text-600 text-sm mb-3">
              <span>Published </span>
              <span class="font-bold">{{ formatDate(doc.date) }}</span>
              <span> by </span>
              <span class="font-bold">Chris Rosser</span>
              <span> | {{ doc.readingTime.text }} </span>
          </div>
          <div class="mb-5">
              <span v-for="tag in doc.tags" class="badge badge-accent">{{ tag }}</span>
          </div>
          <ContentRenderer :value="doc" class="p2 md:p-12">
            <div class="grid grid-cols-12 gap-6 items-start">
              <article class="col-span-12 md:col-span-8 p-2 md:p-12">
                <ContentRendererMarkdown :value="doc" />
              </article>
              <aside class="col-span-12 md:col-span-4 p-2 md:p-12">
                <PageToc />
              </aside>
            </div>
          </ContentRenderer>
      </article>
  </ContentDoc>
</template>

<script setup>
import { formatDate } from '@/utils/tools.js';

const {page} = useContent();
useContentHead(page)
</script>

<style lang="scss">

h2, h3, h4, h5, h6 {
a:any-link {
  text-decoration: none;
  color: var(--text-color);
}
}
</style>