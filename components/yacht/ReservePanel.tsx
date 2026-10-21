// "Reserve your experience" panel (Coti's design): photo with title on the left,
// the 2027 request form on the right. Server wrapper; the form is the client part.

import Image from 'next/image';
import { YachtRequestForm } from './YachtRequestForm';

export function ReservePanel({
  defaultExperience,
  image = {
    src: '/images/destinations/hvar-pakleni-islands-hidden-cove-drone-2026-03.jpg',
    alt: 'A quiet cove in the Pakleni Islands from above',
  },
}: {
  defaultExperience?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <section
      id="reserve"
      className="scroll-mt-28 border-t border-[rgba(245,240,232,0.08)] bg-[color:var(--bg)] px-4 py-20 md:px-20 md:py-[104px]"
    >
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-2xl border border-[rgba(245,240,232,0.08)] bg-[color:var(--surface)] lg:grid-cols-[600fr_680fr]">
        <div className="relative min-h-[320px] lg:min-h-full">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0a1a2e]/90 via-[#0a1a2e]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <h2 className="font-serif text-[2.5rem] leading-[1.05] text-[color:var(--white)] md:text-[3.75rem]">
              Request your date
            </h2>
            <p className="mt-3 font-body text-[15px] text-[color:var(--accent)]">Season April to October 2027</p>
          </div>
        </div>
        <div className="p-6 md:p-10">
          <p className="mb-6 font-body text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]">
            Request for 2027
          </p>
          <YachtRequestForm defaultExperience={defaultExperience} />
        </div>
      </div>
    </section>
  );
}
