import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/sections/Footer';
import { businessSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mareboatshvar.com'),
  title: {
    default: 'Mare Boats Hvar — Private Boat Tours in Hvar, Croatia',
    template: '%s | Mare Boats Hvar',
  },
  description:
    'Private boat tours from Hvar, Croatia. Blue Cave excursions, Pakleni Islands, boat rental, and transfers. Aerial drone video included.',
  keywords: ['boat tours hvar', 'mare boats hvar', 'private boat hvar', 'hvar croatia tours'],
  authors: [{ name: 'Mare Boats Hvar' }],
  creator: 'Mare Boats Hvar',
  publisher: 'Mare Boats Hvar',
  formatDetection: { telephone: true, email: true },
  icons: {
    icon: '/img/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mareboatshvar.com',
    siteName: 'Mare Boats Hvar',
    images: [
      {
        url: '/img/carousel-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mare Boats Hvar — Private boat tours in Hvar, Croatia',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <JsonLd data={businessSchema as Record<string, unknown>} />
        <NavBar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
