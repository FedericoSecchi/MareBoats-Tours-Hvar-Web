'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  { href: '/tours', label: 'Tours' },
  { href: '/blue-cave', label: 'Blue Cave' },
  { href: '/boat-rental', label: 'Boat Rental' },
  { href: '/transfers', label: 'Transfers' },
  { href: '/sunset', label: 'Sunset' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27m%20interested%20in%20a%20boat%20tour.';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-[color:var(--bg)]/90 border-[color:var(--border)] backdrop-blur-xl shadow-[0_10px_30px_rgba(59,201,219,0.16)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/img/logo_mare_boats_hvar-letters.png"
            alt="Mare Boats Hvar"
            width={140}
            height={40}
            className="h-9 w-auto object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm font-medium text-[color:var(--white)]/80 transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:text-[color:var(--accent)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-pill border border-transparent bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--bg)] shadow-[0_8px_26px_rgba(59,201,219,0.25)] transition-[transform,background-color,color] duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:translate-y-0 md:inline-flex"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Book Now
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--white)]/20 text-[color:var(--white)] transition-colors duration-200 hover:border-[color:var(--accent)]/70 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
              open ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
              open ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--bg)]/95 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden">
          <ul className="space-y-1.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-transparent px-3 py-2.5 font-body text-sm font-medium text-[color:var(--white)]/90 transition-[background-color,border-color,color] duration-200 hover:border-[color:var(--border)] hover:bg-[color:var(--surface)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--bg)] shadow-[0_8px_26px_rgba(59,201,219,0.25)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)]"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
