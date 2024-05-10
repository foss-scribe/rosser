<template>
    <ContentList :query="books" ">
      <template #default="{ list }">
        <div v-for="book in list" :key="book._path">
        <h2>
            <NuxtLink :to="book._path">{{ book.title }}</NuxtLink>
        </h2>
        <p>{{ book._path }}</p>
      </div>
      </template>
     
    </ContentList>
</template>

<script setup lang="ts">

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
const books: QueryBuilderParams = { path: '/books',  limit: 5, sort: [{ date: -1 }] }

</script>