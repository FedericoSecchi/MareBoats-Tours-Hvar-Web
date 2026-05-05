import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

export const metadata: Metadata = generateSEO({
  title: 'Things to Do in Hvar Town | Local Guide by MareBoats',
  description:
    "Beyond the sea — our skippers' guide to the best restaurants, beaches, history, and evening activities in Hvar Town, Croatia.",
  keywords: [
    'things to do in hvar',
    'where to eat hvar',
    'best restaurants hvar town',
    'hvar town guide',
    'hvar attractions',
    'what to see hvar',
    'hvar local tips',
    'hvar evening activities',
  ],
  slug: 'explore',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%E2%80%99d%20like%20to%20book%20a%20boat%20tour%20from%20Hvar.';

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────
const RESTAURANTS = [
  {
    name: 'Konoba Menego',
    favorite: true,
    type: 'Traditional Dalmatian · Hvar Old Town',
    description:
      "Tucked into the stone streets above the main square, Menego has been serving traditional Dalmatian food for decades. The house charcuterie board — prosciutto, sheep's cheese, olives — is the best on the island. No frills, no tourists who haven't been told about it, terrace views of the harbor.",
    mustOrder: 'Dalmatian platter, peka (order in advance), local wine',
    note: 'Go at lunch. Dinner fills up with yacht crowd.',
  },
  {
    name: 'Gariful',
    favorite: false,
    type: 'Seafood · Hvar harbor waterfront',
    description:
      'The best fish restaurant on the waterfront, right on the harbor. Premium pricing, premium quality. Fresh daily catch, shellfish, and a wine list that takes the region seriously. Reserve a table on the water terrace for sunset.',
    mustOrder: 'Daily fresh catch, shellfish plate',
    note: 'Worth the price once. Sit on the terrace, not inside.',
  },
  {
    name: 'Hula Hula Beach Bar',
    favorite: false,
    type: 'Cocktails & sunset · Hvar coast',
    description:
      "Not a restaurant — a ritual. Hula Hula is the unofficial sunset spot of Hvar. Perched on rocks above the sea west of town, it fills up from 5pm with a crowd that's there for exactly one thing: watching the sun drop into the Adriatic with a drink in hand. No food worth noting. Come for the sunset.",
    mustOrder: "Whatever's in a glass",
    note: 'Get there by 5:30 for a good spot. Sunset is usually around 8:30 in July.',
  },
  {
    name: 'Mizarola',
    favorite: false,
    type: 'Pizza & casual · Hvar Old Town',
    description:
      'The answer to "where do we eat when we just want something good and not expensive." Solid pizza, casual atmosphere, central location. Good for groups after a long day at sea.',
    mustOrder: 'Pizza, fresh pasta',
    note: 'No reservations needed. Go early or wait.',
  },
];

const SIGHTS = [
  {
    name: 'Hvar Fortress (Španjola)',
    entry: '~€4',
    time: '1–2 hours',
    seasonal: false,
    description:
      "The fortress above Hvar Town was built in the 13th century and expanded by the Venetians in the 16th. Climb up through the old town streets or take the path from the harbor — 20 minutes either way. The view from the top is the best panorama of the Pakleni Islands and the surrounding sea. Inside there's a small wine bar.",
  },
  {
    name: 'Hvar Arsenal & Public Theatre (1612)',
    entry: '~€5',
    time: '30–45 min',
    seasonal: false,
    description:
      'The Arsenal was built in the 14th century as a Venetian shipyard for the war galley. The theater on the upper floor, opened in 1612, is one of the oldest public theaters in Europe — built when Shakespeare was still alive. The interior has a neo-baroque auditorium with 33 boxes on two floors, restored to its 19th century appearance.',
  },
  {
    name: 'Kino Mediteran — Open Air Cinema',
    entry: '~€5',
    time: '2 hours',
    seasonal: true,
    description:
      'Summer evenings in Hvar Town include outdoor film screenings at the Veneranda fortress, overlooking the sea. Current films, bilingual subtitles, ~5€ entry. Starts at 9pm when dark enough. One of the best things to do in Hvar that nobody has on their itinerary.',
  },
  {
    name: "Hvar Cathedral of St. Stephen",
    entry: 'Free',
    time: '15–20 min',
    seasonal: false,
    description:
      "The main square's cathedral, built between the 16th and 17th centuries on the foundations of a Benedictine monastery. The bell tower is 16th century. Simple interior, free entry. The square in front — Trg svetog Stjepana — is the longest in Dalmatia.",
  },
  {
    name: 'Franciscan Monastery & Museum',
    entry: '~€4',
    time: '30–45 min',
    seasonal: false,
    description:
      "Located at the east end of the harbor, this 15th-century monastery has one of Croatia's finest collections of Greek and Roman artifacts, historic maps, and a painting of The Last Supper that's over 8 meters wide. The cloister garden is one of the quietest places in Hvar.",
  },
];

// ──────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────
function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <header className="max-w-2xl">
      <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
        {intro}
      </p>
    </header>
  );
}

export default function ExplorePage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)] px-4 py-20 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{ backgroundImage: 'radial-gradient(ellipse at top, rgba(59,201,219,0.18) 0%, transparent 60%)' }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Hvar Town
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
            Things to Do in Hvar Town
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Our skippers&apos; guide to what&apos;s worth your time on land — restaurants, history, beaches and evening spots. No tourist traps.
          </p>
        </div>
      </section>

      {/* Where to Eat */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading
            eyebrow="Food & drink"
            title="Where to Eat in Hvar Town"
            intro="These aren't the places on the tourist maps. They're where the locals eat."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {RESTAURANTS.map((r) => (
              <li
                key={r.name}
                className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] py-6 pl-5 pr-6"
                style={{ borderLeftWidth: 3, borderLeftColor: 'var(--accent)' }}
              >
                <div>
                  <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)]">
                    {r.name}
                  </h3>
                  {r.favorite && (
                    <span className="mt-1 inline-block rounded-pill bg-[color:var(--accent)]/15 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-[color:var(--accent)]">
                      ⭐ Most Local
                    </span>
                  )}
                  <p className="mt-1 font-body text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--accent)]/70">
                    {r.type}
                  </p>
                </div>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {r.description}
                </p>
                <div className="mt-4 space-y-1.5">
                  <p className="font-body text-xs text-[color:var(--white)]">
                    <span className="font-semibold">Must order:</span> {r.mustOrder}
                  </p>
                  <p className="font-body text-xs italic text-[color:var(--gray)]">
                    &ldquo;{r.note}&rdquo;
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What to See */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading
            eyebrow="History & culture"
            title="What to See in Hvar Town"
            intro="Hvar Town is a UNESCO-level historic center. Most tourists miss half of it."
          />
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SIGHTS.map((s) => (
              <li
                key={s.name}
                className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6"
              >
                <h3 className="font-display text-base font-bold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)]">
                  {s.name}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-2.5 py-0.5 font-body text-[11px] font-semibold text-[color:var(--accent)]">
                    🎫 {s.entry}
                  </span>
                  <span className="rounded-pill border border-[color:var(--border)] px-2.5 py-0.5 font-body text-[11px] font-semibold text-[color:var(--gray)]">
                    ⏱ {s.time}
                  </span>
                  {s.seasonal && (
                    <span className="rounded-pill border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 font-body text-[11px] font-semibold text-amber-300">
                      📅 Summer only
                    </span>
                  )}
                </div>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {s.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
        style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)' }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            From the sea
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Want to see all of this from the water?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            The best coves and restaurants are only reachable by boat. Pick your tour and we take you there — private boat, local captain.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppTrackedLink
              href={WA_URL}
              label="explore_cta"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book a tour on WhatsApp
            </WhatsAppTrackedLink>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98] md:text-base"
            >
              See all tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
