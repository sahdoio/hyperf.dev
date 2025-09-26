<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Build <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Lightning-Fast</span> PHP Applications
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Hyperf is a high-performance, coroutine-based PHP framework built on Swoole. Perfect for microservices, web servers, and modern PHP applications.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://hyperf.wiki/3.1/#/en/" target="_blank" rel="noopener noreferrer" class="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Started
            </a>
            <a href="https://discord.gg/hPQSAPknfp" target="_blank" rel="noopener noreferrer" class="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-300 transition-colors">
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Notice -->
    <section class="bg-gray-800 border-b border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-center">
          <div class="flex items-center space-x-3 text-center">
            <div class="flex-shrink-0">
              <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="text-sm text-gray-400">
              <span class="text-gray-300">Independent community resource</span> •
              <span>Official project: <a href="https://hyperf.wiki" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline transition-colors">hyperf.wiki</a></span> •
              <span>Maintained by Chinese developers</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Stats -->
    <section class="bg-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="p-6">
            <div class="text-3xl font-bold text-yellow-400 mb-2">🚀</div>
            <h3 class="text-xl font-semibold mb-2 text-white">Ultra-High Performance</h3>
            <p class="text-gray-300">Coroutine-based architecture delivers exceptional performance that outshines traditional PHP-FPM frameworks</p>
          </div>
          <div class="p-6">
            <div class="text-3xl font-bold text-blue-400 mb-2">⚡</div>
            <h3 class="text-xl font-semibold mb-2 text-white">Swoole Powered</h3>
            <p class="text-gray-300">Built on Swoole and Swow coroutines for handling massive amounts of concurrent traffic efficiently</p>
          </div>
          <div class="p-6">
            <div class="text-3xl font-bold text-green-400 mb-2">🔧</div>
            <h3 class="text-xl font-semibold mb-2 text-white">Battle-Tested</h3>
            <p class="text-gray-300">Used in production by medium and large Internet companies for years without incident</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Hyperf?
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Hyperf combines cutting-edge coroutine technology with flexible architecture to deliver unmatched performance and developer experience.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-white">Coroutine Architecture</h3>
            <p class="text-gray-300">Handle multiple requests concurrently within a single thread, significantly reducing context-switching overhead.</p>
          </div>

          <div class="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-white">Microservices Ready</h3>
            <p class="text-gray-300">Perfect for building distributed middleware software, microservices architecture, and modern web applications.</p>
          </div>

          <div class="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-white">PSR Standards</h3>
            <p class="text-gray-300">All components natively support coroutines and strictly adhere to PSR standards for maximum compatibility.</p>
          </div>

          <div class="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-white">Rich Ecosystem</h3>
            <p class="text-gray-300">Includes Dependency Injection, Events, Annotations, AOP, Middleware, ORM, and popular view engines.</p>
          </div>

          <div class="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-white">Proven at Scale</h3>
            <p class="text-gray-300">Over 6,000 GitHub stars and 350+ contributors. Trusted by companies for years in production environments.</p>
          </div>

          <div class="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <div class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-white">Flexible & Composable</h3>
            <p class="text-gray-300">Focus on flexibility and composition allows you to build exactly what you need without unnecessary overhead.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Perfect For Every Use Case
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Hyperf has discovered untapped potential in many fields, from web servers to IoT applications.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-6 border border-gray-600 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <div class="text-4xl mb-4">🌐</div>
            <h3 class="font-semibold mb-2 text-white">Web Servers</h3>
            <p class="text-sm text-gray-300">High-performance web applications with superior concurrency handling</p>
          </div>

          <div class="text-center p-6 border border-gray-600 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <div class="text-4xl mb-4">🔗</div>
            <h3 class="font-semibold mb-2 text-white">Gateway Servers</h3>
            <p class="text-sm text-gray-300">API gateways and proxy services with minimal latency</p>
          </div>

          <div class="text-center p-6 border border-gray-600 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <div class="text-4xl mb-4">🎮</div>
            <h3 class="font-semibold mb-2 text-white">Game Servers</h3>
            <p class="text-sm text-gray-300">Real-time multiplayer game backends with low latency</p>
          </div>

          <div class="text-center p-6 border border-gray-600 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <div class="text-4xl mb-4">📱</div>
            <h3 class="font-semibold mb-2 text-white">IoT Applications</h3>
            <p class="text-sm text-gray-300">Internet-of-Things services handling massive device connections</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Join many developers who trust Hyperf for their high-performance PHP applications.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://hyperf.wiki/3.1/#/en/" target="_blank" rel="noopener noreferrer" class="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Read Documentation
          </a>
          <a href="https://discord.gg/hPQSAPknfp" target="_blank" rel="noopener noreferrer" class="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-300 transition-colors">
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
  title: 'Hyperf - High-Performance PHP Framework',
  meta: [
    {
      name: 'description',
      content: 'Hyperf is a high-performance, coroutine-based PHP framework built on Swoole. Perfect for microservices, web servers, and modern PHP applications.'
    },
    {
      name: 'keywords',
      content: 'Hyperf, PHP, framework, coroutine, Swoole, microservices, high-performance, async, concurrent, web development, enterprise'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Hyperf - High-Performance PHP Framework'
    },
    {
      property: 'og:description',
      content: 'Build lightning-fast PHP applications with Hyperf. Coroutine-based architecture delivers exceptional performance for microservices and web servers.'
    },
    {
      property: 'og:url',
      content: config.public.siteUrl
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: `${config.public.siteUrl}/logo.png`
    },
    // Twitter Card
    {
      name: 'twitter:title',
      content: 'Hyperf - High-Performance PHP Framework'
    },
    {
      name: 'twitter:description',
      content: 'Build lightning-fast PHP applications with Hyperf. Coroutine-based architecture delivers exceptional performance.'
    },
    {
      name: 'twitter:image',
      content: `${config.public.siteUrl}/logo.png`
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: config.public.siteUrl
    }
  ]
})

// Structured data for homepage
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Hyperf',
        'description': 'High-performance, coroutine-based PHP framework built on Swoole',
        'url': config.public.siteUrl,
        'applicationCategory': 'DeveloperApplication',
        'operatingSystem': 'Cross-platform',
        'programmingLanguage': 'PHP',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'author': {
          '@type': 'Organization',
          'name': 'Hyperf Community',
          'url': 'https://github.com/hyperf'
        }
      })
    }
  ]
})
</script>