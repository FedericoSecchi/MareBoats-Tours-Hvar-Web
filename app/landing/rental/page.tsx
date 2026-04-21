import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Boat Rental Hvar | Rules, Safety & Return Policy',
  description:
    'Everything you need to know before renting a boat in Hvar: fuel, speed zones, safety equipment, damage policy, alcohol and return process.',
  keywords: [
    'boat rental hvar',
    'rent a boat hvar',
    'hvar boat rental rules',
    'boat rental croatia',
  ],
  slug: 'landing/rental',
});

const WA_URL =
  "https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour";

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  bullets: string[];
  note?: string;
};

const sections: Section[] = [
  {
    id: 'fuel',
    eyebrow: 'Section 1',
    title: 'Fuel & Maintenance',
    bullets: [
      'The boat leaves with a full tank. Please return it with a full tank.',
      'Fuel stations are in Hvar, Stari Grad, Vis and Komiža. Marina Palmižana refills on request.',
      'Diesel/petrol type is labelled at the filler cap — ask before first refill if unsure.',
      'If the engine behaves oddly, stop and call us on WhatsApp before continuing.',
    ],
    note: 'Tip: keep the receipt of your last refill — helps us if we ever need to check consumption.',
  },
  {
    id: 'speed-zones',
    eyebrow: 'Section 2',
    title: 'Speed Zones',
    bullets: [
      'Low-speed zones are marked on the chart on board and with buoys on the water.',
      'Inside harbours, anchorages and near swimmers: 3 knots maximum.',
      'Croatian maritime police patrol actively — fines under national laws are real and significant.',
      'When in doubt, slow down. A slow passage protects swimmers, other boats and the hull.',
    ],
    note: 'Low-speed zones exist because of national laws and safety — not our preference. Respect them always.',
  },
  {
    id: 'safety',
    eyebrow: 'Section 3',
    title: 'Safety & Equipment',
    bullets: [
      'Life jackets for every passenger (adult + child sizes) are on board. Show your guests where they are before you leave.',
      'First-aid kit, flares and fire extinguisher are in the labelled locker.',
      'VHF radio: channel 16 for emergencies. Coast guard: 195. All-purpose emergency: 112.',
      'Anchor + fenders are included — short instructions are printed on board.',
    ],
  },
  {
    id: 'damage',
    eyebrow: 'Section 4',
    title: 'Damage Policy',
    bullets: [
      'Security deposit is held at check-out and returned if the boat comes back in the same condition.',
      'Minor cosmetic wear (salt marks, small scratches from normal use) is covered.',
      'Propeller, hull and engine damage are the renter\u2019s responsibility up to the deposit amount.',
      'If anything happens on the water: take photos, stay calm, call us on WhatsApp before you return.',
    ],
    note: 'We prefer honest reporting over surprises. Tell us early and we always find a fair solution.',
  },
  {
    id: 'alcohol-smoking',
    eyebrow: 'Section 5',
    title: 'Alcohol & Smoking',
    bullets: [
      'The skipper/person at the helm may not drink alcohol — the same rules as driving a car apply on the water.',
      'Guests can enjoy drinks responsibly. Glass bottles are fine on the deck.',
      'Smoking is only allowed outside the cabin, never inside. Use a closed container for ashes.',
      'Please bring all rubbish back to the harbour — there are bins at the dock.',
    ],
  },
  {
    id: 'return',
    eyebrow: 'Section 6',
    title: 'Return Process',
    bullets: [
      'Return on time. Late returns may carry a fee because the next guests are waiting.',
      'Checklist before you return: full tank, anchor stowed, fenders secured, cabin tidy.',
      'We take before/after photos together. Takes 2 minutes and protects both sides.',
      'Deposit is released once the boat is checked and fuel is confirmed.',
    ],
  },
];

type Faq = { question: string; answer: string };

const rentalFaqs: Faq[] = [
  {
    question: 'What if I run out of fuel?',
    answer:
      'Call us on WhatsApp — we can arrange a fuel delivery or tow. A fuel gauge is on board; watch it and refill in good time to avoid ending the day early.',
  },
  {
    question: 'Can I take the boat to Italy?',
    answer:
      'Not without an international licence and prior arrangement. Our standard rental covers Croatian waters only.',
  },
  {
    question: 'What happens in bad weather?',
    answer:
      "If the forecast turns unsafe, we reschedule or refund — your safety matters more than the day on the water. Don't push out against a strong wind warning.",
  },
  {
    question: 'Can I hire a skipper if I change my mind?',
    answer:
      'Yes. A skipper can join on short notice — message us on WhatsApp and we will confirm availability. Many first-time guests in Croatian waters prefer this.',
  },
  {
    question: 'What licence do I need?',
    answer:
      'A valid boat licence (Croatian Boat Skipper or recognised international equivalent) plus a VHF licence for boats above the regulated threshold. Bring the originals to check-out.',
  },
  {
    question: 'Can I swim from the boat?',
    answer:
      'Yes — anchor in a safe cove, turn off the engine and always keep one person on board. Never swim near a running propeller.',
  },
];

function SectionBlock({ s, index }: { s: Section; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <section
      id={s.id}
      className={`border-b border-[color:var(--border)] px-4 py-14 md:py-16 ${
        isEven ? 'bg-[color:var(--bg)]' : 'bg-[color:var(--surface)]'
      }`}
    >
      <div className="mx-auto max-w-3xl">
        <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
          {s.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
          {s.title}
        </h2>
        <ul className="mt-6 flex flex-col gap-3">
          {s.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 font-body text-sm leading-relaxed text-[color:var(--white)] md:text-base"
            >
              <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {s.note && (
          <p className="mt-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-4 font-body text-sm leading-relaxed text-[color:var(--gray)]">
            {s.note}
          </p>
        )}
      </div>
    </section>
  );
}

function AccordionItem({
  question,
  children,
  defaultOpen = false,
}: {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      {...(defaultOpen ? { open: true } : {})}
      className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 transition-colors duration-300 open:bg-[color:var(--surface)]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 md:text-lg">
        <span>{question}</span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--accent)] transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 font-body text-sm leading-relaxed text-[color:var(--gray)] md:text-base">
        {children}
      </div>
    </details>
  );
}

export default function LandingRentalPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-20 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, rgba(59,201,219,0.18) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Boat Rental · House rules
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
            Boat Rental — Important Rules
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            We want you to have fun and stay safe. Six short sections cover everything that
            matters before you leave the harbour.
          </p>
        </div>
      </section>

      {/* 6 sections */}
      {sections.map((s, i) => (
        <SectionBlock key={s.id} s={s} index={i} />
      ))}

      {/* Scooter rental — Explore by land too */}
      <section
        id="scooter-rental"
        className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at top left, rgba(59,201,219,0.10) 0%, transparent 55%)',
        }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Explore by land too
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Scooter Rental Hvar
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            You have seen the coast from the water. Now explore the island. 6 scooters available —
            pick up at Hvar Harbour, same spot as your boat tour. Perfect for Hvar Town, Stari
            Grad, Jelsa and the lavender fields.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
              <p className="font-display text-2xl font-bold text-[color:var(--accent)]">€50</p>
              <p className="mt-1 font-body text-sm text-[color:var(--gray)]">Full day</p>
            </div>
            <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
              <p className="font-display text-2xl font-bold text-[color:var(--accent)]">€40</p>
              <p className="mt-1 font-body text-sm text-[color:var(--gray)]">Half day (PM)</p>
            </div>
            <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
              <p className="font-display text-2xl font-bold text-[color:var(--accent)]">€30</p>
              <p className="mt-1 font-body text-sm text-[color:var(--gray)]">Half day (AM)</p>
            </div>
          </div>

          <ul className="mt-6 flex flex-col gap-3">
            {[
              '6 scooters available — book early in peak season',
              'Valid driver\u2019s license required (car licence accepted for 50cc)',
              'Pickup at Hvar Harbour, same meeting point as the boat tours',
              'Helmets and basic safety briefing included',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 font-body text-sm leading-relaxed text-[color:var(--white)] md:text-base"
              >
                <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20rent%20a%20scooter%20in%20Hvar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
            >
              <WhatsAppIcon />
              Book a Scooter
            </a>
            <Link
              href="/rentals"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              More details
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Common questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
            Rental FAQ
          </h2>

          <div className="mt-8 space-y-3">
            {rentalFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} question={faq.question} defaultOpen={i === 0}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Questions?
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Call Nikola Before You Leave
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Anything unclear? Anything odd about the boat? Message us before you set off — we
            always reply fast.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]"
            >
              <WhatsAppIcon />
              Message on WhatsApp
            </a>
            <Link
              href="/landing/explore"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              See Our Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
