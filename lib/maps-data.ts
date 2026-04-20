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
  recommendedRestaurants: MapEmbed;
  hvarLocalTips: MapEmbed;
} = {
  tourDestinations: {
    src: null,
    title: 'Tour Destinations',
    description:
      'Hvar Harbour, Blue Cave (Biševo), Pakleni Islands, Vis and our favourite snorkel and lunch spots.',
  },
  recommendedRestaurants: {
    src: null,
    title: 'Recommended Restaurants',
    description:
      'Restaurants we often stop at in Hvar town and on the islands — no official deal, just places we like.',
  },
  hvarLocalTips: {
    src: null,
    title: 'Hvar Local Tips',
    description:
      'Old Town, beaches, beach clubs, the local market, ATMs, pharmacy and other useful spots.',
  },
};
