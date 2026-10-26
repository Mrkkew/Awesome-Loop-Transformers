import type { MetadataRoute } from 'next';
import { lastUpdated } from '../lib/papers';

const siteUrl = 'https://awesome-loop-transformers.liyulin.workers.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(`${lastUpdated}T00:00:00Z`),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
