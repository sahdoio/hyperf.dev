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
    host: '0.0.0.0',
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },

  app: {
    head: {
      title: 'Hyperf - High-Performance PHP Framework',
      titleTemplate: '%s | Hyperf',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Hyperf is a high-performance, coroutine-based PHP framework built on Swoole. Perfect for microservices, web servers, and modern PHP applications.'
        },
        { name: 'keywords', content: 'Hyperf, PHP, framework, coroutine, Swoole, microservices, high-performance, async, concurrent, web development' },
        { name: 'author', content: 'Hyperf Community' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'en' },
        { name: 'theme-color', content: '#F59E0B' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Hyperf' },
        { property: 'og:title', content: 'Hyperf - High-Performance PHP Framework' },
        { property: 'og:description', content: 'Hyperf is a high-performance, coroutine-based PHP framework built on Swoole. Perfect for microservices, web servers, and modern PHP applications.' },
        { property: 'og:image', content: '/logo.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Hyperf Logo' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@hyperf_php' },
        { name: 'twitter:creator', content: '@hyperf_php' },
        { name: 'twitter:title', content: 'Hyperf - High-Performance PHP Framework' },
        { name: 'twitter:description', content: 'High-performance, coroutine-based PHP framework built on Swoole. Perfect for microservices and modern PHP applications.' },
        { name: 'twitter:image', content: '/logo.png' },
        { name: 'twitter:image:alt', content: 'Hyperf Logo' },

        // Additional SEO
        { name: 'application-name', content: 'Hyperf' },
        { name: 'apple-mobile-web-app-title', content: 'Hyperf' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#F59E0B' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },

        // Verification (add your actual verification codes)
        // { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE' },
        // { name: 'msvalidate.01', content: 'YOUR_BING_VERIFICATION_CODE' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' },
        { rel: 'shortcut icon', href: '/logo.png' },
        { rel: 'canonical', href: process.env.SITE_URL || 'https://hyperf.dev' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': 'Hyperf',
            'description': 'High-performance, coroutine-based PHP framework built on Swoole',
            'url': process.env.SITE_URL || 'https://hyperf.dev',
            'logo': '/logo.png',
            'applicationCategory': 'DeveloperApplication',
            'operatingSystem': 'Cross-platform',
            'programmingLanguage': 'PHP',
            'author': {
              '@type': 'Organization',
              'name': 'Hyperf Community',
              'url': 'https://github.com/hyperf'
            },
            'sameAs': [
              'https://github.com/hyperf/hyperf',
              'https://discord.gg/hPQSAPknfp',
              'https://hyperf.wiki'
            ]
          })
        }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // SEO Configuration
  ssr: true,

  // Generate static routes for better SEO
  generate: {
    routes: [
      '/',
      '/blog',
      '/blog/getting-started-with-hyperf'
    ]
  }
})
