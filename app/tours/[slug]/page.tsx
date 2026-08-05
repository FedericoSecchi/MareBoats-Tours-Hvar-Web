import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllTourSlugs, getTourBySlug, toursData, type TourRecord } from '@/lib/tours-data';
import { TOUR_PRICES, EXTRAS } from '@/lib/pricing';
import { JsonLd } from '@/components/ui/JsonLd';
import { tourSchemaMap, buildTouristTripSchema, buildFAQSchema } from '@/lib/schema';
import TourHero from '@/components/sections/TourHero';
import FleetInfo from '@/components/sections/FleetInfo';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

const SITE = 'https://mareboatshvar.com';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tour = getTourBySlug(params.slug);
  if (!tour) {
    return { title: 'Tour | MareBoats Hvar' };
  }

  const titleMap: Record<string, string> = {
    'blue-cave-pakleni-islands': 'Hvar Boat Tour: 5 Islands, Blue Cave & 4 Beaches',
    'red-rocks-pakleni-islands': 'Red Rocks & Pakleni Islands Boat Tour from Hvar',
    'pakleni-islands': 'Pakleni Islands Half Day Boat Tour from Hvar',
    'sunset-cruise': 'Sunset Cruise Hvar',
    'private-boat-charter': 'Private Boat Charter Hvar',
    'split-airport-transfer': 'Split Airport to Hvar by Speedboat',
  };
  const descriptionMap: Record<string, string> = {
    'blue-cave-pakleni-islands':
      'Full-day speedboat tour from Hvar. Blue Cave, Stiniva Bay, Green Cave, Medvidina, Budikovac & Pakleni Islands. Small groups. Departs 10:00. Book on WhatsApp.',
    'red-rocks-pakleni-islands':
      'Speedboat tour from Hvar: Red Rocks cliffs, Dubovica Beach, secret sea cave & Pakleni Islands. Private or shared. Less sailing, more swimming. Book on WhatsApp.',
    'split-airport-transfer':
      'Skip the ferry. Private speedboat transfer from Split Airport to Hvar - fast, comfortable, scenic. Book on WhatsApp, instant confirmation.',
  };
  const title = titleMap[tour.slug] ?? `${tour.name} from Hvar, Croatia | MareBoats Hvar`;
  const description = descriptionMap[tour.slug] ?? tour.shortDescription;
  const ogUrl = `${SITE}${tour.images[0].src}`;

  return {
    title,
    description,
    keywords: tour.keywords,
    alternates: { canonical: `${SITE}/tours/${tour.slug}/` },
    openGraph: {
      title,
      description,
      url: `${SITE}/tours/${tour.slug}/`,
      type: 'website',
      locale: 'en_US',
      siteName: 'MareBoats Hvar',
      images: [{ url: ogUrl, width: 1200, height: 630, alt: tour.images[0].alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
    robots: { index: true, follow: true },
  };
}

function getRelatedTours(currentSlug: string, count = 2): TourRecord[] {
  return toursData.filter((t) => t.slug !== currentSlug).slice(0, count);
}

export default function TourDetailPage({ params }: PageProps) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const hero = tour.images[0];
  const waMessage =
    tour.slug === 'yacht-sailboat-taxi'
      ? 'Hi! I need a water taxi from my yacht. My location is: [coordinates]'
      : `Hi! I'd like to book the ${tour.name}.`;
  const waUrl = `https://wa.me/385951966734?text=${encodeURIComponent(waMessage)}`;

  const tripSchema =
    tourSchemaMap[tour.slug] ??
    buildTouristTripSchema({
      name: tour.name,
      description: tour.description,
      image: `${SITE}${hero.src}`,
      url: `${SITE}/tours/${tour.slug}/`,
      ...(tour.priceEur !== undefined && {
        offers: { price: String(tour.priceEur), priceCurrency: 'EUR' },
      }),
    });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Tours', item: `${SITE}/tours/` },
      {
        '@type': 'ListItem',
        position: 3,
        name: tour.name,
        item: `${SITE}/tours/${tour.slug}/`,
      },
    ],
  };

  const related = getRelatedTours(tour.slug, 2);

  const rrP = TOUR_PRICES['red-rocks-pakleni-islands'];
  const bcP = TOUR_PRICES['blue-cave-pakleni-islands'];

  const fastFactsDisplay: { label: string; value: string }[] = [];
  if (tour.fastFacts) {
    for (const fact of tour.fastFacts) {
      fastFactsDisplay.push(fact);
      if (fact.label === 'Meeting point') {
        if (tour.includes.length > 0)
          fastFactsDisplay.push({ label: 'Included', value: tour.includes.join(' · ') });
        if (tour.notIncludes.length > 0)
          fastFactsDisplay.push({ label: 'Not included', value: tour.notIncludes.join(' · ') });
      }
    }
  }

  const showBlueCaveConditions = tour.slug === 'blue-cave-pakleni-islands';
  const showSunsetConditions = tour.slug === 'sunset-cruise';

  return (
    <main>
      <JsonLd data={tripSchema as Record<string, unknown>} />
      <JsonLd data={breadcrumbSchema as Record<string, unknown>} />
      {tour.faqs && tour.faqs.length > 0 && (
        <JsonLd data={buildFAQSchema(tour.faqs) as Record<string, unknown>} />
      )}

      <TourHero tour={tour} />

      {/* Breadcrumb + back link */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4"
      >
        <div className="mx-auto flex max-w-container flex-wrap items-center gap-2 py-4 font-body text-xs text-[color:var(--gray)]">
          <Link
            href="/"
            className="transition-colors hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:text-[color:var(--accent)]"
          >
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/tours"
            className="transition-colors hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:text-[color:var(--accent)]"
          >
            Tours
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[color:var(--white)]" aria-current="page">
            {tour.name}
          </span>
          <Link
            href="/tours"
            className="ml-auto inline-flex items-center gap-1 font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline"
          >
            <span aria-hidden="true">←</span> All Tours
          </Link>
        </div>
      </nav>

      {fastFactsDisplay.length > 0 && (
        <section className="bg-[color:var(--bg)] px-4 pt-10 pb-0">
          <div className="mx-auto max-w-container">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-6">
              <h2 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Fast facts
              </h2>
              <dl className="mt-5 divide-y divide-[color:var(--border)]">
                {fastFactsDisplay.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[140px_1fr] gap-x-6 py-3 text-sm first:pt-0 last:pb-0 sm:grid-cols-[180px_1fr]"
                  >
                    <dt className="font-body font-semibold text-[color:var(--white)]">{fact.label}</dt>
                    {fact.label === 'Meeting point' ? (
                      <dd className="font-body text-[color:var(--gray)]">
                        <a
                          href={tour.meetingPointMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 transition-colors hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:text-[color:var(--accent)]"
                        >
                          {fact.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="font-body text-[color:var(--gray)]">{fact.value}</dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
            About this tour
          </h2>
          <p className="mt-6 max-w-3xl whitespace-pre-line font-body text-base leading-relaxed text-[color:var(--gray)]">
            {tour.description}
          </p>
        </div>
      </section>

      {tour.pricingOptions && tour.pricingOptions.length > 0 && (
        <section className="bg-[color:var(--bg)] px-4 pt-10 pb-0">
          <div className="mx-auto max-w-container">
            <div className="rounded-2xl border border-[color:var(--accent)]/30 bg-[color:var(--surface)] p-6">
              <h2 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Pricing
              </h2>
              <ul className="mt-4 flex flex-col gap-5 sm:flex-row sm:gap-10">
                {tour.pricingOptions.map((opt) => (
                  <li key={opt.label} className="flex flex-col gap-1">
                    <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--accent)]">
                      {opt.label}
                    </span>
                    <span className="font-display text-2xl font-bold text-[color:var(--white)]">
                      {opt.price}
                    </span>
                    <span className="font-body text-sm text-[color:var(--gray)]">{opt.note}</span>
                  </li>
                ))}
              </ul>
              {(tour.slug === 'blue-cave-pakleni-islands' || tour.slug === 'red-rocks-pakleni-islands') && (
                <p className="mt-5 font-body text-sm text-[color:var(--gray)]">
                  Shared tour spots open at a minimum of 6 guests. We confirm your date by WhatsApp before departure.
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {tour.stops && tour.stops.length > 0 && (
        <section className="bg-[color:var(--surface)] px-4 py-16 md:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
              The route
            </h2>
            <p className="mt-2 font-body text-sm text-[color:var(--gray)]">
              Sailing times between stops are averages and vary with sea conditions. Time at each stop adjusts to the group and the day. We do not rush between stops.
            </p>
            <div className="mt-10">
              {tour.stops.map((stop) => (
                <div
                  key={stop.name}
                  className="border-t border-[color:var(--border)] py-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                      {stop.name}
                    </h3>
                    {stop.croatianName && (
                      <span className="font-body text-sm text-[color:var(--gray)]">
                        {stop.croatianName}
                      </span>
                    )}
                    {stop.isOptional && (
                      <span className="rounded-pill border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 font-body text-[11px] font-semibold uppercase tracking-wide text-amber-300">
                        Weather dependent
                      </span>
                    )}
                  </div>
                  <dl className="mt-4 grid gap-4 text-sm md:grid-cols-2">
                    <div>
                      <dt className="font-body font-semibold text-[color:var(--white)]">What it is</dt>
                      <dd className="mt-1 font-body leading-relaxed text-[color:var(--gray)]">{stop.description}</dd>
                    </div>
                    <div>
                      <dt className="font-body font-semibold text-[color:var(--white)]">Sailing time</dt>
                      <dd className="mt-1 font-body leading-relaxed text-[color:var(--gray)]">{stop.travelTime}</dd>
                    </div>
                    {stop.activities && (
                      <div className="md:col-span-2">
                        <dt className="font-body font-semibold text-[color:var(--white)]">What you do here</dt>
                        <dd className="mt-1 font-body leading-relaxed text-[color:var(--gray)]">{stop.activities}</dd>
                      </div>
                    )}
                    <div className="md:col-span-2">
                      <dt className="font-body font-semibold text-[color:var(--white)]">Best conditions</dt>
                      <dd className="mt-1 font-body leading-relaxed text-[color:var(--gray)]">{stop.conditions}</dd>
                    </div>
                    {stop.isOptional && stop.optionalNote && (
                      <div className="md:col-span-2">
                        <dd className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 font-body text-sm leading-relaxed text-amber-300">
                          {stop.optionalNote}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tour.slug === 'red-rocks-pakleni-islands' && (
        <section className="bg-[color:var(--bg)] px-4 py-16 md:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
              Red Rocks &amp; Pakleni or the 5 Islands Blue Cave tour: which one fits your day?
            </h2>
            <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-[color:var(--gray)]">
              Both tours leave from Beach Križa on a MareBoats Hvar speedboat. The difference is range and time on the water.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-[color:var(--border)]">
              <table className="w-full min-w-[560px] border-collapse font-body text-sm">
                <thead>
                  <tr className="border-b border-[color:var(--border)] bg-[color:var(--surface)]">
                    <th className="py-3 pl-5 pr-6 text-left text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--gray)] w-[180px]" />
                    <th className="py-3 pr-6 text-left text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--accent)]">Red Rocks &amp; Pakleni</th>
                    <th className="py-3 pr-5 text-left text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--white)]">
                      <Link href="/tours/blue-cave-pakleni-islands" className="hover:text-[color:var(--accent)] transition-colors focus-visible:outline-none focus-visible:underline">
                        Blue Cave &amp; 5 Islands
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[color:var(--surface)]">
                  {([
                    { label: 'Duration',           rr: '4 or 6 hours',                                                                               bc: '7 hours' },
                    { label: 'Departure',          rr: 'Flexible (09:00 / 11:00 / 14:00)',                                                           bc: '10:00, fixed' },
                    { label: 'Route',              rr: 'South coast of Hvar and the Pakleni archipelago',                                            bc: 'Vis Island, Biševo and the Pakleni Islands' },
                    { label: 'Open sea crossing',  rr: 'Short legs, always near the Hvar coast',                                                     bc: 'Crosses to Vis Island (~45 km from Hvar)' },
                    { label: 'Total distance',     rr: '30 to 35 km',                                                                                bc: '100 to 120 km' },
                    { label: 'Shared price',       rr: `€${rrP.sharedPerPerson ?? 0} per person`,                                                    bc: `€${bcP.sharedPerPerson ?? 0} per person` },
                    { label: 'Private price',      rr: `€${rrP.privateHalfDay ?? 0} half-day / €${rrP.privateFullDay ?? 0} full-day`,                bc: `€${bcP.private ?? 0}` },
                    { label: 'Cave entrance fees', rr: 'None',                                                                                        bc: `Blue Cave €${EXTRAS.blueCave}/person · Green Cave €${EXTRAS.greenCave}/person optional` },
                    { label: 'Good fit for',       rr: 'More time in the water on the south coast of Hvar, shorter sailing legs',                    bc: 'Covering more islands in one day, Blue Cave on the list' },
                  ] as { label: string; rr: string; bc: string }[]).map((row) => (
                    <tr key={row.label} className="border-t border-[color:var(--border)]/60">
                      <td className="py-3 pl-5 pr-6 align-top font-semibold text-[color:var(--white)]">{row.label}</td>
                      <td className="py-3 pr-6 align-top text-[color:var(--accent)]">{row.rr}</td>
                      <td className="py-3 pr-5 align-top text-[color:var(--gray)]">{row.bc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 md:grid-cols-2">
          <div className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              What&apos;s included
            </h2>
            <ul className="mt-4 flex-1 space-y-2 font-body text-[color:var(--gray)]">
              {tour.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[color:var(--accent)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              Not included
            </h2>
            <ul className="mt-4 flex-1 space-y-2 font-body text-[color:var(--gray)]">
              {tour.notIncludes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[color:var(--gray)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {tour.addons && tour.addons.length > 0 && (
            <div className="md:col-span-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <h2 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] sm:text-2xl">
                Add-ons <span className="text-[color:var(--accent)]">· on request</span>
              </h2>
              <p className="mt-2 font-body text-sm text-[color:var(--gray)]">
                Not part of the tour price. Ask on WhatsApp when you book if you want to add any of
                these.
              </p>
              <ul className="mt-4 space-y-2 font-body text-[color:var(--gray)]">
                {tour.addons.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[color:var(--accent)]">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="md:col-span-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              What to bring
            </h2>
            <ul className="mt-4 grid gap-2 font-body text-[color:var(--gray)] md:grid-cols-2">
              {tour.whatToBring.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[color:var(--accent)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {tour.slug !== 'split-airport-transfer' && (
            <div className="md:col-span-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">🐶</span>
              <p className="font-body text-sm text-[color:var(--gray)]">
                Dogs are welcome on board. Let us know when you book.
              </p>
            </div>
          )}

          <div className="md:col-span-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <h2 className="font-display text-xl font-bold uppercase text-[color:var(--white)]">
              Meeting point
            </h2>
            <p className="mt-2 font-body text-[color:var(--gray)]">{tour.meetingPoint}</p>
            <a
              href={tour.meetingPointMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-body text-sm font-semibold text-[color:var(--accent)] hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline active:opacity-90"
            >
              Open in Google Maps →
            </a>
          </div>

          {showBlueCaveConditions && (
            <div className="md:col-span-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">Before you go</p>
                <h2 className="mt-1 font-display text-xl font-bold uppercase text-[color:var(--white)]">Check Blue Cave conditions</h2>
                <p className="mt-1 font-body text-sm text-[color:var(--gray)]">Live sea state, wind and Blue Cave access indicator, updated in real time.</p>
              </div>
              <Link href="/conditions" className="shrink-0 inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]">
                Check conditions →
              </Link>
            </div>
          )}

          {showSunsetConditions && (
            <div className="md:col-span-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">Tonight on the water</p>
                <h2 className="mt-1 font-display text-xl font-bold uppercase text-[color:var(--white)]">Check tonight's sunset quality</h2>
                <p className="mt-1 font-body text-sm text-[color:var(--gray)]">Golden hour forecast, cloud cover and visibility, so you know what to expect before you board.</p>
              </div>
              <Link href="/conditions" className="shrink-0 inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]">
                Check conditions →
              </Link>
            </div>
          )}
        </div>
      </section>

      {tour.faqs && tour.faqs.length > 0 && (
        <section className="bg-[color:var(--surface)] px-4 py-16 md:py-20">
          <div className="mx-auto max-w-container">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8">
              {tour.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-t border-[color:var(--border)] py-5 first:border-t-0 first:pt-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body text-base font-semibold text-[color:var(--white)] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      className="shrink-0 text-xl leading-none text-[color:var(--accent)] transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {tour.slug !== 'split-airport-transfer' && <FleetInfo />}

      {/* Related tours */}
      {related.length > 0 && (
        <section className="bg-[color:var(--surface)] px-4 py-16 md:py-20">
          <div className="mx-auto max-w-container">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  You might also like
                </p>
                <h2 className="mt-3 font-display text-2xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-3xl">
                  Other tours from Hvar
                </h2>
              </div>
              <Link
                href="/tours"
                className="hidden font-body text-sm font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline md:inline-block"
              >
                See all tours →
              </Link>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug} className="flex">
                  <Link
                    href={`/tours/${r.slug}`}
                    className="group flex h-full w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
                  >
                    <div className="relative aspect-square w-32 shrink-0 overflow-hidden md:w-40">
                      <Image
                        src={r.images[0].src}
                        alt={r.images[0].alt}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center gap-2 p-5">
                      <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-lg">
                        {r.name}
                      </h3>
                      <p className="font-body text-xs font-semibold text-[color:var(--accent)]">
                        {r.price}
                      </p>
                      <p className="font-body text-xs text-[color:var(--gray)]">{r.duration}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/tours"
              className="mt-6 inline-block font-body text-sm font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline md:hidden"
            >
              See all tours →
            </Link>
          </div>
        </section>
      )}

      {/* Final CTA - same visual rhythm as the home CTABanner */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Ready when you are
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Book the {tour.name}
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Send us your date and group size on WhatsApp. We confirm availability fast - usually
            within the hour during the season.
          </p>

          <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <WhatsAppTrackedLink
              href={waUrl}
              label="tour_page_footer"
              className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
            >
              Book on WhatsApp
            </WhatsAppTrackedLink>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98] md:text-base"
            >
              Read the Guest Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Boat rental crosslink */}
      <div className="border-t border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-sm text-[color:var(--gray)]">
            Looking for a private boat rental in Hvar?
          </p>
          <p className="mt-1 font-body text-xs text-[color:var(--gray)]/70">
            We offer speedboats with skipper included or self-drive for licensed captains.
          </p>
          <Link
            href="/rentals/#boat-rental"
            className="mt-3 inline-block font-body text-sm font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline"
          >
            See Boat Rental options →
          </Link>
        </div>
      </div>
    </main>
  );
}
