import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllTourSlugs, getTourBySlug } from '@/lib/tours-data';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildTouristTripSchema } from '@/lib/schema';

const SITE = 'https://mareboatshvar.com';

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour.';

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

export default function TourDetailPage({ params }: PageProps) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const hero = tour.images[0];
  const tripSchema = buildTouristTripSchema({
    name: tour.name,
    description: tour.description,
    image: `${SITE}${hero.src}`,
    duration: tour.durationIso,
    url: `${SITE}/tours/${tour.slug}/`,
  });

  return (
    <main>
      <JsonLd data={tripSchema as Record<string, unknown>} />

      <nav aria-label="Breadcrumb" className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--gray)]">
        <ol className="mx-auto flex max-w-container flex-wrap items-center gap-2 font-body">
          <li>
            <Link href="/" className="text-[color:var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/tours" className="text-[color:var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50">
              Tours
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[color:var(--white)]">{tour.name}</li>
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-[color:var(--bg)] text-[color:var(--white)]">
        <div className="relative aspect-[21/9] min-h-[280px] w-full md:min-h-[360px]">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)] via-[color:var(--bg)]/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-container px-4 pb-16 pt-8 md:pb-20 md:pt-10">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Mare Boats Hvar
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] md:text-5xl lg:text-6xl">
            {tour.name}
          </h1>
          <p className="mt-4 max-w-3xl font-body text-lg leading-relaxed text-[color:var(--gray)] md:text-xl">
            {tour.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-pill border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 font-body text-sm font-semibold text-[color:var(--white)]">
              Duration: {tour.duration}
            </span>
            <span className="rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-4 py-2 font-body text-sm font-semibold text-[color:var(--accent)]">
              {tour.price}
            </span>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
            {tour.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 font-body text-sm text-[color:var(--white)]"
              >
                <span className="mt-0.5 text-[color:var(--accent)]" aria-hidden="true">
                  ✓
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
            >
              Book This Tour
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              Request via form
            </Link>
          </div>
        </div>
      </section>

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
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              What&apos;s included
            </h2>
            <ul className="mt-4 space-y-2 font-body text-[color:var(--gray)]">
              {tour.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[color:var(--accent)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              Not included
            </h2>
            <ul className="mt-4 space-y-2 font-body text-[color:var(--gray)]">
              {tour.notIncludes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[color:var(--gray)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              What to bring
            </h2>
            <ul className="mt-4 space-y-2 font-body text-[color:var(--gray)]">
              {tour.whatToBring.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[color:var(--accent)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <h2 className="font-display text-xl font-bold uppercase text-[color:var(--white)]">Meeting point</h2>
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
    </main>
  );
}
