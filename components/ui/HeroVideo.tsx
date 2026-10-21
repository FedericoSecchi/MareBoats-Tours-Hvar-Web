'use client';

// Background video for a hero, built so it never costs the page its first paint:
// - The poster is the real content: a <picture> (next/image getImageProps) with a
//   vertical crop for phones and a 16:9 crop from md up. It is the LCP element.
// - The video loads only after hydration, picks the file for the current width,
//   and fades in once it is actually playing.
// - No video at all with prefers-reduced-motion or Save-Data on: poster only.
// - Paused while off-screen, so it does not burn battery under the fold.

import { useEffect, useRef, useState } from 'react';
import { getImageProps } from 'next/image';

export type HeroVideoSource = {
  desktop: { video: string; poster: string };
  mobile: { video: string; poster: string };
  /** Decorative video, but the poster still needs alt text. */
  alt: string;
};

const MD = '(min-width: 768px)';

export function HeroVideo({ source, className = '' }: { source: HeroVideoSource; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduced || saveData) return;
    setSrc(window.matchMedia(MD).matches ? source.desktop.video : source.mobile.video);
  }, [source]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    video.play().catch(() => {
      /* Autoplay blocked (e.g. low power mode): the poster stays. */
    });
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  const common = { alt: source.alt, fill: true, sizes: '100vw', priority: true };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: source.desktop.poster });
  const {
    props: { srcSet: mobileSrcSet, ...mobileProps },
  } = getImageProps({ ...common, src: source.mobile.poster });

  return (
    <div className={`absolute inset-0 ${className}`}>
      <picture>
        <source media={MD} srcSet={desktopSrcSet ?? source.desktop.poster} />
        {/* next/image art direction (getImageProps): the <img> carries next/image's own props and alt. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...mobileProps} srcSet={mobileSrcSet} className="object-cover" />
      </picture>
      {src && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
