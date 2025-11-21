<template>
  <main class="container mx-auto px-4 xl:px-24">
    <SiteNav />
    <BreadCrumbs />
    <NuxtPage />
    <Meander />
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