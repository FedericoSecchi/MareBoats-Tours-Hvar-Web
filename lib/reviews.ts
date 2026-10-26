// Base de reseñas reales de Google.
// Fuente: Google Business Profile de MareBoats Hvar.
// Lectura: 24/10/2026 (actualizar la fecha cuando se refresquen los números).
// Las citas son transcripción directa de reseñas públicas (nombres omitidos).

export type ReviewQuote = {
  quote: string;
  month: string;
  year: number;
  topics: Array<
    | 'red-rocks'
    | 'pakleni'
    | 'blue-cave'
    | 'rentals'
    | 'weather'
    | 'skipper'
    | 'private'
    | 'sunset'
  >;
};

export const googleReviews = {
  rating: 5.0,
  count: 216,
  readAt: 'Oct 2026',
  profileUrl: 'https://maps.app.goo.gl/k84JNBQLvqgZunEX6',
};

export const reviewQuotes: ReviewQuote[] = [
  {
    quote:
      "Awesome adventure to do with a group! Need to go to red rocks!",
    month: 'Aug',
    year: 2026,
    topics: ['red-rocks'],
  },
  {
    quote:
      "We did a half day private tour and it was so worth it! Went to the red rocks, a few other bays, and the Pakleni islands.",
    month: 'Jun',
    year: 2026,
    topics: ['red-rocks', 'pakleni', 'private'],
  },
  {
    quote:
      "Overall had a great experience! Tony was the best, taking us to ~5 different stops, each of which were beautiful. Got to swim, cliff jump, hang at the beach and snorkel.",
    month: 'Jul',
    year: 2026,
    topics: ['skipper'],
  },
  {
    quote:
      "When I travel to a new place, I always take a boat tour. Mareboats was an exceptional experience. Pristine waters and good energy as we explored the Red Rocks, Dubovica, Bolce. You can snorkel, swim and even cliff jump if you're adventurous!",
    month: 'Aug',
    year: 2026,
    topics: ['red-rocks'],
  },
  {
    quote:
      "Weather changed our route from Red Rocks to Pakleni Islands. MareBoats Hvar told us before we left, at the meeting point by the barrel. Respect for that. A lot of operators would say nothing and just do a worse version of the original tour.",
    month: 'Aug',
    year: 2026,
    topics: ['red-rocks', 'pakleni', 'weather'],
  },
  {
    quote:
      "Fede and Mat were awesome. They took us for a 6-hr journey across the coast; From hidden spots to lovely beaches, including a great restaurant for lunch.",
    month: 'Jun',
    year: 2026,
    topics: ['skipper', 'private'],
  },
  {
    quote:
      "We did a tour with Luka. He made the day so fun and relaxing.",
    month: 'Jul',
    year: 2026,
    topics: ['skipper'],
  },
  {
    quote:
      "Check in was quick and straightforward. No awkward limitations imposed to explore at your own pace. Support during rental for any questions was quick and friendly.",
    month: 'Jul',
    year: 2026,
    topics: ['rentals'],
  },
  {
    quote:
      "Incredible boat tour experience in Hvar. Fede was brilliant.",
    month: 'Jun',
    year: 2026,
    topics: ['skipper'],
  },
];

export function reviewsByTopic(topic: ReviewQuote['topics'][number]) {
  return reviewQuotes.filter((r) => r.topics.includes(topic));
}

// Formato visible: "Google review · Jun 2026"
export function reviewLabel(r: ReviewQuote) {
  return `Google review · ${r.month} ${r.year}`;
}

// Formato visible: "216 Google reviews · Oct 2026"
export function reviewsBadge() {
  return `${googleReviews.count} Google reviews · ${googleReviews.readAt}`;
}
