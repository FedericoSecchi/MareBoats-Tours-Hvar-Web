'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { fadeInUpContainer } from '@/lib/motion';

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour.';

export default function CTABanner() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-24"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
      }}
    >
      <motion.div
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInUpContainer}
      >
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Last call
        </p>
        <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
          Ready to Explore Hvar?
        </h2>
        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
          Private boat tours from Hvar Harbour — snorkeling, Blue Cave, Pakleni Islands and more.
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base"
        >
          Book Now — Limited Spots
        </a>

        <p className="mt-4 font-body text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
          Peak season May–September · Spots fill fast · Book early to secure your date
        </p>
      </motion.div>
    </section>
  );
}
