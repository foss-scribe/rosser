<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <div>
    <ul v-if="toc && toc.links">
      <li v-for="link in toc.links" :key="link.text">
        <ul v-if="link.children">
            <li v-for="child in link.children">
                <a :href="`#${child.id}`">
                    {{ child.text }}
                </a>
            </li>
        </ul>
        <a v-else :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>


<style scoped lang="scss">

ul {
    ul {
        margin-left: 1rem;
    }
}

</style>