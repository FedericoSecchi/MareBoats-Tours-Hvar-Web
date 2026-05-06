import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

const TARGET = '/tours/blue-cave-pakleni-islands/';

export const metadata: Metadata = {
  title: 'Blue Cave Tour Hvar — MareBoats',
  description: 'Redirecting to the 5 Islands, 4 Beaches, 3 Caves tour page.',
  alternates: { canonical: `https://mareboatshvar.com${TARGET}` },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function BlueCaveRedirect() {
  permanentRedirect(TARGET);
}
