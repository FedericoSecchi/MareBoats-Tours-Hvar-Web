'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * /qr — single-QR hub for all physical touchpoints (stickers, cards, stand).
 * noindex: true (handled by <meta name="robots"> below and sitemap exclusion).
 * No navbar, no footer, no floating WhatsApp button — dedicated full-screen
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
    description: 'Info about every stop — download for offline use',
    href: '/on-tour',
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
    icon: '🛵',
    label: 'Rental Rules',
    description: 'What to know before your boat or scooter rental',
    href: '/landing/rental',
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
      <Link href={button.href} className={`${base} ${variantClass} block`}>
        {content}
      </Link>
    </motion.div>
  );
}

export default function QrHubPage() {
  return (
    <>
      {/* noindex — /qr is a physical entry point only. */}
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
          {/* Small logo top-left as home link */}
          <Link
            href="/"
            aria-label="MareBoats Hvar — home"
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
                  window.open('/on-tour', '_blank');
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
