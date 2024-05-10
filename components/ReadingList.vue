<template>
    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1 heading">Reading list</div>
        
        <p class="mt-4 mb-3 line-height-3 text-center mx-auto text-3xl" style="max-width:500px">Books I'm reading, have read and want to read.</p>
        <p class="mt-1 mb-3 line-height-3 text-center mx-auto" style="max-width:500px">Affiliate links in use.</p>
    </div>

    <section class="p-2 md:p-6">
        <ContentRenderer :value="data">
        <section class="grid">
            <div v-for="book in sortBooks(data.books)" class="col-12 xl:col-3 lg:col-4 md:col-6">
                <div class="flex flex-row w-full gap-3 p-3 border-round border-1 surface-border  surface-card">
                    <div v-if="book.cover" class="relative">
                        <img :src="book.cover" alt="" height="250" class="border-round" :height="196" />
                        <p class="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0" style="background-color: rgba(255, 0, 0, 0.75); backdrop-filter: blur(10px); top: 3%; left: 3%;">{{ book.status }}</p>
                    </div>
                    <div class="flex flex-column w-full gap-3">
                        <div class="flex w-full justify-content-between align-items-center flex-wrap gap-3">
                            <p class="font-semibold text-lg mt-0 mb-0">{{ book.title }}<br />by {{ book.author }}</p>
                            <Rating v-if="book.rating" v-model="book.rating" :stars="5" readonly :cancel="false" class="flex-shrink-0"></Rating>
                            <ProgressBar v-if="book.status == 'currently-reading'" :value="book.progress"></ProgressBar>
                        </div>
                        <div>{{ book.description }}</div>
                        <div class="flex gap-1">
                            <div v-if="book.amazon">
                                <NuxtLink :to="book.amazon" target="_blank">
                                    <Button icon="pi pi-amazon" text />
                                </NuxtLink>
                            </div>
                            <div v-if="book.apple">
                                <NuxtLink :to="book.apple" target="_blank">
                                    <Button icon="pi pi-apple" text />
                                </NuxtLink>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
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