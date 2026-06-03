import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { getMapboxStaticUrl, type GeoCoords } from '@/lib/mapbox';

export const metadata: Metadata = generateSEO({
  title: 'Speedboat Transfers from Hvar | Split, Airport, Brač, Korčula - MareBoats',
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

// Geographic coordinates (WGS84)
const COORDS = {
  HVAR_PORT:      { lon: 16.442918, lat: 43.169147 },
  PAKLENI_EXIT:   { lon: 16.348409, lat: 43.191539 },
  HVARSKI_KANAL:  { lon: 16.637960, lat: 43.243155 },
  VIS_ROUNDABOUT: { lon: 16.440844, lat: 43.159411 },
  KORCULA_TURN:   { lon: 16.487209, lat: 43.138280 },
  SPLIT_PORT:     { lon: 16.437864, lat: 43.507639 },
  SPLIT_AIRPORT:  { lon: 16.301891, lat: 43.529181 },
  BRAC:           { lon: 16.6498,   lat: 43.2630   },
  BISEVO:         { lon: 16.018408, lat: 43.061528 },
  KORCULA:        { lon: 17.136184, lat: 42.959341 },
  PAKLENI:        { lon: 16.394519, lat: 43.160476 },
  YOUR_VESSEL:    { lon: 16.3800,   lat: 43.1500   },
} satisfies Record<string, GeoCoords>;

// ---------------------------------------------------------------------------
// Transfer card data
// ---------------------------------------------------------------------------

type TransferCard = {
  id: string;
  name?: string;
  route: string;
  price: string;
  time: string;
  mapFrom: GeoCoords;
  mapTo: GeoCoords;
  mapVia?: GeoCoords[];
  hoverImage?: string | null;
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
    summary: 'Hvar Harbour to Split waterfront. Private boat, direct route.',
    waMessage: "Hi! I'd like to book the Split transfer",
    ctaLabel: 'Book on WhatsApp',
    detailsHref: '/tours/split-airport-transfer',
    hoverImage: null,
    mapFrom: COORDS.HVAR_PORT,
    mapTo: COORDS.SPLIT_PORT,
    mapVia: [
      COORDS.PAKLENI_EXIT,
      { lon: 16.42, lat: 43.35 },
    ],
  },
  {
    id: 'airport-hvar',
    route: 'Split Airport ↔ Hvar',
    price: '€600 private',
    time: '~1.5 hours',
    summary: 'Split Airport to Hvar Harbour. We track your flight.',
    waMessage: "Hi! I'd like to book the Airport transfer",
    ctaLabel: 'Book on WhatsApp',
    detailsHref: '/tours/split-airport-transfer',
    hoverImage: null,
    mapFrom: COORDS.HVAR_PORT,
    mapTo: COORDS.SPLIT_AIRPORT,
    mapVia: [
      { lon: 16.348409, lat: 43.191539 },
      { lon: 16.403727, lat: 43.330417 },
      { lon: 16.408034, lat: 43.491876 },
      { lon: 16.365462, lat: 43.505258 },
    ],
  },
  {
    id: 'brac',
    route: 'Brač',
    price: 'On request',
    time: 'Private',
    summary: 'Bol, Supetar, Milna. Tell us where.',
    waMessage: "Hi! I'd like a transfer to Brač",
    ctaLabel: 'Ask on WhatsApp',
    hoverImage: null,
    mapFrom: COORDS.HVAR_PORT,
    mapTo: { lon: 16.657026, lat: 43.261500 },
    mapVia: [
      { lon: 16.352940, lat: 43.189754 },
      { lon: 16.364804, lat: 43.211134 },
      { lon: 16.513733, lat: 43.246498 },
      { lon: 16.659022, lat: 43.254864 },
    ],
  },
  {
    id: 'korcula',
    route: 'Korčula',
    price: 'On request',
    time: '~2 hours',
    summary: 'Historic walled city. 2 hours from Hvar by speedboat.',
    waMessage: "Hi! I'd like a transfer to Korčula",
    ctaLabel: 'Ask on WhatsApp',
    hoverImage: null,
    mapFrom: COORDS.HVAR_PORT,
    mapTo: COORDS.KORCULA,
    mapVia: [
      COORDS.KORCULA_TURN,
      { lon: 16.65, lat: 43.08 },
      { lon: 16.90, lat: 43.00 },
    ],
  },
  {
    id: 'bisevo',
    route: 'Biševo',
    price: 'On request',
    time: 'Private',
    summary: 'Gateway to the Blue Cave. No ferry, no crowds.',
    waMessage: "Hi! I'd like a transfer to Biševo",
    ctaLabel: 'Ask on WhatsApp',
    hoverImage: null,
    mapFrom: { lon: 16.442975, lat: 43.169008 },
    mapTo: { lon: 16.184168, lat: 43.062260 },
    mapVia: [
      { lon: 16.439551, lat: 43.164991 },
      { lon: 16.441916, lat: 43.159709 },
      { lon: 16.458060, lat: 43.152451 },
      { lon: 16.193734, lat: 43.061615 },
    ],
  },
  {
    id: 'yacht-water-taxi',
    name: 'Yacht & Sailboat Water Taxi',
    route: 'Your Vessel',
    price: 'On request',
    time: 'On demand',
    summary:
      'Anchored near Hvar? We come to your boat: pickup, transfer or the start of any tour.',
    waMessage: "Hi! I'd like info about the yacht water taxi",
    ctaLabel: 'Ask on WhatsApp',
    detailsHref: '/tours/yacht-sailboat-taxi',
    hoverImage: null,
    mapFrom: { lon: 16.443182, lat: 43.168891 },
    mapTo: { lon: 16.393924, lat: 43.160106 },
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
  name: 'Speedboat Transfers from Hvar - MareBoats',
  description: 'Private speedboat transfers between Hvar and Split, Brač, Korčula, Biševo.',
  itemListElement: TRANSFERS.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: t.detailsHref ? `${SITE}${t.detailsHref}/` : `${SITE}/transfers/#${t.id}`,
    name: t.name ?? `Hvar ↔ ${t.route}`,
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
          <h1 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] hyphens-none break-keep md:text-6xl">
            Private Speedboat Transfers
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            From Hvar Harbour to wherever you need to be. Private, no shared boats, no waiting.
          </p>
        </div>
      </section>

      {/* Transfers grid */}
      <section className="px-4 py-16 md:py-20">
        <ul className="mx-auto grid max-w-container grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRANSFERS.map((t) => {
            const mapUrl = getMapboxStaticUrl(t.mapFrom, t.mapTo, 400, 265, t.mapVia);
            return (
              <li key={t.id} id={t.id} className="flex scroll-mt-24">
                <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {mapUrl ? (
                      <Image
                        src={mapUrl}
                        alt={`Route map: ${t.name ?? `Hvar to ${t.route}`}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        unoptimized
                      />
                    ) : (
                      <div className="h-full w-full bg-[color:var(--surface)]" />
                    )}
                    {t.hoverImage != null && (
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <Image
                          src={t.hoverImage}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <span className="absolute right-3 top-3 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_6px_16px_rgba(59,201,219,0.35)]">
                      {t.time}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <h2 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                        {t.name ?? `Hvar ↔ ${t.route}`}
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
                        <WhatsAppTrackedLink
                          href={waUrl(t.waMessage)}
                          label={`transfers_${t.id}`}
                          className="inline-flex flex-1 items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                        >
                          {t.ctaLabel}
                        </WhatsAppTrackedLink>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
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
          <WhatsAppTrackedLink
            href={waUrl("Hi! I'd like a quote for a transfer from Hvar.")}
            label="transfers_footer"
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            Ask us on WhatsApp
          </WhatsAppTrackedLink>
        </div>
      </section>
    </main>
  );
}
