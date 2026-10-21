'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getMotion, prefersReducedMotion } from '@/lib/yacht-motion';
import { RevealHeading } from './RevealHeading';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: { src: string; alt: string };
  /** GA4 `experience` and WhatsApp prefill. 'hub' on the hub. */
  experience: string;
  whatsappUrl: string;
  /** Where "Request a date" goes. Defaults to the embedded form on the page. */
  requestHref?: string;
  priceLine?: string | null;
  tall?: boolean;
};

/** Full-bleed hero. Image eases in from a slight zoom, then drifts with scroll. */
export function YachtHero({
  eyebrow,
  title,
  intro,
  image,
  experience,
  whatsappUrl,
  requestHref = '#reserve',
  priceLine,
  tall = false,
}: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    const { gsap } = getMotion();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mediaRef.current,
        { scale: 1.14 },
        { scale: 1, duration: 2.2, ease: 'power2.out' }
      );
      gsap.from('[data-hero-fade]', {
        opacity: 0,
        y: 18,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.12,
        delay: 0.5,
      });
      gsap.to(mediaRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -40,
        ease: 'none',
        scrollTrigger: { trigger: root, start: 'center center', end: 'bottom top', scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className={`relative isolate flex items-end overflow-hidden bg-[color:var(--bg)] ${
        tall ? 'min-h-[88svh]' : 'min-h-[72svh]'
      }`}
    >
      <div ref={mediaRef} className="absolute inset-0 -z-10 will-change-transform">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[color:var(--bg)] via-[rgba(13,27,42,0.55)] to-[rgba(13,27,42,0.1)]"
      />

      <div ref={contentRef} className="mx-auto w-full max-w-5xl px-4 pb-16 pt-32 md:px-6 md:pb-24">
        <p
          data-hero-fade
          className="font-body text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]"
        >
          {eyebrow}
        </p>
        <RevealHeading
          as="h1"
          immediate
          className="mt-5 max-w-4xl font-serif text-[2.75rem] font-normal leading-[1.02] tracking-[-0.01em] text-[color:var(--white)] sm:text-6xl md:text-[5.5rem]"
        >
          {title}
        </RevealHeading>
        <p
          data-hero-fade
          className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[rgba(245,240,232,0.8)] md:text-lg"
        >
          {intro}
        </p>
        {priceLine && (
          <p data-hero-fade className="mt-4 font-body text-sm font-medium text-[color:var(--white)]">
            {priceLine} <span className="text-[color:var(--gray)]">for the whole boat</span>
          </p>
        )}
        <div data-hero-fade className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={requestHref}
            className="inline-flex items-center justify-center gap-3 rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-[15px] font-medium text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(59,201,219,0.6)]"
          >
            Request a date for 2027
          </Link>
          <WhatsAppTrackedLink
            href={whatsappUrl}
            label="yacht_hero"
            ctaText="Ask on WhatsApp"
            pageSection="premium"
            experience={experience}
            className="inline-flex items-center justify-center rounded-pill border border-[rgba(245,240,232,0.3)] px-7 py-4 font-body text-[15px] font-medium text-[color:var(--white)] transition-colors duration-300 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(59,201,219,0.6)]"
          >
            Ask on WhatsApp
          </WhatsAppTrackedLink>
        </div>
      </div>
    </section>
  );
}
