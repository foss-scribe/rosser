<template>
    <ContentDoc v-slot="{ doc }">
        <div class="bg-cover text-white" :style="{'background-image': `url('/images/books/${doc.banner}')`}">

            <div class="grid grid-cols-12 p-2 md:p-12 gap-6 items-start">

                <div class="p-2 md:p-12 col-span-12 md:col-span-4 text-center  bg-black bg-opacity-60 rounded-md">
                    <img :src="`/images/books/${doc.cover}`" class="rounded-md border-2 w-full h-auto" />
                    <p class="text-lg font-bold my-4">Available at all good ebook retailers.</p>
                    <div class="grid grid-cols-2 gap-4">
                        <button v-for="link in doc.buy_links" class="btn btn-outline">
                            <NuxtLink  :to="link.url" target="_blank" >
                                {{ link.label }}
                            </NuxtLink>
                        </button>
                    </div>
                </div>

                <div class="p-2 md:p-12 gap-12 col-span-12 md:col-span-8 bg-black bg-opacity-60 rounded-md">
                    <div class="p-2 md:p-12 mb-10">
                        <div class="text-center mb-6">
                            <div class="text-6xl md:text-8xl heading">{{ doc.title }}</div>
                            <div class="text-2xl mb-4 heading">{{ doc.subtitle }}</div>
                            <div class="text-2xl md:text-4xl text-red-500 heading p-4">{{ doc.tagline }}</div>
                        </div>
                        
                        <p v-for="text in doc.body.children" class="text-2xl px-6 leading-8 mb-6">{{ text.children[0].value }}</p>
                    </div>

                    <div>
                        <div class="text-4xl mb-6 text-center heading"> Praise for {{ doc.title }}</div>

                        <div class="carousel w-full body-text">
                            <div v-for="(item, index) in doc.reviews" :id="`slide${index}`" class="carousel-item relative w-full">
                                <div class="text-center p-12 mx-12">
                                    <div class="text-2xl">{{ item.text }}</div>
                                    <div class="flex flex-col mt-6">
                                        <span class="text-2xl">{{ item.author }}</span>
                                        <span class="text-xl">{{item.author_about }}</span>
                                    </div>
                                </div>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a :href="`#slide${index - 1}`" class="btn btn-circle">❮</a>
                                <a :href="`#slide${index + 1}`" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
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

html, body, .p-component, p, .body-text {
    font-family: "Crimson Text" !important;
}

h1, h2, h3, h4, h5, h6, .heading {
    font-family: "IM Fell English SC" !important;
}

</style>