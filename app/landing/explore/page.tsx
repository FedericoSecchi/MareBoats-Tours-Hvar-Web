import type { Metadata } from 'next';
import Image from 'next/image';
import { generateSEO } from '@/lib/seo';
import { featuredTours, type TourRecord } from '@/lib/tours-data';

export const metadata: Metadata = generateSEO({
  title: 'Private Boat Tours Hvar | Blue Cave & Island Tours',
  description:
    'Choose your day on the Adriatic — Blue Cave, Pakleni Islands, sunset cruise or private charter. Private boat from Hvar Harbour, book on WhatsApp.',
  keywords: [
    'boat tour hvar',
    'private boat hvar',
    'blue cave tour',
    'pakleni islands boat',
    'hvar boat excursion',
  ],
  slug: 'landing/explore',
});

const WA_URL =
  "https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour";

function waUrlFor(tourName: string) {
  return `https://wa.me/385951966734?text=${encodeURIComponent(
    `Hi! I'd like to book the ${tourName}.`,
  )}`;
}

type Review = { quote: string; author: string; origin: string };

const reviews: Review[] = [
  {
    quote:
      'Best day of our Croatia trip. Captain took us to quiet coves the group boats skip. Blue Cave was unreal.',
    author: 'Sarah M.',
    origin: 'United Kingdom',
  },
  {
    quote:
      'Private, relaxed, and the drone video they sent us after is the best souvenir from the holiday.',
    author: 'Marco & Julia',
    origin: 'Germany',
  },
  {
    quote:
      'Six of us, one boat, one full day. Snorkeling, lunch, Pakleni Islands. Already planning next summer.',
    author: 'The Johnson Family',
    origin: 'United States',
  },
];

function Stars() {
  return (
    <span className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 text-[color:var(--accent)]"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TourCard({ tour }: { tour: TourRecord }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={tour.images[0].src}
          alt={tour.images[0].alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span className="absolute right-3 top-3 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_6px_16px_rgba(59,201,219,0.35)]">
          {tour.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
            {tour.name}
          </h3>
          <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
            {tour.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <span className="font-body text-base font-semibold text-[color:var(--accent)]">
            {tour.price}
          </span>
          <a
            href={waUrlFor(tour.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
          >
            <WhatsAppIcon />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default function LandingExplorePage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-20 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, rgba(59,201,219,0.18) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--bg)]/55 px-3 py-1.5 font-body text-xs font-medium tracking-wide text-[color:var(--white)] shadow-[0_8px_26px_rgba(59,201,219,0.16)]">
            ⭐ 100+ happy guests
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
            Choose Your Adventure
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Four private boat tours from Hvar Harbour. Local captain, snorkeling gear and drone
            video on every trip. Pick your day — we handle the rest.
          </p>
        </div>
      </section>

      {/* Tours grid */}
      <section className="bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredTours.map((tour) => (
              <li key={tour.slug} className="flex">
                <TourCard tour={tour} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden border-y border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.14) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Ready when you are
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            When Are You Visiting Hvar?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Send your date and group size on WhatsApp. We confirm the same day during the season.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book on WhatsApp
          </a>

          <p className="mt-4 font-body text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
            We reply within 1 hour · Daily 8:00–20:00 (May–September)
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <div className="mb-10 max-w-2xl">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Reviews
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              What Our Guests Say
            </h2>
          </div>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <li
                key={r.author}
                className="relative flex h-full flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-7"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-[60px] font-extrabold leading-none text-[color:var(--accent)]"
                >
                  &ldquo;
                </span>
                <p className="-mt-6 flex-1 font-body text-base leading-relaxed text-[color:var(--white)]">
                  {r.quote}
                </p>
                <div className="mt-auto flex flex-col gap-2 border-t border-[color:var(--border)] pt-4">
                  <Stars />
                  <p className="font-body text-sm font-semibold text-[color:var(--white)]">
                    {r.author}
                    <span className="font-normal text-[color:var(--gray)]"> · {r.origin}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
