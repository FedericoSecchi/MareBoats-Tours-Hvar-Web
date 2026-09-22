import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { buildFAQSchema } from '@/lib/schema';
import { ADDONS } from '@/lib/pricing';
import { Gallery } from './Gallery';

const HERO_VIDEO_SRC = '/videos/hvar-boat-tour-memories-loop.mp4';
const HERO_POSTER_SRC = '/videos/hvar-boat-tour-memories-poster.jpg';

const SITE = 'https://mareboatshvar.com';
const PAGE_URL = `${SITE}/hvar-boat-tour-photos/`;
const WA_MESSAGE = "Hi! I'd like to add Tour Memories to my private tour on [date].";
const WA_URL = `https://wa.me/385951966734?text=${encodeURIComponent(WA_MESSAGE)}`;

export const metadata: Metadata = {
  title: 'Tour Memories: Drone & Underwater Photos | MareBoats Hvar',
  description:
    'Add drone, underwater and on board photos to your private speedboat tour in Hvar. Up to 20 edited photos and a 90 second video. €200 per tour.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tour Memories: Drone & Underwater Photos | MareBoats Hvar',
    description:
      'Add drone, underwater and on board photos to your private speedboat tour in Hvar. Up to 20 edited photos and a 90 second video. €200 per tour.',
    url: PAGE_URL,
    type: 'website',
    locale: 'en_US',
    siteName: 'MareBoats Hvar',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'Is it available on shared tours?',
    answer: 'No, Tour Memories is available on private tours only.',
  },
  {
    question: 'How far in advance do I need to book it?',
    answer: 'At least one day before your tour, via WhatsApp.',
  },
  {
    question: 'When will I receive the photos and video?',
    answer: 'Within one week after your tour, via a download link.',
  },
  {
    question: 'Do we need to pose?',
    answer: 'No. We capture the day naturally while you swim, relax and explore.',
  },
  {
    question: 'Can you capture a proposal or a special moment?',
    answer: 'Yes. Tell us your plan when you book so we can be ready at the right moment.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tour Memories: Drone & Underwater Photos',
  description:
    'Add drone, underwater and on board photos to your private speedboat tour in Hvar. Up to 20 edited photos and a 90 second video, delivered within one week.',
  provider: { '@id': `${SITE}/#localbusiness` },
  areaServed: 'Hvar, Croatia',
  url: PAGE_URL,
  offers: {
    '@type': 'Offer',
    price: String(ADDONS.photoVideo),
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: PAGE_URL,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tour Memories: Drone & Underwater Photos',
      item: PAGE_URL,
    },
  ],
};

export default function HvarBoatTourPhotosPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={serviceSchema as Record<string, unknown>} />
      <JsonLd data={buildFAQSchema(faqs) as Record<string, unknown>} />
      <JsonLd data={breadcrumbSchema as Record<string, unknown>} />

      <section className="relative min-h-[70vh] w-full overflow-hidden md:min-h-[80vh]">
        {/* Video background — hidden when the user prefers reduced motion. */}
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER_SRC}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Poster fallback — shown when reduced motion is on, and when the video cannot play. */}
        <Image
          src={HERO_POSTER_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover motion-safe:hidden"
          aria-hidden="true"
        />

        {/* Overlay so the H1 reads on any frame. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-container flex-col justify-end px-4 pb-12 pt-24 md:min-h-[80vh] md:pb-16 md:pt-32">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Add-on for private tours
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl lg:text-6xl">
            Tour Memories: Drone &amp; Underwater Photos
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 font-body text-base leading-relaxed text-[color:var(--white)]/90 md:text-lg">
            <p>
              You enjoy the day, we take the photos. Add a photo and video session to your private
              tour and go home with drone shots of the boat, underwater moments in the coves and
              relaxed photos on board.
            </p>
            <p>
              These are holiday memories, not a professional shoot. No posing, no schedule, just
              your day at sea as it happened.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] p-6">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              What you get
            </h2>
            <ul className="mt-4 space-y-2 font-body text-[color:var(--gray)]">
              {[
                'Up to 20 edited photos',
                'Up to 90 seconds of edited video',
                'Drone, underwater and on board shots',
                'Delivered within one week via download link',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[color:var(--accent)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] p-6">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              Price
            </h2>
            <p className="mt-4 font-body text-[color:var(--gray)]">
              €{ADDONS.photoVideo} per tour. Private tours only.
            </p>
            <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              How to book
            </h2>
            <p className="mt-4 font-body text-[color:var(--gray)]">
              Message us on WhatsApp at least one day before your tour. Availability is limited, so
              we confirm by message.
            </p>
            <div className="mt-6">
              <WhatsAppTrackedLink
                href={WA_URL}
                label="tour_memories_page"
                ctaText="Ask on WhatsApp"
                className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
              >
                Ask on WhatsApp
              </WhatsAppTrackedLink>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <section className="bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            {faqs.map((faq) => (
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
    </main>
  );
}
