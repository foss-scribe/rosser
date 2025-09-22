<template>
    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1 heading">Reading list</div>
        
        <p class="mt-4 mb-3 line-height-3 text-center mx-auto text-3xl" style="max-width:500px">Books I'm reading, have read and want to read.</p>
        <p class="mt-1 mb-3 line-height-3 text-center mx-auto" style="max-width:500px">Affiliate links in use.</p>
    </div>
    
    <section v-if="readingList" class="p-2 md:p-12">

            <<div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 items-top">
                <div v-for="book in sortBooks(readingList.meta.books)" class="card bg-base-100 shadow-xl">
                    <NuxtLink :to="book.medium == 'audiobook' ? book.apple : book.amazon" target="_blank">
                        
                    <figure v-if="book.cover" class="h-auto static">
                        <div class="absolute bottom-0 right-0 rounded-md">
                            <div class="badge badge-primary">
                                <span v-if="book.status == 'read'">Read</span>
                                <span v-else-if="book.status == 'currently-reading'">Reading now</span>
                                <span v-else>
                                    {{ book.status }}
                                </span>
                            </div>
                            
                        </div>
                        <progress v-if="book.status == 'currently-reading'"  class="progress progress-primary w-full" :value="book.progress" max="100"></progress>
                        <img
                            :src="book.cover"
                            :alt="`${book.title} book cover`"
                            :title="`${book.title} book cover`"
                        />
                        
                    </figure>
                    <div v-else class="card-body">
                        <h2 class="card-title">{{ book.title }}</h2>
                        <div class="badge badge-primary">{{ book.status }}</div>
                        
                    </div>
                    </NuxtLink>
                </div>
            </div>
    </section>
</template>

<script setup>
// get all books
const { data: readingList } = await useAsyncData('readingList', () => {
  return queryCollection('readingList')
    .order('title', 'ASC')
    .first()
})

console.log(readingList.value)

function sortBooks(data) {
    return data.sort((a, b) => {
        return a.status.toLowerCase().localeCompare(b.status.toLowerCase()) || a.author_sort.toLowerCase().localeCompare(b.author_sort.toLowerCase()) || a.published - b.published || a.title.toLowerCase().localeCompare(b.title.toLowerCase()) ;
    })
}

useHead({
  title: 'Chris Rosser | Reading List'
})

</script>