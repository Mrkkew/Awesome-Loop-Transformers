import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://raw.githubusercontent.com/Mrkkew/Awesome-Loop-Transformers/main/public/'),
  title: 'Awesome Loop Transformers',
  description: 'A bilingual research atlas of looped and recurrent-depth Transformers, latent reasoning, adaptive compute, and systems.',
  keywords: ['looped transformer', 'recurrent depth', 'latent reasoning', 'test-time compute', 'awesome list'],
  authors: [{ name: 'Awesome Loop Transformers contributors' }],
  openGraph: {
    title: 'Awesome Loop Transformers',
    description: 'A bilingual research atlas of looped Transformers and latent reasoning · 2024—present',
    type: 'website',
    images: [{ url: 'og.png', width: 1200, height: 630, alt: 'Awesome Loop Transformers research atlas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awesome Loop Transformers',
    description: 'A bilingual research atlas of looped Transformers and latent reasoning · 2024—present',
    images: ['og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
