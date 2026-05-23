'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { trackWhatsAppClick } from '@/lib/analytics';

const WHATSAPP_URL =
  'https://wa.me/385951966734?text=Hi!%20I%27d%20like%20to%20book%20a%20tour';

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Tours', href: '/tours' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Transfers', href: '/transfers' },
  { label: 'Guide', href: '/guide' },
  { label: 'About', href: '/about' },
];

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (pathname?.startsWith('/qr')) return null;

  return (
    <header
      className={`no-print sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? 'bg-[color:var(--bg)]/90 border-[color:var(--border)] backdrop-blur-xl shadow-[0_10px_30px_rgba(59,201,219,0.08)]'
          : 'bg-[color:var(--bg)] border-[color:var(--border)]'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[60] h-0.5 bg-[color:var(--accent)] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav className="mx-auto flex h-16 w-full max-w-container items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="MareBoats Hvar — home">
          <Image
            src="/img/mareboats-logo-horizontal.svg"
            alt="Mare Boats Hvar"
            width={200}
            height={26}
            className="h-7 w-auto object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative inline-block font-body text-[0.8rem] font-medium uppercase tracking-[0.07em] transition-colors duration-200 focus-visible:outline-none ${
                    active
                      ? 'text-[color:var(--accent)]'
                      : 'text-[color:var(--white)]/75 hover:text-[color:var(--white)] focus-visible:text-[color:var(--accent)]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[color:var(--accent)]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[color:var(--accent)] px-5 py-2 font-body text-[0.8rem] font-semibold text-[#0d1b2a] transition-[background-color] duration-200 hover:bg-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
              onClick={() =>
                trackWhatsAppClick({ cta_text: 'Book Now', section: 'navbar' })
              }
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="group relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-[color:var(--white)] transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
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

      {/* Mobile menu — fullscreen overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 z-40 flex flex-col bg-[color:var(--bg)] transition-[opacity,transform] duration-300 lg:hidden ${
          open
            ? 'pointer-events-auto opacity-100 translate-y-0'
            : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col divide-y divide-[color:var(--border)] px-6 pt-4">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center py-4 font-body text-lg font-medium uppercase tracking-[0.07em] transition-colors duration-200 focus-visible:outline-none ${
                    active
                      ? 'text-[color:var(--accent)]'
                      : 'text-[color:var(--white)]/80 hover:text-[color:var(--white)]'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="ml-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="pt-6 pb-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-2xl bg-[color:var(--accent)] px-6 py-4 font-body text-base font-semibold text-[#0d1b2a] transition-[background-color] duration-200 hover:bg-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
              onClick={() => {
                trackWhatsAppClick({ cta_text: 'Book Now', section: 'navbar_mobile' });
                setOpen(false);
              }}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
