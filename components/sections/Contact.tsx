'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { fadeInUpContainer } from '@/lib/motion';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20boat%20tour%20from%20Hvar.';
const MAPS_URL = 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA';

export default function Contact() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="bg-[color:var(--bg)] py-20 px-4 md:py-24">
      <motion.div
        className="mx-auto max-w-container"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInUpContainer}
      >
        <div className="mb-10 max-w-2xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Booking
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Tell Us Your Date
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Send a message with your date and group size. We reply fast — usually within the hour.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* WhatsApp primary CTA card */}
          <WhatsAppTrackedLink
            href={WA_URL}
            label="contact_section"
            className="group flex flex-col justify-between gap-8 rounded-2xl border border-[color:var(--accent)]/40 bg-[color:var(--surface)] p-8 shadow-[0_18px_44px_rgba(59,201,219,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(59,201,219,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:translate-y-0 md:p-10"
          >
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Fastest channel
                </p>
                <h3 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)] md:text-4xl">
                  Book on WhatsApp
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-[color:var(--gray)]">
                  Share your date, group size and the tour you want. We reply within the hour during the season.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-[color:var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-body text-base font-semibold text-[color:var(--white)]">
                +385 95 196 6734
              </span>
              <span className="inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 group-hover:bg-[color:var(--accent-dk)] group-hover:text-[color:var(--white)]">
                Open WhatsApp
              </span>
            </div>
          </WhatsAppTrackedLink>

          {/* Quick info aside */}
          <aside className="flex flex-col gap-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-8">
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
                Quick info
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Before you write
              </h3>
            </div>

            <ul className="flex flex-col gap-5 font-body text-sm text-[color:var(--white)]">
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
                  Meeting point
                </span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[color:var(--white)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
                >
                  Hvar Harbour, Croatia →
                </a>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
                  Reply time
                </span>
                <span>Usually within 1 hour, daily 8:00–20:00 (May–Sep).</span>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
                  Languages
                </span>
                <span>English, Croatian, Italian, Spanish.</span>
              </li>

              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--gray)]">
                  Group size
                </span>
                <span>Up to 8 guests on a private boat — no shared tours.</span>
              </li>
            </ul>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}
