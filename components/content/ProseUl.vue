<template>
    <ul class="text-xl text-primary list-disc ml-12 mb-2">
      <slot />
    </ul>
  </template>

<style scoped lang="scss">

ul {
    font-family: "Crimson Text";

}

ul.contains-task-list {
    list-style-type: none;
}

</style>