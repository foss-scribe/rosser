<template>

<NuxtLink to="/reading">
    <div class="surface-card p-6 shadow-2 border-round border-2 border-surface surface-border">
        <div class="text-3xl md:text-4xl font-bold mb-4">What I'm reading</div>
        <div v-if="books && books.length > 0">
            <div v-for="book in books" class="mb-4">
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
const { data } = await useAsyncData(() => queryContent('/reading_list').findOne())

const books = ref()

function getReadingNow(data) {
    return data.books.filter((book) => {
        return book.status === 'currently-reading';
    })
}

onMounted(() => {

    books.value = getReadingNow(data.value)

})
</script>