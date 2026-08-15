import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crew Handbook - MareBoats',
  robots: { index: false, follow: false, nocache: true },
};

function AccordionSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 transition-colors duration-300 open:bg-[color:var(--surface)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 md:text-lg">
        <span>{title}</span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--accent)] transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 pt-1 font-body text-sm leading-relaxed text-[color:var(--gray)] md:text-base">
        {children}
      </div>
    </details>
  );
}

export default function CrewHandbookPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--white)]">
      {/* Fixed internal banner */}
      <div className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/95 px-4 py-2 backdrop-blur-sm">
        <p className="mx-auto max-w-container font-body text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
          Internal document. Not for guests.
        </p>
      </div>

      <main className="mx-auto max-w-container px-4 py-16 md:py-20">
        {/* Header */}
        <header className="mb-12 max-w-2xl">
          <h1 className="font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            Crew Handbook
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            This is how we work. Read it once properly, then use it as a reference.
          </p>
          <p className="mt-2 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            None of this is here to control you. It is here so that everyone knows what to expect,
            and so nobody gets blamed for something they did not do.
          </p>
        </header>

        {/* Sections */}
        <div className="flex flex-col gap-3">
          <AccordionSection title="The ten rules">
            <ol className="space-y-3 pt-1">
              {[
                'Everything in writing. No voice notes. If it is not written, it did not happen.',
                'Read the announcements every morning before you leave the dock.',
                'Post in the right channel. If you are not sure which one, use General.',
                'Bookings live in the booking system. Check the app before you promise anything to a guest.',
                'Never quote a price you are not sure about. Ask.',
                'Report damage the same day, with a photo and the name of the boat. Nobody gets in trouble for a real problem. Only for hiding one.',
                'If you report a boat as ready and it was not, you fix it first thing the next morning, before anyone sails.',
                'Whatever cannot be fixed at night gets fixed at first light, before anyone leaves.',
                'All guest communication goes through the company number. Never your personal one.',
                'Do not post photos of guests. Raw photos and video go to the media channel.',
              ].map((rule, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-display text-sm font-bold text-[color:var(--accent)]">
                    {i + 1}.
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 border-t border-[color:var(--border)] pt-4">
              If you cannot cover a shift, say so as early as you can. Not the same morning.
            </p>
            <p className="mt-2">
              This handbook is internal. Nothing from here leaves the team.
            </p>
          </AccordionSection>

          <AccordionSection title="Morning routine">
            <p className="pt-1">Before the first tour leaves:</p>
            <ul className="mt-3 space-y-2">
              {[
                'Engines started and checked. Confirmed in writing.',
                'Ice, water and drinks loaded on every boat and in the barrel fridge. Drinks were stocked the night before, so in the morning you only add ice.',
                'Barrel open.',
                'Every skipper checks their own safety equipment before leaving.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Closing your boat">
            <p className="pt-1">
              Every skipper closes their own boat and reports it in writing before leaving the dock.
              One message per boat.
            </p>
            <p className="mt-3">What gets checked, in order:</p>
            <ul className="mt-2 space-y-2">
              {[
                'Propeller, no damage',
                'Distance from the dock correct',
                'Bilge pump working',
                'Fenders in place',
                'Mooring lines tight and correct',
                'Tube pressure ok',
                'Fridge stocked for tomorrow',
                'Fridge drained, no water inside',
                'Keys stored',
                'Electricity off',
                'Fuel level noted',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              After that, one person walks the fleet, confirms the reports match what is actually
              there, closes whatever is missing, and posts that the fleet is closed.
            </p>
            <p className="mt-2">
              Anything that cannot be fixed that night gets fixed at first light the next day,
              before anyone sails.
            </p>
          </AccordionSection>

          <AccordionSection title="On the water">
            <div className="space-y-3 pt-1">
              <p>
                Meeting point is Beach Križa, at the MareBoats barrel below Beach Bay Hvar Hotel.
                Three minutes from the ferry port, walking toward the Franciscan Monastery. Never
                send a guest to the main harbour dock.
              </p>
              <p>We call them speedboats. Never RIBs.</p>
              <p>
                Licensed for 12, we cap at 8. Do not mention 12 without that context.
              </p>
              <p>
                Glass bottles are allowed. Food is allowed. No smoking. There is no toilet on board.
              </p>
              <p>
                Guests choose where they sit. There are no assigned seats and there is shade and sun
                available.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection title="Talking to guests">
            <div className="space-y-3 pt-1">
              <p>Be specific. Guests trust detail, not adjectives.</p>
              <p>
                Give them times and place names, not promises. &quot;Forty five minutes to the
                cave&quot; beats &quot;an amazing journey&quot;.
              </p>
              <p>
                If you do not know something, say you will check. Do not guess. A wrong answer given
                confidently is worse than a slow one.
              </p>
              <p>
                If a guest asks about a price you are not certain about, check before you answer.
              </p>
            </div>
          </AccordionSection>
        </div>
      </main>
    </div>
  );
}
