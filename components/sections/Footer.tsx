import Link from 'next/link';
import Image from 'next/image';

const tourLinks = [
  { href: '/tours/blue-cave-pakleni-islands', label: 'Blue Cave & Islands' },
  { href: '/tours/pakleni-islands', label: 'Pakleni Islands' },
  { href: '/tours/sunset-cruise', label: 'Sunset Cruise' },
  { href: '/tours/private-boat-charter', label: 'Private Charter' },
];

const infoLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const MAPS_URL = 'https://maps.google.com/?q=43.1729,16.4413';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070f18] text-[color:var(--white)]">
      <div className="mx-auto max-w-container px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/img/mareboats-logo-horizontal.svg"
                alt="Mare Boats Hvar logo"
                width={200}
                height={26}
                className="h-10 w-auto object-contain object-left"
              />
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-[color:var(--gray)]">
              Private boat tours, Blue Cave excursions and transfers from Hvar Harbour, Croatia.
              Aerial drone &amp; underwater video included on every trip.
            </p>
          </div>

          {/* Tours */}
          <nav aria-label="Tours" className="font-body">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--white)]">
              Tours
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {tourLinks.map((link) => (
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
                Hvar Harbour, Croatia
              </a>
              <a
                href="tel:+385951966734"
                className="transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
              >
                +385 95 196 6734
              </a>
              <a
                href="mailto:mare.boatshvar@gmail.com"
                className="transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline active:opacity-90"
              >
                mare.boatshvar@gmail.com
              </a>
              <span>Daily 8:00 AM – 8:00 PM (May–September)</span>
            </address>

            <ul className="mt-5 flex items-center gap-3">
              <li>
                <a
                  href="https://www.instagram.com/mareboats.hvar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Mare Boats Hvar on Instagram"
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
                {/* TODO: replace with the real TikTok URL */}
                <a
                  href="#"
                  aria-label="Mare Boats Hvar on TikTok"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--white)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M19.5 7.6a6.7 6.7 0 0 1-3.9-1.25v8.55a5.6 5.6 0 1 1-5.6-5.6c.31 0 .61.03.9.08v2.7a2.9 2.9 0 1 0 2 2.76V2.5h2.7a4.7 4.7 0 0 0 3.9 4.6v0.5z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--border)] pt-6 font-body text-xs text-[color:var(--gray)] md:flex-row md:items-center">
          <span>© {year} MareBoats Tours Hvar. All rights reserved.</span>
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
              Photos &amp; drone footage by{' '}
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
