import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { rentalServiceSchema, rentalBreadcrumbSchema } from '@/lib/schema';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { rulesAndRentals, type Rule } from '@/lib/guide-content';

export const metadata: Metadata = {
  ...generateSEO({
    title: 'Rentals Hvar - Boat Rental & Water Scooter',
    description:
      'Rent a boat in Hvar with or without skipper, or hop on a water scooter. No licence? No problem. MareBoats rentals - pickup at Hvar Harbour.',
    keywords: [
      'boat rental hvar',
      'rent a boat hvar croatia',
      'hvar boat hire',
      'private boat hvar',
      'boat hire hvar without skipper',
      'self drive boat hvar',
      'boat hire hvar',
      'rent a boat hvar',
      'boat hire hvar no licence',
      'rent a boat hvar no licence',
      'hvar boat rental without licence',
      'water scooter hvar',
      'rent boat hvar croatia',
    ],
    slug: 'rentals',
    ogImage: '/img/waterscooter.jpeg',
  }),
  robots: { index: true, follow: true },
};

const SITE = 'https://mareboatshvar.com';
const WA_BASE = 'https://wa.me/385951966734?text=';

function waUrl(message: string) {
  return `${WA_BASE}${encodeURIComponent(message)}`;
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a license to rent a boat in Hvar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For self-drive rental you need a valid boating license. If you don't have one, our skippered private tours are the perfect alternative - no license needed.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many people can fit on the boat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our speedboats accommodate up to 9 people depending on the vessel.',
      },
    },
    {
      '@type': 'Question',
      name: "What's included in the boat rental?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Skippered tours include fuel, bottled water, icebox, and snorkel gear. Self-drive rental includes the boat only - fuel and equipment are extra.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a boat licence to rent a boat in Hvar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For self-drive rental, a valid boat licence is required by Croatian maritime law. If you don't have a licence, we offer all our boats with a local skipper included - no licence needed.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many people can rent a boat in Hvar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Our speedboats accommodate up to 9 people. For larger groups, contact us on WhatsApp and we'll arrange a solution.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the boat rental price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on the boat. The 60hp speedboat includes fuel. The Mariner 150hp is fuel full-in, full-out. Both Pasara options include fuel. Safety equipment and pre-rental briefing included on all boats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I choose my own route?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. With a skipper, we'll suggest the best spots based on conditions that day - but the route is yours. Self-drive rentals have recommended areas within the Hvar archipelago.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rent a boat in Hvar without a licence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For guests without a boating licence, we offer the Pasara - a small open boat available from €120/day. Contact us on WhatsApp to confirm eligibility for your group and dates.",
      },
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Rentals from MareBoats Hvar',
  description: 'Boat rental and water scooter at Hvar Harbour, Croatia.',
  itemListElement: [
    { '@type': 'ListItem', position: 1, url: `${SITE}/rentals/#boat-skipper`, name: 'Boat Rental - With Skipper' },
    { '@type': 'ListItem', position: 2, url: `${SITE}/rentals/#boat-self-drive`, name: 'Boat Rental - Self-Drive' },
    { '@type': 'ListItem', position: 3, url: `${SITE}/rentals/#water-scooter`, name: 'Water Scooter' },
  ],
};

const FAQS = [
  {
    q: 'Do I need a boat licence to rent a boat in Hvar?',
    a: "For self-drive rental, a valid boat licence is required by Croatian maritime law. If you don't have a licence, we offer all our boats with a local skipper included - no licence needed.",
  },
  {
    q: 'How many people can rent a boat in Hvar?',
    a: "Our speedboats accommodate up to 9 people. For larger groups, contact us on WhatsApp and we'll arrange a solution.",
  },
  {
    q: 'What is included in the boat rental price?',
    a: 'Depends on the boat. The 60hp speedboat includes fuel. The Mariner 150hp is fuel full-in, full-out. Both Pasara options include fuel. Safety equipment and pre-rental briefing included on all boats.',
  },
  {
    q: 'Can I choose my own route?',
    a: "Yes. With a skipper, we'll suggest the best spots based on conditions that day - but the route is yours. Self-drive rentals have recommended areas within the Hvar archipelago.",
  },
  {
    q: 'Can I rent a boat in Hvar without a licence?',
    a: "For guests without a boating licence, we offer the Pasara - a small open boat available from €120/day. Contact us on WhatsApp to confirm eligibility for your group and dates.",
  },
];

const RENTAL_RULES = [
  {
    title: 'Fuel policy',
    body: 'Full tank in, full tank out. Refuel at Hvar marina on your way back so we can get the next group out on time.',
  },
  {
    title: 'Speed zones',
    body: 'Maritime police actively enforce speed limits around anchorages and swimmers. Real fines apply - please respect every zone.',
  },
  {
    title: 'Alcohol & smoking',
    body: 'Moderate alcohol on board is fine. No smoking in the cabin or near the fuel tank. Glass bottles are permitted on deck.',
  },
  {
    title: 'Damage policy',
    body: 'Report any damage immediately - small things get handled easily when flagged early. A deposit may apply on the boat rental.',
  },
  {
    title: 'Return',
    body: 'We do a short check-in together at the harbour. Photos are taken before and after the rental to protect both sides.',
  },
];

function StatusBadge({ status }: { status: Rule['status'] }) {
  const map = {
    allowed: { label: 'Allowed', symbol: '✓', tone: 'text-[color:var(--accent)] border-[color:var(--accent)]/50' },
    forbidden: { label: 'Not allowed', symbol: '✕', tone: 'text-red-300 border-red-400/40' },
    note: { label: 'Heads up', symbol: '!', tone: 'text-amber-300 border-amber-400/40' },
  } as const;
  const s = map[status];
  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-pill border px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wide ${s.tone}`}>
      <span aria-hidden="true">{s.symbol}</span>
      {s.label}
    </span>
  );
}

function AccordionItem({ question, children, defaultOpen = false }: { question: string; children: React.ReactNode; defaultOpen?: boolean }) {
  return (
    <details
      {...(defaultOpen ? { open: true } : {})}
      className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 transition-colors duration-300 open:bg-[color:var(--surface)]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 md:text-lg">
        <span>{question}</span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--accent)] transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-base">
        {children}
      </div>
    </details>
  );
}

export default function RentalsPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={rentalServiceSchema as Record<string, unknown>} />
      <JsonLd data={rentalBreadcrumbSchema as Record<string, unknown>} />
      <JsonLd data={faqSchema as Record<string, unknown>} />
      <JsonLd data={itemListSchema as Record<string, unknown>} />

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
          <h1 className="mt-4 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl md:text-6xl">
            Rentals Hvar
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Boat rental, water scooter &amp; more - pickup at Hvar Harbour.
          </p>
        </div>
      </section>

      {/* Boat Rental section */}
      <section id="boat-rental" className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Boat Rental
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Boat Rental in Hvar, Croatia
          </h2>

          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            Two ways to rent - come with a{' '}
            <strong className="text-[color:var(--white)]">local skipper included</strong> for the
            full-service experience, or take the helm yourself with our{' '}
            <strong className="text-[color:var(--white)]">self-drive option</strong>. Both pickup
            at Hvar Harbour, same quality speedboat.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* Option A: With Skipper */}
            <article
              id="boat-skipper"
              className="flex flex-col rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--surface)] p-8 shadow-[0_10px_30px_rgba(59,201,219,0.10)]"
            >
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
                With Skipper
              </h3>

              <p className="mt-3 font-body text-base leading-relaxed text-[color:var(--gray)]">
                No licence needed. Local skipper, custom route, private group.
              </p>

              <ul className="mt-5 space-y-2 font-body text-base text-[color:var(--gray)]">
                {[
                  'No licence needed',
                  'Local skipper, custom route',
                  'Fuel, water & snorkel included',
                  'Up to 9 people - private group only',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <span className="font-body text-lg font-bold text-[color:var(--accent)]">
                  From €400
                </span>
                <WhatsAppTrackedLink
                  href={waUrl("Hi! I'd like to ask about boat rental with skipper in Hvar.")}
                  label="boat_rental_skipper"
                  className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-5 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                >
                  Ask on WhatsApp
                </WhatsAppTrackedLink>
              </div>
            </article>

            {/* Option B: Self-Drive container */}
            <div
              id="boat-self-drive"
              className="flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--gray)]">
                  Self-Drive
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  Take the Helm
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Pasara 5hp */}
                <article className="flex flex-col rounded-xl border border-[color:var(--accent)]/30 bg-[color:var(--bg)] p-4">
                  <span className="inline-flex w-fit items-center rounded-pill border border-[color:var(--accent)]/50 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-[color:var(--accent)]">
                    No licence needed
                  </span>
                  <h4 className="mt-3 font-display text-sm font-bold uppercase tracking-wide text-[color:var(--white)]">
                    Pasara · 5hp
                  </h4>
                  <p className="mt-1 font-body text-lg font-bold text-[color:var(--accent)]">€120 / day</p>
                  <ul className="mt-3 space-y-1 font-body text-xs text-[color:var(--gray)]">
                    {['Calm water exploration', 'Fuel included', 'Perfect for Pakleni Islands'].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <WhatsAppTrackedLink
                      href={waUrl("Hi! I'd like to rent the Pasara 5hp in Hvar.")}
                      label="rental_pasara_5hp"
                      className="inline-flex w-full items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                    >
                      Ask on WhatsApp
                    </WhatsAppTrackedLink>
                  </div>
                </article>

                {/* Pasara 20hp */}
                <article className="flex flex-col rounded-xl border border-amber-400/30 bg-[color:var(--bg)] p-4">
                  <span className="inline-flex w-fit items-center rounded-pill border border-amber-400/40 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-amber-300">
                    Ask us about licence
                  </span>
                  <h4 className="mt-3 font-display text-sm font-bold uppercase tracking-wide text-[color:var(--white)]">
                    Pasara · 20hp
                  </h4>
                  <p className="mt-1 font-body text-lg font-bold text-[color:var(--accent)]">€200 / day</p>
                  <ul className="mt-3 space-y-1 font-body text-xs text-[color:var(--gray)]">
                    {['More range, more speed', 'Fuel included', 'Contact us to confirm eligibility'].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gray)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <WhatsAppTrackedLink
                      href={waUrl("Hi! I'd like to rent the Pasara 20hp in Hvar.")}
                      label="rental_pasara_20hp"
                      className="inline-flex w-full items-center justify-center rounded-pill border border-[color:var(--accent)] px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]"
                    >
                      Ask on WhatsApp
                    </WhatsAppTrackedLink>
                  </div>
                </article>

                {/* Speedboat 60hp */}
                <article className="flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] p-4">
                  <span className="inline-flex w-fit items-center rounded-pill border border-[color:var(--gray)]/40 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-[color:var(--gray)]">
                    Licence required
                  </span>
                  <h4 className="mt-3 font-display text-sm font-bold uppercase tracking-wide text-[color:var(--white)]">
                    Speedboat · 60hp
                  </h4>
                  <p className="mt-1 font-body text-lg font-bold text-[color:var(--accent)]">€290 / day</p>
                  <ul className="mt-3 space-y-1 font-body text-xs text-[color:var(--gray)]">
                    {['Fuel included', 'Valid boating licence required', 'Full day on the Adriatic'].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gray)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <WhatsAppTrackedLink
                      href={waUrl("Hi! I'd like to rent the Speedboat 60hp in Hvar.")}
                      label="rental_speedboat_60hp"
                      className="inline-flex w-full items-center justify-center rounded-pill border border-[color:var(--accent)] px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]"
                    >
                      Ask on WhatsApp
                    </WhatsAppTrackedLink>
                  </div>
                </article>

                {/* Speedboat Mariner 150hp */}
                <article className="flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] p-4">
                  <span className="inline-flex w-fit items-center rounded-pill border border-[color:var(--gray)]/40 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-[color:var(--gray)]">
                    Licence required
                  </span>
                  <h4 className="mt-3 font-display text-sm font-bold uppercase tracking-wide text-[color:var(--white)]">
                    Speedboat Mariner · 150hp
                  </h4>
                  <p className="mt-1 font-body text-lg font-bold text-[color:var(--accent)]">€350 / day + fuel</p>
                  <ul className="mt-3 space-y-1 font-body text-xs text-[color:var(--gray)]">
                    {['Fuel full-in, full-out', 'Valid boating licence required', 'Maximum range and power'].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gray)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <WhatsAppTrackedLink
                      href={waUrl("Hi! I'd like to rent the Speedboat Mariner 150hp in Hvar.")}
                      label="rental_mariner_150hp"
                      className="inline-flex w-full items-center justify-center rounded-pill border border-[color:var(--accent)] px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]"
                    >
                      Ask on WhatsApp
                    </WhatsAppTrackedLink>
                  </div>
                </article>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Water Scooter section */}
      <section id="water-scooter" className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Water Scooter
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Water Scooter Rental
          </h2>

          <div className="mt-8 max-w-sm mx-auto">
            <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/img/waterscooter.jpeg"
                  alt="Water scooter rental in Hvar - ride the Adriatic waves"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    Water Scooter
                  </h3>
                  <p className="mt-2 font-body text-base leading-relaxed text-[color:var(--gray)]">
                    Ride the waves. Instructor briefing included.
                  </p>
                </div>

                <ul className="space-y-1.5 font-body text-xs text-[color:var(--gray)]">
                  {['1 battery included per rental', 'Professional masks included'].map((rule) => (
                    <li key={rule} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3">
                  <span className="font-body text-sm font-semibold text-[color:var(--accent)]">
                    On request
                  </span>
                  <WhatsAppTrackedLink
                    href={waUrl("Hi! I'd like info about the water scooter")}
                    label="rentals_water-scooter"
                    className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                  >
                    Ask on WhatsApp
                  </WhatsAppTrackedLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* On Board - Good to Know */}
      <section
        id="on-board"
        className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            On board
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            On Board: Good to Know
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Quick rundown of what works and what does not on the boat.
          </p>
          <div className="mt-8 space-y-3">
            {rulesAndRentals.map((rule) => (
              <div
                key={rule.key}
                className="flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
              >
                <div className="shrink-0 pt-0.5">
                  <StatusBadge status={rule.status} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {rule.title}
                  </h3>
                  <p className="mt-2 font-body text-base leading-relaxed text-[color:var(--gray)]">
                    {rule.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Rules accordion */}
      <section className="border-y border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Rental rules
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            What to know before you ride
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[color:var(--border)] divide-y divide-[color:var(--border)]">
            {RENTAL_RULES.map((rule) => (
              <div
                key={rule.title}
                className="flex flex-col gap-2 bg-[color:var(--surface)] p-5 md:flex-row md:gap-0"
              >
                <p className="shrink-0 font-display text-sm font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:w-44 md:border-r md:border-[color:var(--border)] md:pr-6">
                  {rule.title}
                </p>
                <p className="font-body text-base leading-relaxed text-[color:var(--gray)] md:pl-6">
                  {rule.body}
                </p>
              </div>
            ))}
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
            Rentals FAQ
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
                <p className="mt-3 font-body text-base leading-relaxed text-[color:var(--gray)]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative overflow-hidden bg-[color:var(--surface)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Questions about a rental?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Message us - we&apos;ll sort it out.
          </p>
          <WhatsAppTrackedLink
            href={waUrl('Hi! I have a question about a rental.')}
            label="rentals_footer"
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            Ask us on WhatsApp
          </WhatsAppTrackedLink>
          <p className="mt-8 font-body text-base text-[color:var(--gray)]">
            Looking for a guided boat tour instead?{' '}
            <Link
              href="/tours/"
              className="font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline"
            >
              Browse all tours →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
