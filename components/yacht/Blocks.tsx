// Server-rendered building blocks of the private yacht section.
// Visual design: Coti's Figma "MARE BOAT LUXURY" (Mare Boats · Desktop-luxury / Luxury mobile).
// Copy and photos are ours: the Figma copy and stock photos are placeholders.

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ChefHat,
  Dog,
  Gauge,
  Lock,
  Minus,
  Plus,
  Toilet,
  Umbrella,
  Users,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import { RevealHeading } from './RevealHeading';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import {
  BOAT_CHIPS,
  BOAT_FEATURES,
  BOAT_SPECS,
  GOOGLE_REVIEWS_URL,
  JULI,
  photo,
  LUNCH_STEPS,
  YACHT_BASE,
  YACHT_REVIEWS,
  type YachtFAQ,
  type YachtIcon,
} from '@/lib/yacht-data';

// ── Type scale (Coti: Libre Caslon for headings, grotesk for text) ──
export const EYEBROW = 'font-body text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]';
export const H2 =
  'font-serif text-[2.5rem] font-normal leading-[1.05] tracking-[-0.01em] text-[color:var(--white)] md:text-[4.5rem]';
export const BODY = 'font-body text-[15px] leading-relaxed text-[rgba(245,240,232,0.7)] md:text-base';
const CARD = 'rounded-2xl border border-[rgba(245,240,232,0.08)] bg-[color:var(--surface)]';
const PILL_PRIMARY =
  'inline-flex items-center justify-center gap-3 rounded-pill bg-[color:var(--accent)] px-6 py-3.5 font-body text-[15px] font-medium text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(59,201,219,0.6)]';
const CHIP = 'rounded-pill bg-[rgba(245,240,232,0.08)] px-3 py-1.5 font-body text-xs text-[rgba(245,240,232,0.75)]';

export function SectionShell({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-[rgba(245,240,232,0.08)] bg-[color:var(--bg)] px-4 py-20 md:px-20 md:py-[104px] ${className}`}
    >
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  heading,
  italic = false,
  aside,
}: {
  eyebrow: string;
  heading: string;
  italic?: boolean;
  aside?: string;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className={EYEBROW}>{eyebrow}</p>
        <RevealHeading className={`mt-3 ${H2} ${italic ? 'italic' : ''}`}>{heading}</RevealHeading>
      </div>
      {aside && <p className={`max-w-xs ${BODY} md:mb-3 md:text-[15px]`}>{aside}</p>}
    </div>
  );
}

// ── Experience cards ("Every day on the water") ──

export type ExperienceCard = {
  href: string;
  name: string;
  summary: string;
  highlights: string[];
  chips: string[];
  badge?: string;
  image: { src: string; alt: string };
  priceLine: string | null;
};

export function ExperienceCards({ cards }: { cards: ExperienceCard[] }) {
  return (
    <SectionShell id="experiences">
      <SectionHeader
        eyebrow="Season 2027"
        heading="Every day on the water"
        italic
        aside="Three ways to spend a private day on the yacht, or tell us the day you have in mind."
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <li key={c.href} className={`group flex flex-col overflow-hidden ${CARD}`}>
            <div className="relative aspect-[410/240] overflow-hidden">
              <Image
                src={c.image.src}
                alt={c.image.alt}
                fill
                sizes="(min-width: 1024px) 410px, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {c.badge && (
                <span className="absolute right-4 top-4 rounded-pill border border-[rgba(59,201,219,0.5)] bg-[rgba(13,27,42,0.8)] px-3 py-1 font-body text-[11px] uppercase tracking-[0.04em] text-[color:var(--accent)]">
                  {c.badge}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-[1.75rem] leading-tight text-[color:var(--white)] md:text-[1.875rem]">
                  {c.name}
                </h3>
                {c.priceLine && (
                  <span className="shrink-0 font-serif text-2xl text-[color:var(--accent)]">{c.priceLine}</span>
                )}
              </div>
              <p className={`mt-3 ${BODY} md:text-[15px]`}>{c.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.chips.map((chip) => (
                  <span key={chip} className={CHIP}>
                    {chip}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-3 font-body text-[15px] text-[rgba(245,240,232,0.85)]">
                    <span aria-hidden="true">·</span>
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href={c.href}
                className="mt-auto flex items-center justify-between border-t border-[rgba(245,240,232,0.08)] pt-5 font-body text-[15px] font-medium text-[color:var(--accent)] transition-colors hover:text-[color:var(--white)]"
                style={{ marginTop: '1.5rem' }}
              >
                See the day
                <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

// ── The boat ("Our fleet"), unbranded ──

const BOAT_IMG = photo('boat', {
  src: '/images/destinations/hvar-pakleni-islands-coastline-aerial-drone-2026.jpg',
  alt: 'Pakleni Islands coastline from above, off Hvar',
});
const FINAL_CTA_IMG = photo('finalCta', {
  src: '/images/destinations/hvar-pakleni-islands-cove-speedboat-drone-2026-03.jpg',
  alt: 'A cove in the Pakleni Islands from above',
});
const JULI_IMG = photo('featuredLunch', { src: JULI.image, alt: JULI.imageAlt, objectPosition: JULI.objectPosition });

export function BoatPresentation({ requestHref }: { requestHref: string }) {
  return (
    <SectionShell id="the-boat">
      <SectionHeader eyebrow="On board" heading="The boat" />
      <div className={`mt-12 grid overflow-hidden ${CARD} bg-[color:var(--bg)] lg:grid-cols-[664fr_616fr]`}>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[577px]">
          <Image
            src={BOAT_IMG.src}
            alt={BOAT_IMG.alt}
            fill
            sizes="(min-width: 1024px) 664px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col p-6 md:p-10">
          <h3 className="font-serif text-[2rem] leading-tight text-[color:var(--white)] md:text-[2.75rem]">
            Larger, for private days
          </h3>
          <p className={`mt-4 ${BODY}`}>
            For 2027 we are bringing a larger boat to the MareBoats Hvar fleet, for private days only. It reaches
            Vis and Biševo sooner than our speedboats and rides the open sea more comfortably.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
            {BOAT_SPECS.map((s) => (
              <div key={s.label} className="border-l border-[rgba(245,240,232,0.2)] pl-3">
                <dt className="font-body text-xs uppercase tracking-[0.04em] text-[rgba(245,240,232,0.6)]">
                  {s.label}
                </dt>
                <dd className="mt-2 font-body text-[15px] text-[color:var(--white)]">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-2">
            {BOAT_CHIPS.map((chip) => (
              <span key={chip} className={CHIP}>
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-8 border-t border-[rgba(245,240,232,0.08)] pt-8">
            <Link href={requestHref} className={PILL_PRIMARY}>
              Request a date for 2027
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <p className="mt-4 font-body text-sm text-[rgba(245,240,232,0.6)]">Season April to October 2027</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// ── Featured: lunch on board with Juli ("Chef on board") ──

export function FeaturedLunch({
  priceLine,
  ctaHref,
  ctaLabel,
}: {
  priceLine: string | null;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <SectionShell id="juli">
      <div className={`grid overflow-hidden ${CARD} lg:grid-cols-[640fr_640fr]`}>
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[708px]">
          <Image
            src={JULI_IMG.src}
            alt={JULI_IMG.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
            style={JULI_IMG.objectPosition ? { objectPosition: JULI_IMG.objectPosition } : undefined}
          />
        </div>
        <div className="flex flex-col p-6 md:p-10">
          <p className={EYEBROW}>Featured experience</p>
          <RevealHeading className={`mt-4 ${H2}`}>Lunch on board</RevealHeading>
          <p className={`mt-6 ${BODY}`}>
            Juli cooks lunch in the galley while you swim, and it is served at anchor, in a bay the skipper picks
            for the wind that day.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-[rgba(245,240,232,0.6)]">
            <span className="text-[color:var(--white)]">Juli, {JULI.role}.</span> {JULI.bio}
          </p>
          <ol className="mt-8">
            {LUNCH_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex gap-6 border-b border-[rgba(245,240,232,0.08)] py-3.5 font-body text-[15px] text-[rgba(245,240,232,0.85)]"
              >
                <span className="w-6 shrink-0 text-[color:var(--accent)]">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            {priceLine ? (
              <div>
                <p className="font-body text-xs uppercase tracking-[0.04em] text-[rgba(245,240,232,0.6)]">From</p>
                <p className="font-serif text-4xl text-[color:var(--accent)]">{priceLine.replace(/^From /, '')}</p>
              </div>
            ) : (
              <p className="font-body text-sm text-[rgba(245,240,232,0.6)]">
                Tell us about allergies and dietary needs when you request.
              </p>
            )}
            <Link href={ctaHref} className={PILL_PRIMARY}>
              {ctaLabel}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// ── "The difference" ──

const ICONS: Record<YachtIcon, LucideIcon> = {
  private: Lock,
  bathroom: Toilet,
  shade: Umbrella,
  galley: ChefHat,
  speed: Gauge,
  swim: Waves,
  guests: Users,
  dog: Dog,
};

export function Benefits() {
  return (
    <SectionShell id="difference">
      <SectionHeader eyebrow="The difference" heading="Why the yacht" />
      <ul className="mt-12 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {BOAT_FEATURES.map((f) => {
          const Icon = ICONS[f.icon];
          return (
            <li
              key={f.title}
              className="flex gap-4 border-b border-[rgba(245,240,232,0.08)] py-6 sm:block sm:py-8"
            >
              <Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[color:var(--accent)] sm:mt-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-[1.625rem] leading-tight text-[color:var(--white)] sm:mt-4 md:text-[1.875rem]">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-[rgba(245,240,232,0.7)]">{f.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}

// ── Reviews ("Guest stories"). Real Google reviews, never attributed to the yacht ──

function formatReviewDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function YachtReviews() {
  return (
    <SectionShell id="reviews">
      <SectionHeader
        eyebrow="Google reviews"
        heading="Rated 5.0 on Google"
        aside="From our speedboat tours. The yacht is new for 2027, so these speak about the crew and the way we run a day on the water."
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {YACHT_REVIEWS.map((r) => (
          <li key={r.author} className={`flex h-full flex-col p-7 ${CARD}`}>
            <blockquote className="flex-1 font-serif text-xl leading-[1.45] text-[color:var(--white)] md:text-[1.375rem]">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <footer className="mt-6 border-t border-[rgba(245,240,232,0.08)] pt-5 font-body">
              <p className="text-[15px] font-medium text-[color:var(--white)]">{r.author}</p>
              <p className="mt-1 text-[13px] text-[rgba(245,240,232,0.6)]">
                Google · {formatReviewDate(r.date)}
                {r.translated && ' · Translated by Google'}
              </p>
            </footer>
          </li>
        ))}
      </ul>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 font-body text-[15px] font-medium text-[color:var(--accent)] transition-colors hover:text-[color:var(--white)]"
      >
        Read all reviews on Google
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
      </a>
    </SectionShell>
  );
}

// ── FAQ ──

export function YachtFAQList({ faqs }: { faqs: YachtFAQ[] }) {
  return (
    <SectionShell id="faq">
      <p className={EYEBROW}>Have questions?</p>
      <RevealHeading className={`mt-3 max-w-md ${H2}`}>Frequently asked</RevealHeading>
      <div className="mt-12 space-y-3">
        {faqs.map((faq, i) => (
          <details key={faq.question} open={i === 0} className={`group px-5 md:px-7 ${CARD}`}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-lg text-[color:var(--white)] focus-visible:outline-none md:py-6 [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(59,201,219,0.7)] text-[color:var(--accent)]"
              >
                <Plus className="h-4 w-4 group-open:hidden" strokeWidth={1.5} />
                <Minus className="hidden h-4 w-4 group-open:block" strokeWidth={1.5} />
              </span>
            </summary>
            <p className={`max-w-3xl pb-6 ${BODY} md:text-[15px]`}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

// ── Final invitation ("Begin your journey") ──

export function FinalCTA({
  href,
  experience,
  whatsappUrl,
}: {
  href: string;
  experience: string;
  whatsappUrl: string;
}) {
  return (
    <section className="bg-[color:var(--bg)] px-4 pb-6 pt-6 md:px-20 md:pb-6">
      <div className="relative mx-auto flex min-h-[486px] max-w-[1280px] items-center justify-center overflow-hidden rounded-2xl md:min-h-[560px]">
        <Image
          src={FINAL_CTA_IMG.src}
          alt={FINAL_CTA_IMG.alt}
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#0a1a2e]/65" />
        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
          <p className={EYEBROW}>April to October 2027</p>
          <RevealHeading className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-[color:var(--white)] md:text-[6rem]">
            The Adriatic, reserved for you
          </RevealHeading>
          <p className="mt-5 max-w-md font-body text-[15px] text-[rgba(245,240,232,0.8)]">
            Nothing to pay now. We confirm your date and the final price in March 2027.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={href} className={PILL_PRIMARY}>
              Request a date
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <WhatsAppTrackedLink
              href={whatsappUrl}
              label="yacht_final_cta"
              ctaText="Ask on WhatsApp"
              pageSection="premium"
              experience={experience}
              className="inline-flex items-center justify-center rounded-pill border border-[rgba(245,240,232,0.3)] px-6 py-3.5 font-body text-[15px] font-medium text-[color:var(--white)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Ask on WhatsApp
            </WhatsAppTrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Experience page pieces ──

export function FactsStrip({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <div className="border-t border-[rgba(245,240,232,0.08)] bg-[color:var(--bg)] px-4 md:px-20">
      <dl className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-2 py-8 md:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="border-l border-[rgba(245,240,232,0.2)] py-2 pl-3">
            <dt className="font-body text-xs uppercase tracking-[0.04em] text-[rgba(245,240,232,0.6)]">{f.label}</dt>
            <dd className="mt-2 font-body text-[15px] text-[color:var(--white)]">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function IncludesList({ includes, notIncludes }: { includes: string[]; notIncludes: string[] }) {
  return (
    <SectionShell>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className={EYEBROW}>Included</p>
          <ul className="mt-6 space-y-3">
            {includes.map((i) => (
              <li key={i} className="flex gap-3 font-body text-base text-[color:var(--white)]">
                <span aria-hidden="true" className="text-[color:var(--accent)]">·</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        {notIncludes.length > 0 && (
          <div>
            <p className={EYEBROW}>Not included</p>
            <ul className="mt-6 space-y-3">
              {notIncludes.map((i) => (
                <li key={i} className="flex gap-3 font-body text-base text-[rgba(245,240,232,0.7)]">
                  <span aria-hidden="true">·</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

export function CrossLink({ text, href, linkText }: { text: string; href: string; linkText: string }) {
  return (
    <div className="border-t border-[rgba(245,240,232,0.08)] bg-[color:var(--bg)] px-4 py-10 md:px-20">
      <p className="mx-auto max-w-[1280px] font-body text-base text-[rgba(245,240,232,0.7)]">
        {text}{' '}
        <Link href={href} className="font-medium text-[color:var(--accent)] transition-colors hover:text-[color:var(--white)]">
          {linkText} &rarr;
        </Link>
      </p>
    </div>
  );
}

export const YACHT_HOME = `${YACHT_BASE}/`;
