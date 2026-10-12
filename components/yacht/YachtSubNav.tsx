'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getMotion, prefersReducedMotion } from '@/lib/yacht-motion';
import { YACHT_BASE, YACHT_REQUEST_PATH } from '@/lib/yacht-data';

const LINKS = [
  { href: `${YACHT_BASE}/`, label: 'The yacht', note: 'Overview' },
  { href: `${YACHT_BASE}/blue-cave-half-day/`, label: 'Blue Cave half day', note: 'Biševo and back' },
  { href: `${YACHT_BASE}/boat-tour-with-lunch/`, label: 'Lunch on board', note: 'Cooked by Juli' },
  { href: YACHT_REQUEST_PATH, label: 'Request 2027', note: 'Nothing to pay now' },
];

/**
 * Section-only navigation for /private-yacht-hvar/*. Sits under the global
 * NavBar (which stays untouched) and opens a full-screen menu.
 */
export function YachtSubNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Esc to close, lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      buttonRef.current?.focus();
    };
  }, [open]);

  // Staggered entrance of the menu items
  useEffect(() => {
    const el = overlayRef.current;
    if (!open || !el || prefersReducedMotion()) return;
    const { gsap } = getMotion();
    const ctx = gsap.context(() => {
      gsap.from('[data-menu-item]', {
        yPercent: 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.07,
      });
    }, el);
    return () => ctx.revert();
  }, [open]);

  const isRequest = pathname?.startsWith(YACHT_REQUEST_PATH.replace(/\/$/, ''));

  return (
    <>
      <div className="no-print sticky top-16 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-3 px-4 md:px-6">
          <Link
            href={`${YACHT_BASE}/`}
            className="truncate font-body text-xs font-medium uppercase tracking-[0.24em] text-[color:var(--white)] transition-colors hover:text-[color:var(--accent)]"
          >
            Private yacht <span className="text-[color:var(--accent)]">· 2027</span>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            {!isRequest && (
              <Link
                href={YACHT_REQUEST_PATH}
                className="rounded-pill bg-[color:var(--accent)] px-4 py-1.5 font-body text-xs font-semibold text-[color:var(--bg)] transition-colors hover:bg-[color:var(--white)]"
              >
                Request 2027
              </Link>
            )}
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="yacht-menu"
              className="rounded-pill border border-[color:var(--border)] px-4 py-1.5 font-body text-xs font-semibold text-[color:var(--white)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="yacht-menu"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Private yacht menu"
          className="fixed inset-0 z-[70] flex flex-col bg-[color:var(--bg)]"
        >
          <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 md:px-6">
            <span className="font-body text-xs font-medium uppercase tracking-[0.24em] text-[color:var(--gray)]">
              MareBoats Hvar · Private yacht
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              autoFocus
              className="rounded-pill border border-[color:var(--border)] px-4 py-1.5 font-body text-xs font-semibold text-[color:var(--white)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Close
            </button>
          </div>
          <nav className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 md:px-6">
            <ul className="space-y-2 md:space-y-4">
              {LINKS.map((l) => {
                const active = pathname === l.href || pathname === l.href.replace(/\/$/, '');
                return (
                  <li key={l.href} className="overflow-hidden">
                    <Link
                      data-menu-item
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between gap-6 border-b border-[color:var(--border)] py-4"
                    >
                      <span
                        className={`font-display text-3xl font-bold tracking-[-0.03em] transition-colors md:text-6xl ${
                          active ? 'text-[color:var(--accent)]' : 'text-[color:var(--white)] group-hover:text-[color:var(--accent)]'
                        }`}
                      >
                        {l.label}
                      </span>
                      <span className="hidden font-body text-sm text-[color:var(--gray)] sm:inline">{l.note}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              data-menu-item
              href="/"
              onClick={() => setOpen(false)}
              className="mt-10 font-body text-sm text-[color:var(--gray)] transition-colors hover:text-[color:var(--white)]"
            >
              Back to all MareBoats Hvar tours
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
