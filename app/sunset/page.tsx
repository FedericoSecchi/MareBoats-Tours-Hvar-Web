import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

const TARGET = '/tours/sunset-cruise/';

export const metadata: Metadata = {
  title: 'Sunset Cruise Hvar — MareBoats',
  description: 'Redirecting to the Sunset Cruise tour page.',
  alternates: { canonical: `https://mareboatshvar.com${TARGET}` },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function SunsetRedirect() {
  permanentRedirect(TARGET);
}
