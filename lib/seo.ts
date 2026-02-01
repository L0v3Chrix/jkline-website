import type { Metadata } from 'next';

export const siteMetadata = {
  title: 'J-Kline | Hip-Hop Artist & Recovery Advocate',
  description: 'Austin, TX hip-hop artist sharing his journey from addiction to redemption. Music, speaking, and community outreach.',
  keywords: [
    'J-Kline',
    'Austin hip hop',
    'recovery rapper',
    'motivational speaker',
    'Lost In Austin',
    'recovery advocate',
    'life coach',
    'Austin Texas artist',
    'hip hop artist',
    'addiction recovery',
    'inspirational music'
  ],
  author: 'J-Kline',
  siteUrl: 'https://jkline.com',
  locale: 'en_US',
  type: 'website',
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | J-Kline`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: 'J-Kline',
    locale: siteMetadata.locale,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'J-Kline - Hip-Hop Artist & Recovery Advocate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generatePageMetadata(
  title: string,
  description?: string,
  image?: string
): Metadata {
  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | J-Kline`,
      description: description || siteMetadata.description,
      images: image ? [{ url: image }] : undefined,
    },
  };
}
