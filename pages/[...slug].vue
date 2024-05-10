<template>
  <ContentDoc v-slot="{doc}">
      <article class="surface-section px-4 py-8 md:px-6 lg:px-8">
          <h1 class="border-teal-600 font-medium text-6xl p-3 mb-3 text-900" style="border-left: 8px solid">{{ doc.title }}</h1>
          
          <div class="text-600 text-sm mb-3">
              <span>Published </span>
              <span class="font-bold">{{ formatDate(doc.date) }}</span>
              <span> by </span>
              <span class="font-bold">Chris Rosser</span>
              <span> | {{ doc.readingTime.text }} </span>
          </div>
          <div class="mb-5">
              <Tag v-for="tag in doc.tags" :value="tag" class="mr-2"></Tag>
          </div>
          <ContentRenderer :value="doc" class="text-lg line-height-3" />
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