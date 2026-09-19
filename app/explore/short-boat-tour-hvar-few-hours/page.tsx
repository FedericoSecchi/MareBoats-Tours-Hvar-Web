import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildFAQSchema } from '@/lib/schema';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { TOUR_PRICES, getScenicPrice, SCENIC_PROSECCO } from '@/lib/pricing';

const SCENIC_BASE = TOUR_PRICES['scenic-coast-cruise'].privateBase!;

export const metadata: Metadata = {
  ...generateSEO({
    title: 'Short Boat Tour Hvar: A Few Hours on the Water',
    description:
      `Two-hour private boat cruise from Hvar. Four bays on the south coast, engine off at each. Fits a day trip from Split or an afternoon before the ferry. Meet at Beach Križa, a few minutes from town. From €${SCENIC_BASE} private.`,
    keywords: [
      'short boat tour hvar',
      'scenic boat tour hvar',
      '2 hour boat tour hvar',
      'what to do in hvar for a few hours',
      'hvar day trip from split',
      'things to do in hvar between ferries',
      'hvar afternoon boat trip',
      'private boat cruise hvar',
      'relaxed boat tour hvar',
    ],
    slug: 'explore/short-boat-tour-hvar-few-hours',
  }),
};

const WA_URL =
  'https://wa.me/385951966734?text=' +
  encodeURIComponent(
    "Hi! I'd like to book the short scenic boat cruise from Hvar. Can you help me pick a time slot?"
  );

// Prices read from lib/pricing.ts
const sc = TOUR_PRICES['scenic-coast-cruise'];
const rrPrivateHalf = TOUR_PRICES['red-rocks-pakleni-islands'].privateHalfDay!;
const rrPrivateFull = TOUR_PRICES['red-rocks-pakleni-islands'].privateFullDay!;
const scBase = sc.privateBase!;
const scBaseGuests = sc.privateBaseGuests!;
const scExtra = sc.privatePerExtraGuest!;
const scMax = sc.privateMaxGuests!;

const FAQS: { question: string; answer: string }[] = [
  {
    question: 'I only have a few hours in Hvar. What can I do on the water?',
    answer:
      'The two-hour Scenic Coast Cruise. You leave Hvar, follow the south coast past Red Rocks, Dubovica and Borče Bay, and cross into the Pakleni channel. The engine goes off at each of those four bays. Depending on the sea we also pass Žarače, Milna, Mlini and Ždrilca along the way. Two hours, start to finish. Departures any time between 9am and 3pm from Beach Križa, a few minutes from Hvar town.',
  },
  {
    question: 'I am coming over from Split for the day. Can this fit around my ferry?',
    answer:
      'Yes. Tell us when your ferry leaves and we pick the slot. The cruise runs two hours from Hvar back to Hvar, and the last departure is at 3pm, so it fits before an afternoon or evening ferry back to Split.',
  },
  {
    question: 'Do we stop to swim?',
    answer:
      'No. The boat drifts at each bay with the engine off, but it does not anchor and it does not land anywhere. Two hours on the move. If beach time is what you want, book the 4-hour Red Rocks & Pakleni Islands tour instead.',
  },
  {
    question: 'What does the short boat tour cost?',
    answer:
      `€${scBase} for the whole boat, up to ${scBaseGuests} guests. Guests ${scBaseGuests + 1} and ${scMax} are €${scExtra} each, so €${getScenicPrice('scenic-coast-cruise', scBaseGuests + 1)} for ${scBaseGuests + 1} guests and €${getScenicPrice('scenic-coast-cruise', scMax)} for ${scMax}. Private boat, one group. A bottle of prosecco is available on request for €${SCENIC_PROSECCO}.`,
  },
  {
    question: 'Is this a group tour with strangers?',
    answer:
      'No. It is private. One group, one boat, one skipper.',
  },
  {
    question: 'What is the meeting point?',
    answer:
      'The MareBoats barrel, on the path between Hvar port and Beach Križa, below the Beach Bay Hvar Hotel. About 3 minutes on foot from the ferry terminal, walking towards the Franciscan Monastery.',
  },
  {
    question: 'What happens if the weather is bad on the day?',
    answer:
      'If the sea is up, the skipper may move the route to the sheltered Pakleni side, or cancel if conditions are unsafe. If MareBoats cancels for weather, you get a full refund. Bookings cancelled by guests are not refunded.',
  },
  {
    question: 'What if I want the longer tour with swimming?',
    answer:
      `The 4-hour Red Rocks & Pakleni Islands tour covers the same coastline and anchors at Red Rocks, Dubovica and the Pakleni Islands for swimming, snorkelling and a lunch stop. €${rrPrivateHalf} private half-day. The 6-hour full-day is €${rrPrivateFull}.`,
  },
];

export default function ShortBoatTourPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={buildFAQSchema(FAQS) as Record<string, unknown>} />

      {/* H1 — Question + direct answer */}
      <section className="border-b border-[color:var(--border)] px-4 py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Hvar, Croatia &middot; Short Boat Tours
          </p>
          <h1 className="mt-4 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] sm:text-4xl md:text-5xl">
            What can I do in Hvar for a few hours on the water?
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            A two-hour private cruise along the south coast. You leave Hvar, pass Red Rocks, Dubovica and Borče Bay, and cross into the Pakleni channel. The engine goes off at each of those four bays. Depending on the sea we also pass Žarače, Milna, Mlini and Ždrilca along the way, without stopping. No anchoring, no landing. Two hours, start to finish. Meet at Beach Križa, a few minutes from Hvar town.
          </p>
        </div>
      </section>

      {/* H2 — Who this fits */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Who it fits
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            The tour that fits into your day
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>
              Most tours from Hvar run half a day or longer. This one runs two hours. It fits three kinds of guests:
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>Over from Split for the day and heading back on the afternoon ferry.</li>
              <li>On the island for a couple of nights, with the coast still to see and one afternoon to spare.</li>
              <li>Not up for a long day of swimming, and wanting to see Hvar from the water without the effort of a full tour.</li>
            </ul>
            <p>
              The boat drifts with the engine off at each bay. You see the coast from the water instead of from the road above. Then it is on to the next bay. No anchoring, no landing, no getting in and out.
            </p>
          </div>
        </div>
      </section>

      {/* H2 — How it fits a ferry day */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            From Split for the day
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            How the cruise fits around a ferry
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>
              Departures are any time between 9am and 3pm. Tell us when your ferry leaves. We pick the slot that gets you back in Hvar with time to walk to the ferry terminal.
            </p>
            <p>
              Two hours means two hours. You will not be told a boat is running late because the last group stayed longer at a beach. There is no last group. The tour has no anchoring stop, so the return time is a return time.
            </p>
            <p>
              The MareBoats meeting point is at Beach Križa, a few minutes from Hvar town: three minutes on foot from the ferry terminal, along the coastal path towards the Franciscan Monastery.
            </p>
          </div>
        </div>
      </section>

      {/* H2 — The route */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            The route
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Four bays, engine off at each
          </h2>
          <dl className="mt-8 space-y-6 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <div>
              <dt className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">Red Rocks</dt>
              <dd className="mt-1">Iron-red cliffs on the south side of Hvar. You see them from the water or you do not see them at all.</dd>
            </div>
            <div>
              <dt className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">Dubovica</dt>
              <dd className="mt-1">Most photos of Dubovica are taken from the road above the bay. From the boat you get the other angle.</dd>
            </div>
            <div>
              <dt className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">Borče Bay</dt>
              <dd className="mt-1">Quiet water, sheltered. This is usually where people stop talking.</dd>
            </div>
            <div>
              <dt className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">The Pakleni channel</dt>
              <dd className="mt-1">The stretch between the islands, the clearest water on the route.</dd>
            </div>
          </dl>
          <p className="mt-8 font-body text-sm text-[color:var(--gray)]">
            <Link
              href="/tours/scenic-coast-cruise/"
              className="text-[color:var(--accent)] underline underline-offset-2 transition-colors hover:text-[color:var(--accent-dk)]"
            >
              See the scenic cruise page for full details, FAQ and pricing
            </Link>
          </p>
        </div>
      </section>

      {/* H2 — If you have more time */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            More time on the island
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            What if you have half a day?
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>
              The 4-hour Red Rocks &amp; Pakleni Islands tour covers the same coast but stops to swim. It anchors at Red Rocks and Dubovica, and stops at the Pakleni Islands for a swim and an optional lunch. €{rrPrivateHalf} private half-day. The 6-hour full-day is €{rrPrivateFull} and gives more time at every stop, including a proper lunch at Palmižana or Ždrilca.
            </p>
            <p>
              If beach time and swimming are what you are after,{' '}
              <Link
                href="/tours/red-rocks-pakleni-islands/"
                className="text-[color:var(--accent)] underline underline-offset-2 transition-colors hover:text-[color:var(--accent-dk)]"
              >
                the Red Rocks &amp; Pakleni Islands tour is the one to book
              </Link>
              .
            </p>
          </div>
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
            Tell us your ferry time
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Message us on WhatsApp with the time your ferry leaves and the day you are on the island. We send back the slot that fits.
          </p>
          <WhatsAppTrackedLink
            href={WA_URL}
            label="scenic_short_cta"
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            Ask about a slot on WhatsApp
          </WhatsAppTrackedLink>
          <p className="mt-8 font-body text-base text-[color:var(--gray)]">
            Planning a longer day on the water?{' '}
            <Link
              href="/explore/private-boat-tour-hvar-families/"
              className="font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)]"
            >
              How a private speedboat works for families and groups &rarr;
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
