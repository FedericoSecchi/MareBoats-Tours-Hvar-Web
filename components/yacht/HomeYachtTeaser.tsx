// Entry point from the home page into the private yacht section.
// Rendered only while SHOW_YACHT_LINKS (previews now, production once the section is live).
// The teaser deliberately uses shorter copy than the hub hero; h1 stays shared.

import Link from 'next/link';
import { HeroVideo } from '@/components/ui/HeroVideo';
import { YACHT_BASE, YACHT_HUB } from '@/lib/yacht-data';

const TEASER_VIDEO = {
  desktop: {
    video: '/videos/hvar-aerial-rain-drone-2026-desktop.mp4',
    poster: '/images/hero/hvar-aerial-rain-drone-2026-poster-desktop.jpg',
  },
  mobile: {
    video: '/videos/hvar-aerial-rain-drone-2026-mobile.mp4',
    poster: '/images/hero/hvar-aerial-rain-drone-2026-poster-mobile.jpg',
  },
  alt: 'Waves breaking on the rocky coast of Hvar, seen from above',
};

export function HomeYachtTeaser() {
  return (
    <section className="bg-[color:var(--bg)] px-4 py-16 md:py-24">
      <Link
        href={`${YACHT_BASE}/`}
        className="group mx-auto grid max-w-container overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] md:grid-cols-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[380px]">
          <HeroVideo
            source={TEASER_VIDEO}
            lazy
            className="transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-12">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            New for 2027
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            {YACHT_HUB.h1}
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Lunch cooked on board, the Blue Cave in half a day, a bathroom on board. Up to 8 guests, from Beach Križa.
          </p>
          <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] transition-colors duration-300 group-hover:bg-[color:var(--white)]">
            See the yacht days
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </section>
  );
}
