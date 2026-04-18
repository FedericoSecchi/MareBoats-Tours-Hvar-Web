'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { fadeInUpItem, staggerListOnly } from '@/lib/motion';
import { featuredTours } from '@/lib/tours-data';

export default function Tours() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="tours" ref={ref} className="bg-[color:var(--bg)] py-20 px-4 md:py-24">
      <motion.div
        className="mx-auto grid max-w-container grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerListOnly}
      >
        <motion.div variants={fadeInUpItem} className="col-span-full mb-2 md:col-span-2 lg:col-span-4">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Our Tours
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Choose Your Day on the Adriatic
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            Four routes, one private boat. Local captain, snorkeling gear and drone video included
            on every trip.
          </p>
        </motion.div>

        {featuredTours.map((tour) => (
          <motion.article
            key={tour.slug}
            variants={fadeInUpItem}
            className="group flex h-full transform-gpu flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,201,219,0.18)] focus-within:-translate-y-1.5 focus-within:shadow-[0_20px_40px_rgba(59,201,219,0.18)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={tour.images[0].src}
                alt={tour.images[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute right-3 top-3 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_6px_16px_rgba(59,201,219,0.35)]">
                {tour.duration}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  {tour.name}
                </h3>
                <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {tour.shortDescription}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between gap-4">
                <span className="font-body text-base font-semibold text-[color:var(--accent)]">
                  {tour.price}
                </span>
                <Link
                  href={`/tours/${tour.slug}`}
                  className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.97]"
                >
                  See This Tour
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
