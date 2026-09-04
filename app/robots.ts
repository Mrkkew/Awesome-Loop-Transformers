import type { MetadataRoute } from 'next';

const siteUrl = 'https://awesome-loop-transformers.bright-haven-2369.chatgpt.site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
