export const dynamic = 'force-static';

import {
  TOUR_PRICES,
  RENTAL_SELF_DRIVE,
  RENTAL_WITH_SKIPPER_FROM,
  SUNSET_TIERS,
  SUNSET_WINE_EXTRA,
  TRANSFER_PRICES,
  WATER_TAXI_PRICES,
  EXTRAS,
  ADDONS,
} from '@/lib/pricing';

const SITE_URL = 'https://mareboatshvar.com';

function buildContent(): string {
  const bc = TOUR_PRICES['blue-cave-pakleni-islands'];
  const rr = TOUR_PRICES['red-rocks-pakleni-islands'];
  const pk = TOUR_PRICES['pakleni-islands'];
  const sc = TOUR_PRICES['sunset-cruise'];
  const ch = TOUR_PRICES['private-boat-charter'];

  const wtHarbour = WATER_TAXI_PRICES['yachtsNearHarbour'];
  const wtPakleni = WATER_TAXI_PRICES['pakleniIslands'];

  const sunsetLines = SUNSET_TIERS.map((t) => {
    const label =
      t.maxGuests >= 99
        ? `${t.minGuests}+ guests`
        : t.minGuests === t.maxGuests
        ? `${t.minGuests} guests`
        : `${t.minGuests}-${t.maxGuests} guests`;
    return `  - ${label}: €${t.price}`;
  }).join('\n');

  return `# MareBoats Hvar

MareBoats Hvar runs private speedboat tours and boat rentals from Hvar Harbour, Croatia.

## About

- Location: Hvar Harbour, Hvar, Croatia
- Season: April to October
- Capacity: up to 8 guests per boat
- Languages: English, Croatian, German, Spanish, Italian
- Contact: WhatsApp +385 95 196 6734

## Tours

### 5 Islands, 4 Beaches & Blue Cave
- Shared: €${bc.sharedPerPerson}/person (group tour, minimum 6 guests)
- Private: €${bc.private} (up to 8 guests)
- Duration: 7 hours, departs 10:00
- Includes: snorkel gear, cold drinks, skipper
- Not included: Blue Cave entrance €${EXTRAS.blueCave}/person, Green Cave entrance €${EXTRAS.greenCave}/person (optional), lunch
- Page: ${SITE_URL}/tours/blue-cave-pakleni-islands/

### Red Rocks & Pakleni Islands
- Shared: €${rr.sharedPerPerson}/person (group tour, minimum 6 guests)
- Private half-day: €${rr.privateHalfDay} (up to 8 guests, ~4 hours)
- Private full-day: €${rr.privateFullDay} (up to 8 guests, ~6 hours)
- Page: ${SITE_URL}/tours/red-rocks-pakleni-islands/

### Pakleni Islands
- Private 3h: €${pk.private} (up to 8 guests)
- Private 4h: €${pk.privateExtended} (up to 8 guests)
- Page: ${SITE_URL}/tours/pakleni-islands/

### Sunset Cruise
${sunsetLines}
- Duration: 2 hours
- Includes: wine (1 bottle per boat), water, fresh fruit
- Extra wine bottle: €${SUNSET_WINE_EXTRA}
- Page: ${SITE_URL}/tours/sunset-cruise/

### Private Boat Charter
- €${ch.private} boat + skipper, fuel not included (up to 8 guests, full day, custom itinerary)
- Page: ${SITE_URL}/tours/private-boat-charter/

### Yacht & Sailboat Water Taxi
- Yachts near harbour: €${wtHarbour.basePrice} up to ${wtHarbour.baseGuests} guests, €${wtHarbour.perExtraGuest} per extra guest
- Pakleni Islands pickup: €${wtPakleni.basePrice} up to ${wtPakleni.baseGuests} guests, €${wtPakleni.perExtraGuest} per extra guest
- No meeting point: we come to your vessel
- Page: ${SITE_URL}/tours/yacht-sailboat-taxi/

## Transfers

### Split to Hvar
- €${TRANSFER_PRICES.splitHvar} (whole boat, up to 8 guests)
- Duration: 1 to 1.5 hours by boat, depending on sea conditions

### Split Airport to Hvar
- €${TRANSFER_PRICES.airportHvar} (whole boat, up to 8 guests)
- Duration: 1 to 1.5 hours by boat, depending on sea conditions
- Note: taxi from airport terminal to the pier is not included

### Brač (Zlatni Rat)
- One-way: €${TRANSFER_PRICES.bracOneWay}
- Return: €${TRANSFER_PRICES.bracReturn}

## Boat Rentals (Self-Drive)

- Pasara 5hp: €${RENTAL_SELF_DRIVE.pasara5hp.pricePerDay}/day, up to ${RENTAL_SELF_DRIVE.pasara5hp.maxGuests} guests, fuel included, no boating licence required
- Pasara 20hp: €${RENTAL_SELF_DRIVE.pasara20hp.pricePerDay}/day, up to ${RENTAL_SELF_DRIVE.pasara20hp.maxGuests} guests, fuel included
- Speedboat 60hp: €${RENTAL_SELF_DRIVE.speedboat60hp.pricePerDay}/day, up to ${RENTAL_SELF_DRIVE.speedboat60hp.maxGuests} guests, fuel included, boating licence required
- Speedboat Mariner 150hp: €${RENTAL_SELF_DRIVE.mariner150hp.pricePerDay}/day, up to ${RENTAL_SELF_DRIVE.mariner150hp.maxGuests} guests, fuel extra, boating licence required, €${RENTAL_SELF_DRIVE.mariner150hp.deposit} cash deposit
- Private tour with skipper: from €${RENTAL_WITH_SKIPPER_FROM}
- Page: ${SITE_URL}/rentals/

## Add-ons

- Underwater Scooter: €${ADDONS.scooter}/unit (private tours only, not available on shared tours or Sunset Cruise)
- Photo & Video Shoot: €${ADDONS.photoVideo} (private tours only, on request)
- Extra wine bottle (Sunset Cruise only): €${SUNSET_WINE_EXTRA}

## How to Book

WhatsApp: https://wa.me/385951966734

## Meeting Point

Beach Križa, at the MareBoats barrel, below the Beach Bay Hvar Hotel
GPS: 43.1690147, 16.4429617
Map: https://maps.app.goo.gl/6AJmDACw4ZU1MnSKA

Note: Water taxi has no fixed meeting point. We come to your anchored boat.

## Pages

- Home: ${SITE_URL}/
- Tours: ${SITE_URL}/tours/
- Rentals: ${SITE_URL}/rentals/
- Transfers: ${SITE_URL}/transfers/
- About: ${SITE_URL}/about/
- Explore Hvar: ${SITE_URL}/explore/
`;
}

export function GET() {
  return new Response(buildContent(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
