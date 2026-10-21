'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMotion, prefersReducedMotion } from '@/lib/yacht-motion';
import { RevealHeading } from './RevealHeading';
import type { JournalPhoto } from '@/lib/yacht-data';

type Row = JournalPhoto | [JournalPhoto, JournalPhoto];

/**
 * "Life on the water" photographic journal (Coti's layout: wide, pair, wide...).
 * Each photo drifts slightly inside its frame as you scroll. Transform only.
 */
export function Journal({ rows }: { rows: Row[] }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getMotion();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-drift]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      });
      gsap.utils.toArray<HTMLElement>('[data-frame]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const Frame = ({ photo, wide }: { photo: JournalPhoto; wide: boolean }) => (
    <figure data-frame>
      <div className={`relative overflow-hidden rounded-2xl ${wide ? 'aspect-[16/10] md:aspect-[1280/550]' : 'aspect-[4/3] md:aspect-[628/300]'}`}>
        <div data-drift className="absolute inset-x-0 -inset-y-[8%] will-change-transform">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={wide ? '(min-width: 1280px) 1280px, 100vw' : '(min-width: 768px) 628px, 100vw'}
            className="object-cover"
          />
        </div>
      </div>
      <figcaption className="mt-3 font-body text-sm text-[rgba(245,240,232,0.6)]">{photo.caption}</figcaption>
    </figure>
  );

  return (
    <section
      ref={rootRef}
      id="life-on-the-water"
      className="scroll-mt-28 border-t border-[rgba(245,240,232,0.08)] bg-[color:var(--bg)] px-4 py-20 md:px-20 md:py-[104px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]">
          The experience
        </p>
        <RevealHeading className="mt-3 font-serif text-[2.5rem] leading-[1.05] text-[color:var(--white)] md:text-[4.5rem]">
          Life on the water
        </RevealHeading>
        <div className="mt-12 space-y-8 md:space-y-6">
          {rows.map((row) =>
            Array.isArray(row) ? (
              <div key={row[0].src} className="grid gap-8 md:grid-cols-2 md:gap-6">
                <Frame photo={row[0]} wide={false} />
                <Frame photo={row[1]} wide={false} />
              </div>
            ) : (
              <Frame key={row.src} photo={row} wide />
            )
          )}
        </div>
      </div>
    </section>
  );
}
