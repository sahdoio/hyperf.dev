<template>
  <div class="min-h-screen flex flex-col bg-black">
    <TheHeader />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
// Import components
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>