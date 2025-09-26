<template>
  <div class="bg-black min-h-screen">
    <!-- Blog Header -->
    <section class="bg-gray-900 border-b border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-white mb-4">Hyperf Blog</h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news, tutorials, and insights about Hyperf and high-performance PHP development.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div v-if="posts.length === 0 && !loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
          <p class="text-gray-400 mt-4">Loading blog posts...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="posts.length === 0" class="text-center py-12">
          <div class="text-4xl mb-4">📝</div>
          <h3 class="text-xl font-semibold text-white mb-2">No Posts Available</h3>
          <p class="text-gray-400">Check back soon for new content!</p>
        </div>

        <!-- Posts Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in visiblePosts"
            :key="post.id"
            class="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden hover:bg-gray-750 transition-colors"
          >
            <div :class="`h-48 bg-gradient-to-br ${post.gradient}`"></div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-400 mb-2">
                <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                <span class="mx-2">·</span>
                <span>{{ post.readTime }}</span>
              </div>
              <h2 class="text-xl font-bold text-white mb-3">
                <NuxtLink :to="`/blog/${post.slug}`" class="hover:text-yellow-400 transition-colors">
                  {{ post.title }}
                </NuxtLink>
              </h2>
              <p class="text-gray-300 mb-4">
                {{ post.excerpt }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag.name"
                  :class="`px-2 py-1 bg-${tag.color}-600 text-${tag.color}-100 text-xs rounded-full`"
                >
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMorePosts" class="text-center mt-12">
          <button
            @click="loadMorePosts"
            :disabled="loading"
            class="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors disabled:opacity-50"
          >
            {{ loading ? 'Loading...' : 'Load More Posts' }}
          </button>
        </div>

        <!-- End of Posts Message -->
        <div v-else-if="posts.length > 0" class="text-center mt-12">
          <p class="text-gray-400">
            You've reached the end! 🎉 That's all {{ posts.length }} posts.
          </p>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="bg-gray-900 border-t border-gray-700">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p class="text-gray-300 mb-6">
            Get the latest Hyperf news, tutorials, and community updates delivered to your inbox.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400">
            <button class="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// SEO
useHead({
  title: 'Blog - Hyperf',
  meta: [
    {
      name: 'description',
      content: 'Stay updated with the latest Hyperf news, tutorials, and insights about high-performance PHP development.'
    }
  ]
})

// Reactive data
const posts = ref([])
const postsPerPage = ref(6)
const currentPage = ref(1)
const loading = ref(false)

// Computed properties
const visiblePosts = computed(() => {
  return posts.value.slice(0, currentPage.value * postsPerPage.value)
})

const hasMorePosts = computed(() => {
  return visiblePosts.value.length < posts.value.length
})

// Methods
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const loadMorePosts = () => {
  loading.value = true

  // Simulate loading delay for better UX
  setTimeout(() => {
    currentPage.value++
    loading.value = false
  }, 500)
}

const fetchBlogPosts = async () => {
  try {
    const response = await fetch('/data/blog-posts.json')
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }
    const data = await response.json()
    posts.value = data.posts

    // Set posts per page from metadata if available
    if (data.meta && data.meta.postsPerPage) {
      postsPerPage.value = data.meta.postsPerPage
    }
  } catch (error) {
    console.error('Error loading blog posts:', error)
    // Fallback: show an empty state or error message
    posts.value = []
  }
}

// Lifecycle
onMounted(() => {
  fetchBlogPosts()
})
</script>