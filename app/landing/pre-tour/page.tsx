import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { whatToBring, weatherPolicy } from '@/lib/guide-content';
import { EXTRAS, ADDONS } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'What to Expect on a Hvar Boat Tour | MareBoats',
  description:
    'Everything you need before your MareBoats tour - meeting point, what to bring, and what the Adriatic is actually like.',
};

const WA_BASE = 'https://wa.me/385951966734?text=';
function waUrl(text: string) {
  return `${WA_BASE}${encodeURIComponent(text)}`;
}

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d16.4429617!3d43.1690147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1335810a66e18add%3A0x7bb6c12e07bdddde!2sMare%20Boats!5e0!3m2!1sen!2shr!4v1700000000000!5m2!1sen!2shr';

// ──────────────────────────────────────────────
// Tour details accordion data
// ──────────────────────────────────────────────
type TourRow = { label: string; value: string };
type TourDetail = { name: string; rows: TourRow[]; extraCosts: string; addOns?: string[] };

const tourDetails: TourDetail[] = [
  {
    name: '5 Islands, 4 Beaches & Blue Cave',
    rows: [
      { label: 'Meet', value: '09:45 at the MareBoats barrel, Hvar Harbour' },
      { label: 'Depart', value: '10:00' },
      { label: 'Duration', value: '7 hours - back around 17:00' },
      {
        label: 'Route',
        value:
          'Direct to Blue Cave (Biševo) first, then stops on Vis island, finishing at Pakleni Islands before returning to Hvar.',
      },
    ],
    extraCosts:
      `Blue Cave entrance €${EXTRAS.blueCave}/person · Green Cave entrance €${EXTRAS.greenCave}/person (optional) · Lunch not included - restaurants available at Pakleni or Palmizana (budget €15-25)`,
  },
  {
    name: 'Red Rocks & Pakleni Islands',
    rows: [
      { label: 'Meet', value: '15 minutes before departure' },
      {
        label: 'Depart',
        value: '09:00, 11:00 or 14:00 - Nikola will confirm your slot',
      },
      { label: 'Duration', value: '4 or 6 hours depending on your booking' },
      {
        label: 'Route',
        value:
          'Direct to Red Rocks (Crvena Stijena), then east Hvar coast beaches, finishing at Pakleni Islands where you can have lunch at a restaurant.',
      },
    ],
    extraCosts: 'Lunch not included - restaurants available at Pakleni',
    addOns: [
      `Underwater Scooter €${ADDONS.scooter}/unit · On request via WhatsApp`,
      `Photo & Video Shoot - €${ADDONS.photoVideo}. Drone, underwater and on-board. Full gallery after the tour. Book in advance via WhatsApp.`,
    ],
  },
  {
    name: 'Pakleni Islands Half Day',
    rows: [
      { label: 'Meet', value: '15 minutes before departure' },
      {
        label: 'Depart',
        value: '09:00, 11:00 or 14:00 - Nikola will confirm your slot',
      },
      { label: 'Duration', value: '3–4 hours' },
      { label: 'Route', value: 'Pakleni Islands - swimming stops at secluded bays' },
    ],
    extraCosts: 'None',
    addOns: [
      `Underwater Scooter €${ADDONS.scooter}/unit · On request via WhatsApp`,
      `Photo & Video Shoot - €${ADDONS.photoVideo}. Drone, underwater and on-board. Full gallery after the tour. Book in advance via WhatsApp.`,
    ],
  },
  {
    name: 'Sunset Cruise',
    rows: [
      { label: 'Meet', value: '19:15 at the MareBoats barrel, Hvar Harbour' },
      { label: 'Depart', value: '19:30' },
      { label: 'Duration', value: '2 hours - back around 21:30' },
      { label: 'Route', value: 'Pakleni Islands at golden hour' },
    ],
    extraCosts: 'None',
    addOns: [
      `Photo & Video Shoot - €${ADDONS.photoVideo}. Drone, underwater and on-board. Full gallery after the tour. Book in advance via WhatsApp.`,
    ],
  },
  {
    name: 'Private Boat Charter',
    rows: [
      { label: 'Meet', value: 'Arranged directly with Nikola' },
      { label: 'Depart', value: 'Flexible - your schedule' },
      { label: 'Duration', value: 'Full day' },
      { label: 'Route', value: 'You choose the destinations' },
    ],
    extraCosts: 'Fuel not included - discussed with Nikola at booking',
    addOns: [
      `Underwater Scooter €${ADDONS.scooter}/unit · On request via WhatsApp`,
      `Photo & Video Shoot - €${ADDONS.photoVideo}. Drone, underwater and on-board. Full gallery after the tour. Book in advance via WhatsApp.`,
    ],
  },
  {
    name: 'Split Airport Transfer',
    rows: [
      { label: 'Meet', value: 'On demand - Nikola will coordinate pickup time directly' },
      { label: 'Duration', value: '~45 minutes' },
    ],
    extraCosts: 'None',
  },
];

// ──────────────────────────────────────────────
// Adriatic facts
// ──────────────────────────────────────────────
const adriaticFacts = [
  {
    title: 'Calm in the morning. Windier by afternoon.',
    body: 'The Adriatic is generally flat before noon. The jugo (south wind) or bura (north wind) can pick up by early afternoon. We watch the forecast from the night before and adjust the route if needed.',
  },
  {
    title: 'Saltier than the ocean. Clearer too.',
    body: 'More buoyancy - good for all swimmers. Visibility around Hvar is typically 15–20 metres on a clear day. Bring a mask.',
  },
  {
    title: 'We leave at 10:00 for a reason.',
    body: 'Blue Cave entry is timed. Leaving at 10:00 from Hvar means we arrive before the ferries from Split start unloading tour groups. Earlier = less waiting, more time inside.',
  },
];

// ──────────────────────────────────────────────
// Shared class strings
// ──────────────────────────────────────────────
const secondaryBtnClass =
  'inline-flex items-center justify-center gap-2 rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]';

const filledBtnClass =
  'inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]';

const upsellBtnClass =
  'inline-flex items-center justify-center gap-2 rounded-pill border border-[color:var(--accent)] px-5 py-2.5 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]';

// ──────────────────────────────────────────────
// Local components
// ──────────────────────────────────────────────
function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ──────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────
export default function PreTourPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">

      {/* 1. HERO */}
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
          <h1 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] sm:text-4xl md:text-6xl">
            Your MareBoats tour is confirmed. 🎉
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Here&apos;s everything you need. Select your tour below to see your specific meeting
            time and what to expect.
          </p>
        </div>
      </section>

      {/* 1.5. INSTAGRAM */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:flex-row sm:items-center sm:gap-8 md:p-8">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
                strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </div>

            <div className="flex-1">
              <h2 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Follow us on Instagram
              </h2>
              <p className="mt-0.5 font-body text-sm font-semibold text-[color:var(--accent)]">
                @mareboats.hvar
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                Tag us during the tour and we&apos;ll share your photos and videos. We&apos;ll tag you too when we post from your day.
              </p>
            </div>

            <a
              href="https://www.instagram.com/mareboats.hvar"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryBtnClass}
            >
              Follow @mareboats.hvar
            </a>

          </div>
        </div>
      </section>

      {/* 2. YOUR TOUR DETAILS */}
      <section
        id="tour-details"
        className="scroll-mt-20 border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <header>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              What to expect
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Your tour details
            </h2>
          </header>

          <div className="mt-8 space-y-3">
            {tourDetails.map((tour) => (
              <details
                key={tour.name}
                className="group overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 [&::-webkit-details-marker]:hidden">
                  <span className="font-body text-sm font-semibold text-[color:var(--white)] md:text-base">
                    {tour.name}
                  </span>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-[color:var(--accent)] transition-transform duration-300 group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="border-l-[3px] border-[color:var(--accent)] bg-[color:var(--surface)] px-6 py-6">
                  <dl className="space-y-3">
                    {tour.rows.map((row) => (
                      <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                        <dt className="w-20 shrink-0 font-body text-sm font-medium text-[color:var(--accent)]">
                          {row.label}:
                        </dt>
                        <dd className="font-body text-sm leading-relaxed text-[color:var(--gray)]">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 border-t border-[color:var(--border)] pt-4 font-body text-xs leading-relaxed text-[color:var(--gray)]">
                    <span className="font-medium text-[color:var(--white)]/60">Extra costs: </span>
                    {tour.extraCosts}
                  </p>
                  {tour.addOns && tour.addOns.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {tour.addOns.map((addon) => (
                        <p key={addon} className="font-body text-xs leading-relaxed text-[color:var(--gray)]">
                          <span className="font-medium text-[color:var(--accent)]/80">+ </span>
                          {addon}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MEETING POINT */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <header>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Before you leave the hotel
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Where to find us
            </h2>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)]">
              <div className="aspect-[4/3] w-full md:aspect-[16/9]">
                <iframe
                  src={MAP_EMBED_SRC}
                  title="MareBoats barrel - Hvar Harbour main dock"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <aside className="flex flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6 md:p-8">
              <div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Address
                </p>
                <p className="mt-2 font-body text-base font-semibold leading-relaxed text-[color:var(--white)]">
                  MareBoats barrel
                  <br />
                  Hvar Harbour, main dock
                  <br />
                  <span className="font-normal text-[color:var(--gray)]">Hvar, Croatia</span>
                </p>
              </div>
              <p className="font-body text-sm leading-relaxed text-[color:var(--gray)]">
                3 minutes walk from the ferry terminal - head towards the cathedral. Look for the
                MareBoats wooden barrel on the harbour. If you get lost, message Nikola on WhatsApp.
              </p>
              <a
                href="https://maps.app.goo.gl/k84JNBQLvqgZunEX6"
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryBtnClass}
              >
                Open in Google Maps
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. UPSELL */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <header>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Optional add-ons
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              Make it better
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)]">
              Two add-ons available - just message us on WhatsApp.
            </p>
          </header>

          <div className="mt-10 flex flex-col gap-6 md:flex-row">

            {/* Card 1 - Underwater Scooter */}
            <article className="flex flex-1 flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  Underwater Scooter
                </h3>
                <span className="shrink-0 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold text-[color:var(--bg)]">
                  €{ADDONS.scooter} / unit
                </span>
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                Explore below the surface at your own pace. Up to 2 hours per unit - we bring it on
                board.
              </p>
              <p className="mt-2 font-body text-xs text-[color:var(--gray)]/70">
                Not available on Vis island tours.
              </p>
              <div className="mt-auto pt-6">
                <WhatsAppTrackedLink
                  href={waUrl(`Hi! I'd like to add an underwater scooter to my tour - €${ADDONS.scooter}/unit`)}
                  ctaText="add_scooter"
                  label="upsell"
                  className={upsellBtnClass}
                >
                  Add to my tour →
                </WhatsAppTrackedLink>
              </div>
            </article>

            {/* Card 2 - Photo & Video */}
            <article className="flex flex-1 flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  Photo &amp; Video Shoot
                </h3>
                <span className="shrink-0 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold text-[color:var(--bg)]">
                  €{ADDONS.photoVideo}
                </span>
              </div>
              <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                We capture the whole day - on board, underwater, and from above with the drone. Full
                gallery delivered after the tour.
              </p>
              <div className="mt-auto pt-6">
                <WhatsAppTrackedLink
                  href={waUrl(`Hi! I'd like to add photo & video shooting to my tour - €${ADDONS.photoVideo}`)}
                  ctaText="add_photo"
                  label="upsell"
                  className={upsellBtnClass}
                >
                  Add to my tour →
                </WhatsAppTrackedLink>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 5. WHAT TO BRING */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <header>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Pack list
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              What to bring
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
              Tap as you pack. Nothing is saved - this is just a quick visual check.
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whatToBring.map((item) => (
              <li
                key={item.key}
                className="flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-5"
              >
                <label className="flex w-full cursor-pointer items-start gap-4">
                  <input type="checkbox" className="peer sr-only" aria-label={item.label} />
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

      {/* 6. WHAT THE ADRIATIC IS ACTUALLY LIKE */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <header>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Know before you go
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
              What the Adriatic is actually like
            </h2>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {adriaticFacts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
              >
                <h3 className="font-display text-base font-bold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)]">
                  {fact.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WEATHER POLICY */}
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
                  <WhatsAppTrackedLink
                    href={waUrl('Hi Nikola! Quick question about the weather for our tour.')}
                    ctaText="weather_question"
                    label="weather_policy"
                    className={filledBtnClass}
                  >
                    <WhatsAppIcon />
                    Message Nikola on WhatsApp
                  </WhatsAppTrackedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GUIDE LINK BLOCK */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-[color:var(--gray)]">
            Want to know Hvar better before you arrive?
          </p>
          <Link href="/guide" className={`mt-6 ${secondaryBtnClass}`}>
            Read the Hvar Guide →
          </Link>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            We&apos;re here
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Questions before the tour?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Message Nikola directly - he replies fast.
          </p>
          <div className="mt-7">
            <WhatsAppTrackedLink
              href={waUrl('Hi Nikola! I have a question about my upcoming MareBoats tour.')}
              ctaText="pre_tour_question"
              label="final_cta"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Message Nikola on WhatsApp
            </WhatsAppTrackedLink>
          </div>
        </div>
      </section>

    </main>
  );
}
