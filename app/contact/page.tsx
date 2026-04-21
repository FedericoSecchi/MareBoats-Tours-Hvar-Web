import type { Metadata } from 'next';
import MetaRedirect from '@/components/ui/MetaRedirect';

const TARGET = '/';

export const metadata: Metadata = {
  title: 'Contact MareBoats Hvar',
  description: 'Redirecting to the MareBoats home page. All bookings via WhatsApp.',
  alternates: { canonical: `https://mareboatshvar.com${TARGET}` },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function ContactRedirect() {
  return <MetaRedirect to={TARGET} label="Redirecting home…" />;
}
