<template>
    <div class="mb-5 hero">
        <div class="p-8 text-center">
            <div class="text-10xl font-bold mb-1 heading">Chris Rosser</div>
            <p class="mt-1 mb-3 line-height-3 text-center mx-auto text-5xl" style="max-width:500px">Fantasy Author</p>
        </div>
    </div>

      <BooksWidget />

      <div class="flex flex-column md:flex-row p-2 md:p-6 gap-2 md:gap-6">
        <CurrentlyWritingWidget class="flex-grow-1" />
        <CurrentlyReadingWidget class="flex-grow-1" />
      </div>
      

    <div class="p-6">
        <div class="surface-card border-2 border-surface surface-border border-round p-4">
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

.text-10xl {
    font-size: 7rem;
}
.hero {
    background-image: url("/images/hero-bg.webp");
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
}
</style>