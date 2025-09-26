// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Runtime configuration
  runtimeConfig: {
    // Private keys (only available on server-side)
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      siteName: process.env.SITE_NAME || 'Hyperf.dev'
    }
  },

  // Development server configuration
  devServer: {
    port: parseInt(process.env.PORT || '3000'),
    host: '0.0.0.0'
  },

  // Nitro configuration for production
  nitro: {
    port: parseInt(process.env.NITRO_PORT || process.env.PORT || '3000'),
    host: '0.0.0.0'
  },

  app: {
    head: {
      title: 'Hyperf - High-Performance PHP Framework',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Hyperf is a high-performance, coroutine-based PHP framework built on Swoole. Perfect for microservices, web servers, and modern PHP applications.'
        },
        { name: 'keywords', content: 'Hyperf, PHP, framework, coroutine, Swoole, microservices, high-performance' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' },
        { rel: 'shortcut icon', href: '/logo.png' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
