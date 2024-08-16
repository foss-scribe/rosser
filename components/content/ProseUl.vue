<template>
    <ul class="text-xl text-primary">
      <slot />
    </ul>
  </template>

<style scoped lang="scss">

ul {
    font-family: "Crimson Text";
    list-style-type: disc;
    margin: 1rem;

}

ul.contains-task-list {
    list-style-type: none;
}

</style>