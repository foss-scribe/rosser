<template>

    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1 heading">{{ data.title }}</div>
        <p class="mt-4 mb-3 line-height-3 text-center mx-auto text-3xl" style="max-width:500px">{{ data.description }}</p>
    </div>

    <div class="px-2 md:px-28">
        <div v-for="term in data.terms" class="collapse collapse-arrow bg-base-200 my-3">
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title text-xl font-medium">{{ term.term }}</div>
            <div class="collapse-content">
                {{ term.description }}
            </div>
        </div>
    </div>
</template>

<script setup>

const data = await queryContent('/worlds/alashiya/glossary').findOne()

</script>