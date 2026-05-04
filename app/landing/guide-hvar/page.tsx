import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { mapsData } from '@/lib/maps-data';

export const metadata: Metadata = generateSEO({
  title: 'Hvar Travel Guide | Restaurants, Beaches & Local Tips',
  description:
    "Things to do in Hvar, Croatia: where to eat, beaches, beach clubs, nightlife and local tips from a skipper who lives here.",
  keywords: [
    'hvar croatia guide',
    'things to do hvar',
    'hvar restaurants',
    'hvar beaches',
    'hvar travel tips',
  ],
  slug: 'landing/guide-hvar',
});

const INSTAGRAM_URL = 'https://www.instagram.com/mareboats.hvar/';

// ──────────────────────────────────────────────
// Content — placeholder where Nikola will fill in
// ──────────────────────────────────────────────
type ThingToDo = { title: string; detail: string; icon: 'oldTown' | 'beach' | 'beachClub' | 'nightlife' };

const thingsToDo: ThingToDo[] = [
  {
    title: 'Old Town & Fortress',
    detail:
      'Walk up to Fortica Fortress at sunset — the best view of Hvar town and Pakleni Islands. Stop at the cathedral on the way down.',
    icon: 'oldTown',
  },
  {
    title: 'Pakleni Islands Beaches',
    detail:
      'Palmižana, Stipanska and the quieter coves are a short water-taxi away. Turquoise water, pine trees, a few good lunch spots.',
    icon: 'beach',
  },
  {
    title: 'Beach Clubs',
    detail:
      'Hula Hula for sunset drinks, Laganini on the islands for a long lunch. Both are reachable by boat.',
    icon: 'beachClub',
  },
  {
    title: 'Nightlife',
    detail:
      'Carpe Diem on the seafront, Kiva Bar in the narrow streets of the Old Town. Weekends in season fill up fast.',
    icon: 'nightlife',
  },
];

function ThingIcon({ name }: { name: ThingToDo['icon'] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'oldTown':
      return (
        <svg {...common}>
          <path d="M4 20V10l8-5 8 5v10" />
          <path d="M9 20v-6h6v6" />
          <path d="M4 20h16" />
        </svg>
      );
    case 'beach':
      return (
        <svg {...common}>
          <circle cx="17" cy="7" r="3" />
          <path d="M3 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          <path d="M17 10v8" />
        </svg>
      );
    case 'beachClub':
      return (
        <svg {...common}>
          <path d="M6 10h12l-1.5 4a4 4 0 0 1-9 0L6 10Z" />
          <path d="M12 14v6" />
          <path d="M9 20h6" />
          <path d="M8 7l2-3 4 1 2-2" />
        </svg>
      );
    case 'nightlife':
      return (
        <svg {...common}>
          <path d="M20 14a8 8 0 1 1-10-10 6 6 0 0 0 10 10Z" />
          <path d="M15 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
        </svg>
      );
  }
}

type Tip = { label: string; value: string };

const localTips: Tip[] = [
  {
    label: 'Currency',
    value: 'Euro (€). Most places take cards — small restaurants and beach bars prefer cash.',
  },
  {
    label: 'High-season hours',
    value: 'Restaurants 12:00–23:00. Most shops 09:00–21:00. Many venues close in winter.',
  },
  {
    label: 'Emergency',
    value: 'Dial 112 (all emergencies). Coast guard 195. The harbour master is on VHF channel 16.',
  },
  {
    label: 'Pharmacy & ATM',
    value: 'Multiple pharmacies and ATMs around the main square (Pjaca) in Hvar town.',
  },
  {
    label: 'Tap water',
    value: 'Safe to drink across Hvar. No need to buy bottled water.',
  },
  {
    label: 'Ferries & taxis',
    value: 'Ferry terminal is a 5-minute walk from the main dock. For yacht pickups, message us on WhatsApp.',
  },
];

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

function InstagramIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function LandingGuideHvarPage() {
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
            Local guide
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
            You Have Time in Hvar? 🏝️
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Must-see spots, where to eat, beaches worth the walk and local tips from a skipper who
            lives here. Short, honest, no tourist traps.
          </p>
        </div>
      </section>

      {/* Where to eat */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="On the plate" title="Where to Eat" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Restaurants we often stop at in Hvar town and on the islands — no official deal, just
            places we like and keep coming back to.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl h-[280px] md:h-[400px]">
            <iframe
              src={mapsData.whereToEat.embedUrl}
              title={mapsData.whereToEat.title}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* What to do */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="What to do" title="Old Town, Beaches & Nightlife" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {thingsToDo.map((t) => (
              <li
                key={t.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                  <ThingIcon name={t.icon} />
                </span>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {t.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {t.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local tips */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Good to know" title="Local Tips" />
          <dl className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {localTips.map((tip) => (
              <div
                key={tip.label}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
              >
                <dt className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  {tip.label}
                </dt>
                <dd className="mt-2 font-body text-sm leading-relaxed text-[color:var(--white)]">
                  {tip.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Map */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="On the chart" title="Hvar Local Map" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Old Town, beaches, beach clubs, the local market, ATMs and the pharmacy — everything
            you might need in one place.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl h-[280px] md:h-[400px]">
            <iframe
              src={mapsData.localTips.embedUrl}
              title={mapsData.localTips.title}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Primary CTA — explore tours */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.14) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            From the sea
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Want to Explore from the Sea?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            You&apos;ve seen Hvar on land. The best coves and restaurants are only reachable by
            boat. Pick your tour and we take you there.
          </p>

          <Link
            href="/landing/explore"
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
          >
            See Our Tours
          </Link>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-200 hover:text-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:underline"
          >
            <InstagramIcon />
            Follow @mareboats.hvar
          </a>
        </div>
      </section>
    </main>
  );
}
