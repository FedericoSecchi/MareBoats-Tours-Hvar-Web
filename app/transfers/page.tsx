import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Speedboat Transfers from Hvar | Split, Airport, Brač, Korčula — MareBoats',
  description:
    'Private speedboat transfers from Hvar to Split, Split Airport, Brač, Korčula and Biševo. Fast, private, door-to-dock. Book via WhatsApp.',
  keywords: [
    'hvar split transfer',
    'speedboat transfer hvar',
    'hvar airport transfer boat',
    'hvar to brac speedboat',
    'hvar korcula transfer',
    'hvar bisevo transfer',
  ],
  slug: 'transfers',
  ogImage: '/img/destination-5.jpeg',
});

const SITE = 'https://mareboatshvar.com';
const WA_BASE = 'https://wa.me/385951966734?text=';

function waUrl(message: string) {
  return `${WA_BASE}${encodeURIComponent(message)}`;
}

type TransferCard = {
  id: string;
  route: string;
  price: string;
  time: string;
  image: string;
  imageAlt: string;
  summary: string;
  waMessage: string;
  ctaLabel: string;
  detailsHref?: string;
};

const TRANSFERS: TransferCard[] = [
  {
    id: 'split-hvar',
    route: 'Split ↔ Hvar',
    price: '€500 private',
    time: '~1 hour',
    image: '/img/destination-5.jpeg',
    imageAlt: 'Private speedboat transfer between Split and Hvar Harbour',
    summary: 'Hvar Harbour → Split waterfront. Private boat, direct route.',
    waMessage: "Hi! I'd like to book the Split transfer",
    ctaLabel: 'Book on WhatsApp',
    detailsHref: '/tours/split-airport-transfer',
  },
  {
    id: 'airport-hvar',
    route: 'Split Airport ↔ Hvar',
    price: '€600 private',
    time: '~1.5 hours',
    image: '/img/carousel-2.jpeg',
    imageAlt: 'Split Airport to Hvar private speedboat transfer',
    summary: 'Split Airport → Hvar Harbour. We track your flight.',
    waMessage: "Hi! I'd like to book the Airport transfer",
    ctaLabel: 'Book on WhatsApp',
    detailsHref: '/tours/split-airport-transfer',
  },
  {
    id: 'brac',
    route: 'Brač',
    price: 'On request',
    time: 'Private',
    image: '/img/destination-2.jpeg',
    imageAlt: 'Private boat transfer from Hvar to Brač — Bol, Supetar, Milna',
    summary: 'Bol, Supetar, Milna — tell us where.',
    waMessage: "Hi! I'd like a transfer to Brač",
    ctaLabel: 'Ask on WhatsApp',
  },
  {
    id: 'korcula',
    route: 'Korčula',
    price: 'On request',
    time: '~2 hours',
    image: '/img/destination-4.jpeg',
    imageAlt: 'Private speedboat transfer from Hvar to Korčula',
    summary: 'Historic walled city. 2 hours from Hvar by speedboat.',
    waMessage: "Hi! I'd like a transfer to Korčula",
    ctaLabel: 'Ask on WhatsApp',
  },
  {
    id: 'bisevo',
    route: 'Biševo',
    price: 'On request',
    time: 'Private',
    image: '/img/destination-7.jpeg',
    imageAlt: 'Private transfer from Hvar to Biševo — Blue Cave gateway',
    summary: 'Gateway to the Blue Cave. No ferry, no crowds.',
    waMessage: "Hi! I'd like a transfer to Biševo",
    ctaLabel: 'Ask on WhatsApp',
  },
];

const HOW_IT_WORKS = [
  {
    n: '1',
    title: 'Share your route',
    body: 'Tell us your date, arrival time and group size on WhatsApp.',
  },
  {
    n: '2',
    title: 'We confirm the price',
    body: 'Transparent quote within the hour during the season.',
  },
  {
    n: '3',
    title: 'Meet at the barrel',
    body: 'Hvar Harbour, or we pick you up at your hotel dock.',
  },
  {
    n: '4',
    title: 'Private speedboat',
    body: 'Your group only. No shared boats, no waiting for others.',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Speedboat Transfers from Hvar — MareBoats',
  description: 'Private speedboat transfers between Hvar and Split, Brač, Korčula, Biševo.',
  itemListElement: TRANSFERS.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE}/transfers/#${t.id}`,
    name: `Hvar ↔ ${t.route}`,
  })),
};

export default function TransfersPage() {
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
            Transfers
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Private Speedboat Transfers
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            From Hvar Harbour to wherever you need to be. Private &mdash; no shared boats, no
            waiting.
          </p>
        </div>
      </section>

      {/* Transfers grid */}
      <section className="px-4 py-16 md:py-20">
        <ul className="mx-auto grid max-w-container grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRANSFERS.map((t) => (
            <li key={t.id} id={t.id} className="flex scroll-mt-24">
              <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_6px_16px_rgba(59,201,219,0.35)]">
                    {t.time}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h2 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                      Hvar ↔ {t.route}
                    </h2>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                      {t.summary}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <span className="font-body text-sm font-semibold text-[color:var(--accent)]">
                      {t.price}
                    </span>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      {t.detailsHref && (
                        <Link
                          href={t.detailsHref}
                          className="inline-flex flex-1 items-center justify-center rounded-pill border border-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]"
                        >
                          See Full Details
                        </Link>
                      )}
                      <a
                        href={waUrl(t.waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                      >
                        {t.ctaLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center font-body text-sm leading-relaxed text-[color:var(--gray)]">
          All transfers are private. Your group, your boat, your schedule. Hotels with private
          docks &mdash; Podstine, Amfora, Riva, Adriana &mdash; we can pick you up directly.
        </p>
      </section>

      {/* How it works */}
      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              How it works
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Four steps, no ferry queues
            </h2>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6"
              >
                <span className="font-display text-4xl font-extrabold leading-none text-[color:var(--accent)]">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
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
            Need a quote?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Send us the route and the time. We confirm on WhatsApp, usually within the hour.
          </p>
          <a
            href={waUrl("Hi! I'd like a quote for a transfer from Hvar.")}
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
