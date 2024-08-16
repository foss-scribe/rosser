<template>
    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1 heading">Reading list</div>
        
        <p class="mt-4 mb-3 line-height-3 text-center mx-auto text-3xl" style="max-width:500px">Books I'm reading, have read and want to read.</p>
        <p class="mt-1 mb-3 line-height-3 text-center mx-auto" style="max-width:500px">Affiliate links in use.</p>
    </div>

    <section v-if="data" class="p-2 md:p-12">
        <ContentRenderer :value="data">

            <div class="grid grid-cols-4 gap-3">
                <div v-for="book in sortBooks(data.books)" class="card card-side bg-base-100 shadow-xl">
                        
                    <figure v-if="book.cover" class="h-auto max-w-xs">
                        <img
                            :src="book.cover"
                            :alt="`${book.title} book cover`"
                            :title="`${book.title} book cover`"
                        />
                    </figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ book.title }}</h2>
                            <div class="badge badge-primary">{{ book.status }}</div>
                            
                            <progress v-if="book.status == 'currently-reading'"  class="progress w-56" :value="book.progress" max="100"></progress>
                            <!-- <div>{{ book.description }}</div> -->
                            <div class="card-actions justify-end">
                                <!-- <button class="btn btn-primary">Watch</button> -->
                            </div>
                        </div>
                    </div>
            </div>
        </ContentRenderer>
    </section>
    
</template>

<script setup>
const { data } = await useAsyncData('bookList', () => queryContent('/reading_list').findOne())

function sortBooks(data) {
    return data.sort((a, b) => {
        return a.status.toLowerCase().localeCompare(b.status.toLowerCase()) || a.author_sort.toLowerCase().localeCompare(b.author_sort.toLowerCase()) || a.published - b.published || a.title.toLowerCase().localeCompare(b.title.toLowerCase()) ;
    })
}

useHead({
  title: 'Chris Rosser | Reading List'
})

</script>