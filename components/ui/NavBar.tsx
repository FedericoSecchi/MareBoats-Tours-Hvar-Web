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
  { label: 'Explore', href: '/explore' },
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
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-2 font-body text-[0.8rem] font-semibold text-[#0d1b2a] transition-[background-color,opacity] duration-200 hover:bg-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
            onClick={() =>
              trackWhatsAppClick({
                cta_text: 'Book via WhatsApp',
                section: 'navbar',
              })
            }
          >
            {/* WhatsApp icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </a>
        </div>

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
        </ul>

        {/* Mobile CTA */}
        <div className="px-6 pt-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--accent)] px-6 py-4 font-body text-base font-semibold text-[#0d1b2a] transition-[background-color] duration-200 hover:bg-[color:var(--accent-dk)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60"
            onClick={() => {
              trackWhatsAppClick({
                cta_text: 'Book via WhatsApp',
                section: 'navbar_mobile',
              });
              setOpen(false);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
