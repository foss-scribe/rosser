<template>
    <main class="p-2 md:p-12">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 mb-6">Blog</h1>
        <p class="text-lg leading-7">Latest posts by Chris Rosser</p>
        <ContentList path="/blog" v-slot="{ list }">
            <div class="mx-auto">
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li v-for="post in list" :key="post._path" class="py-5">
                        <article class="flex flex-col md:flex-row space-y-2 xl:space-y-0 md:space-x-56">
                            <dl>
                                <dt class="sr-only">Published on</dt>
                                <dd class="text-base font-medium leading-6">
                                    <time :dateTime="post.data" suppressHydrationWarning>
                                        {{ formatDate(post.date) }}
                                    </time>
                                </dd>
                            </dl>
                            <div class="space-y-3">
                                <div>
                                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                    <a :href="post._path">
                                        {{ post.title }}
                                    </a>
                                    </h2>
                                    <div class="flex flex-wrap">
                                        {{ post.tags }}
                                    </div>
                                </div>
                                <div class="prose max-w-none0 text-white">
                                    {{ post.description }}
                                </div>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </ContentList>
    </main>

    
</template>

<script setup>
import { formatDate } from '@/utils/tools.js';

</script>
  