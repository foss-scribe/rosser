<template>
    <Meander />
    <div class="mb-5 hero md:min-64">
        <div class="p-8 text-center">
            <div class="text-6xl md:text-9xl font-bold mb-1 heading">Chris Rosser</div>
            <p class="mt-1 mb-3 line-height-3 text-center mx-auto text-4xl md:text-6xl" style="max-width:500px">Fantasy
                Author</p>
        </div>
    </div>
    <Meander />

    <div class="grid grid-cols-1 md:grid-cols-2">
        
        <PostsWidget />
        <BooksWidget v-if="books" :books="books" />
    </div>

    <div class="grid grid-cols-12 gap-6 p-2 md:p-12">
        <div class="col-span-12 md:col-span-6">
            <CurrentlyWritingWidget class="mb-6" />
            <CurrentlyReadingWidget />
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="border-2 border-md rounded-md p-2 md:p-12">
                <ContentRenderer v-if="doc" :value="doc" />
            </div>
        </div>

    </div>

</template>

<script setup lang="ts">

const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => {
    return queryCollection('content').path(route.path).first()
})

const { data: books } = await useAsyncData('books', () => {
    return queryCollection('books').all()
})

</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&family=IM+Fell+English+SC&display=swap');

html,
body,
.p-component,
p {
    font-family: "Crimson Text" !important;
}

// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// .heading {
//     font-family: "IM Fell English SC" !important;
// }

.hero {
    // background-image: url("/images/hero-bg.webp");
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
}
</style>