<template>
  <header class="bg-gray-900 shadow-lg sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img src="/logo.png" alt="Hyperf Logo" class="h-10 w-10 object-contain">
            <span class="text-xl font-bold text-white">Hyperf</span>
          </NuxtLink>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <NuxtLink to="/" class="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </NuxtLink>
            <NuxtLink to="/blog" class="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </NuxtLink>
            <a href="https://hyperf.wiki/3.1/#/en/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Documentation
            </a>
            <a href="https://discord.gg/hPQSAPknfp" target="_blank" rel="noopener noreferrer" class="bg-discord text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-discord-dark transition-colors">
              Discord
            </a>
          </div>
        </div>

        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-300 hover:text-yellow-400 focus:outline-none focus:text-yellow-400">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
          <NuxtLink to="/" class="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </NuxtLink>
          <NuxtLink to="/blog" class="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
            Blog
          </NuxtLink>
          <a href="https://hyperf.wiki/3.1/#/en/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
            Documentation
          </a>
          <a href="https://discord.gg/hPQSAPknfp" target="_blank" rel="noopener noreferrer" class="bg-discord text-white block px-3 py-2 rounded-md text-base font-medium">
            Discord
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.bg-discord {
  background-color: #5865F2;
}

.bg-discord-dark {
  background-color: #4752C4;
}
</style>