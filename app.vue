<template>
  <main class="flex flex-col">
    <SiteNav />
    <BreadCrumbs />
    <NuxtPage />
    <SiteFooter />
  </main>
</template>


<script setup>
umTrackView().then(res => console.log(res.ok));
</script>

<style>
html, body {
  margin: 0;
}
</style>