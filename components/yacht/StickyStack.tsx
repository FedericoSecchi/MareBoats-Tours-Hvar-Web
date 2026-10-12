'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getMotion, prefersReducedMotion } from '@/lib/yacht-motion';

export type StackItem = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string; objectPosition?: string };
};

/**
 * Cards that stick and stack as you scroll. When the next card arrives, the
 * previous one settles back (scale and opacity only). Pure CSS sticky does the
 * layout; GSAP only adds the depth effect, so it degrades to a normal list.
 */
export function StickyStack({ items }: { items: StackItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getMotion();
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]');
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.45,
          ease: 'none',
          scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top+=160', scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl space-y-8">
        {items.map((item) => (
          <article
            key={item.heading}
            data-stack-card
            className="sticky top-32 origin-top overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] will-change-transform"
          >
            <div className={`grid ${item.image ? 'md:grid-cols-2' : ''}`}>
              {item.image && (
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    style={item.image.objectPosition ? { objectPosition: item.image.objectPosition } : undefined}
                  />
                </div>
              )}
              <div className="p-7 md:p-12">
                <p className="font-body text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  {item.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-[color:var(--white)] md:text-4xl">
                  {item.heading}
                </h2>
                <div className="mt-6 space-y-4">
                  {item.paragraphs.map((p) => (
                    <p key={p} className="font-body text-base leading-relaxed text-[color:var(--gray)]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
