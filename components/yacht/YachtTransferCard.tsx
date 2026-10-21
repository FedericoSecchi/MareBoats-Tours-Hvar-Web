// Private yacht transfer card for /transfers/. Rendered only when
// SHOW_YACHT_LINKS (production: YACHT_SECTION_LIVE). Not part of the
// transfers itemListSchema until the price exists.

import Image from 'next/image';
import Link from 'next/link';
import { formatYachtFrom } from '@/lib/pricing';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { YACHT_BASE, YACHT_REQUEST_PATH, photo, yachtWhatsAppUrl } from '@/lib/yacht-data';

const IMG = photo('transfer', {
  src: '/images/destinations/hvar-old-town-aerial-spanjola-drone-2026-01.jpg',
  alt: 'Hvar old town and the Spanjola fortress from above',
});

export function YachtTransferCard() {
  const price = formatYachtFrom('transfer');
  return (
    <div id="yacht-transfer" className="mx-auto mt-10 max-w-container scroll-mt-24">
      <article className="grid overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
          <Image
            src={IMG.src}
            alt={IMG.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-pill bg-[color:var(--white)] px-3 py-1 font-body text-xs font-semibold text-[color:var(--bg)]">
            New for 2027
          </span>
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-[color:var(--white)]">
            Private yacht transfer
          </h2>
          <p className="font-body text-base leading-relaxed text-[color:var(--gray)]">
            Split or Split Airport to Hvar on our new yacht for 2027: shade for every seat and a bathroom
            on board for the crossing. Up to 8 guests. Requests are open for April to October 2027.
          </p>
          {price && <span className="font-body text-sm font-semibold text-[color:var(--accent)]">{price}</span>}
          <div className="mt-auto flex flex-col gap-2 sm:flex-row">
            <Link
              href={`${YACHT_REQUEST_PATH}?experience=transfer`}
              className="inline-flex flex-1 items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--bg)] transition-colors duration-300 hover:bg-[color:var(--white)]"
            >
              Request a date
            </Link>
            <WhatsAppTrackedLink
              href={yachtWhatsAppUrl('transfer')}
              label="transfers_yacht"
              ctaText="Ask on WhatsApp"
              pageSection="premium"
              experience="transfer"
              className="inline-flex flex-1 items-center justify-center rounded-pill border border-[color:var(--accent)] px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-[color:var(--accent)] transition-colors duration-300 hover:bg-[rgba(59,201,219,0.1)]"
            >
              Ask on WhatsApp
            </WhatsAppTrackedLink>
          </div>
          <Link href={`${YACHT_BASE}/`} className="font-body text-sm text-[color:var(--gray)] transition-colors hover:text-[color:var(--white)]">
            More about the yacht &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
}
