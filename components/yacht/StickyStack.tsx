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
 * Split cards (photo + text), Coti's "featured experience" layout, alternating
 * sides. Each card fades up once as it enters (opacity and transform only).
 * They used to stick and stack, but long cards got cut on short screens.
 */
export function StickyStack({ items }: { items: StackItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getMotion();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-stack-card]').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 48,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 88%', once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="border-t border-[rgba(245,240,232,0.08)] bg-[color:var(--bg)] px-4 py-20 md:px-20 md:py-[104px]">
      <div className="mx-auto max-w-[1280px] space-y-8">
        {items.map((item, i) => (
          <article
            key={item.heading}
            data-stack-card
            className="overflow-hidden rounded-2xl border border-[rgba(245,240,232,0.08)] bg-[color:var(--surface)] will-change-transform"
          >
            <div className={`grid ${item.image ? 'md:grid-cols-2' : ''} ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
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
                <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]">
                  {item.eyebrow}
                </p>
                <h2 className="mt-4 font-serif text-[2rem] font-normal leading-[1.08] text-[color:var(--white)] md:text-5xl">
                  {item.heading}
                </h2>
                <div className="mt-6 space-y-4">
                  {item.paragraphs.map((p) => (
                    <p key={p} className="font-body text-base leading-relaxed text-[rgba(245,240,232,0.7)]">
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
