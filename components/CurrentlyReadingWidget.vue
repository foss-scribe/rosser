<template>

<NuxtLink to="/reading">
    <div class="surface-card p-6 shadow-2 border-round border-2 border-surface rounded-md surface-border">
        <div class="text-3xl md:text-4xl font-bold mb-4">What I'm reading</div>
        <div v-if="readingList && readingList.meta.books.length > 0">
            <div v-for="book in getReadingNow(readingList.meta.books)" class="mb-4">
                <div class="font-semibold text-lg mt-0 mb-0">{{ book.title }}<br />by {{ book.author }}</div>
                <progress class="progress w-full" :value="book.progress" max="100"></progress>
            </div>
        </div>
        <div v-else>
            Nothing's on my current reading list.
        </div>
    </div>
</NuxtLink>
</template>

<script setup>
const { data: readingList } = await useAsyncData('readingList', () => {
  return queryCollection('readingList')
    .order('title', 'ASC')
    .first()
})



function getReadingNow(books) {
    return books.filter((book) => {
        return book.status === 'currently-reading';
    })
}

</script>