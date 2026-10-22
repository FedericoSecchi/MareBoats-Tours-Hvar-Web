// Entry point from the home page into the private yacht section.
// Rendered only while SHOW_YACHT_LINKS (previews now, production once the section is live).
// Copy comes from YACHT_HUB so the teaser and the hub never say different things.

import Image from 'next/image';
import Link from 'next/link';
import { YACHT_BASE, YACHT_HUB } from '@/lib/yacht-data';

export function HomeYachtTeaser() {
  return (
    <section className="bg-[color:var(--bg)] px-4 py-16 md:py-24">
      <Link
        href={`${YACHT_BASE}/`}
        className="group mx-auto grid max-w-container overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] md:grid-cols-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[380px]">
          <Image
            src="/images/hero/hvar-aerial-rain-drone-2026-poster-desktop.jpg"
            alt="Waves breaking on the rocky coast of Hvar, seen from above"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-12">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            {YACHT_HUB.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            {YACHT_HUB.h1}
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)]">{YACHT_HUB.intro}</p>
          <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] transition-colors duration-300 group-hover:bg-[color:var(--white)]">
            See the yacht days
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </section>
  );
}
