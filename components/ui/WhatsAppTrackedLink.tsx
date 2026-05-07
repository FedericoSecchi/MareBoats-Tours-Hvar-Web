'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { trackWhatsAppClick } from '@/lib/analytics';

type WhatsAppTrackedLinkProps = {
  href: string;
  /** Identifies where on the site this CTA lives (used as GA4 `section` param). */
  label: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
  /** Visible button text sent to GA4 as `cta_text`. Defaults to 'Book on WhatsApp'. */
  ctaText?: string;
  /** Tour name, only for tour-specific CTAs. */
  tourName?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick' | 'children' | 'className'>;

export function WhatsAppTrackedLink({
  href,
  label,
  children,
  className,
  'aria-label': ariaLabel,
  ctaText = 'Book on WhatsApp',
  tourName,
  ...rest
}: WhatsAppTrackedLinkProps) {
  const pathname = usePathname();

  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() =>
        trackWhatsAppClick({
          cta_text: ctaText,
          page_location: pathname ?? undefined,
          tour_name: tourName,
          section: label,
        })
      }
    >
      {children}
    </a>
  );
}
