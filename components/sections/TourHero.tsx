import Image from 'next/image';
import Link from 'next/link';
import type { TourRecord } from '@/lib/tours-data';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

type TourHeroProps = {
  tour: TourRecord;
};

export default function TourHero({ tour }: TourHeroProps) {
  const hero = tour.images[0];
  const waMessage =
    tour.slug === 'yacht-sailboat-taxi'
      ? 'Hi! I need a water taxi from my yacht. My location is: [coordinates]'
      : `Hi! I'd like to book the ${tour.name}.`;
  const waUrl = `https://wa.me/385951966734?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden text-white md:min-h-[92vh]">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* WCAG AA overlay: base dark layer + bottom gradient for text legibility */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]"
        style={{
          height: '60%',
          background: 'linear-gradient(to top, rgba(13,27,42,0.75) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-4 pb-16 pt-28 text-center md:pt-32">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center justify-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-[color:var(--gray)]">
            <li>
              <Link
                href="/"
                className="text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/tours"
                className="text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline"
              >
                Tours
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[color:var(--white)]">{tour.name}</li>
          </ol>
        </nav>

        <span className="mt-6 inline-flex items-center rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--bg)]/55 px-3 py-1.5 font-body text-xs font-medium tracking-wide text-[color:var(--white)] shadow-[0_8px_26px_rgba(59,201,219,0.16)]">
          Mare Boats Hvar · Private tour
        </span>

        <h1 className="mt-5 font-display text-[clamp(2.5rem,8vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-[color:var(--white)]">
          {tour.name}
        </h1>

        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-[color:var(--white)]/85 md:text-xl">
          {tour.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-pill border border-[color:var(--border)] bg-[color:var(--bg)]/60 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--white)]">
            Duration: {tour.duration}
          </span>
          <span className="rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)]">
            {tour.price}
          </span>
        </div>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <WhatsAppTrackedLink
            href={waUrl}
            label="tour_page"
            ctaText="Book on WhatsApp"
            tourName={tour.name}
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book on WhatsApp
          </WhatsAppTrackedLink>

          <Link
            href="/tours"
            className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
          >
            See All Tours
          </Link>
        </div>

        <ul
          aria-label="Tour highlights"
          className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-left md:grid-cols-3"
        >
          {tour.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/85 px-4 py-3 font-body text-sm text-[color:var(--white)] backdrop-blur-sm"
            >
              <span aria-hidden="true" className="mt-0.5 text-[color:var(--accent)]">
                ✓
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
