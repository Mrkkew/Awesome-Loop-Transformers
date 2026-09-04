import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { lastUpdated } from '../lib/papers';
import './globals.css';

const siteUrl = 'https://awesome-loop-transformers.bright-haven-2369.chatgpt.site';
const catalogUrl = 'https://raw.githubusercontent.com/Mrkkew/Awesome-Loop-Transformers/main/data/papers.json';
const description = 'A bilingual research atlas of looped and recurrent-depth Transformers, latent reasoning, adaptive compute, and test-time compute.';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Awesome Loop Transformers',
    template: '%s · Awesome Loop Transformers',
  },
  description,
  keywords: ['looped transformer', 'recurrent depth', 'latent reasoning', 'test-time compute', 'awesome list'],
  authors: [{ name: 'Awesome Loop Transformers contributors' }],
  creator: 'Awesome Loop Transformers contributors',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Awesome Loop Transformers',
    description: 'A bilingual research atlas of looped Transformers and latent reasoning · 2024—present',
    type: 'website',
    url: '/',
    siteName: 'Awesome Loop Transformers',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Awesome Loop Transformers research atlas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awesome Loop Transformers',
    description: 'A bilingual research atlas of looped Transformers and latent reasoning · 2024—present',
    images: ['/og.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Awesome Loop Transformers',
  description,
  url: siteUrl,
  inLanguage: ['en', 'zh-CN'],
  dateModified: lastUpdated,
  isAccessibleForFree: true,
  about: [
    'Looped Transformers',
    'Recurrent-depth Transformers',
    'Latent reasoning',
    'Adaptive computation',
    'Test-time compute',
  ],
  mainEntity: {
    '@type': 'Dataset',
    name: 'Awesome Loop Transformers paper catalog',
    description: 'A bilingual catalog of 142 papers and projects covering looped Transformers and related latent-reasoning research.',
    url: `${siteUrl}/#catalog`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    dateModified: lastUpdated,
    creator: {
      '@type': 'Person',
      name: 'Mrkkew',
      url: 'https://github.com/Mrkkew',
    },
    distribution: {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: catalogUrl,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
