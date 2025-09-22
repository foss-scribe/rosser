<template>
    <main class="p-2 md:p-12">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Blog</h1>
        <p class="text-xl leading-7">Latest posts by Chris Rosser</p>
        <div v-if="posts" class="mt-6">
            
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="post in posts" :key="post._path" class="py-5">
                    <NuxtLink :to="post.path">
                        <div class="flex flex-col md:flex-row items-start md:gap-10">
                            <dl class="md:w-40">
                                <dt class="sr-only">Published on</dt>
                                <dd class="text-base font-medium leading-6">
                                    <time :dateTime="post.date" suppressHydrationWarning>
                                        {{ formatDate(post.date) }}
                                    </time>
                                </dd>
                            </dl>
                            <div class="space-y-3">
                                <div>
                                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                        {{ post.title }}
                                    </h2>
                                    <div class="flex flex-wrap">
                                        {{ post.tags }}
                                    </div>
                                </div>
                                <div class="prose max-w-none0 text-white">
                                    {{ post.description }}
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </main>
</template>

<script setup>
const route = useRoute()
const {data: posts} = await useAsyncData(route.path, () => {
    return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

console.log(posts.value)

</script>
  