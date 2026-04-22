'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BUSINESS_INFO } from '@/lib/tours-data';

const MAPS_URL = BUSINESS_INFO.googleMapsUrl;
const WA_BOOK = 'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour';
const INSTAGRAM = 'https://www.instagram.com/mareboats.hvar/';

const exploreLinks = [
  { href: '/tours', label: 'Tours' },
  { href: '/rentals', label: 'Rentals' },
  { href: '/transfers', label: 'Transfers' },
  { href: '/guide', label: 'Guide' },
];

const infoLinks = [
  { href: '/about', label: 'About' },
  { href: '/on-tour', label: 'On Tour' },
  { href: '/guide#weather', label: 'Weather Policy' },
];

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname?.startsWith('/qr')) return null;

  return (
    <footer className="no-print bg-[#070f18] text-[color:var(--white)]">
      <div className="mx-auto max-w-container px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block" aria-label="MareBoats Hvar — home">
              <Image
                src="/img/mareboats-logo-horizontal.svg"
                alt="MareBoats Hvar"
                width={200}
                height={26}
                className="h-10 w-auto object-contain object-left"
              />
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-[color:var(--gray)]">
              Private boat tours, transfers and rentals from Hvar Harbour, Croatia. Local skipper,
              icebox and snorkeling masks on every trip.
            </p>

            <ul className="mt-5 flex items-center gap-3">
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow MareBoats Hvar on Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--white)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={WA_BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp MareBoats Hvar"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--white)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Explore" className="font-body">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--white)]">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color:var(--gray)] transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Info */}
          <nav aria-label="Info" className="font-body">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--white)]">
              Info
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[color:var(--gray)] transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={WA_BOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[color:var(--gray)] transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
                >
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          {/* Find us */}
          <div className="font-body">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--white)]">
              Find Us
            </h3>
            <address className="mt-4 flex flex-col gap-3 not-italic text-sm text-[color:var(--gray)]">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
              >
                MareBoats barrel · Hvar Harbour
              </a>
              <a
                href={WA_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
              >
                WhatsApp +385 95 196 6734
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
              >
                @mareboats.hvar
              </a>
              <span>Daily May–September · replies within 1h</span>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--border)] pt-6 font-body text-xs text-[color:var(--gray)] md:flex-row md:items-center">
          <span>© {year} MareBoats Hvar. All rights reserved.</span>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <span>
              Designed by{' '}
              <a
                href="https://somoskosmos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
              >
                SomosKosmos
              </a>
            </span>
            <span>
              Photos &amp; drone by{' '}
              <a
                href="https://skyshotlab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
              >
                SkyShot Lab
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
