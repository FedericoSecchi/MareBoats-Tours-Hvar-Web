import type { Metadata } from 'next';
import { weatherPolicy, whatToBring } from '@/lib/guide-content';

export const metadata: Metadata = {
  title: 'Your MareBoats Tour | Pre-Tour Info',
  description:
    'Everything you need before your MareBoats tour: meeting point, timeline, what to bring and weather policy.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const WA_URL =
  "https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour";
const WA_WEATHER_URL =
  'https://wa.me/385951966734?text=Hi%20Nikola!%20Quick%20question%20about%20the%20weather%20for%20our%20tour.';

// Google Maps public embed — no API key required. Lat/lng of Hvar Harbour main dock.
const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=43.1729,16.4413&z=16&output=embed';
const MAP_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=43.1729,16.4413';

type TimelineStep = { time: string; title: string; detail: string };

const timeline: TimelineStep[] = [
  {
    time: '09:00',
    title: 'Meet at Hvar Harbour',
    detail: 'Main dock, next to the fuel station. Arrive 15 minutes early.',
  },
  {
    time: '09:15',
    title: 'Depart',
    detail: 'Briefing on board, then we head out.',
  },
  {
    time: '11:00',
    title: 'Blue Cave window',
    detail: 'Entrance €20–25 per person paid on site (cave dependent on sea conditions).',
  },
  {
    time: '13:00',
    title: 'Lunch stop',
    detail: 'Waterfront restaurant on the islands — cash or card.',
  },
  {
    time: '16:00',
    title: 'Back to Hvar',
    detail: 'Swim stops along the way. Home relaxed.',
  },
];

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
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

export default function PreTourPage() {
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
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Your Tour · Quick Read
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
            Your MareBoats Tour is Tomorrow! 🌊
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Here is everything you need to arrive on time and ready. Save this page — you will use
            it in the morning.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButton href={WA_URL}>Message Nikola</CtaButton>
          </div>
        </div>
      </section>

      {/* Meeting point */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Where to go" title="Meeting Point" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Hvar Harbour, main dock — next to the fuel station.{' '}
            <strong className="font-semibold text-[color:var(--white)]">
              Arrive 15 minutes early.
            </strong>{' '}
            If you get lost, call Nikola on WhatsApp.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
              <div className="aspect-[4/3] w-full md:aspect-[16/9]">
                <iframe
                  src={MAP_EMBED_SRC}
                  title="Hvar Harbour, main dock — meeting point"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <aside className="flex flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-8">
              <div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Address
                </p>
                <p className="mt-2 font-body text-base leading-relaxed text-[color:var(--white)]">
                  Hvar Harbour, main dock
                  <br />
                  Hvar, Croatia
                </p>
              </div>
              <div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Coordinates
                </p>
                <p className="mt-2 font-body text-sm text-[color:var(--gray)]">
                  43.1729° N, 16.4413° E
                </p>
              </div>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
              >
                Open in Google Maps
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="The day" title="Timeline" />
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Rough plan — real times adjust to weather and how the group feels.
          </p>

          <ol className="mt-8 flex flex-col">
            {timeline.map((step, i) => (
              <li key={step.time} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent)]/40 bg-[color:var(--bg)] font-display text-sm font-bold tracking-tight text-[color:var(--accent)]">
                    {step.time}
                  </span>
                  {i < timeline.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="w-px flex-1 bg-[color:var(--border)]"
                      style={{ minHeight: '2rem' }}
                    />
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-[color:var(--gray)] md:text-base">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to bring — visual checklist */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Pack list" title="What to Bring" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            Tap as you pack. Nothing is saved — this is just a quick visual check.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whatToBring.map((item) => (
              <li
                key={item.key}
                className="flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
              >
                <label className="flex w-full cursor-pointer items-start gap-4">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    aria-label={item.label}
                  />
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--bg)] transition-colors duration-200 peer-checked:border-[color:var(--accent)] peer-checked:bg-[color:var(--accent)] peer-focus-visible:ring-2 peer-focus-visible:ring-[color:var(--accent)]/60"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-sm font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-body text-sm leading-relaxed text-[color:var(--gray)]">
                      {item.detail}
                    </span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Weather policy — same alert box as /guide */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div
            role="note"
            aria-labelledby="pretour-weather-title"
            className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/50 font-display text-lg font-bold text-amber-300"
              >
                !
              </span>
              <div className="flex-1">
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                  Important
                </p>
                <h2
                  id="pretour-weather-title"
                  className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)] md:text-3xl"
                >
                  {weatherPolicy.title}
                </h2>
                <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--white)]/90">
                  {weatherPolicy.body}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {weatherPolicy.contactNote}
                </p>
                <div className="mt-6">
                  <CtaButton href={WA_WEATHER_URL}>Message Nikola on WhatsApp</CtaButton>
                </div>
              </div>
            </div>
          </div>
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
            See you soon
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Any Last Questions?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            WhatsApp Nikola directly: <span className="font-semibold text-[color:var(--white)]">+385 95 196 6734</span>
          </p>
          <div className="mt-7">
            <CtaButton href={WA_URL}>Open WhatsApp</CtaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
