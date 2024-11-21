<template>
      <ContentList :path="props.path" v-slot="{ list }">
        <div  class="grid grid-cols-1 md:grid-cols-4 gap-4">

          <div v-for="article in list" :key="article._path" class="card bg-base-100 image-full shadow-xl">
            <!-- <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure> -->
            <div class="card-body">
                <h2 class="card-title">{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <pre>{{ article.description }}</pre>
            </div>
          </div>
        </div>
        <pre>{{ list }}</pre>
      </ContentList>
  </template>
  
<script setup>

const props = defineProps(['path'])

</script>