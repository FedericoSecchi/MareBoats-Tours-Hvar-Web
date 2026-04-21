import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MareBoats Hvar — Quick Access',
  description: 'Quick access hub for MareBoats guests. Tours, pre-tour info, on-tour guide and more.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function QrLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
