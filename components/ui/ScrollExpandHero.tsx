'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandHeroProps {
  bgImageSrc?: string;
  bgImageAlt?: string;
  expandImageSrc?: string;
  expandImageAlt?: string;
  titlePrimary?: string;
  titleAccent?: string;
  scrollHint?: string;
  children?: ReactNode;
}

/**
 * Mobile-first scroll-expansion hero.
 *
 * Behaviour:
 *   - Locks `body.overflow` while the user expands the inner image via wheel / touch / keyboard.
 *   - Once the image fills the viewport, the lock is released and normal scroll resumes,
 *     revealing `children` below.
 *   - If the user prefers reduced motion or lands on the page with a URL hash,
 *     the effect is skipped and a standard hero is rendered (accessibility + deep-linking).
 */
export default function ScrollExpandHero({
  bgImageSrc = '/img/carousel-1.jpeg',
  bgImageAlt = 'Private boat tour from Hvar, Croatia — crystal clear Adriatic waters',
  expandImageSrc = '/img/about.jpeg',
  expandImageAlt = 'MareBoats crew at Hvar Harbour',
  titlePrimary = 'PRIVATE BOAT',
  titleAccent = 'TOURS HVAR',
  scrollHint = 'Scroll to explore',
  children,
}: ScrollExpandHeroProps) {
  const [mounted, setMounted] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchY = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const deepLinked = !!window.location.hash;
    if (reduced || deepLinked) setSkipAnimation(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  // Lock page scroll while the effect is running.
  useEffect(() => {
    if (!mounted || skipAnimation || expanded) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted, skipAnimation, expanded]);

  // Drive progress from wheel / touch / keyboard, and allow reset when scrolling back.
  useEffect(() => {
    if (!mounted || skipAnimation) return;

    const resetExpansion = () => {
      setProgress(0);
      setExpanded(false);
      setShowContent(false);
      window.scrollTo(0, 0);
    };

    const bump = (delta: number) => {
      setProgress((p) => {
        const next = Math.min(1, Math.max(0, p + delta));
        if (next >= 1) {
          setExpanded(true);
          setShowContent(true);
        } else {
          setShowContent(next >= 0.75);
        }
        return next;
      });
    };

    const onWheel = (e: WheelEvent) => {
      if (expanded && e.deltaY < 0) {
        e.preventDefault();
        resetExpansion();
        return;
      }
      if (expanded) return;
      e.preventDefault();
      bump(e.deltaY * 0.0009);
    };
    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!touchY.current) return;
      const dy = touchY.current - e.touches[0].clientY;
      if (expanded && dy < 0) {
        e.preventDefault();
        resetExpansion();
        touchY.current = e.touches[0].clientY;
        return;
      }
      if (expanded) {
        touchY.current = e.touches[0].clientY;
        return;
      }
      e.preventDefault();
      bump(dy * (dy < 0 ? 0.008 : 0.005));
      touchY.current = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      touchY.current = 0;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        bump(e.key === 'PageDown' ? 0.35 : 0.18);
      } else if (e.key === 'End' || e.key === 'Escape') {
        e.preventDefault();
        setProgress(1);
        setExpanded(true);
        setShowContent(true);
      }
    };
    const onScroll = () => {
      const currentY = window.scrollY;
      if (expanded && currentY < lastScrollY.current) {
        resetExpansion();
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
    };
  }, [mounted, skipAnimation, expanded]);

  // --- Accessible fallback: static hero when reduced motion / deep link ---
  if (mounted && skipAnimation) {
    return (
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden text-white">
        <Image
          src={bgImageSrc}
          alt={bgImageAlt}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--bg)] via-[color:var(--bg)]/60 to-transparent" />
        <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center gap-8 px-4 py-20 text-center">
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]">
            <span className="block text-[color:var(--white)]">{titlePrimary}</span>
            <span className="block text-[color:var(--accent)]">{titleAccent}</span>
          </h1>
          <div className="w-full">{children}</div>
        </div>
      </section>
    );
  }

  // --- Animated hero ---
  const imgW = 300 + progress * (isMobile ? 650 : 1250);
  const imgH = 400 + progress * (isMobile ? 220 : 400);
  const textShiftVw = progress * (isMobile ? 55 : 45);

  return (
    <section className="relative overflow-x-hidden">
      <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center text-white">
        {/* Background fades out as the inner image grows */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ opacity: 1 - progress * 0.85 }}
          transition={{ duration: 0.1 }}
        >
          <Image
            src={bgImageSrc}
            alt={bgImageAlt}
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--bg)] via-[color:var(--bg)]/60 to-transparent" />
        </motion.div>

        {/* Expanding image */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl"
          style={{
            width: `${imgW}px`,
            height: `${imgH}px`,
            maxWidth: '95vw',
            maxHeight: '85vh',
            boxShadow: '0 0 60px rgba(59,201,219,0.2)',
          }}
        >
          <Image
            src={expandImageSrc}
            alt={expandImageAlt}
            fill
            sizes="100vw"
            quality={75}
            className="object-cover object-center"
          />
          <motion.div
            className="absolute inset-0 bg-black/40"
            animate={{ opacity: Math.max(0, 0.5 - progress * 0.5) }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Single H1, two spans that fly apart — preserves SEO semantics */}
        <h1 className="pointer-events-none relative z-20 m-0 flex flex-col items-center gap-2 px-4 text-center font-display text-[clamp(3rem,10vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]">
          <motion.span
            className="block text-[color:var(--white)]"
            style={{ transform: `translateX(-${textShiftVw}vw)` }}
          >
            {titlePrimary}
          </motion.span>
          <motion.span
            className="block text-[color:var(--accent)]"
            style={{ transform: `translateX(${textShiftVw}vw)` }}
          >
            {titleAccent}
          </motion.span>
        </h1>

        {/* Scroll hint */}
        <motion.p
          className="pointer-events-none absolute bottom-8 left-0 right-0 z-20 px-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]"
          animate={{ opacity: Math.max(0, 1 - progress * 3) }}
        >
          {scrollHint} ↓
        </motion.p>
      </div>

      {/* Content revealed after full expansion */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-container px-4 py-12 md:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
