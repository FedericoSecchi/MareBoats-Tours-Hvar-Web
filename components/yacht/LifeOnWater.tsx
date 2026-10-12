'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMotion, prefersReducedMotion } from '@/lib/yacht-motion';
import { RevealHeading } from './RevealHeading';

type Step = { title: string; text: string; image: string; alt: string };

/**
 * "Life on the water": on desktop the section pins and the day slides
 * sideways as you scroll (ScrollTrigger pin, scroll is never hijacked).
 * On mobile and with reduced motion it is a plain vertical list.
 */
export function LifeOnWater({ steps }: { steps: Step[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track || prefersReducedMotion()) return;
    const { gsap } = getMotion();

    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const distance = () => track.scrollWidth - track.clientWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top+=112',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg)] py-20 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <p className="font-body text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--accent)]">
          A day on board
        </p>
        <RevealHeading className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-[color:var(--white)] md:text-5xl">
          Life on the water
        </RevealHeading>
      </div>
      <ol
        ref={trackRef}
        className="mt-12 flex flex-col gap-10 px-4 will-change-transform md:flex-row md:gap-8 md:px-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))]"
      >
        {steps.map((s, i) => (
          <li key={s.title} className="md:w-[42vw] md:max-w-[560px] md:shrink-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)]">
              <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
            </div>
            <p className="mt-5 font-body text-xs text-[color:var(--accent)]">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-[color:var(--white)]">
              {s.title}
            </h3>
            <p className="mt-2 max-w-md font-body text-base leading-relaxed text-[color:var(--gray)]">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
