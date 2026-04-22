import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/tours-data';

export const metadata: Metadata = {
  title: 'Thanks for Sailing with MareBoats',
  description: 'Leave a Google review for MareBoats Tours Hvar — it takes 30 seconds.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const INSTAGRAM_URL = 'https://www.instagram.com/mareboats.hvar/';

function StarIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function LandingReviewPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-20 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, rgba(59,201,219,0.22) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            You made it back
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
            Thanks for Joining Us! 🎉
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            If you had a good day on the water, help us stay #1 in Hvar. Your review takes 30 seconds and it genuinely matters.
          </p>
        </div>
      </section>

      {/* GIANT review CTA */}
      <section className="bg-[color:var(--bg)] px-4 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <a
            href={BUSINESS_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full flex-col items-center gap-5 rounded-3xl border border-[color:var(--accent)]/50 bg-[color:var(--surface)] px-6 py-12 shadow-[0_20px_60px_rgba(59,201,219,0.25)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(59,201,219,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:translate-y-0 md:px-10 md:py-16"
          >
            <span className="flex items-center gap-1 text-[color:var(--accent)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-10 w-10 md:h-12 md:w-12" />
              ))}
            </span>
            <span className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
              Leave a Review on Google
            </span>
            <span className="font-body text-sm uppercase tracking-[0.18em] text-[color:var(--gray)]">
              Takes 30 seconds
            </span>
            <span className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 group-hover:bg-[color:var(--accent-dk)] group-hover:text-[color:var(--white)] md:text-base">
              Write Your Review
            </span>
          </a>
        </div>
      </section>

      {/* Instagram bonus */}
      <section className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            One more thing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Tag Us @mareboats.hvar
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Your photos are our best marketing. Tag us and we will share the best shots.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
          >
            <InstagramIcon />
            Follow on Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
