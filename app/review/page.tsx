import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/tours-data';

const TARGET = BUSINESS_INFO.googleReviewUrl;

export const metadata: Metadata = {
  title: 'Review MareBoats on Google',
  description: 'Redirecting to our Google Maps page so you can leave a review.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ReviewRedirectPage() {
  return (
    <>
      {/* Instant meta refresh — fires before React hydration, works without JS. */}
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <main className="flex min-h-[70vh] items-center justify-center bg-[color:var(--bg)] px-4 py-20 text-center text-[color:var(--white)]">
        <div className="max-w-md">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Thanks for helping
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Redirecting to Google…
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)]">
            If the page does not redirect automatically, tap the button below.
          </p>
          <a
            href={TARGET}
            className="mt-7 inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
          >
            Open Google Maps
          </a>
        </div>
      </main>
    </>
  );
}
