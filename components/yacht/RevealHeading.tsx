'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { getMotion, prefersReducedMotion } from '@/lib/yacht-motion';

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** true for above-the-fold headings: animate on load instead of on scroll. */
  immediate?: boolean;
};

/** Line-by-line reveal (SplitText, masked lines). Transform and opacity only. */
export function RevealHeading({ as: Tag = 'h2', className, children, immediate = false }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap, SplitText } = getMotion();

    let split: InstanceType<typeof SplitText> | null = null;
    let ctx: ReturnType<typeof gsap.context> | null = null;
    let cancelled = false;

    // Split only after the web fonts are in, or the line breaks are measured
    // with the fallback font and come out wrong.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'yacht-line' });
        gsap.from(split.lines, {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          ...(immediate
            ? { delay: 0.15 }
            : { scrollTrigger: { trigger: el, start: 'top 88%', once: true } }),
        });
      }, el);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
      split?.revert();
    };
  }, [immediate]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
