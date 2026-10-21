// Sea care. Design: Coti's Figma "MARE BOAT LUXURY" (frames "sea care page", desktop/tablet/mobile).
// Copy is Coti's, with three changes: the hero label "Real photo, Pakleni cove, no stock" is
// gone (the photo is not ours), "cigarette ends" is gone (no smoking on board), and the FAQ
// answers only repeat what the page already says (the Figma answer was a Spanish placeholder).
// Every claim here is PENDING confirmation by Nikola: biodegradable products, cleanups,
// slow speed in the bays. Until then the page stays noindex, out of the sitemap and unlinked.

import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Gauge, Leaf, Plus, Recycle, Trash2 } from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import { photo } from '@/lib/yacht-data';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

/** Flip to true once Nikola confirms every claim on the page. Then add it to the sitemap. */
const SEA_CARE_LIVE = false;

export const metadata: Metadata = {
  ...generateSEO({
    title: 'Sea Care: How We Look After the Sea',
    description:
      'How MareBoats Hvar looks after the sea around Hvar and the Pakleni Islands: what we do on every tour and how you can help on board.',
    keywords: [],
    slug: 'sea-care',
  }),
  robots: SEA_CARE_LIVE ? { index: true, follow: true } : { index: false, follow: false, nocache: true },
};

const HERO = photo('seaCareHero', {
  src: '/images/destinations/hvar-pakleni-islands-hidden-cove-drone-2026-01.jpg',
  alt: 'A quiet cove in the Pakleni Islands from above',
});
const CLEANUP = photo('seaCareBottles', {
  src: '/images/destinations/hvar-pakleni-islands-tarske-bay-drone-2026.jpg',
  alt: 'A bay in the Pakleni Islands from above',
});

const BELIEFS = [
  {
    title: 'Leave it better than we found it.',
    body: 'Every bay we visit should be as clean when we leave as when we arrived, or cleaner.',
  },
  {
    title: 'Honest about our impact.',
    body: "Our boats burn fuel. We don't hide it. We work to reduce it and to give back where we can.",
  },
  {
    title: 'The sea is shared.',
    body: 'This coast belongs to the people who live here and to the people who visit. We look after it like neighbours do.',
  },
];

const ON_EVERY_TOUR = [
  {
    Icon: Trash2,
    title: 'We pick up what we find.',
    body: 'If we see plastic in a bay or at a stop, we bring it on board and back to Hvar.',
  },
  {
    Icon: Leaf,
    title: 'Biodegradable cleaning products.',
    body: 'Our boats are washed only with biodegradable products.',
  },
  {
    Icon: Gauge,
    title: 'Slow in the bays.',
    body: 'We pass the coves at low speed. Less fuel, less noise, less wake.',
  },
];

const HELP = [
  { Icon: Trash2, body: 'Keep everything on the boat. Wrappers and cans go in the bin on board.' },
  { Icon: Recycle, body: 'Seen plastic at a stop? Bring it back to the boat and we take it from there.' },
];

const FAQS = [
  {
    q: 'What do you do with the trash you find on tours?',
    a: 'We bring it on board and back to Hvar, so nothing we pick up goes back in the water.',
  },
  {
    q: 'What do you clean the boats with?',
    a: 'Only biodegradable products.',
  },
  {
    q: 'Can I help during my tour?',
    a: 'Yes. Keep everything on the boat, and if you see plastic at a stop, bring it back on board. We take it from there.',
  },
];

const WA_URL = `https://wa.me/385951966734?text=${encodeURIComponent(
  "Hi! I'd like to talk about a sea or coast cleanup around Hvar.",
)}`;

const H2 = 'font-display text-[2.5rem] font-extrabold uppercase leading-[0.95] tracking-[-0.045em] md:text-[4.125rem]';

export default function SeaCarePage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      {/* Hero */}
      <section className="relative flex min-h-[640px] items-end overflow-hidden md:min-h-[800px]">
        <Image src={HERO.src} alt={HERO.alt} fill priority sizes="100vw" className="object-cover" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[color:var(--bg)] from-15% to-transparent"
        />
        <div className="relative mx-auto w-full max-w-[1120px] px-4 pb-20 md:pb-24">
          <p className="font-body text-sm font-bold uppercase tracking-[0.15em] text-[color:var(--accent)]">MareBoats Hvar</p>
          <h1 className="mt-2 font-display text-[4rem] font-extrabold uppercase leading-[1.08] tracking-[-0.053em] md:text-[6.25rem]">
            Sea
            <br />
            Care
          </h1>
          <p className="mt-2 max-w-xl font-body text-lg leading-relaxed tracking-[0.05em] text-[rgba(245,240,232,0.86)]">
            The sea is where we work, every day of the season. Looking after it is part of the job.
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section className="px-4 pb-24 pt-16 md:pb-[140px] md:pt-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className={H2}>What we believe</h2>
          <ol className="mt-12 grid gap-5 md:mt-20 md:grid-cols-3">
            {BELIEFS.map((b, i) => (
              <li key={b.title} className="border-y border-[color:var(--accent)] px-6 py-8 md:px-[34px] md:py-[38px]">
                <p className="font-display text-xs font-bold tracking-[0.15em] text-[color:var(--accent)]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-base font-bold uppercase leading-[1.35]">{b.title}</h3>
                <p className="mt-4 font-body text-base leading-relaxed tracking-[0.05em] text-[color:var(--gray)]">{b.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* On every tour */}
      <section className="bg-[color:var(--surface)] px-4 py-24 md:py-32">
        <div className="mx-auto max-w-[1120px]">
          <h2 className={H2}>On every tour</h2>
          <div className="mt-12 grid gap-5 md:mt-20 md:grid-cols-3">
            {ON_EVERY_TOUR.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-[rgba(138,154,176,0.16)] bg-[rgba(13,27,42,0.22)] p-[34px]"
              >
                <Icon aria-hidden="true" className="h-[31px] w-[31px] text-[color:var(--accent)]" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-base font-bold uppercase leading-[1.35]">{title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the tours */}
      <section className="bg-[color:var(--accent)] px-4 py-20 text-[color:var(--bg)] md:py-[120px]">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 md:grid-cols-[417fr_613fr] md:gap-[90px]">
          <div>
            <h2 className="font-display text-[2.5rem] font-extrabold uppercase leading-[0.95] tracking-[-0.046em] md:text-6xl">
              Beyond the tours
            </h2>
            <p className="mt-7 max-w-[418px] font-body text-base leading-[1.7] tracking-[0.05em]">
              We support local sea and coast cleanups around Hvar with our boats and our time. Organising one? We&apos;d be glad
              to help.
            </p>
            <WhatsAppTrackedLink
              href={WA_URL}
              label="sea_care"
              ctaText="Write to us on WhatsApp"
              pageSection="sea_care"
              className="mt-9 inline-flex min-h-[48px] items-center gap-2 rounded-pill bg-[color:var(--bg)] px-[22px] font-body text-base font-medium tracking-[0.05em] text-[color:var(--white)] transition-opacity duration-300 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--bg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--accent)]"
            >
              Write to us on WhatsApp
              <ArrowUpRight aria-hidden="true" className="h-[18px] w-[18px]" />
            </WhatsAppTrackedLink>
          </div>
          <div className="relative aspect-[613/390] overflow-hidden rounded-xl border border-[rgba(13,27,42,0.15)]">
            <Image src={CLEANUP.src} alt={CLEANUP.alt} fill sizes="(min-width: 768px) 613px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* How you can help on board */}
      <section className="px-4 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[416fr_624fr] md:gap-20">
          <h2 className="font-display text-[2.5rem] font-extrabold uppercase leading-[0.95] tracking-[-0.046em] md:text-6xl">
            How you can help on board
          </h2>
          <ul className="border-t border-[rgba(138,154,176,0.16)]">
            {HELP.map(({ Icon, body }) => (
              <li
                key={body}
                className="grid min-h-[136px] grid-cols-[56px_1fr] items-center border-b border-[rgba(138,154,176,0.16)] py-6 md:grid-cols-[72px_1fr]"
              >
                <Icon aria-hidden="true" className="h-[31px] w-[31px] text-[color:var(--accent)]" strokeWidth={1.5} />
                <p className="font-body text-[15px] leading-[1.7] text-[rgba(245,240,232,0.88)]">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#091725] px-4 py-24 md:py-32">
        <div className="mx-auto max-w-[1120px]">
          <h2 className={H2}>FAQ</h2>
          <div className="mt-12 space-y-[10px]">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group overflow-hidden rounded-[11px] border border-[rgba(138,154,176,0.16)] bg-[color:var(--surface)]"
              >
                <summary className="flex min-h-[66px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <span className="font-body text-[13px] font-bold uppercase leading-[1.5]">{f.q}</span>
                  <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full border border-[color:var(--accent)] text-[color:var(--accent)]">
                    <Plus aria-hidden="true" className="h-[18px] w-[18px] transition-transform duration-300 group-open:rotate-45" />
                  </span>
                </summary>
                <p className="px-5 pb-5 font-body text-sm leading-[1.6] text-[rgba(245,240,232,0.8)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
