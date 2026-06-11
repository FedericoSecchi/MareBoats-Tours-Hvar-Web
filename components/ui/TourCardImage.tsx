'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { TourImage } from '@/lib/tours-data';

interface TourCardImageProps {
  images: TourImage[];
  sizes?: string;
  badge?: React.ReactNode;
  objectPosition?: string;
  objectFit?: 'cover' | 'contain';
}

export function TourCardImage({ images, sizes, badge, objectPosition, objectFit = 'cover' }: TourCardImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasMultiple = images.length >= 2;

  function startInterval() {
    if (!hasMultiple) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  }

  function startCarousel() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function stopCarousel() {
    startInterval();
  }

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden"
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes ?? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'}
          className={`${objectFit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-500`}
          style={{ opacity: i === activeIndex ? 1 : 0, objectPosition: objectPosition ?? 'center' }}
          priority={i === 0}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {badge && (
        <span className="absolute right-3 top-3 rounded-pill bg-[color:var(--accent)] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_6px_16px_rgba(59,201,219,0.35)]">
          {badge}
        </span>
      )}
      {hasMultiple && (
        <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 gap-1 md:flex" aria-hidden="true">
          {images.map((_, i) => (
            <span
              key={i}
              className="block h-1 w-4 rounded-full transition-colors duration-300"
              style={{ backgroundColor: i === activeIndex ? 'var(--accent)' : 'rgba(255,255,255,0.4)' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
