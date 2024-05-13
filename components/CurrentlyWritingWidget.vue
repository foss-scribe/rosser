<template>

<div class="surface-card p-6 shadow-2 border-round border-2 border-surface surface-border">
    <div class="text-4xl font-bold mb-4">What I'm writing</div>
    <div v-for="book in getWritingNow(data)" class="mb-4">
        <div class="font-semibold text-lg mt-0 mb-0">{{ book.title }}</div>
        <ProgressBar :value="book.progress" />
    </div>
</div>

</template>

<script lang="ts" setup>
const { data } = await useAsyncData(() => queryContent('/writing_list').findOne())

function getWritingNow(data) {
    return data.body.filter((book) => {
        return book
    })
}

</script>