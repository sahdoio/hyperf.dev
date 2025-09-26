export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.siteUrl || 'https://hyperf.dev'

  const staticRoutes = [
    {
      url: '',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date().toISOString()
    },
    {
      url: '/blog',
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    {
      url: '/blog/getting-started-with-hyperf',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2025-01-15').toISOString()
    }
  ]

  // You can add dynamic routes here by fetching from CMS or database
  // const dynamicRoutes = await fetchBlogPosts() // Example

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(route => `  <url>
    <loc>${baseURL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})