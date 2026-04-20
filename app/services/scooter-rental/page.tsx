import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Scooter Rental Hvar | €50/day from Hvar Harbour',
  description:
    'Rent a scooter in Hvar from €30. Pick up at Hvar Harbour — same spot as the boat tours. 6 scooters available. Explore Hvar Town, Stari Grad, Jelsa and the lavender fields at your own pace.',
  keywords: [
    'scooter rental hvar',
    'hvar scooter hire',
    'rent scooter hvar croatia',
    'hvar moped rental',
    'scooter hvar island',
  ],
  slug: 'services/scooter-rental',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20rent%20a%20scooter%20in%20Hvar.';

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Scooter Rental Hvar',
  description:
    'Scooter rental from Hvar Harbour, Croatia. 6 scooters available. Pick up at the same spot as Mare Boats Hvar boat tours. Full day and half day options.',
  brand: { '@type': 'Brand', name: 'Mare Boats Hvar' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '30',
    highPrice: '50',
    offerCount: 3,
    availability: 'https://schema.org/InStock',
    url: 'https://mareboatshvar.com/services/scooter-rental/',
  },
};

const pricing = [
  { price: '€50', label: 'Full day', note: 'Best value for a full-island loop' },
  { price: '€40', label: 'Half day — afternoon', note: 'Pick up after 13:00' },
  { price: '€30', label: 'Half day — morning', note: 'Pick up 09:00–13:00' },
];

const routes = [
  {
    title: 'Hvar Town → Stari Grad',
    desc: 'Classic coastal loop over the ridge. 30 min each way, stunning viewpoints.',
  },
  {
    title: 'Jelsa & north coast',
    desc: 'Calmer side of the island — villages, small beaches, easy riding.',
  },
  {
    title: 'Lavender fields',
    desc: 'June–July: purple hillsides inland. Best light early morning or late afternoon.',
  },
  {
    title: 'Sveta Nedjelja',
    desc: 'South-coast cliffs and winery villages — serious curves, ride only if confident.',
  },
];

const rules = [
  'Valid driver\u2019s license required (car licence accepted for 50cc scooters, motorcycle licence for larger engines).',
  'Helmets are included for every rider — please wear them, local police enforce this.',
  'Fuel is paid by the renter. Scooters are handed out with a starter tank; return with a similar level.',
  'No alcohol before or during riding — zero tolerance on Croatian roads.',
  'Report any scratches or mechanical issues before you leave the harbour.',
  'Return on time so the next guest is not delayed.',
];

export default function ScooterRentalPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={productSchema as Record<string, unknown>} />

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
            Explore Hvar by land
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
            Scooter Rental Hvar
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            From €30. 6 scooters available. Pick up at Hvar Harbour — the same spot as our boat
            tours. Hvar Town, Stari Grad, Jelsa and the lavender fields at your own pace.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book on WhatsApp
            </a>
            <Link
              href="/landing/explore"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              See Boat Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Transparent pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Daily & Half-Day Rates
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)] p-6"
              >
                <p className="font-display text-4xl font-bold text-[color:var(--accent)]">
                  {p.price}
                </p>
                <p className="mt-2 font-body text-sm font-semibold text-[color:var(--white)]">
                  {p.label}
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 font-body text-sm text-[color:var(--gray)]">
            Fuel and any road tolls are paid separately. Security deposit returned when the scooter
            comes back in the same condition.
          </p>
        </div>
      </section>

      {/* Where to ride */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Where to ride
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Routes We Recommend
          </h2>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {routes.map((r) => (
              <li
                key={r.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
              >
                <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  {r.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {r.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rules */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Before you ride
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            The House Rules
          </h2>

          <ul className="mt-6 flex flex-col gap-3">
            {rules.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 font-body text-sm leading-relaxed text-[color:var(--white)] md:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]"
                />
                <span>{r}</span>
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
            Ready to roll
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Book a Scooter on WhatsApp
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Send your dates and riding experience. Only 6 scooters — in July and August, book at
            least a couple of days ahead.
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
        </div>
      </section>
    </main>
  );
}
