// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },


  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
