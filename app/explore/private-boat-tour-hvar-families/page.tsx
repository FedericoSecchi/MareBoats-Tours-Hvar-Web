import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildFAQSchema } from '@/lib/schema';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { TOUR_PRICES, EXTRAS } from '@/lib/pricing';
import { PriceComparisonTable } from '@/components/ui/PriceComparisonTable';
import FleetInfo from '@/components/sections/FleetInfo';

export const metadata: Metadata = {
  ...generateSEO({
    title: 'Private Boat Tour Hvar: Families & Groups',
    description:
      'Your group, your boat, your schedule. Private speedboat tours from Hvar for families and groups of any size. From €300 for the whole boat. No other passengers.',
    keywords: [
      'private boat tour hvar families',
      'private speedboat hvar group',
      'hvar boat tour families',
      'private boat hvar groups',
      'family boat tour hvar',
      'group boat tour hvar',
      'private boat hire hvar',
      'hvar private speedboat family',
    ],
    slug: 'explore/private-boat-tour-hvar-families',
  }),
};

const WA_URL =
  'https://wa.me/385951966734?text=' +
  encodeURIComponent(
    "Hi! I'd like to book a private boat tour in Hvar for my group. Can you help us plan the day?"
  );

// Prices from lib/pricing.ts
const rrShared = TOUR_PRICES['red-rocks-pakleni-islands'].sharedPerPerson!;
const rrPrivateHalf = TOUR_PRICES['red-rocks-pakleni-islands'].privateHalfDay!;
const rrPrivateFull = TOUR_PRICES['red-rocks-pakleni-islands'].privateFullDay!;
const bcShared = TOUR_PRICES['blue-cave-pakleni-islands'].sharedPerPerson!;
const bcPrivate = TOUR_PRICES['blue-cave-pakleni-islands'].private!;
const pakleniPrivate = TOUR_PRICES['pakleni-islands'].private!;
const pakleniPrivateExt = TOUR_PRICES['pakleni-islands'].privateExtended!;

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'How many people can fit on a private tour?',
    answer: `Up to 8 people. MareBoats Hvar speedboats are licensed for 12 but capped at 8, so there is room to move between shade and sun, and the full group can be in the water at the same time. Groups of 9 to 16 travel on two boats sailing together. Message us for pricing and availability.`,
  },
  {
    question: 'Can we choose where to stop and how long to stay?',
    answer:
      'Yes. The skipper plans the route and picks anchorages based on conditions that day, but the pace is yours. If you want to stay longer at a beach or skip a stop, you decide. The boat does not follow a fixed schedule.',
  },
  {
    question: 'What is included in a private boat tour?',
    answer: `Speedboat, skipper, fuel for the full itinerary, bottled water, icebox and snorkel masks. Lunch is not included on any tour. Restaurants are available at Palmižana and Ždrilca in the Pakleni Islands. The Blue Cave tour has entrance fees: Blue Cave €${EXTRAS.blueCave}/person (mandatory, paid on site) and Green Cave €${EXTRAS.greenCave}/person (optional).`,
  },
  {
    question: 'When does private cost less than shared?',
    answer: `Private tours are priced for the whole boat. From 5 people on a Red Rocks half-day tour and from 6 people on the Blue Cave tour, the private option costs less per person than buying individual shared seats, and you get the whole boat with no other passengers.`,
  },
  {
    question: 'Are private tours available for families with children?',
    answer:
      'Yes. Dogs are welcome on board as well. Let us know when you book.',
  },
  {
    question: 'What is the meeting point?',
    answer:
      'The MareBoats barrel, on the path between Hvar port and Beach Križa, below the Beach Bay Hvar Hotel. About 3 minutes on foot from the ferry terminal, walking towards the Franciscan Monastery.',
  },
];

const ROUTES = [
  {
    href: '/tours/red-rocks-pakleni-islands/',
    name: 'Red Rocks & Pakleni Islands',
    duration: '4 or 6 hours',
    description: `South coast of Hvar: Red Rocks cliffs, Dubovica Beach, a hidden sea cave, and the Pakleni Islands. Less sailing, more time in the water. Shared: €${rrShared}/person. Private half-day: €${rrPrivateHalf} whole boat. Private full-day: €${rrPrivateFull} whole boat.`,
  },
  {
    href: '/tours/pakleni-islands/',
    name: 'Pakleni Islands',
    duration: '3 or 4 hours',
    description: `The Ždrilca channel, Palmižana, sheltered coves and clear Adriatic water minutes from Hvar. Private from €${pakleniPrivate} for 3 hours or €${pakleniPrivateExt} for 4 hours, whole boat.`,
  },
  {
    href: '/tours/blue-cave-pakleni-islands/',
    name: '5 Islands and Blue Cave',
    duration: '7 hours',
    description: `Blue Cave on Biševo, Stiniva cove on Vis, Vis Town, and the Pakleni Islands. Full day. Open-sea crossing to Vis Island. Shared: €${bcShared}/person. Private: €${bcPrivate} whole boat.`,
  },
];

export default function FamiliesPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={buildFAQSchema(FAQS) as Record<string, unknown>} />

      {/* H1 — Question + direct answer */}
      <section className="border-b border-[color:var(--border)] px-4 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Hvar, Croatia &middot; Private Boat Tours
          </p>
          <h1 className="mt-4 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] sm:text-4xl md:text-5xl">
            How does a private boat tour work in Hvar?
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            You book the whole boat for your group. Up to 8 people. The skipper handles navigation,
            reads conditions and picks anchorages. No other passengers. You decide the pace and call
            the stops. Fuel, water and snorkel gear included. From &euro;{pakleniPrivate} for the
            whole boat.
          </p>
        </div>
      </section>

      {/* H2 — What private means */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Private means private
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Not a tour you join. The boat is yours.
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>
              On a private tour, there are no strangers on board. You bring who you came with. The
              skipper is there to run the boat, read the sea and get you to the right anchorages. The
              itinerary is fixed in broad terms (which coastline, which islands), but the details are
              yours: longer swim, earlier lunch, skip a stop, stay until you are ready.
            </p>
            <p>
              You arrive at{' '}
              <strong className="text-[color:var(--white)]">
                Beach Križa, below the Beach Bay Hvar Hotel
              </strong>
              , meet the skipper at the MareBoats barrel, and go. Nothing to coordinate with other
              passengers.
            </p>
          </div>
        </div>
      </section>

      {/* FleetInfo — on board */}
      <FleetInfo />

      {/* H2 — Routes */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Where to go
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Choose your day
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Three routes, different lengths. All depart from Beach Križa. All include the skipper,
            fuel, water and snorkel gear.
          </p>
          <ul className="mt-8 space-y-4">
            {ROUTES.map(({ href, name, duration, description }) => (
              <li
                key={href}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <Link
                    href={href}
                    className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] transition-colors hover:text-[color:var(--accent)]"
                  >
                    {name}
                  </Link>
                  <span className="shrink-0 rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-2.5 py-0.5 font-body text-[11px] font-semibold text-[color:var(--accent)]">
                    {duration}
                  </span>
                </div>
                <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* H2 — Cost comparison */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            When private costs less than shared
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Private tours are priced for the whole boat, not per person. Past a certain group size,
            the private option costs less per head than buying individual shared seats, and gives you
            the whole boat for the day.
          </p>
          <PriceComparisonTable
            tourName="Red Rocks south coast"
            sharedPerPerson={rrShared}
            privateTotal={rrPrivateHalf}
            privateNote="half day"
            groupSizes={[4, 5, 8]}
          />
          <PriceComparisonTable
            tourName="Blue Cave and 5 Islands"
            sharedPerPerson={bcShared}
            privateTotal={bcPrivate}
            groupSizes={[5, 6, 8]}
          />
          <p className="mt-6 font-body text-sm leading-relaxed text-[color:var(--gray)]">
            From 5 people on Red Rocks and from 6 on Blue Cave, the private tour costs less per
            person than shared seats and gives you the whole boat for the day.
          </p>
        </div>
      </section>

      {/* H2 — FAQ */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Common questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] p-5 open:bg-[color:var(--bg)]/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[color:var(--accent)] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 font-body text-base leading-relaxed text-[color:var(--gray)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* H2 — CTA */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Ready to plan your day?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Message us on WhatsApp with your group size and which route interests you. We confirm
            availability and suggest an itinerary.
          </p>
          <WhatsAppTrackedLink
            href={WA_URL}
            label="families_cta"
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            Plan your day on WhatsApp
          </WhatsAppTrackedLink>
          <p className="mt-8 font-body text-base text-[color:var(--gray)]">
            No boating licence?{' '}
            <Link
              href="/rentals/boat-rental-hvar-without-licence/"
              className="font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)]"
            >
              See what you can do on the water without one &rarr;
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
