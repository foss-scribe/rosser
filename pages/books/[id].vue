<template>
    <ContentDoc v-slot="{ doc }">
        <div class="relative md:p-8 overflow-hidden bg-no-repeat bg-cover min-h-screen" :style="{'background-image': `url('/images/books/${doc.banner}')`}">

            <div class="grid gap-2 lg:gap-6">
                <div class="col-12 lg:col-3 p-2 md:p-6 text-center bg-black-alpha-60 border-round">
                    <img :src="`/images/books/${doc.cover}`" class="border-round w-full h-auto" />
                    <p class="text-xl mt-4 mb-4 line-height-3">Available at all good ebook retailers.</p>
                    <div class="grid">
                        <div v-for="link in doc.buy_links" class="col">
                            <NuxtLink  :to="link.url" target="_blank">
                                <Button :icon="link.icon" :label="link.label" outlined />
                            </NuxtLink>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 lg:col-8 flex flex-column gap-3">
                    <div class="p-1 md:p-4 bg-black-alpha-60 border-round">
                        <div class="text-center">
                            <div class="text-10xl heading">{{ doc.title }}</div>
                            <div class="text-2xl heading mb-4">{{ doc.subtitle }}</div>
                            <div class="text-4xl text-red-500 heading">{{ doc.tagline }}</div>
                        </div>
                        

                        <p v-for="text in doc.body.children" class="text-2xl px-6">{{ text.children[0].value }}</p>
                    </div>

                    <div class="bg-black-alpha-60 border-round p-1  md:p-4">

                        <div class="text-4xl mb-6 heading"> Praise for {{ doc.title }}</div>
                        <Carousel :value="doc.reviews" :numVisible="1">
                            <template #item="slotProps">
                                <div class="flex justify-content-center">
                                    <div class=" shadow-2 px-2 md:p-4 py-4 border-round mb-4 text-900 text-2xl line-highlight-3">{{slotProps.data.text}}</div>
                                </div>
                                <div class="text-900 font-bold line-height-3">
                                    <NuxtLink :to="slotProps.data.author_url" target="_blank">{{slotProps.data.author}}</NuxtLink>
                                </div>
                                <div class="text-600 line-height-3 mb-4">{{ slotProps.data.author_about }}</div>
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </ContentDoc>
</template>

<script setup lang="ts">
const {page} = useContent();

useContentHead(page)

function getIconClass(icon) {
    return `${icon}`
}

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

</style>