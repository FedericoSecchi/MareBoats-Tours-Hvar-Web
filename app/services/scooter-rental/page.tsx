import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

const TARGET = '/rentals/';

export const metadata: Metadata = {
  title: 'Scooter Rental Hvar — MareBoats',
  description: 'Redirecting to the MareBoats rentals page.',
  alternates: { canonical: `https://mareboatshvar.com${TARGET}` },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function ScooterRentalRedirect() {
  permanentRedirect(TARGET);
}
