// ──────────────────────────────────────────────
// Google My Maps embeds
// ──────────────────────────────────────────────
// TODO Nikola/Fede: create the three public maps in Google My Maps
// (Share → "Embed on my website" → copy the iframe src URL) and
// replace the `src: null` values below. While they are null the UI
// renders a "Map coming soon" placeholder.

export type MapEmbed = {
  src: string | null;
  title: string;
  description: string;
};

export const MAPS: {
  tourDestinations: MapEmbed;
  partnerRestaurants: MapEmbed;
  hvarLocalTips: MapEmbed;
} = {
  tourDestinations: {
    src: null,
    title: 'Tour Destinations',
    description:
      'Hvar Harbour, Blue Cave (Biševo), Pakleni Islands, Vis and our favourite snorkel and lunch spots.',
  },
  partnerRestaurants: {
    src: null,
    title: 'Partner Restaurants',
    description:
      'Restaurants in Hvar town we send guests to, plus island restaurants only reachable by boat.',
  },
  hvarLocalTips: {
    src: null,
    title: 'Hvar Local Tips',
    description:
      'Old Town, beaches, beach clubs, the local market, ATMs, pharmacy and other useful spots.',
  },
};
