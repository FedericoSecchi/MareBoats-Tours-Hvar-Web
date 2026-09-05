'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * /qr - single-QR hub for all physical touchpoints (stickers, cards, stand).
 * noindex: true (handled by <meta name="robots"> below and sitemap exclusion).
 * No navbar, no footer, no floating WhatsApp button - dedicated full-screen
 * experience optimised for mobile.
 */

type Variant = 'primary' | 'secondary';

type QrButton = {
  icon: string;
  label: string;
  description: string;
  href: string;
  variant: Variant;
  badge?: string;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WA_QR_HREF =
  'https://wa.me/385951966734?text=Hi%2C%20I%20scanned%20the%20MareBoats%20QR%20code%20and%20have%20a%20question.';

const QR_BUTTONS: QrButton[] = [
  {
    icon: '🔍',
    label: 'Explore Tours',
    description: 'Browse our tours and book your day on the water',
    href: '/landing/explore',
    variant: 'primary',
  },
  {
    icon: '📋',
    label: 'Pre-Tour Info',
    description: "Your tour is coming up. Here's everything you need.",
    href: '/landing/pre-tour',
    variant: 'secondary',
  },
  {
    icon: '🌊',
    label: 'On Tour',
    description: 'Info about every stop - download for offline use',
    href: '/hvar-islands-guide?ref=qr',
    variant: 'secondary',
    badge: '⬇ Save offline',
  },
  {
    icon: '⭐',
    label: 'Leave a Review',
    description: 'Just finished? 30 seconds. Means the world.',
    href: '/landing/review',
    variant: 'secondary',
  },
  {
    icon: '🗺️',
    label: 'Hvar Guide',
    description: 'Restaurants, beaches and hidden spots on the island',
    href: '/landing/guide-hvar',
    variant: 'secondary',
  },
  {
    icon: '🛥️',
    label: 'Rental Rules',
    description: 'What to know before your boat rental',
    href: '/landing/rental',
    variant: 'secondary',
  },
  {
    icon: '🌤️',
    label: 'Current Conditions',
    description: 'Wind, sea, Blue Cave status',
    href: '/conditions',
    variant: 'secondary',
  },
];

const easeOutBack = [0.34, 1.56, 0.64, 1] as const;

function Card({
  button,
  delay,
}: {
  button: QrButton;
  delay: number;
}) {
  const isPrimary = button.variant === 'primary';

  const base =
    'relative flex items-start gap-4 rounded-2xl px-5 py-4 transition-[transform,background-color,border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]';
  const variantClass = isPrimary
    ? 'bg-[color:var(--accent)] text-[color:var(--bg)] border border-transparent shadow-[0_14px_36px_rgba(59,201,219,0.35)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(59,201,219,0.45)]'
    : 'border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--white)] hover:-translate-y-0.5 hover:border-[color:var(--accent)]/60 hover:shadow-[0_14px_30px_rgba(59,201,219,0.18)]';

  const content: ReactNode = (
    <>
      <span className="shrink-0 text-2xl leading-none" aria-hidden="true">
        {button.icon}
      </span>
      <span className="flex flex-1 flex-col gap-1">
        <span className="flex items-center justify-between gap-3">
          <span className="font-display text-base font-semibold tracking-[-0.01em]">
            {button.label}
          </span>
          {button.badge && (
            <span
              className={`rounded-pill px-2 py-0.5 font-body text-[0.65rem] font-semibold uppercase tracking-wide ${
                isPrimary
                  ? 'bg-[color:var(--bg)]/15 text-[color:var(--bg)]'
                  : 'bg-[color:var(--accent)]/15 text-[color:var(--accent)]'
              }`}
            >
              {button.badge}
            </span>
          )}
        </span>
        <span
          className={`font-body text-[0.85rem] leading-snug ${
            isPrimary ? 'text-[color:var(--bg)]/80' : 'text-[color:var(--gray)]'
          }`}
        >
          {button.description}
        </span>
      </span>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: easeOutBack }}
    >
      <Link
        href={button.href}
        className={`${base} ${variantClass} block`}
      >
        {content}
      </Link>
    </motion.div>
  );
}

export default function QrHubPage() {
  return (
    <>
      {/* noindex - /qr is a physical entry point only. */}
      <meta name="robots" content="noindex, nofollow" />

      <main className="relative min-h-[100svh] overflow-hidden bg-[color:var(--bg)] text-[color:var(--white)]">
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, rgba(59,201,219,0.18) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[480px] flex-col px-5 pb-10 pt-8">
          {/* Header: logo left, WhatsApp shortcut right */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="MareBoats Hvar - home"
              className="inline-flex w-fit rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
            >
              <Image
                src="/img/mareboats-logo-horizontal.svg"
                alt="MareBoats Hvar"
                width={140}
                height={20}
                className="h-6 w-auto opacity-80"
                priority
              />
            </Link>
            <a
              href={WA_QR_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on WhatsApp"
              className="flex min-h-[44px] items-center gap-1.5 rounded-full bg-green-500/15 px-3 text-green-400 transition-colors duration-200 hover:bg-green-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60 active:scale-95"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span className="font-body text-xs font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Intro */}
          <div className="mt-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/img/mareboats-icon.svg"
                alt="MareBoats"
                width={64}
                height={64}
                className="h-16 w-16"
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-6 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)]"
            >
              Thanks for choosing us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.7 }}
              className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]"
            >
              What do you need?
            </motion.p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3">
            {QR_BUTTONS.map((btn, i) => (
              <Card key={btn.href} button={btn} delay={2.1 + i * 0.12} />
            ))}
          </div>

          {/* Save offline hint (only for On Tour) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="mt-6 text-center"
          >
            <button
              type="button"
              onClick={() => {
                // Navigate to /on-tour then trigger print. Simplest UX: just remind.
                if (typeof window !== 'undefined') {
                  window.open('/hvar-islands-guide/', '_blank');
                }
              }}
              className="font-body text-xs text-[color:var(--gray)] underline underline-offset-4 transition-colors hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:text-[color:var(--accent)]"
            >
              Tip: open &ldquo;On Tour&rdquo; and use your browser&apos;s Save as PDF for offline use
            </button>
          </motion.div>
        </div>
      </main>
    </>
  );
}
