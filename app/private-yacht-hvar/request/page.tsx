import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { YachtRequestForm } from '@/components/yacht/YachtRequestForm';
import { MEETING_POINT } from '@/lib/yacht-data';

// Always noindex: a form is not a search landing page.
export const metadata: Metadata = {
  ...generateSEO({
    title: 'Request a Yacht Day, Season 2027',
    description: 'Send a request for a private yacht day from Hvar in the 2027 season. Nothing to pay now.',
    keywords: [],
    slug: 'private-yacht-hvar/request',
  }),
  robots: { index: false, follow: true },
};

export default function YachtRequestPage() {
  return (
    <main className="bg-[color:var(--bg)] px-4 pb-24 pt-16 text-[color:var(--white)] md:px-6 md:pt-24">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <div>
          <p className="font-body text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]">
            Season 2027
          </p>
          <h1 className="mt-5 font-serif text-[2.75rem] font-normal leading-[1.05] md:text-6xl">
            Request your yacht day
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Tell us the day you have in mind. We confirm we received it, and in March 2027 we confirm your
            date and the final price. Nothing to pay now.
          </p>
          <dl className="mt-10 hidden space-y-5 border-t md:block border-[color:var(--border)] pt-8">
            <div>
              <dt className="font-body text-xs uppercase tracking-[0.2em] text-[color:var(--gray)]">Season</dt>
              <dd className="mt-1 font-body text-sm text-[color:var(--white)]">April to October 2027</dd>
            </div>
            <div>
              <dt className="font-body text-xs uppercase tracking-[0.2em] text-[color:var(--gray)]">Guests</dt>
              <dd className="mt-1 font-body text-sm text-[color:var(--white)]">Up to 8, the whole boat is yours</dd>
            </div>
            <div>
              <dt className="font-body text-xs uppercase tracking-[0.2em] text-[color:var(--gray)]">Meeting point</dt>
              <dd className="mt-1 font-body text-sm text-[color:var(--white)]">{MEETING_POINT}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-[rgba(245,240,232,0.08)] bg-[color:var(--surface)] p-6 md:p-10">
          <YachtRequestForm />
        </div>
      </div>
    </main>
  );
}
