import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { FAQJsonLd } from '@/components/ui/JsonLd';
import {
  guideFaqs,
  whatToBring,
  onBoardRules,
  dayOnWaterCopy,
  dayOnWaterPoints,
  rentingIntro,
  rentingRules,
  safetyPoints,
  whereWeGoIntro,
  whereWeGoMaps,
  restaurantsHvarTown,
  restaurantsHvarTownIntro,
  restaurantsOnWater,
  restaurantsOnWaterIntro,
  hotelPartners,
  hotelPartnersIntro,
} from '@/lib/guide-content';

export const metadata: Metadata = generateSEO({
  title: 'Hvar Boat Tour Guide — What to Know Before You Go',
  description:
    'Everything you need for a private boat tour in Hvar. What to bring, where to eat, where we go, safety rules, snorkeling tips, and local restaurant recommendations.',
  keywords: [
    'hvar boat tour guide',
    'what to bring boat tour hvar',
    'rent speedboat hvar without skipper',
    'boat rental hvar rules',
    'water taxi hvar yacht',
    'where to eat hvar by boat',
    'hvar harbour meeting point',
    'pakleni islands restaurants',
    'blue cave hvar tips',
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
            Everything you need for a private boat tour in Hvar — what to bring, where we go, where
            to eat and what to know before you sail with us.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButton>Book on WhatsApp</CtaButton>
          </div>
        </div>
      </section>

      {/* Section 1 — Your Day on the Water */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <SectionHeading eyebrow="The day, told straight" title="Your Day on the Water" />
          <div>
            <p className="font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
              {dayOnWaterCopy}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dayOnWaterPoints.map((point) => (
                <li
                  key={point.title}
                  className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
                >
                  <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {point.title}
                  </h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {point.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 — What to Bring */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Pack list" title="What to Bring" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Essentials
              </h3>
              <ul className="mt-4 flex-1 space-y-2">
                {whatToBring.essentials.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-body text-sm leading-relaxed text-[color:var(--gray)]"
                  >
                    <span aria-hidden="true" className="mt-1 text-[color:var(--accent)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Optional but recommended
              </h3>
              <ul className="mt-4 flex-1 space-y-2">
                {whatToBring.optional.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-body text-sm leading-relaxed text-[color:var(--gray)]"
                  >
                    <span aria-hidden="true" className="mt-1 text-[color:var(--accent)]">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Drinks &amp; food
              </h3>
              <ul className="mt-4 flex-1 space-y-3">
                {whatToBring.drinksAndFood.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm leading-relaxed text-[color:var(--gray)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — On Board Rules */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="On board" title="On Board Rules" />
          <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {onBoardRules.map((rule) => (
              <li
                key={rule}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-4 font-body text-sm leading-relaxed text-[color:var(--white)]"
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4 — Renting Without a Skipper */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading
            eyebrow="If you have a licence"
            title="Renting Without a Skipper — What You Need to Know"
          />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            {rentingIntro}
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {rentingRules.map((rule) => (
              <li
                key={rule.title}
                className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-5"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  {rule.title}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {rule.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 — Safety */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <SectionHeading eyebrow="Safety first" title="On the Boat" />
          <ul className="space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            {safetyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 6 — Where We Go (3 maps) */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="On the chart" title="Where We Go" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            {whereWeGoIntro}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {whereWeGoMaps.map((map) => (
              <article
                key={map.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60"
              >
                <div className="aspect-video w-full bg-[color:var(--bg)]">
                  {map.embedUrl ? (
                    <iframe
                      src={map.embedUrl}
                      title={`MareBoats — ${map.title} map`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0"
                    />
                  ) : (
                    <a
                      href={map.fallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full w-full items-center justify-center bg-[color:var(--bg)] p-6 text-center transition-colors duration-300 hover:bg-[color:var(--bg)]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
                    >
                      <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        Map coming soon · open in Google Maps →
                      </span>
                    </a>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {map.title}
                  </h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {map.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Where to Eat */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container space-y-12">
          <div>
            <SectionHeading eyebrow="Local picks" title="Restaurants in Hvar Town" />
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
              {restaurantsHvarTownIntro}
            </p>
            {restaurantsHvarTown.length > 0 ? (
              <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {restaurantsHvarTown.map((r) => (
                  <li
                    key={r.name}
                    className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
                  >
                    <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                      {r.name}
                    </h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                      {r.description}
                    </p>
                    {r.perk && (
                      <span className="mt-4 inline-flex w-fit items-center rounded-pill border border-[color:var(--accent)]/60 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)]">
                        MareBoats Partner — {r.perk}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <SectionHeading eyebrow="Reachable by boat" title="Restaurants on the Water" />
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
              {restaurantsOnWaterIntro}
            </p>
            {restaurantsOnWater.length > 0 ? (
              <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {restaurantsOnWater.map((r) => (
                  <li
                    key={r.name}
                    className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
                  >
                    <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                      {r.name}
                    </h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                      {r.description}
                    </p>
                    {r.perk && (
                      <span className="mt-4 inline-flex w-fit items-center rounded-pill border border-[color:var(--accent)]/60 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)]">
                        MareBoats Partner — {r.perk}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <p className="font-body text-sm text-[color:var(--gray)]">
            Most restaurants accept cards, but they genuinely prefer cash. Bring some.
          </p>
        </div>
      </section>

      {/* Section 8 — Hotel Partners */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading
            eyebrow="Arriving by boat?"
            title="We Work With Local Hotels"
          />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            {hotelPartnersIntro}
          </p>
          {hotelPartners.length > 0 ? (
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {hotelPartners.map((hotel) => (
                <li
                  key={hotel.name}
                  className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6"
                >
                  <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {hotel.name}
                  </h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {hotel.description}
                  </p>
                  {hotel.hasPrivatePier && (
                    <span className="mt-4 inline-flex w-fit items-center rounded-pill border border-[color:var(--accent)]/60 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)]">
                      Has Private Pier
                    </span>
                  )}
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-pill bg-[color:var(--accent)] px-5 py-2.5 font-body text-sm font-semibold text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
                  >
                    Ask on WhatsApp
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6">
              <p className="font-body text-sm leading-relaxed text-[color:var(--gray)]">
                Hotel partner details coming soon. In the meantime, message us on WhatsApp with the
                name of your hotel and we will tell you the easiest way to start your tour.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section 9 — Meeting Point */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-container gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <SectionHeading eyebrow="Where we meet" title="Hvar Harbour" />
          <div>
            <p className="font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
              We meet at Hvar Harbour, next to the fuel station. It is the easiest spot to find —
              you will see the boats lined up. Please arrive 10 minutes early.
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
                <span className="text-[color:var(--white)]">Languages on board (Fede):</span>{' '}
                English, Croatian, Italian, Spanish
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

      {/* Section 10 — FAQ */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Common questions" title="Quick FAQ" />
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
            Ready when you are
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Pick a Date. We Handle the Rest.
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Send your date, group size and the tour you want. We reply within the hour during the
            season.
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
