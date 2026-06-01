import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

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

// ---------------------------------------------------------------------------
// Reusable route map component — Dalmatian coastline silhouette
// ---------------------------------------------------------------------------

type Point = { x: number; y: number; label: string };

function RouteSvg({
  origin,
  destination,
  curvature = 60,
  showVessel = false,
}: {
  origin: Point;
  destination: Point;
  curvature?: number;
  showVessel?: boolean;
}) {
  const dx = destination.x - origin.x;
  const dy = destination.y - origin.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const mid = { x: (origin.x + destination.x) / 2, y: (origin.y + destination.y) / 2 };
  // control point: offset from midpoint along left-perpendicular by `curvature` units
  const cp = {
    x: Math.round((mid.x + (-dy / len) * curvature) * 10) / 10,
    y: Math.round((mid.y + (dx / len) * curvature) * 10) / 10,
  };
  // midpoint of quadratic bezier at t=0.5
  const boatX = Math.round(((origin.x + 2 * cp.x + destination.x) / 4) * 10) / 10;
  const boatY = Math.round(((origin.y + 2 * cp.y + destination.y) / 4) * 10) / 10;
  // tangent at t=0.5 equals destination − origin for a quadratic bezier
  const angle = Math.round(Math.atan2(dy, dx) * (180 / Math.PI) * 10) / 10;
  // put mainland-city labels above the dot; island/water labels below
  const labelY = (y: number) => (y < 60 ? y - 8 : y + 16);

  return (
    <svg viewBox="0 0 400 265" aria-hidden="true" className="block h-full w-full">
      {/* Ocean background */}
      <rect width="400" height="265" fill="#0d1b2a" />

      {/* Mainland coast */}
      <path
        d="M 0,40 C 50,18 100,32 160,22 C 220,12 280,28 345,15 C 375,8 395,20 400,18 L 400,0 L 0,0 Z"
        fill="#122236"
        stroke="#1e3048"
        strokeWidth="1"
      />

      {/* Šolta */}
      <polygon
        points="52,80 60,65 82,60 112,62 120,74 108,86 78,92 54,86"
        fill="#122236"
        stroke="#1e3048"
        strokeWidth="1"
      />

      {/* Brač */}
      <polygon
        points="125,80 132,60 172,52 235,50 290,54 318,65 320,78 295,100 232,108 172,106 136,96"
        fill="#122236"
        stroke="#1e3048"
        strokeWidth="1"
      />

      {/* Hvar */}
      <polygon
        points="65,144 70,130 122,120 188,120 272,124 336,132 340,146 305,158 222,163 140,160 86,154"
        fill="#122236"
        stroke="#1e3048"
        strokeWidth="1"
      />

      {/* Vis */}
      <polygon
        points="44,215 52,198 88,194 134,198 140,212 128,228 84,235 46,230"
        fill="#122236"
        stroke="#1e3048"
        strokeWidth="1"
      />

      {/* Biševo */}
      <polygon
        points="28,232 36,220 50,222 55,232 48,244 30,242"
        fill="#122236"
        stroke="#1e3048"
        strokeWidth="1"
      />

      {/* Korčula */}
      <polygon
        points="235,225 240,208 265,200 325,200 375,208 382,220 368,236 315,242 258,240"
        fill="#122236"
        stroke="#1e3048"
        strokeWidth="1"
      />

      {/* Dashed route line */}
      <path
        d={`M ${origin.x},${origin.y} Q ${cp.x},${cp.y} ${destination.x},${destination.y}`}
        fill="none"
        stroke="#3BC9DB"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />

      {/* Boat icon at bezier midpoint */}
      <g transform={`translate(${boatX},${boatY}) rotate(${angle})`}>
        <polygon points="-6,-4 7,0 -6,4" fill="#3BC9DB" />
      </g>

      {/* Origin marker: anchor icon when showVessel, hollow circle otherwise */}
      {showVessel ? (
        <g
          transform={`translate(${origin.x},${origin.y})`}
          stroke="#3BC9DB"
          strokeWidth="1.3"
          strokeOpacity="0.85"
          fill="none"
        >
          <circle cx="0" cy="-4" r="2.5" />
          <line x1="0" y1="-1.5" x2="0" y2="8" />
          <line x1="-5" y1="1" x2="5" y2="1" />
          <path d="M -5,8 Q -5,12 0,12 Q 5,12 5,8" />
        </g>
      ) : (
        <circle
          cx={origin.x}
          cy={origin.y}
          r="5"
          fill="none"
          stroke="#3BC9DB"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
      )}

      {/* Destination marker: filled dot + label */}
      <circle cx={destination.x} cy={destination.y} r="9" fill="#3BC9DB" fillOpacity="0.15" />
      <circle cx={destination.x} cy={destination.y} r="5" fill="#3BC9DB" />
      <text
        x={destination.x}
        y={labelY(destination.y)}
        textAnchor="middle"
        fill="white"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        {destination.label}
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Transfer card data
// ---------------------------------------------------------------------------

type TransferCard = {
  id: string;
  name?: string;
  route: string;
  price: string;
  time: string;
  mapSvg: ReactNode;
  hoverImage?: string | null;
  summary: string;
  waMessage: string;
  ctaLabel: string;
  detailsHref?: string;
};

// City coordinates (SVG space, viewBox 0 0 400 265):
//   HVAR (175,148)  SPLIT (210,32)  SPLIT AIRPORT (175,28)
//   BRAČ/Bol (255,95)  KORČULA (310,215)  BIŠEVO (38,228)
//   YOUR VESSEL (130,185)

const TRANSFERS: TransferCard[] = [
  {
    id: 'split-hvar',
    route: 'Split ↔ Hvar',
    price: '€500 private',
    time: '~1 hour',
    summary: 'Hvar Harbour → Split waterfront. Private boat, direct route.',
    waMessage: "Hi! I'd like to book the Split transfer",
    ctaLabel: 'Book on WhatsApp',
    detailsHref: '/tours/split-airport-transfer',
    hoverImage: null,
    mapSvg: (
      <RouteSvg
        origin={{ x: 175, y: 148, label: 'HVAR' }}
        destination={{ x: 210, y: 32, label: 'SPLIT' }}
        curvature={60}
      />
    ),
  },
  {
    id: 'airport-hvar',
    route: 'Split Airport ↔ Hvar',
    price: '€600 private',
    time: '~1.5 hours',
    summary: 'Split Airport → Hvar Harbour. We track your flight.',
    waMessage: "Hi! I'd like to book the Airport transfer",
    ctaLabel: 'Book on WhatsApp',
    detailsHref: '/tours/split-airport-transfer',
    hoverImage: null,
    mapSvg: (
      <RouteSvg
        origin={{ x: 175, y: 148, label: 'HVAR' }}
        destination={{ x: 175, y: 28, label: 'SPLIT AIRPORT' }}
        curvature={-60}
      />
    ),
  },
  {
    id: 'brac',
    route: 'Brač',
    price: 'On request',
    time: 'Private',
    summary: 'Bol, Supetar, Milna — tell us where.',
    waMessage: "Hi! I'd like a transfer to Brač",
    ctaLabel: 'Ask on WhatsApp',
    hoverImage: null,
    mapSvg: (
      <RouteSvg
        origin={{ x: 175, y: 148, label: 'HVAR' }}
        destination={{ x: 255, y: 95, label: 'BRAČ' }}
        curvature={-60}
      />
    ),
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
    mapSvg: (
      <RouteSvg
        origin={{ x: 175, y: 148, label: 'HVAR' }}
        destination={{ x: 310, y: 215, label: 'KORČULA' }}
        curvature={60}
      />
    ),
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
    mapSvg: (
      <RouteSvg
        origin={{ x: 175, y: 148, label: 'HVAR' }}
        destination={{ x: 38, y: 228, label: 'BIŠEVO' }}
        curvature={-60}
      />
    ),
  },
  {
    id: 'yacht-water-taxi',
    name: 'Yacht & Sailboat Water Taxi',
    route: 'Your Vessel',
    price: 'On request',
    time: 'On demand',
    summary:
      'Anchored near Hvar? We come to your boat — pickup, transfer or the start of any tour.',
    waMessage: "Hi! I'd like info about the yacht water taxi",
    ctaLabel: 'Ask on WhatsApp',
    detailsHref: '/tours/yacht-sailboat-taxi',
    hoverImage: null,
    mapSvg: (
      <RouteSvg
        origin={{ x: 130, y: 185, label: 'YOUR VESSEL' }}
        destination={{ x: 175, y: 148, label: 'HVAR' }}
        curvature={40}
        showVessel={true}
      />
    ),
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
              <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {t.mapSvg}
                  {t.hoverImage != null && (
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.hoverImage} alt="" className="h-full w-full object-cover" />
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
