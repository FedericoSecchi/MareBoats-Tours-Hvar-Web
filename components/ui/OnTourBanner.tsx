'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function BannerInner() {
  const params = useSearchParams();
  if (params.get('ref') !== 'qr') return null;

  return (
    <div className="border-b border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-4 py-3 text-center">
      <p className="font-body text-sm text-[color:var(--white)]">
        You&apos;re on a MareBoats tour: tap any stop for details
      </p>
    </div>
  );
}

export default function OnTourBanner() {
  return (
    <Suspense fallback={null}>
      <BannerInner />
    </Suspense>
  );
}
