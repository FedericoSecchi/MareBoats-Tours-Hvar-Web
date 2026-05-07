import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { TrackedTourDetailLink } from '@/components/ui/TrackedTourDetailLink';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { TourCardImage } from '@/components/ui/TourCardImage';
import { toursData } from '@/lib/tours-data';

export const metadata: Metadata = generateSEO({
  title: 'Boat Tours Hvar | All Tours from Hvar Harbour — MareBoats',
  description:
    'All MareBoats tours: Blue Cave, Red Rocks & Pakleni, Sunset Cruise, Private Charter. Private speedboat tours from Hvar Harbour. Book via WhatsApp.',
  keywords: [
    'boat tours hvar',
    'hvar tours',
    'private boat tour hvar',
    'blue cave tour hvar',
    'pakleni islands tour',
    'sunset cruise hvar',
  ],
  slug: 'tours',
  ogImage: '/img/package-1.jpeg',
});

const SITE = 'https://mareboatshvar.com';

const WA_BASE = 'https://wa.me/385951966734?text=';

type TourCard = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  summary: string;
  image: string;
  imageAlt: string;
  waMessage: string;
};

/** Curated order for the index grid. Ordered by commercial priority. */
const TOUR_CARDS: TourCard[] = [
  {
    slug: 'blue-cave-pakleni-islands',
    name: '5 Islands, 4 Beaches, 3 Caves',
    duration: '7 hours · 10:00–17:00',
    price: 'From €130/person · €700 private',
    summary:
      'Our flagship full day: Green Cave, Stiniva, Blue Cave, Budikovac and Pakleni Islands.',
    image: '/img/package-1.jpeg',
    imageAlt: '5 Islands full day boat tour from Hvar — Blue Cave and Pakleni Islands',
    waMessage: "Hi! I'd like to book the 5 Islands tour",
  },
  {
    slug: 'red-rocks-pakleni-islands',
    name: 'Red Rocks & Pakleni Islands',
    duration: '4 hours · morning or afternoon',
    price: '€400 private (up to 8)',
    summary:
      'Cliffs, a secret cave, Dubovica Beach and the Pakleni archipelago in one half-day.',
    image: '/img/destination-4.jpeg',
    imageAlt: 'Red Rocks and Pakleni Islands half-day boat tour from Hvar',
    waMessage: "Hi! I'd like to book the Red Rocks & Pakleni tour",
  },
  {
    slug: 'pakleni-islands',
    name: 'Pakleni Islands',
    duration: '3–4 hours',
    price: 'On request',
    summary:
      'A relaxed half-day around the Pakleni archipelago. Ideal for families and shorter visits.',
    image: '/img/package-2.jpeg',
    imageAlt: 'Pakleni Islands half-day boat tour from Hvar',
    waMessage: "Hi! I'd like to book the Pakleni Islands tour",
  },
  {
    slug: 'sunset-cruise',
    name: 'Sunset Cruise',
    duration: '~2 hours · golden hour',
    price: '€250 private',
    summary:
      'Private evening cruise along the Hvar coastline. Calm water, golden light, best photos of the day.',
    image: '/img/package-5.jpeg',
    imageAlt: 'Sunset boat cruise from Hvar — golden hour on the Adriatic',
    waMessage: "Hi! I'd like to book the Sunset Cruise",
  },
  {
    slug: 'private-boat-charter',
    name: 'Private Charter',
    duration: 'Full day · custom route',
    price: '€500 + fuel · up to 8',
    summary: 'Your boat, your skipper, your itinerary. Design the day you want on the Adriatic.',
    image: '/img/package-4.jpeg',
    imageAlt: 'Private boat charter from Hvar — custom itinerary',
    waMessage: "Hi! I'd like to book a Private Charter",
  },
];

function waUrl(message: string) {
  return `${WA_BASE}${encodeURIComponent(message)}`;
}

const HOW_IT_WORKS = [
  {
    n: '1',
    title: 'Choose your tour',
    body: 'Pick a route from the list or tell us what you want to see.',
  },
  {
    n: '2',
    title: 'Message us on WhatsApp',
    body: 'We reply within an hour during the season (May–September).',
  },
  {
    n: '3',
    title: 'Meet at the barrel',
    body: 'Hvar Harbour, at your agreed time. We take care of the rest.',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Boat Tours from Hvar — MareBoats',
  description:
    'All private speedboat tours, sunset cruises and charters from Hvar Harbour, Croatia.',
  itemListElement: TOUR_CARDS.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE}/tours/${t.slug}/`,
    name: t.name,
  })),
};

export default function ToursIndexPage() {
  const toursBySlug = new Map(toursData.map((t) => [t.slug, t]));
  const cards = TOUR_CARDS.filter((c) => toursBySlug.has(c.slug));

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
            All tours
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Choose Your Adventure
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Private tours from Hvar Harbour. You pick the stops — we know every corner of the
            coast.
          </p>
        </div>
      </section>

      {/* Tours grid */}
      <section className="px-4 py-16 md:py-20">
        <ul className="mx-auto grid max-w-container grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((tour) => {
            const record = toursBySlug.get(tour.slug);
            const images = record?.images ?? [{ src: tour.image, alt: tour.imageAlt }];
            return (
            <li key={tour.slug} className="flex">
              <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)] focus-within:-translate-y-1.5 focus-within:shadow-[0_20px_40px_rgba(59,201,219,0.18)]">
                <TourCardImage
                  images={images}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  badge={tour.duration}
                />

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h2 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                      {tour.name}
                    </h2>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                      {tour.summary}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <span className="font-body text-sm font-semibold text-[color:var(--accent)]">
                      {tour.price}
                    </span>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <TrackedTourDetailLink
                        slug={tour.slug}
                        className="inline-flex flex-1 items-center justify-center rounded-pill border border-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]"
                      >
                        See Details
                      </TrackedTourDetailLink>
                      <WhatsAppTrackedLink
                        href={waUrl(tour.waMessage)}
                        label="tours_index"
                        ctaText="Book on WhatsApp"
                        tourName={tour.name}
                        className="inline-flex flex-1 items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                      >
                        Book on WhatsApp
                      </WhatsAppTrackedLink>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            );
          })}
        </ul>
      </section>

      {/* How it works */}
      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              How it works
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Three steps, one private boat
            </h2>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Not sure which tour?
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Tell us your date and group size
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            We&apos;ll help you choose the route that fits. Usually one WhatsApp message is all it
            takes.
          </p>

          <WhatsAppTrackedLink
            href={waUrl("Hi! I'd like help choosing a tour.")}
            label="tours_footer_cta"
            ctaText="Ask us on WhatsApp"
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            Ask us on WhatsApp
          </WhatsAppTrackedLink>
        </div>
      </section>
    </main>
  );
}
