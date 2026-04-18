import type { Metadata } from 'next';

const BASE_URL = 'https://mareboatshvar.com';
const DEFAULT_OG_IMAGE = '/img/mareboats-og.png';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  slug?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

export function generateSEO({
  title,
  description,
  keywords,
  slug = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}: SEOProps): Metadata {
  const canonical = slug ? `${BASE_URL}/${slug}/` : `${BASE_URL}/`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Mare Boats Hvar',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: ogType,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
