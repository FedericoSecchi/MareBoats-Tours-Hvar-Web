'use client';

import { useState, useMemo } from 'react';
import {
  TOUR_PRICES,
  RENTAL_SELF_DRIVE,
  RENTAL_WITH_SKIPPER_FROM,
  EXTRAS,
  ADDONS,
  TRANSFER_PRICES,
} from '@/lib/pricing';

// ─── Types ────────────────────────────────────────────────────────────────────

type SiteExtra = { name: string; price: number };

type Pricing =
  | { kind: 'shared-private'; shared: number; priv: number }
  | { kind: 'shared-half-full'; shared: number; half: number; full: number }
  | { kind: 'private-only'; price: number; fuelExtra: boolean }
  | { kind: 'transfer'; splitHvar: number; airportHvar: number }
  | { kind: 'rental-drive'; pricePerDay: number; fuelIncluded: boolean; licenceRequired: boolean; licenceNote?: string }
  | { kind: 'rental-skipper'; from: number }
  | { kind: 'on-request' };

type Service = {
  id: string;
  category: 'tour' | 'rental' | 'transfer';
  name: string;
  duration: string;
  maxCapacity: number;
  includes: string[];
  notIncludes: string[];
  siteExtras: SiteExtra[];
  addonScooter: boolean;
  addonPhotoVideo: boolean;
  notes: string[];
  pricing: Pricing;
};

type QuoteMode = 'shared' | 'private' | 'half' | 'full' | 'split-hvar' | 'airport-hvar';
type Category = 'all' | 'tour' | 'rental' | 'transfer';

// ─── Service data ─────────────────────────────────────────────────────────────

const T = TOUR_PRICES;
const R = RENTAL_SELF_DRIVE;

const SERVICES: Service[] = [
  // TOURS
  {
    id: 'blue-cave',
    category: 'tour',
    name: '5 Islands · Blue Cave',
    duration: '7 h · departs 10:00',
    maxCapacity: 8,
    includes: ['Boat & skipper', 'Fuel', 'Bottled water', 'Snorkel gear (limited)', 'Cooler with ice'],
    notIncludes: ['Lunch (restaurants at Pakleni / Palmizana, budget €15–25)'],
    siteExtras: [
      { name: 'Blue Cave entrance', price: EXTRAS.blueCave },
      { name: 'Green Cave entrance', price: EXTRAS.greenCave },
    ],
    addonScooter: true,
    addonPhotoVideo: true,
    notes: [],
    pricing: {
      kind: 'shared-private',
      shared: T['blue-cave-pakleni-islands'].sharedPerPerson!,
      priv: T['blue-cave-pakleni-islands'].private!,
    },
  },
  {
    id: 'red-rocks',
    category: 'tour',
    name: 'Red Rocks & Pakleni',
    duration: '4 h half-day · 6 h full-day',
    maxCapacity: 8,
    includes: ['Boat & skipper', 'Fuel', 'Snorkel gear', 'Cooler'],
    notIncludes: ['Lunch (restaurants at Pakleni)'],
    siteExtras: [],
    addonScooter: true,
    addonPhotoVideo: true,
    notes: [],
    pricing: {
      kind: 'shared-half-full',
      shared: T['red-rocks-pakleni-islands'].sharedPerPerson!,
      half: T['red-rocks-pakleni-islands'].privateHalfDay!,
      full: T['red-rocks-pakleni-islands'].privateFullDay!,
    },
  },
  {
    id: 'pakleni',
    category: 'tour',
    name: 'Pakleni Islands',
    duration: '3–4 h',
    maxCapacity: 8,
    includes: ['Boat & skipper', 'Fuel'],
    notIncludes: [],
    siteExtras: [],
    addonScooter: true,
    addonPhotoVideo: true,
    notes: [],
    pricing: { kind: 'on-request' },
  },
  {
    id: 'sunset',
    category: 'tour',
    name: 'Sunset Cruise',
    duration: '~2 h · evening',
    maxCapacity: 8,
    includes: ['Boat & skipper', 'Fuel'],
    notIncludes: [],
    siteExtras: [],
    addonScooter: false,
    addonPhotoVideo: true,
    notes: ['No scooter — evening tour'],
    pricing: { kind: 'private-only', price: T['sunset-cruise'].private!, fuelExtra: false },
  },
  {
    id: 'charter',
    category: 'tour',
    name: 'Private Charter',
    duration: 'Full day · custom',
    maxCapacity: 8,
    includes: ['Boat & skipper'],
    notIncludes: ['Fuel (agree with Nikola at booking)'],
    siteExtras: [],
    addonScooter: true,
    addonPhotoVideo: true,
    notes: ['Fuel not fixed — discuss with Nikola'],
    pricing: { kind: 'private-only', price: T['private-boat-charter'].private!, fuelExtra: true },
  },
  // RENTALS
  {
    id: 'pasara-5hp',
    category: 'rental',
    name: 'Pasara · 5hp',
    duration: 'Half day / Full day',
    maxCapacity: 4,
    includes: ['Boat', 'Fuel'],
    notIncludes: [],
    siteExtras: [],
    addonScooter: false,
    addonPhotoVideo: false,
    notes: ['No licence required'],
    pricing: {
      kind: 'rental-drive',
      pricePerDay: R.pasara5hp.pricePerDay,
      fuelIncluded: R.pasara5hp.fuelIncluded,
      licenceRequired: R.pasara5hp.licenceRequired,
    },
  },
  {
    id: 'pasara-20hp',
    category: 'rental',
    name: 'Pasara · 20hp',
    duration: 'Half day / Full day',
    maxCapacity: 4,
    includes: ['Boat', 'Fuel'],
    notIncludes: [],
    siteExtras: [],
    addonScooter: false,
    addonPhotoVideo: false,
    notes: [],
    pricing: {
      kind: 'rental-drive',
      pricePerDay: R.pasara20hp.pricePerDay,
      fuelIncluded: R.pasara20hp.fuelIncluded,
      licenceRequired: R.pasara20hp.licenceRequired,
      licenceNote: 'Say "ask us about licence" — NEVER "no licence needed"',
    },
  },
  {
    id: 'speedboat-60hp',
    category: 'rental',
    name: 'Speedboat · 60hp',
    duration: 'Full day',
    maxCapacity: 8,
    includes: ['Boat', 'Fuel'],
    notIncludes: [],
    siteExtras: [],
    addonScooter: false,
    addonPhotoVideo: false,
    notes: ['Valid boating licence required'],
    pricing: {
      kind: 'rental-drive',
      pricePerDay: R.speedboat60hp.pricePerDay,
      fuelIncluded: R.speedboat60hp.fuelIncluded,
      licenceRequired: R.speedboat60hp.licenceRequired,
    },
  },
  {
    id: 'mariner-150hp',
    category: 'rental',
    name: 'Speedboat Mariner · 150hp',
    duration: 'Full day',
    maxCapacity: 8,
    includes: ['Boat'],
    notIncludes: ['Fuel — full tank in, full tank out'],
    siteExtras: [],
    addonScooter: false,
    addonPhotoVideo: false,
    notes: ['Valid boating licence required', 'Fuel: full tank in, full tank out'],
    pricing: {
      kind: 'rental-drive',
      pricePerDay: R.mariner150hp.pricePerDay,
      fuelIncluded: R.mariner150hp.fuelIncluded,
      licenceRequired: R.mariner150hp.licenceRequired,
    },
  },
  {
    id: 'rental-skipper',
    category: 'rental',
    name: 'Rental with Skipper',
    duration: 'Half day / Full day',
    maxCapacity: 8,
    includes: ['Boat & skipper', 'Fuel', 'Water', 'Snorkel gear', 'Cooler with ice'],
    notIncludes: [],
    siteExtras: [],
    addonScooter: false,
    addonPhotoVideo: false,
    notes: ['No licence needed', 'Custom route — any of our boats'],
    pricing: { kind: 'rental-skipper', from: RENTAL_WITH_SKIPPER_FROM },
  },
  // TRANSFERS
  {
    id: 'transfer',
    category: 'transfer',
    name: 'Split / Airport Transfer',
    duration: 'Split ~1 h · Airport ~1.5 h',
    maxCapacity: 8,
    includes: ['Private speedboat', 'Direct route'],
    notIncludes: [],
    siteExtras: [],
    addonScooter: false,
    addonPhotoVideo: false,
    notes: ['Hotel pickups: Podstine, Amfora, Riva, Adriana'],
    pricing: {
      kind: 'transfer',
      splitHvar: TRANSFER_PRICES.splitHvar,
      airportHvar: TRANSFER_PRICES.airportHvar,
    },
  },
  {
    id: 'yacht-taxi',
    category: 'transfer',
    name: 'Yacht & Sailboat Taxi',
    duration: 'On demand',
    maxCapacity: 8,
    includes: ['Pickup at vessel', 'Transfer to shore or tour start'],
    notIncludes: [],
    siteExtras: [],
    addonScooter: false,
    addonPhotoVideo: false,
    notes: ['Send coordinates on WhatsApp'],
    pricing: { kind: 'on-request' },
  },
];

// ─── Small shared components ──────────────────────────────────────────────────

function ModeBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-pill px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-wide transition-colors active:scale-95 ${
        active
          ? 'bg-[color:var(--accent)] text-[color:var(--bg)]'
          : 'border border-[color:var(--border)] text-[color:var(--gray)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]'
      }`}
    >
      {children}
    </button>
  );
}

function CounterBtn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] font-body text-xl font-bold text-[color:var(--accent)] transition-colors hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)]/10 active:scale-90"
    >
      {children}
    </button>
  );
}

// ─── PriceDisplay ─────────────────────────────────────────────────────────────

function PriceDisplay({ pricing }: { pricing: Pricing }) {
  if (pricing.kind === 'on-request') {
    return <p className="font-display text-xl font-bold text-amber-300">On request</p>;
  }
  if (pricing.kind === 'rental-skipper') {
    return (
      <p className="font-display text-2xl font-bold text-[color:var(--accent)]">
        from €{pricing.from}
      </p>
    );
  }
  if (pricing.kind === 'shared-private') {
    return (
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        <span>
          <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">Shared</span>
          <span className="font-display text-2xl font-bold text-[color:var(--accent)]">
            €{pricing.shared}<span className="text-sm font-normal">/person</span>
          </span>
        </span>
        <span>
          <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">Private</span>
          <span className="font-display text-2xl font-bold text-[color:var(--accent)]">€{pricing.priv}</span>
        </span>
      </div>
    );
  }
  if (pricing.kind === 'shared-half-full') {
    return (
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        <span>
          <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">Shared</span>
          <span className="font-display text-2xl font-bold text-[color:var(--accent)]">
            €{pricing.shared}<span className="text-sm font-normal">/person</span>
          </span>
        </span>
        <span>
          <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">Private ½ day</span>
          <span className="font-display text-2xl font-bold text-[color:var(--accent)]">€{pricing.half}</span>
        </span>
        <span>
          <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">Private full day</span>
          <span className="font-display text-2xl font-bold text-[color:var(--accent)]">€{pricing.full}</span>
        </span>
      </div>
    );
  }
  if (pricing.kind === 'private-only') {
    return (
      <span>
        <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">Private</span>
        <span className="font-display text-2xl font-bold text-[color:var(--accent)]">
          €{pricing.price}
          {pricing.fuelExtra && (
            <span className="text-sm font-normal text-amber-300"> + fuel</span>
          )}
        </span>
      </span>
    );
  }
  if (pricing.kind === 'transfer') {
    return (
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        <span>
          <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">Split ↔ Hvar</span>
          <span className="font-display text-2xl font-bold text-[color:var(--accent)]">€{pricing.splitHvar}</span>
        </span>
        <span>
          <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">Airport ↔ Hvar</span>
          <span className="font-display text-2xl font-bold text-[color:var(--accent)]">€{pricing.airportHvar}</span>
        </span>
      </div>
    );
  }
  if (pricing.kind === 'rental-drive') {
    return (
      <span>
        <span className="block font-body text-[10px] uppercase tracking-[0.12em] text-[color:var(--gray)]">
          Self-drive · {pricing.licenceRequired ? 'licence required' : 'no licence needed'}
        </span>
        <span className="font-display text-2xl font-bold text-[color:var(--accent)]">
          €{pricing.pricePerDay}<span className="text-sm font-normal">/day</span>
          {!pricing.fuelIncluded && (
            <span className="text-sm font-normal text-amber-300"> + fuel</span>
          )}
        </span>
      </span>
    );
  }
  return null;
}

// ─── QuoteBuilder ─────────────────────────────────────────────────────────────

function QuoteBuilder({ service }: { service: Service }) {
  const { pricing, siteExtras, addonScooter, addonPhotoVideo, name, maxCapacity } = service;

  const initMode = (): QuoteMode => {
    if (pricing.kind === 'shared-private') return 'private';
    if (pricing.kind === 'shared-half-full') return 'half';
    if (pricing.kind === 'transfer') return 'split-hvar';
    return 'private';
  };

  const [mode, setMode] = useState<QuoteMode>(initMode);
  const [pax, setPax] = useState(2);
  const [days, setDays] = useState(1);
  const [scooterUnits, setScooterUnits] = useState(0);
  const [photoVideo, setPhotoVideo] = useState(false);
  const [copied, setCopied] = useState(false);

  if (pricing.kind === 'on-request') {
    return (
      <p className="mt-3 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 font-body text-sm text-amber-300">
        Price on request — message Nikola on WhatsApp
      </p>
    );
  }

  if (pricing.kind === 'rental-skipper') {
    return (
      <p className="mt-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 font-body text-sm text-[color:var(--gray)]">
        From €{pricing.from} — custom quote, confirm with Nikola
      </p>
    );
  }

  // ── Compute base total ──
  let baseTotal = 0;
  if (pricing.kind === 'shared-private') {
    baseTotal = mode === 'shared' ? pricing.shared * pax : pricing.priv;
  } else if (pricing.kind === 'shared-half-full') {
    if (mode === 'shared') baseTotal = pricing.shared * pax;
    else if (mode === 'half') baseTotal = pricing.half;
    else baseTotal = pricing.full;
  } else if (pricing.kind === 'private-only') {
    baseTotal = pricing.price;
  } else if (pricing.kind === 'transfer') {
    baseTotal = mode === 'split-hvar' ? pricing.splitHvar : pricing.airportHvar;
  } else if (pricing.kind === 'rental-drive') {
    baseTotal = pricing.pricePerDay * days;
  }

  const addonsTotal =
    (addonScooter ? scooterUnits * ADDONS.scooter : 0) +
    (addonPhotoVideo && photoVideo ? ADDONS.photoVideo : 0);

  const total = baseTotal + addonsTotal;

  // ── Build clipboard text ──
  function buildQuote(): string {
    const lines: string[] = ['🚤 MareBoats Hvar — Quote', `Service: ${name}`];

    if (pricing.kind === 'rental-drive') {
      lines.push(`Days: ${days}`);
    }
    if (pricing.kind !== 'rental-drive') {
      lines.push(`Guests: ${pax}`);
    }
    if (pricing.kind !== 'transfer' && pricing.kind !== 'rental-drive') {
      lines.push(`Date: [DATE]`);
    } else {
      lines.push(`Date/Time: [DATE + TIME]`);
    }
    lines.push('');

    // Pricing line
    if (pricing.kind === 'shared-private') {
      if (mode === 'shared') {
        lines.push(`Shared: ${pax} × €${pricing.shared}/person = €${pricing.shared * pax}`);
      } else {
        lines.push(`Private (whole boat): €${pricing.priv}`);
      }
    } else if (pricing.kind === 'shared-half-full') {
      if (mode === 'shared') {
        lines.push(`Shared: ${pax} × €${pricing.shared}/person = €${pricing.shared * pax}`);
      } else if (mode === 'half') {
        lines.push(`Private half-day: €${pricing.half}`);
      } else {
        lines.push(`Private full-day: €${pricing.full}`);
      }
    } else if (pricing.kind === 'private-only') {
      lines.push(`Private: €${pricing.price}`);
      if (pricing.fuelExtra) lines.push('Fuel: to confirm with Nikola separately');
    } else if (pricing.kind === 'transfer') {
      const route = mode === 'split-hvar' ? 'Split ↔ Hvar' : 'Airport ↔ Hvar';
      const price = mode === 'split-hvar' ? pricing.splitHvar : pricing.airportHvar;
      lines.push(`Route: ${route}`);
      lines.push(`Private transfer: €${price} (any group size up to 8)`);
    } else if (pricing.kind === 'rental-drive') {
      lines.push(
        `${days} day${days > 1 ? 's' : ''} × €${pricing.pricePerDay}/day = €${pricing.pricePerDay * days}`
      );
      lines.push(`Fuel: ${pricing.fuelIncluded ? 'included' : 'NOT included — full tank in, full tank out'}`);
    }

    // Add-ons
    const addonLines: string[] = [];
    if (addonScooter && scooterUnits > 0) {
      addonLines.push(`  Underwater Scooter: ${scooterUnits} × €${ADDONS.scooter} = €${scooterUnits * ADDONS.scooter}`);
    }
    if (addonPhotoVideo && photoVideo) {
      addonLines.push(`  Photo & Video: €${ADDONS.photoVideo}`);
    }
    if (addonLines.length > 0) {
      lines.push('');
      lines.push('Add-ons (paid to MareBoats):');
      lines.push(...addonLines);
    }

    lines.push('');
    lines.push(`TOTAL to MareBoats: €${total}`);

    // Site extras
    if (siteExtras.length > 0) {
      lines.push('');
      lines.push('Paid on site (NOT to MareBoats):');
      for (const e of siteExtras) {
        lines.push(`  ${e.name}: €${e.price}/person`);
      }
    }

    lines.push('');
    lines.push('📍 MareBoats barrel · Hvar Harbour');
    lines.push('⏰ Arrive 10 min early');

    return lines.join('\n');
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildQuote());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older mobile browsers
      const el = document.createElement('textarea');
      el.value = buildQuote();
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  const isSharedMode = mode === 'shared';
  const showPax =
    pricing.kind !== 'rental-drive' &&
    (isSharedMode || pricing.kind !== 'shared-private' && pricing.kind !== 'shared-half-full' || true);

  return (
    <div className="mt-3 space-y-4 rounded-xl border border-[color:var(--accent)]/30 bg-[color:var(--bg)] p-4">

      {/* Mode selector */}
      {pricing.kind === 'shared-private' && (
        <div className="flex flex-wrap gap-2">
          <ModeBtn active={mode === 'private'} onClick={() => setMode('private')}>Private</ModeBtn>
          <ModeBtn active={mode === 'shared'} onClick={() => setMode('shared')}>Shared</ModeBtn>
        </div>
      )}
      {pricing.kind === 'shared-half-full' && (
        <div className="flex flex-wrap gap-2">
          <ModeBtn active={mode === 'half'} onClick={() => setMode('half')}>Private ½ day</ModeBtn>
          <ModeBtn active={mode === 'full'} onClick={() => setMode('full')}>Private full day</ModeBtn>
          <ModeBtn active={mode === 'shared'} onClick={() => setMode('shared')}>Shared</ModeBtn>
        </div>
      )}
      {pricing.kind === 'transfer' && (
        <div className="flex flex-wrap gap-2">
          <ModeBtn active={mode === 'split-hvar'} onClick={() => setMode('split-hvar')}>Split ↔ Hvar</ModeBtn>
          <ModeBtn active={mode === 'airport-hvar'} onClick={() => setMode('airport-hvar')}>Airport ↔ Hvar</ModeBtn>
        </div>
      )}

      {/* Pax counter — shown for all non-rental-drive types */}
      {pricing.kind !== 'rental-drive' && (
        <div className="flex items-center gap-4">
          <span className="font-body text-sm text-[color:var(--gray)]">Guests</span>
          <div className="flex items-center gap-3">
            <CounterBtn onClick={() => setPax(Math.max(1, pax - 1))}>−</CounterBtn>
            <span className="w-6 text-center font-display text-xl font-bold text-[color:var(--white)]">
              {pax}
            </span>
            <CounterBtn onClick={() => setPax(Math.min(maxCapacity, pax + 1))}>+</CounterBtn>
          </div>
          <span className="font-body text-xs text-[color:var(--gray)]">max {maxCapacity}</span>
        </div>
      )}

      {/* Days counter — rental-drive only */}
      {pricing.kind === 'rental-drive' && (
        <div className="flex items-center gap-4">
          <span className="font-body text-sm text-[color:var(--gray)]">Days</span>
          <div className="flex items-center gap-3">
            <CounterBtn onClick={() => setDays(Math.max(1, days - 1))}>−</CounterBtn>
            <span className="w-6 text-center font-display text-xl font-bold text-[color:var(--white)]">
              {days}
            </span>
            <CounterBtn onClick={() => setDays(Math.min(14, days + 1))}>+</CounterBtn>
          </div>
        </div>
      )}

      {/* Add-ons */}
      {(addonScooter || addonPhotoVideo) && (
        <div className="space-y-2.5">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-[color:var(--gray)]">
            Add-ons (paid to MareBoats)
          </p>
          {addonScooter && (
            <div className="flex items-center justify-between">
              <span className="font-body text-sm text-[color:var(--white)]">
                Underwater Scooter · €{ADDONS.scooter}/unit
              </span>
              <div className="flex items-center gap-2">
                <CounterBtn onClick={() => setScooterUnits(Math.max(0, scooterUnits - 1))}>−</CounterBtn>
                <span className="w-5 text-center font-display text-lg font-bold text-[color:var(--white)]">
                  {scooterUnits}
                </span>
                <CounterBtn onClick={() => setScooterUnits(Math.min(4, scooterUnits + 1))}>+</CounterBtn>
              </div>
            </div>
          )}
          {addonPhotoVideo && (
            <label className="flex cursor-pointer items-center justify-between">
              <span className="font-body text-sm text-[color:var(--white)]">
                Photo &amp; Video · €{ADDONS.photoVideo}
              </span>
              <input
                type="checkbox"
                checked={photoVideo}
                onChange={(e) => setPhotoVideo(e.target.checked)}
                className="h-5 w-5 cursor-pointer accent-[color:var(--accent)]"
              />
            </label>
          )}
        </div>
      )}

      {/* Total */}
      <div className="border-t border-[color:var(--border)] pt-3">
        <div className="flex items-baseline justify-between">
          <span className="font-body text-sm text-[color:var(--gray)]">Total to MareBoats</span>
          <span className="font-display text-3xl font-bold text-[color:var(--accent)]">
            €{total}
            {pricing.kind === 'private-only' && pricing.fuelExtra && (
              <span className="text-base font-normal text-amber-300"> + fuel</span>
            )}
          </span>
        </div>
        {siteExtras.length > 0 && isSharedMode && (
          <p className="mt-1 font-body text-xs text-[color:var(--gray)]">
            + on site:{' '}
            {siteExtras.map((e) => `€${e.price}/person (${e.name.split(' ')[0]})`).join(' · ')}
          </p>
        )}
        {siteExtras.length > 0 && !isSharedMode && (
          <p className="mt-1 font-body text-xs text-[color:var(--gray)]">
            + on site:{' '}
            {siteExtras.map((e) => `€${e.price}/person (${e.name.split(' ')[0]})`).join(' · ')}
          </p>
        )}
      </div>

      {/* Copy Quote button */}
      <button
        onClick={handleCopy}
        className={`w-full rounded-pill py-3 font-body text-sm font-semibold uppercase tracking-wide transition-colors active:scale-[0.97] ${
          copied
            ? 'bg-green-500 text-white'
            : 'bg-[color:var(--accent)] text-[color:var(--bg)] hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)]'
        }`}
      >
        {copied ? '✓ Copied to clipboard' : 'Copy Quote'}
      </button>
    </div>
  );
}

// ─── ServiceCard ──────────────────────────────────────────────────────────────

const CAT_BADGE: Record<Service['category'], string> = {
  tour: 'text-[color:var(--accent)] border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10',
  rental: 'text-amber-300 border-amber-400/40 bg-amber-400/10',
  transfer: 'text-sky-300 border-sky-400/40 bg-sky-400/10',
};

function ServiceCard({ service }: { service: Service }) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
      {/* Card header */}
      <div className="p-4 pb-0">
        <div className="flex items-start justify-between gap-2">
          <span
            className={`inline-flex shrink-0 items-center rounded-pill border px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide ${CAT_BADGE[service.category]}`}
          >
            {service.category}
          </span>
          <span className="font-body text-xs text-[color:var(--gray)]">{service.duration}</span>
        </div>
        <h2 className="mt-2 font-display text-lg font-bold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)]">
          {service.name}
        </h2>
        <p className="mt-0.5 font-body text-xs text-[color:var(--gray)]">
          Up to {service.maxCapacity} people
        </p>
      </div>

      {/* Prices */}
      <div className="mt-3 px-4">
        <PriceDisplay pricing={service.pricing} />
      </div>

      {/* Includes / not includes */}
      <div className="mt-3 px-4">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center gap-1 font-body text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--gray)] focus-visible:outline-none [&::-webkit-details-marker]:hidden">
            <span className="transition-transform duration-200 group-open:rotate-90">▶</span>
            What&apos;s included
          </summary>
          <ul className="mt-2 space-y-1 pl-1">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-xs text-[color:var(--white)]">
                <span className="shrink-0 text-[color:var(--accent)]">✓</span>
                {item}
              </li>
            ))}
            {service.notIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-xs text-[color:var(--gray)]">
                <span className="shrink-0 text-red-400">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* Site extras */}
      {service.siteExtras.length > 0 && (
        <div className="mt-2 px-4">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-300">
            Paid on site (not to us)
          </p>
          <ul className="mt-1 space-y-0.5">
            {service.siteExtras.map((e) => (
              <li key={e.name} className="font-body text-xs text-[color:var(--gray)]">
                {e.name}: €{e.price}/person
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add-ons available */}
      {(service.addonScooter || service.addonPhotoVideo) && (
        <div className="mt-2 px-4">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--gray)]">
            Add-ons available
          </p>
          <p className="mt-0.5 font-body text-xs text-[color:var(--gray)]">
            {[
              service.addonScooter && `Scooter €${ADDONS.scooter}/unit`,
              service.addonPhotoVideo && `Photo & Video €${ADDONS.photoVideo}`,
            ]
              .filter(Boolean)
              .join(' · ')}
          </p>
        </div>
      )}

      {/* Licence note for Pasara 20hp */}
      {service.pricing.kind === 'rental-drive' && service.pricing.licenceNote && (
        <div className="mx-4 mt-2 rounded-lg border border-red-400/40 bg-red-400/10 px-3 py-2">
          <p className="font-body text-xs font-semibold text-red-300">
            ⚠ {service.pricing.licenceNote}
          </p>
        </div>
      )}

      {/* Other notes */}
      {service.notes.length > 0 && (
        <div className="mt-2 space-y-1 px-4">
          {service.notes.map((note) => (
            <p key={note} className="font-body text-xs text-amber-300">
              ⚠ {note}
            </p>
          ))}
        </div>
      )}

      {/* Quote builder */}
      <div className="mt-3 p-4 pt-0">
        <button
          onClick={() => setQuoteOpen(!quoteOpen)}
          className={`w-full rounded-pill py-2.5 font-body text-xs font-semibold uppercase tracking-wide transition-colors active:scale-[0.97] ${
            quoteOpen
              ? 'border border-[color:var(--accent)] text-[color:var(--accent)] hover:bg-[color:var(--accent)]/10'
              : 'bg-[color:var(--accent)]/15 text-[color:var(--accent)] hover:bg-[color:var(--accent)]/25'
          }`}
        >
          {quoteOpen ? 'Close' : 'Build Quote'}
        </button>
        {quoteOpen && <QuoteBuilder service={service} />}
      </div>
    </article>
  );
}

// ─── Ops Header ───────────────────────────────────────────────────────────────

function OpsHeader() {
  return (
    <details className="group border-b border-[color:var(--border)] bg-amber-400/10">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-amber-400" />
          <span className="font-body text-sm font-semibold text-amber-300">
            Ops Rules
          </span>
        </div>
        <span
          aria-hidden="true"
          className="font-body text-sm text-amber-300 transition-transform duration-200 group-open:rotate-180"
        >
          ▾
        </span>
      </summary>
      <div className="space-y-3 px-4 pb-4 pt-1">
        <div className="flex gap-2 font-body text-sm text-[color:var(--white)]">
          <span>📍</span>
          <span>
            <strong>Meeting point:</strong> MareBoats barrel, Hvar Harbour main dock.{' '}
            <a
              href="https://maps.app.goo.gl/k84JNBQLvqgZunEX6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] underline"
            >
              Open in Maps
            </a>
          </span>
        </div>
        <div className="flex gap-2 font-body text-sm text-[color:var(--white)]">
          <span>👥</span>
          <span>
            <strong>Capacity:</strong> up to 8 per boat · convoy max 14 (2 boats)
          </span>
        </div>
        <div className="flex gap-2 font-body text-sm text-[color:var(--white)]">
          <span>🚤</span>
          <span>
            Always say <strong>&quot;speedboat&quot;</strong> — never &quot;RIB&quot;
          </span>
        </div>
        <div className="flex gap-2 rounded-lg border border-red-400/40 bg-red-400/10 px-3 py-2 font-body text-sm text-red-300">
          <span>⚠</span>
          <span>
            <strong>Pasara 20hp:</strong> say &quot;ask us about licence&quot; — never &quot;no licence needed&quot;
          </span>
        </div>
      </div>
    </details>
  );
}

// ─── CrewDashboard (export) ───────────────────────────────────────────────────

export default function CrewDashboard() {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState<Category>('all');

  const filtered = useMemo(
    () =>
      SERVICES.filter((s) => {
        const matchesCat = cat === 'all' || s.category === cat;
        const matchesSearch =
          search === '' || s.name.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesSearch;
      }),
    [search, cat]
  );

  const catBtns: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'tour', label: 'Tours' },
    { value: 'rental', label: 'Rentals' },
    { value: 'transfer', label: 'Transfers' },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--white)]">
      {/* Ops rules */}
      <OpsHeader />

      {/* Search + category filters — sticky */}
      <div className="sticky top-0 z-10 space-y-2 border-b border-[color:var(--border)] bg-[color:var(--bg)]/95 px-4 py-3 backdrop-blur-sm">
        <input
          type="search"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2.5 font-body text-sm text-[color:var(--white)] placeholder:text-[color:var(--gray)] focus:border-[color:var(--accent)] focus:outline-none"
        />
        <div className="flex gap-2 overflow-x-auto pb-0.5">
          {catBtns.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setCat(btn.value)}
              className={`shrink-0 rounded-pill px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-wide transition-colors active:scale-95 ${
                cat === btn.value
                  ? 'bg-[color:var(--accent)] text-[color:var(--bg)]'
                  : 'border border-[color:var(--border)] text-[color:var(--gray)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-lg space-y-4 px-4 py-4 pb-16">
        {filtered.length === 0 ? (
          <p className="py-8 text-center font-body text-sm text-[color:var(--gray)]">
            No services match
          </p>
        ) : (
          filtered.map((s) => <ServiceCard key={s.id} service={s} />)
        )}
      </div>
    </div>
  );
}
