'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Tours', href: '/tours' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Transfers', href: '/transfers' },
  { label: 'Guide', href: '/guide' },
  { label: 'About', href: '/about' },
] as const;

const CTA = {
  label: 'Book Now',
  href: 'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour',
};

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, pct)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Full-screen experiences (QR hub) render without the site chrome.
  if (pathname?.startsWith('/qr')) return null;

  return (
    <header
      className={`no-print sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-[color:var(--bg)]/90 border-[color:var(--border)] backdrop-blur-xl shadow-[0_10px_30px_rgba(59,201,219,0.16)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[60] h-0.5 bg-[color:var(--accent)] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="MareBoats Hvar — home">
          <Image
            src="/img/mareboats-logo-horizontal.svg"
            alt="Mare Boats Hvar"
            width={260}
            height={34}
            className="h-9 w-auto object-contain object-left drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-block font-display text-[0.78rem] font-medium uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline-none ${
                    active
                      ? 'text-[color:var(--accent)]'
                      : 'text-[color:var(--white)]/85 hover:text-[color:var(--accent)] focus-visible:text-[color:var(--accent)]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-[color:var(--accent)]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={CTA.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-pill bg-[color:var(--accent)] px-5 py-2.5 font-display text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--bg)] shadow-[0_8px_26px_rgba(59,201,219,0.25)] transition-[transform,background-color,color] duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:translate-y-0 md:inline-flex"
        >
          {CTA.label}
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--white)]/20 text-[color:var(--white)] transition-colors duration-200 hover:border-[color:var(--accent)]/70 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
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
        <div
          id="mobile-nav"
          className="border-t border-[color:var(--border)] bg-[color:var(--bg)]/95 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl border px-4 py-3 font-display text-sm font-medium uppercase tracking-[0.08em] transition-[background-color,border-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 ${
                      active
                        ? 'border-[color:var(--accent)]/50 bg-[color:var(--surface)] text-[color:var(--accent)]'
                        : 'border-transparent text-[color:var(--white)]/90 hover:border-[color:var(--border)] hover:bg-[color:var(--surface)] hover:text-[color:var(--accent)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={CTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center rounded-pill bg-[color:var(--accent)] px-4 py-3 font-display text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--bg)] shadow-[0_8px_26px_rgba(59,201,219,0.25)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)]"
          >
            {CTA.label}
          </a>
        </div>
      )}
    </header>
  );
}
