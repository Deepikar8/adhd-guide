import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adhd-guide.vercel.app'

  const routes = [
    '',
    '/types',
    '/types/inattentive',
    '/types/combined',
    '/age-groups',
    '/symptoms',
    '/brain',
    '/what-helps',
    '/sources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
