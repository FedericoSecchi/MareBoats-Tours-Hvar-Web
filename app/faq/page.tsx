import type { Metadata } from 'next';
import MetaRedirect from '@/components/ui/MetaRedirect';

const TARGET = '/guide/';

export const metadata: Metadata = {
  title: 'MareBoats FAQ — Hvar',
  description: 'Redirecting to the MareBoats Hvar Guide, which includes all FAQs.',
  alternates: { canonical: `https://mareboatshvar.com${TARGET}` },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function FaqRedirect() {
  return <MetaRedirect to={TARGET} label="Redirecting to the Guide…" />;
}
