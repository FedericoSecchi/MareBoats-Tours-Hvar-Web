import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { FAQJsonLd } from '@/components/ui/JsonLd';
import {
  guideFaqs,
  whatToBring,
  onBoardRules,
  swimmingSpots,
  restaurants,
} from '@/lib/guide-content';

export const metadata: Metadata = generateSEO({
  title: 'Your Hvar Boat Tour Guide | What to Bring, Swim Spots & Tips',
  description:
    'Everything you need to know before your private boat tour in Hvar. What to bring, where we swim, weather policy and local restaurant tips from Mare Boats Hvar.',
  keywords: [
    'what to bring boat tour hvar',
    'swimming blue cave croatia',
    'hvar boat tour tips',
    'weather policy boat charter',
    'hvar harbour meeting point',
    'restaurants hvar harbour',
    'sea sickness boat tour tips',
  ],
  slug: 'guide',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20boat%20tour%20from%20Hvar.';
const MAPS_URL = 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA';

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <header>
      <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
        {title}
      </h2>
    </header>
  );
}

export default function GuidePage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <FAQJsonLd faqs={guideFaqs} />

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
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Guest Guide
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
            Your Hvar Boat Tour Guide
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            What to bring, where we swim, weather policy and local restaurant tips. Read this before
            you sail with us — it makes the day better.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButton>Book on WhatsApp</CtaButton>
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Pack list" title="What to Bring" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            Keep it light. We provide snorkeling gear, towels and bottled water on board.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {whatToBring.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 font-body text-sm text-[color:var(--white)]"
              >
                <span aria-hidden="true" className="mt-0.5 text-[color:var(--accent)]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Swimming & snorkeling */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <SectionHeading eyebrow="On the water" title="Swimming & Snorkeling" />
          <div>
            <p className="font-body text-base leading-relaxed text-[color:var(--gray)]">
              Yes, you will get wet. Most of the day is built around swim stops. Here is where we
              normally go and what to expect at each.
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {swimmingSpots.map((spot) => (
                <li
                  key={spot.name}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/50 p-5"
                >
                  <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {spot.name}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {spot.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* On board rules */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="On board" title="A Few Simple Rules" />
          <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {onBoardRules.map((rule) => (
              <li
                key={rule}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 font-body text-sm text-[color:var(--white)]"
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Safety */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <SectionHeading eyebrow="Safety first" title="On the Boat" />
          <ul className="space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <li>
              VHF radio, GPS and a full safety kit on board. Captain checks weather and sea
              conditions before every trip.
            </li>
            <li>Life jackets in adult and child sizes, ready for everyone on board.</li>
            <li>
              Captain&apos;s decision is final on routes and weather. We choose sheltered bays when
              the wind picks up.
            </li>
            <li>Boat is licensed and insured under Croatian maritime regulations.</li>
          </ul>
        </div>
      </section>

      {/* Weather policy */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="If the wind picks up" title="Weather Policy" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Strong wind (Bura or Jugo)
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                If the captain decides the sea is unsafe, we reschedule for another day or refund
                your booking — your choice. We do not run tours in unsafe conditions.
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Mixed weather
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                If conditions are usable but the original route is not safe, we adjust on the day —
                more sheltered bays, shorter crossings, same time on the water.
              </p>
            </div>
          </div>
          <p className="mt-6 font-body text-sm text-[color:var(--gray)]">
            We message you on WhatsApp the evening before your tour with a final confirmation and
            any weather notes.
          </p>
        </div>
      </section>

      {/* Meeting point */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <SectionHeading eyebrow="Where we meet" title="Hvar Harbour" />
          <div>
            <p className="font-body text-base leading-relaxed text-[color:var(--gray)]">
              We meet at Hvar Harbour, in front of the main pier. The exact pier number is confirmed
              by WhatsApp the evening before your tour. Please arrive 10 minutes early.
            </p>
            <ul className="mt-6 space-y-2 font-body text-sm text-[color:var(--gray)]">
              <li>
                <span className="text-[color:var(--white)]">Address:</span> Port of Hvar, Hvar 21450,
                Croatia
              </li>
              <li>
                <span className="text-[color:var(--white)]">Coordinates:</span> 43.1729° N,
                16.4413° E
              </li>
              <li>
                <span className="text-[color:var(--white)]">Languages on board:</span> English,
                Croatian, Italian, Spanish
              </li>
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-pill border border-[color:var(--accent)] px-5 py-2.5 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Where to eat */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Local picks" title="Where to Eat in Hvar" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            A short list of places we send guests to before or after a tour. Walking distance from
            the harbour unless noted.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {restaurants.map((r) => (
              <li
                key={r.name}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
              >
                <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  {r.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {r.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Quick FAQ" title="Common Questions" />
          <ul className="mt-8 space-y-4">
            {guideFaqs.map((faq) => (
              <li
                key={faq.question}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/50 p-5"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)] md:text-base">
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
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
            Ready?
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Message Us on WhatsApp
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Send your date, group size and the tour you want. We reply fast — usually within the
            hour during the season.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaButton>Book on WhatsApp</CtaButton>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              See All Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
