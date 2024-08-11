<template>

<div v-if="data" class="surface-card p-6 shadow-2 border-round border-2 border-surface surface-border">
    <div class="text-4xl font-bold mb-4">What I'm reading</div>
    <div v-for="book in getReadingNow(data)" class="mb-4">
        <div class="font-semibold text-lg mt-0 mb-0">{{ book.title }}<br />by {{ book.author }}</div>
        <progress class="progress w-56" :value="book.progress" max="100"></progress>
    </div>
</div>

</template>

<script setup>
const { data } = await useAsyncData(() => queryContent('/reading_list').findOne())

function getReadingNow(data) {
    return data.books.filter((book) => {
        return book.status === 'currently-reading';
    })
}

</script>