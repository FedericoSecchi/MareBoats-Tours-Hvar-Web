'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { fadeInUpItem, staggerListOnly } from '@/lib/motion';

type Photo = {
  src: string;
  label: string;
  alt: string;
};

const photos: Photo[] = [
  {
    src: '/images/destinations/hvar-blue-cave-interior-turquoise-light-2026.jpg',
    label: 'Blue Cave',
    alt: 'Inside Blue Cave Biševo near Hvar - turquoise light and boat',
  },
  {
    src: '/images/destinations/hvar-pakleni-islands-aerial-overview-drone-2026-01.jpg',
    label: 'Pakleni Islands',
    alt: 'Pakleni Islands archipelago aerial view - Hvar, Croatia',
  },
  {
    src: '/images/destinations/hvar-old-town-aerial-spanjola-drone-2026-01.jpg',
    label: 'Hvar Town',
    alt: 'Hvar old town and Spanjola fortress aerial drone view',
  },
  {
    src: '/images/destinations/hvar-stiniva-bay-aerial-drone-2026.jpg',
    label: 'Stiniva Bay',
    alt: 'Stiniva Bay Vis Island aerial drone view - secluded beach near Hvar',
  },
  {
    src: '/images/destinations/hvar-red-rocks-speedboat-aerial-drone-2026-06.jpg',
    label: 'Adriatic Sea',
    alt: 'Speedboat on the Adriatic sea near Red Rocks cliffs - Hvar Croatia',
  },
  {
    src: '/images/destinations/hvar-pakleni-islands-cove-speedboat-drone-2026-04.jpg',
    label: 'Hidden Beaches',
    alt: 'Hidden cove in Pakleni Islands reachable only by private boat from Hvar',
  },
];

export default function Gallery() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-[color:var(--bg)] py-20 px-4 md:py-24">
      <motion.div
        className="mx-auto grid max-w-container grid-cols-2 gap-2 md:grid-cols-3 md:gap-3"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerListOnly}
      >
        <motion.div variants={fadeInUpItem} className="col-span-2 md:col-span-3">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Where We Sail
          </h2>
        </motion.div>

        {photos.map((photo) => (
          <motion.div
            key={photo.src}
            variants={fadeInUpItem}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[color:var(--border)]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-300 ease-out group-hover:bg-black/55 group-hover:opacity-100 group-focus-within:bg-black/55 group-focus-within:opacity-100">
              <span className="px-3 text-center font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-lg">
                {photo.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
