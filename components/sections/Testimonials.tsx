'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { fadeInUpItem, staggerListOnly } from '@/lib/motion';

type Testimonial = {
  quote: string;
  author: string;
  origin: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'The best day of our entire Croatia trip. Captain was amazing, took us to spots no tourist boat would go. Blue Cave was magical.',
    author: 'Sarah M.',
    origin: 'United Kingdom',
  },
  {
    quote:
      'Absolutely worth every euro. Private tour, completely at our pace. The drone video they filmed for us is our favorite memory of the trip.',
    author: 'Marco & Julia',
    origin: 'Germany',
  },
  {
    quote:
      'Booked for 6 people, everything was perfect. Snorkeling, swimming, Pakleni Islands — all in one day. Will be back next summer for sure.',
    author: 'The Johnson Family',
    origin: 'United States',
  },
];

function Stars() {
  return (
    <span className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 text-[color:var(--accent)]"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-[color:var(--bg)] py-20 px-4 md:py-24">
      <motion.div
        className="mx-auto grid max-w-container grid-cols-1 gap-6 md:grid-cols-3"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerListOnly}
      >
        <motion.div variants={fadeInUpItem} className="col-span-full md:col-span-3">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            What Our Guests Say
          </h2>
        </motion.div>

        {testimonials.map((t) => (
          <motion.article
            key={t.author}
            variants={fadeInUpItem}
            className="relative flex h-full flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7"
          >
            <span
              aria-hidden="true"
              className="font-display text-[60px] font-extrabold leading-none text-[color:var(--accent)]"
            >
              &ldquo;
            </span>
            <p className="-mt-6 flex-1 font-body text-base leading-relaxed text-[color:var(--white)]">{t.quote}</p>
            <div className="mt-auto flex flex-col gap-2 border-t border-[color:var(--border)] pt-4">
              <Stars />
              <p className="font-body text-sm font-semibold text-[color:var(--white)]">
                {t.author}
                <span className="font-normal text-[color:var(--gray)]"> · {t.origin}</span>
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
