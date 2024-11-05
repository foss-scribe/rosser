<template>

<div v-if="data" class="surface-card p-6 shadow-2 border-round border-2 border-surface surface-border">
    <div class="text-3xl md:text-4xl font-bold mb-4">What I'm writing</div>
    <div v-for="book in getWritingNow(data)" class="mb-4">
        <NuxtLink :to="book.url">
            <div class="font-semibold text-lg mt-0 mb-0">{{ book.title }}</div>
            <progress class="progress w-full" :value="book.progress" max="100"></progress>
        </NuxtLink>
    </div>
</div>

</template>

<script setup>
const { data } = await useAsyncData(() => queryContent('/writing_list').findOne())

function getWritingNow(data) {
    return data.body.filter((book) => {
        return book
    })
}

</script>