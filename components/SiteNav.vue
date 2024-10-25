<template>

<div class="navbar bg-base-100">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
        <NuxtLink to="/">
            <img src="~/assets/images/logo.webp" alt="Image" height="50" />
        </NuxtLink>
        
    </button>
  </div>
  <div class="flex-1">
    <div class="flex-none hidden md:block">
        <ul class="menu menu-horizontal px-1">
            <li>
                <details>
                    <summary class="text-xl">Books</summary>
                    <ul class="bg-base-100 rounded-t-none p-0" style="min-width: 400px;">
                        <li>
                            <NuxtLink to="/books/cadocs-contract">
                                Cadoc's Contract
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/books/mistress-of-skeinhold">
                                Mistress of Skeinhold
                            </NuxtLink>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
        <NuxtLink to="/reading" class="btn btn-ghost text-xl">Reading List</NuxtLink>
        <NuxtLink to="https://medium.com/@chrisrosser" target="_blank" class="btn btn-ghost text-xl">Medium</NuxtLink>
        <NuxtLink to="https://chrisrosser.substack.com" target="_blank" class="btn btn-ghost text-xl">Substack</NuxtLink>
    </div>
  </div>
  <div class="flex-none visible md:hidden">
    <button class="btn btn-square btn-ghost" @click="showMobileMenu=!showMobileMenu">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </button>
  </div>
</div>

<div v-if="showMobileMenu">
    <div class="flex flex-col">
        <NuxtLink to="/" class="btn btn-ghost text-xl">Home</NuxtLink>
        <NuxtLink to="/books" class="btn btn-ghost text-xl">Books</NuxtLink>
        <NuxtLink to="/reading" class="btn btn-ghost text-xl">Reading List</NuxtLink>
        <NuxtLink to="https://medium.com/@chrisrosser" target="_blank" class="btn btn-ghost text-xl">Medium</NuxtLink>
        <NuxtLink to="https://chrisrosser.substack.com" target="_blank" class="btn btn-ghost text-xl">Substack</NuxtLink>
    </div>
</div>


</template>

<script setup>
const showMobileMenu = ref(false)
const route = useRoute();

watch(
  () => route.path,
  () => {
    showMobileMenu.value = false
  },
);

</script>

<style scoped>
a:link, a:visited {
    color: white;
    text-decoration: none;
}
</style>