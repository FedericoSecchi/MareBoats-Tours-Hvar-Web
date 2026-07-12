// Single source of truth for all commercial pricing and add-ons.
// All monetary values in EUR. These are customer-facing prices only.

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export type TourPrice = {
  sharedPerPerson?: number;
  privateHalfDay?: number;
  privateFullDay?: number;
  private?: number;
  splitHvar?: number;
  airportHvar?: number;
  onRequest?: boolean;
  fuelIncluded?: boolean;
};

export type RentalSelfDrivePrice = {
  pricePerDay: number;
  fuelIncluded: boolean;
  licenceRequired: boolean;
};

// ──────────────────────────────────────────────
// Transfer prices — defined first; referenced by TOUR_PRICES
// ──────────────────────────────────────────────

export const TRANSFER_PRICES = {
  splitHvar: 500,
  airportHvar: 600,
} as const;

// ──────────────────────────────────────────────
// Tour prices
// ──────────────────────────────────────────────

export const TOUR_PRICES: Record<string, TourPrice> = {
  'blue-cave-pakleni-islands': {
    sharedPerPerson: 130,
    private: 700,
  },
  'red-rocks-pakleni-islands': {
    sharedPerPerson: 85,
    privateHalfDay: 400,
    privateFullDay: 500,
  },
  'pakleni-islands': { onRequest: true },
  'sunset-cruise': { private: 250 },
  'private-boat-charter': { private: 500, fuelIncluded: false },
  'split-airport-transfer': {
    splitHvar: TRANSFER_PRICES.splitHvar,
    airportHvar: TRANSFER_PRICES.airportHvar,
  },
  'yacht-sailboat-taxi': { onRequest: true },
};

// ──────────────────────────────────────────────
// Rental prices — self-drive
// ──────────────────────────────────────────────

export const RENTAL_SELF_DRIVE: Record<string, RentalSelfDrivePrice> = {
  pasara5hp:     { pricePerDay: 120, fuelIncluded: true,  licenceRequired: false },
  pasara20hp:    { pricePerDay: 200, fuelIncluded: true,  licenceRequired: true  },
  speedboat60hp: { pricePerDay: 290, fuelIncluded: true,  licenceRequired: true  },
  mariner150hp:  { pricePerDay: 350, fuelIncluded: false, licenceRequired: true  },
};

export const RENTAL_WITH_SKIPPER_FROM = 400;

// ──────────────────────────────────────────────
// Third-party extras (paid on-site, not to MareBoats)
// ──────────────────────────────────────────────

export const EXTRAS = {
  blueCave: 24,
  greenCave: 12,
} as const;

// ──────────────────────────────────────────────
// MareBoats add-ons (on request, paid to MareBoats)
// ──────────────────────────────────────────────

export const ADDONS = {
  scooter: 40,
  photoVideo: 200,
} as const;

// ──────────────────────────────────────────────
// Land scooter rental (separate service, not a boat)
// ──────────────────────────────────────────────

export const SCOOTER_RENTAL = {
  fullDay: 50,
  halfDayPM: 40,
  halfDayAM: 30,
} as const;

// ──────────────────────────────────────────────
// Formatters
// ──────────────────────────────────────────────

/** Full price string — home grid, tour hero, related-tour cards. */
export function formatPriceFull(slug: string): string {
  const p = TOUR_PRICES[slug];
  if (!p) return '';
  if (p.onRequest) return 'On request - message us on WhatsApp';
  if (p.splitHvar !== undefined && p.airportHvar !== undefined) {
    return `Split–Hvar €${p.splitHvar} · Airport–Hvar €${p.airportHvar}`;
  }
  if (
    p.sharedPerPerson !== undefined &&
    p.privateHalfDay !== undefined &&
    p.privateFullDay !== undefined
  ) {
    return `From €${p.sharedPerPerson}/person (shared) · €${p.privateHalfDay} private half-day · €${p.privateFullDay} private full-day`;
  }
  if (p.sharedPerPerson !== undefined && p.private !== undefined) {
    return `€${p.sharedPerPerson}/person (group) · €${p.private} private`;
  }
  if (p.private !== undefined && p.fuelIncluded === false) {
    return `€${p.private} boat + skipper · fuel not included`;
  }
  if (p.private !== undefined) {
    return `€${p.private}`;
  }
  return '';
}

/** Short price string — tours index page cards. */
export function formatPriceShort(slug: string): string {
  const p = TOUR_PRICES[slug];
  if (!p) return '';
  if (p.onRequest) return 'On request';
  if (p.splitHvar !== undefined) return `€${p.splitHvar} private`;
  if (p.sharedPerPerson !== undefined && p.privateHalfDay !== undefined) {
    return `From €${p.sharedPerPerson}/person · €${p.privateHalfDay} private`;
  }
  if (p.sharedPerPerson !== undefined && p.private !== undefined) {
    return `From €${p.sharedPerPerson}/person · €${p.private} private`;
  }
  if (p.private !== undefined && p.fuelIncluded === false) {
    return `€${p.private} + fuel · up to 8`;
  }
  if (p.private !== undefined) {
    return `€${p.private} private`;
  }
  return '';
}

/** Lowest numeric EUR price for schema.org Offer — undefined when on request. */
export function getLowestPrice(slug: string): number | undefined {
  const p = TOUR_PRICES[slug];
  if (!p || p.onRequest) return undefined;
  const candidates = [
    p.sharedPerPerson,
    p.privateHalfDay,
    p.privateFullDay,
    p.private,
    p.splitHvar,
  ].filter((n): n is number => n !== undefined);
  return candidates.length > 0 ? Math.min(...candidates) : undefined;
}

/** Structured pricing options for the tour detail page pricing card. */
export function getPricingOptions(
  slug: string,
): { label: string; price: string; note: string }[] | undefined {
  if (slug !== 'blue-cave-pakleni-islands') return undefined;
  const p = TOUR_PRICES[slug];
  if (!p || !p.sharedPerPerson || !p.private) return undefined;
  return [
    { label: 'Shared', price: `€${p.sharedPerPerson}/person`, note: 'up to 8 guests' },
    { label: 'Private', price: `€${p.private}`, note: 'your group only · up to 8 guests' },
  ];
}

/** schema.org Offer object(s) for JSON-LD. Returns undefined for tours with no offers. */
export function formatPriceSchema(slug: string): object | object[] | undefined {
  const p = TOUR_PRICES[slug];
  if (!p) return undefined;

  if (slug === 'yacht-sailboat-taxi') return undefined;

  if (p.onRequest) {
    return {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      description: 'Price on request via WhatsApp',
    };
  }

  if (slug === 'blue-cave-pakleni-islands') {
    return [
      {
        '@type': 'Offer',
        name: 'Shared group tour',
        price: String(p.sharedPerPerson),
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: p.sharedPerPerson,
          priceCurrency: 'EUR',
          unitText: 'per person',
        },
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Private tour',
        price: String(p.private),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    ];
  }

  if (slug === 'red-rocks-pakleni-islands') {
    return [
      {
        '@type': 'Offer',
        name: 'Shared tour',
        price: String(p.sharedPerPerson),
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: p.sharedPerPerson,
          priceCurrency: 'EUR',
          unitText: 'per person',
        },
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Private half-day',
        price: String(p.privateHalfDay),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Private full-day',
        price: String(p.privateFullDay),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    ];
  }

  if (slug === 'private-boat-charter') {
    return {
      '@type': 'Offer',
      price: String(p.private),
      priceCurrency: 'EUR',
      description: 'Fuel not included',
      availability: 'https://schema.org/InStock',
    };
  }

  if (p.private !== undefined) {
    return {
      '@type': 'Offer',
      price: String(p.private),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    };
  }

  return undefined;
}
