import type { Metadata } from 'next';
import Link from 'next/link';
import { ThanksTracker } from '@/components/yacht/ThanksTracker';
import { YACHT_BASE } from '@/lib/yacht-data';

export const metadata: Metadata = {
  title: 'Request Received',
  robots: { index: false, follow: false, nocache: true },
};

export default function YachtThanksPage() {
  return (
    <main className="flex min-h-[70svh] items-center bg-[color:var(--bg)] px-4 py-24 text-[color:var(--white)] md:px-6">
      <ThanksTracker />
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-body text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--accent)]">
          Request received
        </p>
        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
          Thank you. We have your request.
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
          We will confirm on WhatsApp or by email that it reached us. In March 2027 we confirm your date
          and the final price. Nothing to pay now. If the yacht is not available on your date, we offer
          you the same day on one of our speedboats at the price published on this site.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={`${YACHT_BASE}/`}
            className="inline-flex items-center justify-center rounded-pill border border-[color:var(--border)] px-7 py-3.5 font-body text-sm font-semibold text-[color:var(--white)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Back to the yacht
          </Link>
          <Link
            href="/tours/"
            className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-7 py-3.5 font-body text-sm font-semibold text-[color:var(--bg)] transition-colors hover:bg-[color:var(--white)]"
          >
            See this season&apos;s tours
          </Link>
        </div>
      </div>
    </main>
  );
}
