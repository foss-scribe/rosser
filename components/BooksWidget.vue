<template>
    <ContentList :query="books">
      <template #default="{ list }">
        <div class="p-2 md:p-4 lg:p-6 text-center bg">
          <div class="text-6xl heading mb-6">Books by Chris Rosser</div>
          <div class="flex justify-content-evenly flex-wrap">
            <div v-for="book in list" :key="book._path">
              <div class="">
                <NuxtLink :to="book._path">
                  <img :src="`/images/books/${book.cover}`"  class="hover:border-red-500 border-round border-2 border-white w-full h-auto" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ContentList>
</template>

<script setup lang="ts">

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
const books: QueryBuilderParams = { path: '/books',  limit: 5, sort: [{ date: -1 }] }

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&family=IM+Fell+English+SC&display=swap');

.heading {
    font-family: "IM Fell English SC" !important;
}

.bg {
    background-image: url("/images/scriptorium.webp");
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
}

</style>