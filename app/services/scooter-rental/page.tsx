import type { Metadata } from 'next';
import MetaRedirect from '@/components/ui/MetaRedirect';

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
  return <MetaRedirect to={TARGET} label="Redirecting to rentals…" />;
}
