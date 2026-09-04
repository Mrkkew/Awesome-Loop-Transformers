import type { MetadataRoute } from 'next';
import { lastUpdated } from '../lib/papers';

const siteUrl = 'https://awesome-loop-transformers.bright-haven-2369.chatgpt.site';

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
