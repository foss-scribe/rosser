<template>
    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1 heading">Reading list</div>
        
        <p class="mt-4 mb-3 line-height-3 text-center mx-auto text-3xl" style="max-width:500px">Books I'm reading, have read and want to read.</p>
        <p class="mt-1 mb-3 line-height-3 text-center mx-auto" style="max-width:500px">Affiliate links in use.</p>
    </div>
    
    <section v-if="readingList" class="p-2 md:p-12">

        <button class="btn btn-ghost mb-6" @click="() => {searchStatus = null; searchString = null}">Show all</button>
        <button class="btn btn-ghost mb-6" @click="searchStatus = 'reading'">Reading</button>
        <button class="btn btn-ghost mb-6" @click="searchStatus = 'read'">Read</button>
        <button class="btn btn-ghost mb-6" @click="searchStatus = 'to read'">To read</button>
        <button class="btn btn-ghost mb-6" @click="searchStatus = 'did not finish'">Did not finish</button>

        <input v-model="searchString" type="text" placeholder="Search by title, author or series" class="input input-bordered w-full mb-6" @keyup="filterBooks(readingList.meta.books, searchString, searchStatus)" />

        {{ filterBooks(readingList.items, searchString, searchStatus).length }} books.

            <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 items-top">
                <div v-for="book in sortBooks(filterBooks(readingList.items, searchString, searchStatus))" class="card bg-base-100 shadow-xl">
                    <NuxtLink :to="book.medium == 'audiobook' ? book.linkApple : book.linkAmazon" target="_blank">
                        
                    <figure v-if="book.cover" class="h-auto static">
                        <div class="absolute bottom-0 right-0 rounded-md">
                            <div :class="`badge ${getBadgeClass(book.status)}`">
                                <span v-if="book.status == 'read'">Read</span>
                                <span v-if="book.status == 'reading'">Reading now</span>
                                <span v-if="book.status == 'to read'">To read</span>
                                <span v-if="book.status == 'did not finish'">Did not finish</span>
                            </div>
                            
                        </div>
                        <progress v-if="book.status == 'reading'"  class="progress progress-primary w-full" :value="book.progress" max="100"></progress>
                        <img
                            :src="book.cover"
                            :alt="`${book.title} book cover`"
                            :title="`${book.title} book cover`"
                        />
                        
                    </figure>
                    <div v-else class="card-body">
                        <h2 class="card-title">{{ book.title }}</h2>
                         <div :class="`badge ${getBadgeClass(book.status)}`">
                                <span v-if="book.status == 'read'">Read</span>
                                <span v-if="book.status == 'currently-reading'">Reading now</span>
                                <span v-if="book.status == 'to-read'">To read</span>
                                <span v-if="book.status == 'did not finish'">Did not finish</span>
                            </div>
                        
                    </div>
                    </NuxtLink>
                </div>
            </div>
    </section>
    <section v-else class="p-2 md:p-12">
        <p class="text-center">Loading reading list...</p>
        <span class="loading loading-spinner loading-lg"></span>
    </section>
</template>

<script setup>
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pb-crnet.de1.53675094.xyz');

const readingList = await pb.collection('books').getList(1, 999,{
    expand: 'authors    '
});

const searchString = ref('');
const searchStatus = ref('');

function sortBooks(data) {
    return data.sort((a, b) => {
        return a.expand.authors[0].lastName.toLowerCase().localeCompare(b.expand.authors[0].lastName.toLowerCase()) || 
        a.published - b.published || a.title.toLowerCase().localeCompare(b.title.toLowerCase()) ;
    })
}

function getBadgeClass(status) {
   switch(status) {
    case 'read':
        return 'badge-success';
    case 'reading':
        return 'badge-warning';
    case 'to read':
        return 'badge-info';
    default:
        return 'badge-danger';
   }
}

function filterBooks(books, searchString, searchStatus) {
    if (!searchString && !searchStatus) return books;
    const lowerSearch = searchString ? searchString.toLowerCase() : '';
    return books.filter(book => 
        (!searchString || book.title.toLowerCase().includes(lowerSearch) || book.expand.authors[0].lastName.toLowerCase().includes(lowerSearch) || book.series.toLowerCase().includes(lowerSearch)) &&
        (!searchStatus || book.status === searchStatus)
    );
}

useHead({
  title: 'Chris Rosser | Reading List'
})

</script>