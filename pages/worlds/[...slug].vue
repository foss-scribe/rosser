<template>
    <div v-if="page.layout == 'article'">        
        <ContentDoc  v-slot="{doc}">
            <article class="p-2 md:p-12">
                <h1 class="border-teal-600 font-medium text-6xl p-3 mb-3 text-900" style="border-left: 8px solid">
                    {{ doc.title }}
                </h1>
          
                <div class="text-600 text-sm mb-3">
                    <span>Published </span>
                    <span class="font-bold">{{ formatDate(doc.date) }}</span>
                    <span> by </span>
                    <span class="font-bold">Chris Rosser</span>
                    <span> | {{ doc.readingTime.text }} </span>
                </div>
                <div class="mb-5">
                    <span v-for="tag in doc.tags" class="badge badge-accent">{{ tag }}</span>
                </div>
                <ContentRenderer :value="doc" class="p2 md:p-12">
                    <div class="grid grid-cols-12 gap-6 items-start">
                    <article class="col-span-12 md:col-span-8 p-2 md:p-12">
                        <ContentRendererMarkdown :value="doc" />
                    </article>
                    <aside class="hidden md:block col-span-12 md:col-span-4 p-2 md:p-12">
                        <PageToc />
                    </aside>
                    </div>
                </ContentRenderer>
            </article>
        </ContentDoc>
        
    </div>
    <div v-else>
        <section class="p-2 md:p-12">
            <h1 class="border-teal-600 font-medium text-6xl p-3 mb-3 text-900" style="border-left: 8px solid">
                    {{ page.title }}
                </h1>

            <div>
                    {{ page.description }}
            </div>

            <div class="mt-2 md:mt-8">
                <h2 class="font-medium text-4xl mb-3 text-900">Articles in this section</h2>
                <ArticlesList :path="page._path" />
            </div>    

            
        </section>
        
    </div>

    <!-- <pre>{{ page }}</pre> -->
</template>

<script setup>

const { page } = useContent()
useContentHead(page)

</script>