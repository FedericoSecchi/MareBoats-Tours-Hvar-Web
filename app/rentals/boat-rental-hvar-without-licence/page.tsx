import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildFAQSchema } from '@/lib/schema';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { TOUR_PRICES, RENTAL_SELF_DRIVE } from '@/lib/pricing';
import { PriceComparisonTable } from '@/components/ui/PriceComparisonTable';

export const metadata: Metadata = {
  ...generateSEO({
    title: 'Rent a Boat in Hvar Without a Licence?',
    description:
      'Most self-drive rentals in Croatia require a boating licence, and public sources on the threshold do not agree. The practical option without a licence is a private speedboat with a skipper. From €300 for the whole boat.',
    keywords: [
      'boat rental hvar without licence',
      'rent a boat hvar no licence',
      'hvar boat hire no licence',
      'boat hire hvar without boating licence',
      'private boat hvar no licence',
      'hvar boat tour without licence',
      'rent boat hvar without licence',
    ],
    slug: 'rentals/boat-rental-hvar-without-licence',
  }),
};

const WA_URL =
  'https://wa.me/385951966734?text=' +
  encodeURIComponent(
    "Hi! I want to book a private boat tour in Hvar but I don't have a boating licence. Can you help?"
  );

// Prices — single source of truth from lib/pricing.ts
const rrShared = TOUR_PRICES['red-rocks-pakleni-islands'].sharedPerPerson!;
const rrPrivateHalf = TOUR_PRICES['red-rocks-pakleni-islands'].privateHalfDay!;
const rrPrivateFull = TOUR_PRICES['red-rocks-pakleni-islands'].privateFullDay!;
const bcShared = TOUR_PRICES['blue-cave-pakleni-islands'].sharedPerPerson!;
const bcPrivate = TOUR_PRICES['blue-cave-pakleni-islands'].private!;
const pakleniPrivate = TOUR_PRICES['pakleni-islands'].private!;
const pakleniPrivateExt = TOUR_PRICES['pakleni-islands'].privateExtended!;
const sunsetFrom = TOUR_PRICES['sunset-cruise'].private!;
const charterPrice = TOUR_PRICES['private-boat-charter'].private!;
const pasara5Price = RENTAL_SELF_DRIVE.pasara5hp.pricePerDay;
const pasara5Max = RENTAL_SELF_DRIVE.pasara5hp.maxGuests;

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What can I do in Hvar without a boating licence?',
    answer: `A private speedboat with a skipper on board is the most complete option. The boat is yours for the day, the skipper handles navigation and safety, and you can reach the Pakleni Islands, the Red Rocks coast, or the Blue Cave on Vis. No licence and no boating experience required. Private tours start at €${pakleniPrivate} for the whole boat.`,
  },
  {
    question: 'How much does a private boat with a skipper cost in Hvar?',
    answer: `It depends on where you want to go and how long. Pakleni Islands: €${pakleniPrivate} for 3 hours or €${pakleniPrivateExt} for 4 hours. Red Rocks south coast: €${rrPrivateHalf} for a half day, €${rrPrivateFull} for a full day. Blue Cave and 5 Islands: €${bcPrivate}. Sunset cruise: from €${sunsetFrom} for up to 4 people. All prices are for the whole boat, not per person. Fuel, water, and snorkel gear included.`,
  },
  {
    question: 'Can I get to the Blue Cave without a boating licence?',
    answer: `Yes, with a skipper. MareBoats runs a full-day private Blue Cave tour for €${bcPrivate} for the whole boat, or a shared departure at €${bcShared} per person. Neither option requires a boating licence. The shared tour goes when it fills, minimum 6 guests.`,
  },
  {
    question: 'Do I need boating experience for a private tour?',
    answer:
      'None at all. The skipper handles the boat. What helps: listening to the safety briefing at departure and letting us know in advance if anyone in your group has seasickness concerns.',
  },
];

const DESTINATIONS = [
  {
    href: '/tours/pakleni-islands/',
    label: 'Pakleni Islands',
    detail: `The Ždrilca channel, Palmižana, Perna cove, Borče Bay. Half-day tours start at €${pakleniPrivate} for the whole boat.`,
  },
  {
    href: '/tours/red-rocks-pakleni-islands/',
    label: 'Red Rocks south coast',
    detail: `Dubovica Beach, Žarače bay, Borče Bay. Half day €${rrPrivateHalf}, full day €${rrPrivateFull} for the whole boat.`,
  },
  {
    href: '/tours/blue-cave-pakleni-islands/',
    label: 'Blue Cave and 5 Islands on Vis',
    detail: `A full day, 7 hours, your group only. €${bcPrivate} for the whole boat.`,
  },
  {
    href: '/tours/sunset-cruise/',
    label: 'Sunset cruise',
    detail: `From €${sunsetFrom} for 1 to 4 people.`,
  },
  {
    href: '/tours/private-boat-charter/',
    label: 'Full private charter, your own itinerary',
    detail: `€${charterPrice} + fuel.`,
  },
];

export default function NoLicencePage() {

  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={buildFAQSchema(FAQS) as Record<string, unknown>} />

      {/* H1 — Question + direct answer */}
      <section className="border-b border-[color:var(--border)] px-4 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Hvar, Croatia &middot; Boat Rental
          </p>
          <h1 className="mt-4 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] sm:text-4xl md:text-5xl">
            Can you rent a boat in Hvar without a boating licence?
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Most self-drive rental options in Croatia require a valid boating licence, and the
            public sources on where the threshold sits do not agree with each other. The practical
            way to be on the water in Hvar without a licence is a private speedboat with a skipper
            included.
          </p>
        </div>
      </section>

      {/* H2 — What private with skipper means */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Private boat
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            What &ldquo;private boat with a skipper&rdquo; means in practice
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>
              Not a tour you join. The boat is yours, for your group only. The skipper handles
              navigation, reads the conditions that day, and picks the anchorages. You decide the
              pace and call the stops.
            </p>
            <p>
              You do not need a licence, experience, or any prior knowledge of the Adriatic. You
              arrive at{' '}
              <strong className="text-[color:var(--white)]">
                Beach Križa, below the Beach Bay Hvar Hotel
              </strong>
              , and the skipper takes it from there.
            </p>
            <p>Boats hold up to 8 people. Fuel, water, and snorkel gear included.</p>
          </div>
        </div>
      </section>

      {/* H2 — Destinations */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Where you can go
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            The same destinations. Without touching the helm.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            With a skipper on board you can reach everything a self-drive rental can, and some
            places a self-drive day could not reach anyway:
          </p>
          <ul className="mt-8 space-y-4">
            {DESTINATIONS.map(({ href, label, detail }) => (
              <li
                key={href}
                className="flex gap-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]"
                />
                <div>
                  <Link
                    href={href}
                    className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] transition-colors hover:text-[color:var(--accent)]"
                  >
                    {label}
                  </Link>
                  <p className="mt-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-sm text-[color:var(--gray)]">
            None of these require a boating licence. None require you to handle the boat.
          </p>
        </div>
      </section>

      {/* H2 — Cost comparison */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            How the cost compares
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Private tours are priced for the whole boat, not per person. The more people in your
            group, the less it costs per head, and past a certain point the private option is
            cheaper than buying individual shared seats.
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

      {/* H2 — Smallest boat in the fleet */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Self-drive
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            The smallest boat in the fleet
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-[color:var(--gray)]">
            The Pasara 5hp is the smallest boat in the fleet: &euro;{pasara5Price}/day, fuel
            included, up to {pasara5Max} people. It is designed for the calm, sheltered coves of
            the Pakleni Islands, a few minutes from Beach Križa. Not suited for open-water
            crossings to Vis or Brač.
          </p>
          <p className="mt-4">
            <Link
              href="/rentals/#boat-self-drive"
              className="font-body text-sm font-semibold text-[color:var(--accent)] underline underline-offset-2 transition-colors hover:text-[color:var(--accent-dk)]"
            >
              See the full self-drive fleet &rarr;
            </Link>
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
            Ready to book?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Message us on WhatsApp with your group size and which destinations interest you. We will
            confirm availability and suggest an itinerary.
          </p>
          <WhatsAppTrackedLink
            href={WA_URL}
            label="no_licence_cta"
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            Ask us on WhatsApp
          </WhatsAppTrackedLink>
          <p className="mt-8 font-body text-base text-[color:var(--gray)]">
            Looking for the full list of rental options?{' '}
            <Link
              href="/rentals/"
              className="font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)]"
            >
              See all rentals &rarr;
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
