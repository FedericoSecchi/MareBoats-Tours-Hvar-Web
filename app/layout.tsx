import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/sections/Footer';
import { businessSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://mareboatshvar.com'),
  title: {
    default: 'Mare Boats Hvar — Private Boat Tours in Hvar, Croatia',
    template: '%s | Mare Boats Hvar',
  },
  description:
    'Private boat tours from Hvar, Croatia. Blue Cave excursions, Red Rocks, Pakleni Islands, boat rental and transfers. Local skipper, WhatsApp booking.',
  keywords: ['boat tours hvar', 'mare boats hvar', 'private boat hvar', 'hvar croatia tours'],
  authors: [{ name: 'Mare Boats Hvar' }],
  creator: 'Mare Boats Hvar',
  publisher: 'Mare Boats Hvar',
  formatDetection: { telephone: true, email: true },
  // Syne & Space Grotesk load via @fontsource with font-display: swap in their @font-face rules.
  icons: {
    icon: [
      { url: '/img/mareboats-icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  alternates: {
    canonical: 'https://mareboatshvar.com',
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
    type: 'website',
    locale: 'en_US',
    url: 'https://mareboatshvar.com',
    siteName: 'Mare Boats Hvar',
    title: 'Mare Boats Hvar — Private Boat Tours in Hvar, Croatia',
    description:
      'Private boat tours from Hvar, Croatia. Blue Cave excursions, Red Rocks, Pakleni Islands, boat rental and transfers. Local skipper, WhatsApp booking.',
    images: [
      {
        url: '/img/mareboats-og.png',
        width: 1200,
        height: 630,
        alt: 'Mare Boats Hvar — Private boat tours in Hvar, Croatia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mare Boats Hvar — Private Boat Tours in Hvar, Croatia',
    description:
      'Private boat tours from Hvar, Croatia. Blue Cave, Red Rocks, Pakleni Islands, sunset cruises and transfers. Local skipper, WhatsApp booking.',
    images: ['/img/mareboats-og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/img/carousel-1.jpeg" media="(max-width: 768px)" />
      </head>
      <body className="antialiased font-body">
        <JsonLd data={businessSchema as Record<string, unknown>} />
        <NavBar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
