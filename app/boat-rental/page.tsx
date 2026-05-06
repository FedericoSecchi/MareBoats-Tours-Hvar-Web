import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

const TARGET = '/rentals/';

export const metadata: Metadata = {
  title: 'Boat Rental Hvar — MareBoats',
  description: 'Redirecting to the MareBoats rentals page.',
  alternates: { canonical: `https://mareboatshvar.com${TARGET}` },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function BoatRentalRedirect() {
  permanentRedirect(TARGET);
}
