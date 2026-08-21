import Image from 'next/image';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { jobPostingSkipperSchema } from '@/lib/schema';
import SkipperApplicationForm from '@/components/careers/SkipperApplicationForm';

export const metadata: Metadata = generateSEO({
  title: 'Skipper Jobs in Hvar, Croatia',
  description:
    'We hire skippers for the season in Hvar. Accommodation and lunch included, training from scratch, help with Croatian work paperwork. Apply through our online form.',
  keywords: [
    'skipper jobs hvar',
    'skipper job croatia',
    'boat skipper hvar',
    'seasonal skipper job adriatic',
    'work on boats hvar',
  ],
  slug: 'careers/skipper',
});

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

      {/* Intro */}
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
            Who fits here
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            <p>The product is calm. Guests come to Hvar for a quiet day on the water, and your job is to protect that. If you want to run a party boat, this is not it.</p>
            <p>No alcohol before or during work. Your nights are your own, but the season is long and the mornings are early.</p>
            <p>You pick plastic out of the water when you see it. You carry ice, you wash the boat, you close it at the end of the day. None of that is beneath the job, it is the job.</p>
            <p>When your boat is done and someone else is still working, you stay. Ice, hoses, fenders, none of it belongs to one person.</p>
            <p>Roles here are clear and decisions have an owner. Ask before you improvise, especially on prices and schedules. That is not about hierarchy, it is so that nobody gets blamed for a call they did not make.</p>
            <p>There is a dog. She comes on tours.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20">
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
            <p>Fill in the form below. It takes about ten minutes if you answer properly, and we read every one.</p>
            <p className="mt-4">We answer every application. During the season it can take us a few days.</p>
          </div>
          <div className="mt-10 max-w-2xl">
            <SkipperApplicationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
