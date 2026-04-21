import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllTourSlugs, getTourBySlug, toursData, type TourRecord } from '@/lib/tours-data';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildTouristTripSchema } from '@/lib/schema';
import TourHero from '@/components/sections/TourHero';

const SITE = 'https://mareboatshvar.com';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tour = getTourBySlug(params.slug);
  if (!tour) {
    return { title: 'Tour | Mare Boats Hvar' };
  }

  const title = `${tour.name} from Hvar, Croatia | MareBoats Hvar`;
  const ogUrl = `${SITE}${tour.images[0].src}`;

  return {
    title,
    description: tour.shortDescription,
    keywords: tour.keywords,
    alternates: { canonical: `${SITE}/tours/${tour.slug}/` },
    openGraph: {
      title,
      description: tour.shortDescription,
      url: `${SITE}/tours/${tour.slug}/`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Mare Boats Hvar',
      images: [{ url: ogUrl, width: 1200, height: 630, alt: tour.images[0].alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: tour.shortDescription,
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

  const tripSchema = buildTouristTripSchema({
    name: tour.name,
    description: tour.description,
    image: `${SITE}${hero.src}`,
    duration: tour.durationIso,
    url: `${SITE}/tours/${tour.slug}/`,
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

  return (
    <main>
      <JsonLd data={tripSchema as Record<string, unknown>} />
      <JsonLd data={breadcrumbSchema as Record<string, unknown>} />

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
              <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
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
        </div>
      </section>

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

      {/* Final CTA — same visual rhythm as the home CTABanner */}
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
            Send us your date and group size on WhatsApp. We confirm availability fast — usually
            within the hour during the season.
          </p>

          <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98] md:text-base"
            >
              Read the Guest Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
