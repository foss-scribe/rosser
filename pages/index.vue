<template>
    <div class="mb-5 hero md:min-h-screen">
        <div class="p-8 text-center">
            <div class="text-6xl md:text-9xl font-bold mb-1 heading">Chris Rosser</div>
            <p class="mt-1 mb-3 line-height-3 text-center mx-auto text-4xl md:text-6xl" style="max-width:500px">Fantasy Author</p>
        </div>
    </div>

      <BooksWidget />

      <div class="grid grid-cols-12 gap-6 p-2 md:p-12">
        <CurrentlyWritingWidget class="col-span-12 md:col-span-6" />
        <CurrentlyReadingWidget class="col-span-12 md:col-span-6" />
      </div>
      

    <div class="p-2 md:p-12">
        <div class="border-2 border-md p-2 md:p-12">
            <ContentDoc />
        </div>
    </div>
    
</template>

<script setup lang="ts">

    useHead({
    title: 'Chris Rosser | Home'
    })

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&family=IM+Fell+English+SC&display=swap');

html, body, .p-component, p {
    font-family: "Crimson Text" !important;
}

h1, h2, h3, h4, h5, h6, .heading {
    font-family: "IM Fell English SC" !important;
}

.hero {
    background-image: url("/images/hero-bg.webp");
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
}
</style>