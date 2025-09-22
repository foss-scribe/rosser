<template>
  
  <div v-if="props.books">
        <div class="p-2 md:p-6 text-center bg">
          <div class="text-4xl md:text-6xl heading mb-6">Books by Chris Rosser</div>
          <div class="grid grid-cols-12 gap-6 p-2 md:p-6">
            <div v-for="book in props.books" :key="book.path" class="col-span-12 md:col-span-3">
              <div class="p-2 md:p-6">
                <NuxtLink :to="book.path">
                  <img :src="`/images/books/${book.meta.cover}`"  class="hover:border-accent border-round border-2  w-full h-auto rounded-md" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  books: Array<any>
}>()

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