<template>
    <NuxtLink
      :href="href"
      :target="target"
      class="underline text-theme hover:text-primary"
    >
      <slot />
    </NuxtLink>
  </template>
  
  <script setup lang="ts">
  import type { PropType } from 'vue'
  
  defineProps({
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
      default: undefined,
      required: false
    }
  })
  </script>

<style scoped>

.text-theme {
  color: var(--fallback-bc,oklch(var(--bc)/1));
}
</style>