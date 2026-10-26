import type { MetadataRoute } from 'next';

const siteUrl = 'https://awesome-loop-transformers.liyulin.workers.dev';

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
