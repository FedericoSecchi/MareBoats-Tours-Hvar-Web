'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const STOP_PHOTOS: [string, string][] = [
  ['blue cave', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'],
  ['green cave', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'],
  ['stiniva', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'],
  ['medvidina', 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80'],
  ['budikovac', 'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&q=80'],
  ['pakleni', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'],
  ['palmižana', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'],
  ['palmizana', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'],
  ['zdrilca', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'],
  ['dubovica', '/images/destinations/hvar-dubovica-beach-aerial-drone-2026.jpg'],
  ['red rocks', 'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800&q=80'],
  ['hvar', 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80'],
];

const FALLBACK = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';

function getPhoto(text: string): string {
  const lower = text.toLowerCase();
  for (const [keyword, url] of STOP_PHOTOS) {
    if (lower.includes(keyword)) return url;
  }
  return FALLBACK;
}

function parseName(highlight: string): string {
  return highlight.split(' - ')[0];
}

function parseDesc(highlight: string): string {
  const parts = highlight.split(' - ');
  return parts.length > 1 ? parts.slice(1).join(' - ') : '';
}

type StopInfo = { name: string; desc: string; photo: string };

export default function TourHighlightsList({ highlights }: { highlights: string[] }) {
  const [active, setActive] = useState<StopInfo | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [active, close]);

  return (
    <>
      <ul
        aria-label="Tour highlights"
        className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-left md:grid-cols-3"
      >
        {highlights.map((h) => (
          <li key={h}>
            <button
              type="button"
              onClick={() =>
                setActive({ name: parseName(h), desc: parseDesc(h), photo: getPhoto(h) })
              }
              className="flex w-full cursor-pointer items-start gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/85 px-4 py-3 text-left font-body text-sm text-[color:var(--white)] backdrop-blur-sm transition-colors hover:border-[color:var(--accent)]/50 hover:bg-[color:var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
            >
              <span aria-hidden="true" className="mt-0.5 shrink-0 text-[color:var(--accent)]">
                ✓
              </span>
              <span>{h}</span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={close}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-[color:var(--surface)] shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={active.photo}
                alt={active.name}
                fill
                sizes="(max-width: 448px) 100vw, 448px"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                {active.name}
              </h3>
              {active.desc && (
                <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {active.desc}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-[color:var(--white)] transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
