'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

type WhatsAppTrackedLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick' | 'children' | 'className'>;

export function WhatsAppTrackedLink({
  href,
  label,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: WhatsAppTrackedLinkProps) {
  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() =>
        trackEvent({
          action: 'whatsapp_click',
          category: 'conversion',
          label,
        })
      }
    >
      {children}
    </a>
  );
}
