import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact Mare Boats Hvar | Book on WhatsApp',
  description:
    'Book a private boat tour from Hvar, Croatia. Message Mare Boats on WhatsApp — we reply within the hour during the season.',
  keywords: [
    'contact mare boats hvar',
    'book boat tour hvar',
    'mare boats hvar whatsapp',
    'hvar boat tour booking',
  ],
  slug: 'contact',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour%20with%20Mare%20Boats%20Hvar.';
const MAPS_URL = 'https://maps.app.goo.gl/U6kgAaRG81KZmqUEA';

const quickLinks = [
  { label: 'Blue Cave Tour', href: '/blue-cave' },
  { label: 'Boat Rental', href: '/boat-rental' },
  { label: 'Transfers', href: '/transfers' },
  { label: 'Sunset Cruise', href: '/sunset' },
];

export default function ContactPage() {
  return (
    <main className="bg-[color:var(--bg)]">
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Booking
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl lg:text-6xl">
            Book on WhatsApp
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            One message. Tell us your date and group size — we reply within the hour during the season.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-6 rounded-2xl border border-[color:var(--accent)]/40 bg-[color:var(--surface)] p-8 shadow-[0_18px_44px_rgba(59,201,219,0.18)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(59,201,219,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:translate-y-0"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                WhatsApp
              </h2>
              <p className="mt-2 font-body text-base font-semibold text-[color:var(--accent)]">
                +385 95 196 6734
              </p>
              <p className="mt-1 font-body text-sm text-[color:var(--gray)]">
                Daily 8:00–20:00 · We reply within the hour
              </p>
            </div>
            <span className="mt-auto inline-flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 group-hover:bg-[color:var(--accent-dk)] group-hover:text-[color:var(--white)]">
              Open WhatsApp
            </span>
          </a>

          <div className="flex flex-col gap-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                Where we meet
              </h2>
              <p className="mt-2 font-body text-base text-[color:var(--white)]">
                Hvar Harbour, Croatia (21450)
              </p>
              <p className="mt-1 font-body text-sm text-[color:var(--gray)]">
                Exact pier confirmed by WhatsApp before your tour.
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-5 py-2.5 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              Open in Google Maps →
            </a>
            <ul className="mt-2 space-y-2 font-body text-sm text-[color:var(--gray)]">
              <li>Languages: English, Croatian, Italian, Spanish.</li>
              <li>Up to 8 guests · private boat only.</li>
              <li>Season: May–September.</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Quick links
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
            What would you like to book?
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-center font-body text-sm font-medium text-[color:var(--white)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:opacity-90"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
