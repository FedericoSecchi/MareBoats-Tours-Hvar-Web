import Image from 'next/image';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { jobPostingSkipperSchema } from '@/lib/schema';

export const metadata: Metadata = generateSEO({
  title: 'Skipper Jobs in Hvar, Croatia',
  description:
    'We hire skippers for the season in Hvar. Accommodation and lunch included, training from scratch, help with Croatian work paperwork. Apply on WhatsApp.',
  keywords: [
    'skipper jobs hvar',
    'skipper job croatia',
    'boat skipper hvar',
    'seasonal skipper job adriatic',
    'work on boats hvar',
  ],
  slug: 'careers/skipper',
});

const WA_NUMBER = '385951966734';
const WA_APPLY_URL =
  `https://wa.me/${WA_NUMBER}?text=` +
  encodeURIComponent("Hi, I'm applying for the skipper position in Hvar.");

const ctaClass =
  'inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-7 py-4 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_14px_36px_rgba(59,201,219,0.28)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98] md:text-base';

function ApplyCTA() {
  return (
    <WhatsAppTrackedLink
      href={WA_APPLY_URL}
      label="careers_skipper"
      ctaText="Apply on WhatsApp"
      className={ctaClass}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Apply on WhatsApp
    </WhatsAppTrackedLink>
  );
}

export default function SkipperCareersPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={jobPostingSkipperSchema as Record<string, unknown>} />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden border-b border-[color:var(--border)]">
        <Image
          src="/images/hero/hvar-open-sea-speedboat-aerial-drone-2026-01.jpg"
          alt="MareBoats Hvar speedboat open sea aerial drone view"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)] via-[color:var(--bg)]/50 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[50vh] md:min-h-[60vh] max-w-container flex-col justify-start px-4 pb-14 pt-12 md:pb-20">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Open Position
          </p>
          <h1 className="mt-3 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl md:text-6xl">
            Skipper Jobs in Hvar
          </h1>
        </div>
      </section>

      {/* Intro + first CTA */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <div className="max-w-2xl">
            <p className="font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
              We are hiring skippers for the rest of the 2026 season and for the full 2027 season,
              April to October.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
              Accommodation and lunch are covered. We train from scratch if you have the licence and
              the right attitude. If you are not from the EU, we help with the paperwork for 2027.
            </p>
            <div className="mt-8">
              <ApplyCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            What the job actually is
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>
              You run a speedboat with up to 8 guests on board. You pick them up at Beach
              Križa, you sail the route, you look after the people, you bring them back.
            </p>
            <p>
              That is the good part. Here is the rest of it, so nobody arrives surprised.
            </p>
            <p>
              You load ice, water and drinks before the first tour. You wash the boat. You check
              the engine, the bilge pump, the fenders and the lines. At the end of the day you
              close your own boat and report it in writing. Full day tours are long. Some days you
              help with things that are not sailing.
            </p>
            <p>
              The season runs April to October and it is intense. Days off depend on the schedule
              and we agree them as we go. We talk about this openly before you accept.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            What we pay
          </h2>
          <div className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>1,200 to 1,500 EUR per month, depending on experience.</p>
            <p className="mt-4">Included on top of that:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Shared accommodation in Hvar',
                'Lunch every day you work, Monday to Saturday',
                'Lunch on Sunday when you are on a tour',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              If you have no experience, you start at the bottom of the range and we train you. If
              you have run seasons before, you start higher.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            What you need
          </h2>
          <div className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            <ul className="space-y-2">
              {[
                'A nautical licence. Croatian category B, or an international licence at the same level.',
                'English. You are talking to guests all day, every day.',
                'The right attitude. This matters more to us than your CV.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              You do not need a VHF certificate. You do not need previous seasons. We have trained
              skippers from zero before and it works when the person wants to learn.
            </p>
            <p className="mt-4">
              If you do not have the licence yet: the exam runs once a month in Croatia and you can
              sit it in Croatian or in English.
            </p>
            <p className="mt-4">
              Any other language helps. Our guests come from all over. The crew covers English,
              Croatian, Italian, Spanish and German.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Work permits and paperwork
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>If you hold an EU passport, there is nothing to sort out.</p>
            <p>
              If you do not, we can handle the Croatian work paperwork for the 2027 season. We have
              done it before and there are people on the crew right now who came from outside the EU.
            </p>
            <p>
              For the remaining weeks of 2026 it depends on your situation. Write to us and we look
              at it case by case.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            How we train you
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>Two people train every new skipper, on purpose.</p>
            <p>
              One covers the technical side: the boats, the engines, the routes, the weather, the
              equipment.
            </p>
            <p>
              The other covers the rest: how we treat guests, where we stop and why, what a good day
              on the water looks like.
            </p>
            <p>You get both. We tell you upfront so you know who to ask for what.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            A day on the job
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>
              Tours run between 9am and 6pm. You start around 8:30 to prepare and you finish once
              your boat is closed, usually 6 or 7pm depending on the day.
            </p>
            <p>
              Morning: engine check, ice, water and drinks loaded, safety equipment checked.
            </p>
            <p>During the day: one full day tour, or two shorter ones.</p>
            <p>
              Evening: propeller, bilge, fenders, lines, tube pressure, fridge stocked for
              tomorrow, fuel level noted. You report your own boat in writing before you leave the
              dock.
            </p>
            <p>
              Everything is written down. If it is not written, it did not happen. That rule is not
              there to control you, it is there so nobody gets blamed for something they did not do.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-container">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            How to apply
          </h2>
          <div className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>Write to us on WhatsApp. Tell us:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Your licence and where you got it',
                'Whether you have run a season before',
                'Your passport',
                'When you can start',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We answer every message. If we are in the middle of the season it can take us a day.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Ready to apply?
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            Write to us on WhatsApp with your licence, your passport and when you can start.
          </p>
          <div className="mt-8">
            <ApplyCTA />
          </div>
        </div>
      </section>
    </main>
  );
}
