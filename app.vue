<template>
  <main class="lg:container mx-auto px-2 xl:px-24">
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