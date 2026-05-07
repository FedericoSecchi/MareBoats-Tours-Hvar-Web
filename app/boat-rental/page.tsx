import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

export const metadata: Metadata = {
  ...generateSEO({
    title: 'Boat Rental Hvar — Rent a Boat With or Without Skipper | MareBoats',
    description:
      'Rent a boat in Hvar, Croatia. Choose from skippered private tours or self-drive rental. RIB speedboats, up to 8 people. Book direct on WhatsApp.',
    keywords: [
      'boat rental hvar',
      'rent a boat hvar croatia',
      'hvar boat hire',
      'private boat hvar',
      'boat hire hvar without skipper',
      'self drive boat hvar',
    ],
    slug: 'boat-rental',
  }),
  robots: { index: true, follow: true },
};

const WA_BASE = 'https://wa.me/385951966734?text=';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a license to rent a boat in Hvar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For self-drive rental you need a valid boating license. If you don't have one, our skippered private tours are the perfect alternative — no license needed.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many people can fit on the boat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our RIB speedboats accommodate up to 8–10 people depending on the vessel.',
      },
    },
    {
      '@type': 'Question',
      name: "What's included in the boat rental?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Skippered tours include fuel, bottled water, icebox, and snorkel gear. Self-drive rental includes the boat only — fuel and equipment are extra.',
      },
    },
  ],
};

const FAQS = [
  {
    q: 'Do I need a license to rent a boat in Hvar?',
    a: "For self-drive rental you need a valid boating license. If you don't have one, our skippered private tours are the perfect alternative — no license needed.",
  },
  {
    q: 'How many people can fit on the boat?',
    a: 'Our RIB speedboats accommodate up to 8–10 people depending on the vessel.',
  },
  {
    q: "What's included in the boat rental?",
    a: 'Skippered tours include fuel, bottled water, icebox, and snorkel gear. Self-drive rental includes the boat only — fuel and equipment are extra.',
  },
];

export default function BoatRentalPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={faqSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)] px-4 py-20 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, rgba(59,201,219,0.18) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Hvar, Croatia
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Boat Rental in Hvar, Croatia
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Private boat from Hvar Harbour. Pick your format — captain included or self-drive.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-5 font-body text-base leading-relaxed text-[color:var(--gray)]">
          <p>
            Looking to rent a boat in Hvar? MareBoats offers two formats depending on your
            experience and preference. The most popular option is a <strong className="text-[color:var(--white)]">private boat tour with
            skipper included</strong> — no license needed, full-day or half-day, custom route around
            Pakleni Islands, Blue Cave, Red Rocks, and more. It&apos;s the easiest and most complete
            way to experience Hvar boat hire.
          </p>
          <p>
            For experienced sailors, we also offer a <strong className="text-[color:var(--white)]">self-drive boat rental in Hvar</strong>.
            Valid boating license required. You take the RIB out on your own schedule — fuel
            full-in, full-out. Pickup at Hvar Harbour. This is a genuine <em>rent a boat Hvar
            Croatia</em> option for those who know what they&apos;re doing on the water.
          </p>
          <p>
            All boats are modern semi-rigid RIBs (rigid inflatable boats) — fast, stable, and
            built for the Adriatic. Whether you book a private boat Hvar tour with a local skipper
            or take the helm yourself, you&apos;re getting the same quality vessel. Message us on
            WhatsApp with your dates and group size and we&apos;ll sort the rest.
          </p>
        </div>
      </section>

      {/* Two option cards */}
      <section className="bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Two options
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Choose Your Format
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* With Skipper */}
            <article className="flex flex-col rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--bg)] p-8 shadow-[0_10px_30px_rgba(59,201,219,0.10)]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </span>
                <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--accent)]">
                  Most popular
                </p>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Private Boat Tour — Skipper Included
              </h3>

              <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                Full day or half day. Custom route. Fuel, water, snorkel included. No license
                needed.
              </p>

              <ul className="mt-5 space-y-2 font-body text-sm text-[color:var(--gray)]">
                {[
                  'No boating license required',
                  'Local skipper who knows every spot',
                  'Fuel, bottled water & snorkel gear included',
                  'Up to 8 people — private group only',
                  'Custom itinerary, your pace',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <span className="font-body text-lg font-bold text-[color:var(--accent)]">
                  From €400
                </span>
                <WhatsAppTrackedLink
                  href={`${WA_BASE}${encodeURIComponent("Hi! I'd like to book a private boat tour with skipper.")}`}
                  label="boat_rental_skipper"
                  className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-5 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                >
                  Book This Tour
                </WhatsAppTrackedLink>
              </div>
            </article>

            {/* Without Skipper */}
            <article className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--surface)] text-[color:var(--gray)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 17l4-8 4 4 4-6 4 10" />
                    <path d="M3 21h18" />
                  </svg>
                </span>
                <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--gray)]">
                  License required
                </p>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Self-Drive Boat Rental
              </h3>

              <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                RIB speedboat for self-drive. Valid boating license required. Fuel not included.
              </p>

              <ul className="mt-5 space-y-2 font-body text-sm text-[color:var(--gray)]">
                {[
                  'Valid boating license required',
                  'Fuel full-in, full-out',
                  'Deposit may apply',
                  'Pre/post photos at handover',
                  'Pickup at Hvar Harbour',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gray)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <span className="font-body text-lg font-bold text-[color:var(--white)]">
                  On request
                </span>
                <WhatsAppTrackedLink
                  href={`${WA_BASE}${encodeURIComponent("Hi! I'd like to ask about self-drive boat rental in Hvar.")}`}
                  label="boat_rental_self_drive"
                  className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-5 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]"
                >
                  Ask for Availability
                </WhatsAppTrackedLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Common questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Boat Rental FAQ
          </h2>

          <div className="mt-8 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 open:bg-[color:var(--surface)]/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] focus-visible:outline-none">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[color:var(--accent)] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-12">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          <p className="w-full font-body text-sm text-[color:var(--gray)]">
            Looking for more options?
          </p>
          <Link
            href="/rentals/"
            className="font-body text-sm font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline"
          >
            See all rental options →
          </Link>
          <Link
            href="/tours/"
            className="font-body text-sm font-semibold text-[color:var(--white)] transition-colors hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline"
          >
            Browse all private tours →
          </Link>
        </div>
      </section>
    </main>
  );
}
