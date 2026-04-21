import Image from 'next/image';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Rentals Hvar | Scooter, Water Scooter & Boat Rental — MareBoats',
  description:
    'Rent a scooter, water scooter or boat in Hvar. Pick up at Hvar Harbour. MareBoats rentals — May to September.',
  keywords: [
    'boat rental hvar',
    'scooter rental hvar',
    'water scooter hvar',
    'hvar scooter hire',
    'rent boat hvar croatia',
  ],
  slug: 'rentals',
  ogImage: '/img/waterscooter.jpeg',
});

const SITE = 'https://mareboatshvar.com';
const WA_BASE = 'https://wa.me/385951966734?text=';

function waUrl(message: string) {
  return `${WA_BASE}${encodeURIComponent(message)}`;
}

type RentalCard = {
  id: string;
  name: string;
  price: string;
  availability?: string;
  image: string;
  imageAlt: string;
  description: string;
  rules: string[];
  waMessage: string;
  ctaLabel: string;
};

const RENTALS: RentalCard[] = [
  {
    id: 'scooter',
    name: 'Scooter',
    price: '€50/day · €40 half-day PM · €30 half-day AM',
    availability: '6 scooters available',
    image: '/img/waterscooter.jpeg',
    imageAlt: 'Scooter rental in Hvar — explore the island at your own pace',
    description:
      'Explore Hvar Town, Stari Grad, Jelsa and the lavender fields. Pickup at Hvar Harbour.',
    rules: ['Valid driver\u2019s licence required', 'Return with a full tank', 'Helmets included'],
    waMessage: "Hi! I'd like to rent a scooter",
    ctaLabel: 'Book on WhatsApp',
  },
  {
    id: 'water-scooter',
    name: 'Water Scooter',
    price: 'On request',
    image: '/img/waterscooter.jpeg',
    imageAlt: 'Water scooter rental in Hvar — ride the Adriatic waves',
    description: 'Ride the waves. Instructor briefing included.',
    rules: ['Short safety briefing on pickup', 'Minimum age rules apply', 'Life jacket included'],
    waMessage: "Hi! I'd like info about the water scooter",
    ctaLabel: 'Ask on WhatsApp',
  },
  {
    id: 'boat',
    name: 'Boat Rental (no skipper)',
    price: 'On request',
    image: '/img/package-4.jpeg',
    imageAlt: 'Self-drive boat rental in Hvar for licensed skippers',
    description: 'For licensed skippers only. Fuel full-in, full-out.',
    rules: [
      'Valid boat licence required',
      'Deposit may apply',
      'Photos taken pre/post rental',
    ],
    waMessage: "Hi! I'd like info about boat rental",
    ctaLabel: 'Ask on WhatsApp',
  },
];

const RENTAL_RULES = [
  {
    title: 'Fuel policy',
    body:
      'Full tank in, full tank out. Refuel at Hvar marina on your way back so we can get the next group out on time.',
  },
  {
    title: 'Speed zones',
    body:
      'Maritime police actively enforce speed limits around anchorages and swimmers. Real fines apply — please respect every zone.',
  },
  {
    title: 'Alcohol & smoking',
    body:
      'Moderate alcohol on board is fine. No smoking in the cabin or near the fuel tank. Glass bottles are permitted on deck.',
  },
  {
    title: 'Damage policy',
    body:
      'Report any damage immediately — small things get handled easily when flagged early. A deposit may apply on the boat rental.',
  },
  {
    title: 'Return',
    body:
      'We do a short check-in together at the harbour. Photos are taken before and after the rental to protect both sides.',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Rentals from MareBoats Hvar',
  description: 'Scooter, water scooter and boat rental at Hvar Harbour, Croatia.',
  itemListElement: RENTALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE}/rentals/#${r.id}`,
    name: r.name,
  })),
};

export default function RentalsPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
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
            Rentals
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Explore Hvar Your Way
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Pick up at Hvar Harbour. Same spot as the boat tours.
          </p>
        </div>
      </section>

      {/* Rentals grid */}
      <section className="px-4 py-16 md:py-20">
        <ul className="mx-auto grid max-w-container grid-cols-1 gap-6 lg:grid-cols-3">
          {RENTALS.map((r) => (
            <li key={r.id} id={r.id} className="flex scroll-mt-24">
              <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {r.availability && (
                    <span className="absolute right-3 top-3 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_6px_16px_rgba(59,201,219,0.35)]">
                      {r.availability}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h2 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                      {r.name}
                    </h2>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                      {r.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 font-body text-xs text-[color:var(--gray)]">
                    {r.rules.map((rule) => (
                      <li key={rule} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3">
                    <span className="font-body text-sm font-semibold text-[color:var(--accent)]">
                      {r.price}
                    </span>
                    <a
                      href={waUrl(r.waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                    >
                      {r.ctaLabel}
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Rental rules accordion */}
      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Rental rules
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            What to know before you ride
          </h2>

          <div className="mt-8 space-y-3">
            {RENTAL_RULES.map((rule) => (
              <details
                key={rule.title}
                className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-5 open:bg-[color:var(--bg)]/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] focus-visible:outline-none">
                  <span>{rule.title}</span>
                  <span
                    aria-hidden="true"
                    className="text-[color:var(--accent)] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {rule.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
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
            Message us &mdash; we&apos;ll sort it out.
          </p>
          <a
            href={waUrl("Hi! I have a question about a rental.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            Ask us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
