'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

export function TrackedTourDetailLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={`/tours/${slug}`}
      className={className}
      onClick={() =>
        trackEvent({
          action: 'tour_card_click',
          category: 'engagement',
          label: slug,
        })
      }
    >
      {children}
    </Link>
  );
}
