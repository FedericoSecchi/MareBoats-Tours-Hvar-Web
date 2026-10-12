// Server-rendered building blocks of the private yacht section.

import Image from 'next/image';
import Link from 'next/link';
import { RevealHeading } from './RevealHeading';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import {
  BOAT_FEATURES,
  GOOGLE_REVIEWS_URL,
  JULI,
  YACHT_REQUEST_PATH,
  YACHT_REVIEWS,
  type YachtFAQ,
} from '@/lib/yacht-data';

const EYEBROW = 'font-body text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--accent)]';
const H2 =
  'mt-4 font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-[color:var(--white)] md:text-5xl';
const BODY = 'font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg';

export function SectionShell({
  children,
  tone = 'bg',
  id,
}: {
  children: React.ReactNode;
  tone?: 'bg' | 'surface';
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`border-b border-[color:var(--border)] px-4 py-20 md:px-6 md:py-28 ${
        tone === 'surface' ? 'bg-[color:var(--surface)]' : 'bg-[color:var(--bg)]'
      }`}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className={EYEBROW}>{eyebrow}</p>
      <RevealHeading className={H2}>{heading}</RevealHeading>
      {intro && <p className={`mt-6 ${BODY}`}>{intro}</p>}
    </div>
  );
}

export function TextSection({
  eyebrow,
  heading,
  paragraphs,
  tone,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  tone?: 'bg' | 'surface';
}) {
  return (
    <SectionShell tone={tone}>
      <SectionHeader eyebrow={eyebrow} heading={heading} />
      <div className="mt-8 max-w-3xl space-y-5">
        {paragraphs.map((p) => (
          <p key={p} className={BODY}>
            {p}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}

export function BoatFeatures({ intro }: { intro: string }) {
  return (
    <SectionShell tone="surface" id="the-boat">
      <SectionHeader eyebrow="On board" heading="The boat" intro={intro} />
      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {BOAT_FEATURES.map((f, i) => (
          <li key={f.title} className="bg-[color:var(--surface)] p-6 md:p-8">
            <span className="font-body text-xs text-[color:var(--accent)]">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.02em] text-[color:var(--white)]">
              {f.title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">{f.text}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export type ExperienceCard = {
  href: string;
  name: string;
  summary: string;
  image: { src: string; alt: string };
  priceLine: string | null;
};

export function ExperienceCards({ cards }: { cards: ExperienceCard[] }) {
  return (
    <SectionShell id="experiences">
      <SectionHeader eyebrow="Season 2027" heading="Ways to spend the day" />
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="group block h-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] transition-colors hover:border-[color:var(--accent)]/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-[color:var(--white)] group-hover:text-[color:var(--accent)]">
                  {c.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-[color:var(--gray)]">{c.summary}</p>
                {c.priceLine && (
                  <p className="mt-4 font-body text-sm font-medium text-[color:var(--white)]">{c.priceLine}</p>
                )}
                <span className="mt-5 inline-block font-body text-sm font-semibold text-[color:var(--accent)]">
                  See the day &rarr;
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export function JuliBlock({ linkToLunch = true }: { linkToLunch?: boolean }) {
  return (
    <SectionShell tone="surface" id="juli">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[color:var(--border)]">
          <Image
            src={JULI.image}
            alt={JULI.imageAlt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: JULI.objectPosition }}
          />
        </div>
        <div>
          <p className={EYEBROW}>On board, in the galley</p>
          <RevealHeading className={H2}>Lunch by Juli</RevealHeading>
          <p className={`mt-6 ${BODY}`}>{JULI.bio}</p>
          <p className={`mt-4 ${BODY}`}>
            On the yacht, lunch can be cooked on board and served at anchor. Tell us about allergies and
            dietary needs when you send your request.
          </p>
          {JULI.sampleMenu && (
            <ul className="mt-6 space-y-2">
              {JULI.sampleMenu.map((dish) => (
                <li key={dish} className="font-body text-sm text-[color:var(--white)]">
                  {dish}
                </li>
              ))}
            </ul>
          )}
          {linkToLunch && (
            <Link
              href="/private-yacht-hvar/boat-tour-with-lunch/"
              className="mt-8 inline-block font-body text-sm font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--white)]"
            >
              See the day with lunch on board &rarr;
            </Link>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

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
        heading="What guests say about MareBoats Hvar"
        intro="Rated 5.0 on Google. These reviews are from our speedboat tours: the yacht is new for 2027, so they speak about the crew and the way we run a day on the water."
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {YACHT_REVIEWS.map((r) => (
          <li
            key={r.author}
            className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-8"
          >
            <blockquote className="flex-1 font-body text-base leading-relaxed text-[color:var(--white)]/90">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <footer className="mt-6 font-body text-sm text-[color:var(--gray)]">
              <span className="text-[color:var(--white)]">{r.author}</span> · Google · {formatReviewDate(r.date)}
              {r.translated && <span className="block text-xs">Translated by Google</span>}
            </footer>
          </li>
        ))}
      </ul>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block font-body text-sm font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--white)]"
      >
        Read all reviews on Google &rarr;
      </a>
    </SectionShell>
  );
}

export function YachtFAQList({ faqs, tone = 'surface' }: { faqs: YachtFAQ[]; tone?: 'bg' | 'surface' }) {
  return (
    <SectionShell tone={tone} id="faq">
      <SectionHeader eyebrow="Questions" heading="Before you request" />
      <div className="mt-10 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold tracking-[-0.01em] text-[color:var(--white)] focus-visible:outline-none [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-xl text-[color:var(--accent)] transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl font-body text-base leading-relaxed text-[color:var(--gray)]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

export function YachtCTA({
  experience,
  whatsappUrl,
  requestQuery,
}: {
  experience: string;
  whatsappUrl: string;
  requestQuery?: string;
}) {
  const href = requestQuery ? `${YACHT_REQUEST_PATH}?experience=${requestQuery}` : YACHT_REQUEST_PATH;
  return (
    <section className="bg-[color:var(--bg)] px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className={EYEBROW}>April to October 2027</p>
        <RevealHeading className={`${H2} md:text-6xl`}>Request your date</RevealHeading>
        <p className={`mt-6 max-w-xl ${BODY}`}>
          Nothing to pay now. We confirm your date and the final price in March 2027.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-8 py-4 font-body text-sm font-semibold tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
          >
            Request a date
          </Link>
          <WhatsAppTrackedLink
            href={whatsappUrl}
            label="yacht_cta"
            ctaText="Ask on WhatsApp"
            pageSection="premium"
            experience={experience}
            className="inline-flex items-center justify-center rounded-pill border border-[color:var(--border)] px-8 py-4 font-body text-sm font-semibold tracking-wide text-[color:var(--white)] transition-colors duration-300 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Ask on WhatsApp
          </WhatsAppTrackedLink>
        </div>
      </div>
    </section>
  );
}

export function FactsStrip({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <div className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 md:px-6">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-px md:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="py-6">
            <dt className="font-body text-xs uppercase tracking-[0.2em] text-[color:var(--gray)]">{f.label}</dt>
            <dd className="mt-2 font-body text-sm font-medium text-[color:var(--white)]">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function IncludesList({ includes, notIncludes }: { includes: string[]; notIncludes: string[] }) {
  return (
    <SectionShell tone="surface">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className={EYEBROW}>Included</p>
          <ul className="mt-6 space-y-3">
            {includes.map((i) => (
              <li key={i} className="font-body text-base text-[color:var(--white)]">
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
                <li key={i} className="font-body text-base text-[color:var(--gray)]">
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
    <div className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-10 md:px-6">
      <p className="mx-auto max-w-5xl font-body text-base text-[color:var(--gray)]">
        {text}{' '}
        <Link href={href} className="font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--white)]">
          {linkText} &rarr;
        </Link>
      </p>
    </div>
  );
}
