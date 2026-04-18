'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { fadeInUpItem, staggerListOnly } from '@/lib/motion';

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: 'Experienced Captain',
    description:
      'Born and raised in Hvar. Knows every cove, current and hidden beach on the Dalmatian coast.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 3v4" />
        <path d="M12 17v4" />
        <path d="M3 12h4" />
        <path d="M17 12h4" />
        <path d="M5.6 5.6l2.8 2.8" />
        <path d="M15.6 15.6l2.8 2.8" />
        <path d="M5.6 18.4l2.8-2.8" />
        <path d="M15.6 8.4l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: 'Private Tours',
    description:
      'The boat is exclusively yours. Up to 8 guests, no shared groups, no fixed schedule.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9.5" r="2.2" />
        <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <path d="M14.5 19c0-2.4 1.6-4 3-4s3 1.2 3 4" />
      </svg>
    ),
  },
  {
    title: 'Custom Routes',
    description:
      'Tell us what you love — Blue Cave, snorkeling, lunch on a quiet island. We build the day around you.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 6.5L9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20V6.5z" />
        <path d="M9 4v13.5" />
        <path d="M15 6.5V20" />
      </svg>
    ),
  },
  {
    title: 'Speaks Your Language',
    description:
      'English, Croatian, Italian and Spanish. Whichever you are most comfortable in — that is how we run the tour.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
];

export default function Features() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-[color:var(--surface)] py-20 px-4 md:py-24">
      <motion.div
        className="mx-auto grid max-w-container grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerListOnly}
      >
        <motion.div variants={fadeInUpItem} className="col-span-2 md:col-span-4">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Why Us
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Why Choose MareBoats
          </h2>
        </motion.div>

        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeInUpItem}
            className="flex h-full flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/40 p-6"
          >
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent)]"
              aria-hidden="true"
            >
              <span className="block h-7 w-7">{feature.icon}</span>
            </span>
            <div className="flex flex-1 flex-col">
              <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-lg">
                {feature.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
