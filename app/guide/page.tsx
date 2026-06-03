import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { FAQJsonLd } from '@/components/ui/JsonLd';
import { WhatsAppTrackedLink } from '@/components/ui/WhatsAppTrackedLink';
import { mapsData } from '@/lib/maps-data';
import {
  guideFaqs,
  rulesAndRentals,
  weatherPolicy,
  whatToBring,
  whereWeGoIntro,
  type BringItem,
  type Rule,
} from '@/lib/guide-content';
import { toursData } from '@/lib/tours-data';

export const metadata: Metadata = generateSEO({
  title: 'Hvar Boat Tour Guide — What to Know Before You Go | MareBoats',
  description:
    'Everything you need for your Hvar boat tour: what to bring, on-board rules, best beaches, local restaurants, and meeting point. Your complete guide.',
  keywords: [
    'hvar boat tour guide',
    'what to bring boat tour hvar',
    'boat tour packing list',
    'hvar tour rules',
    'hvar beaches guide',
  ],
  slug: 'guide',
});

const WA_NUMBER = '385951966734';
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hi!%20I%27d%20like%20to%20book%20a%20boat%20tour%20from%20Hvar.`;
const WA_WEATHER_URL = `https://wa.me/${WA_NUMBER}?text=Hi%20Nikola!%20Quick%20question%20about%20the%20weather%20for%20our%20tour.`;

// ──────────────────────────────────────────────
// Inline SVG icons (stroke-only, currentColor)
// ──────────────────────────────────────────────
function Icon({ name }: { name: BringItem['key'] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'sunscreen':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
        </svg>
      );
    case 'towel':
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="1.5" />
          <path d="M9 3v18M15 3v18M5 7h14M5 17h14" />
        </svg>
      );
    case 'snorkel':
      return (
        <svg {...common}>
          <path d="M5 14a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1H9v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z" transform="translate(1 0)"/>
          <path d="M18 10V6a2 2 0 0 0-2-2" />
        </svg>
      );
    case 'waterShoes':
      return (
        <svg {...common}>
          <path d="M3 15c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 3 3v1H3v-3Z" />
          <path d="M5 15v-3a3 3 0 0 1 3-3h6l3 3" />
        </svg>
      );
    case 'swimsuit':
      return (
        <svg {...common}>
          <path d="M6 4h12l-1.5 5a4 4 0 0 1-1 1.6L13 13v6a1 1 0 0 1-1 1 1 1 0 0 1-1-1v-6L8.5 10.6A4 4 0 0 1 7.5 9L6 4Z" />
          <path d="M9 4v2M15 4v2" />
        </svg>
      );
    case 'cash':
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="1.5" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M6 9.5v.01M18 14.5v.01" />
        </svg>
      );
  }
}

const ctaButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-pill bg-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--bg)] shadow-[0_10px_32px_rgba(59,201,219,0.24)] transition-colors duration-300 hover:bg-[color:var(--accent-dk)] hover:text-[color:var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 active:scale-[0.98]';

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header>
      <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-4xl">
        {title}
      </h2>
    </header>
  );
}

function StatusBadge({ status }: { status: Rule['status'] }) {
  const map = {
    allowed: { label: 'Allowed', symbol: '✓', tone: 'text-[color:var(--accent)] border-[color:var(--accent)]/50' },
    forbidden: { label: 'Not allowed', symbol: '✕', tone: 'text-red-300 border-red-400/40' },
    note: { label: 'Heads up', symbol: '!', tone: 'text-amber-300 border-amber-400/40' },
  } as const;
  const s = map[status];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-pill border px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wide ${s.tone}`}
    >
      <span aria-hidden="true">{s.symbol}</span>
      {s.label}
    </span>
  );
}

function AccordionItem({
  question,
  children,
  defaultOpen = false,
}: {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      {...(defaultOpen ? { open: true } : {})}
      className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 transition-colors duration-300 open:bg-[color:var(--surface)]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/60 md:text-lg">
        <span>{question}</span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--accent)] transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 font-body text-sm leading-relaxed text-[color:var(--gray)] md:text-base">
        {children}
      </div>
    </details>
  );
}

// ──────────────────────────────────────────────
// Tour routes — ordered stops per route
// ──────────────────────────────────────────────
const ROUTES = [
  {
    id: 'route-1',
    label: 'Blue Cave, Green Cave & Vis',
    duration: 'Full Day · 7h',
    mapsUrl: 'https://maps.app.goo.gl/DEGcqoB1Kh6swNxb8',
    stops: [
      {
        name: 'Green Cave (Zelena Špilja)',
        subtitle: 'Ravnik Island — open ceiling, emerald water',
        badge: 'You can swim here',
        description:
          "The Blue Cave's wilder sibling. The Green Cave creates the same optical phenomenon but its interior is larger and open at the top — so the light comes from above, giving the water an intense emerald-green tone. You can actually swim inside. Less regulated, less crowded, and for many visitors the more memorable of the two.",
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=43.0154069%2C16.2243444',
      },
      {
        name: 'Stiniva Bay',
        subtitle: 'Hvar — only reachable by boat or steep hike',
        badge: 'Named Best Beach in Europe',
        description:
          'A hidden cove almost completely enclosed by towering limestone cliffs, with an entrance so narrow that only small boats can pass. The pebble beach inside is completely sheltered, the water crystal clear, and the acoustics of the cliffs create a silence that feels surreal. Named Best Beach in Europe by Which? magazine. Arriving by boat is the only way to skip the 45-minute hike down from the cliffs above.',
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=Stiniva%20Beach%2C%20Vis',
      },
      {
        name: 'Blue Cave (Modra Špilja)',
        subtitle: 'Biševo Island — 15 permanent residents',
        badge: 'Best at noon',
        description:
          'The electric blue glow happens when sunlight enters through an underwater opening and reflects off the white limestone seabed, absorbing red wavelengths and scattering only blue. The cave was carved by wave erosion over millennia. First documented in 1884 by Austrian painter Baron Eugen von Ransonnet, who had the entrance blasted open with dynamite so boats could enter. Biševo is one of the most remote islands in Croatia. Best light: 11am–12pm on calm days.',
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=42.9802472%2C16.0220468',
      },
      {
        name: 'Medvidina Cave',
        subtitle: 'Biševo Island — sea cave at water level',
        badge: 'Swim-in sea cave',
        // TODO: Nikola to confirm description
        description:
          'A sea cave on the southern coast of Biševo, accessible by swimming or small dinghy. The interior opens onto vivid turquoise water. Less visited than the Blue Cave — a quieter, wilder stop on the same island.',
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=Medvidina%20%C5%A1pilja%2C%20Bi%C5%A1evo',
      },
      {
        name: 'Veliki Budikovac — Blue Lagoon',
        subtitle: 'Natural saltwater lagoon, sheltered and calm',
        badge: 'Natural lagoon, zero waves',
        description:
          'A natural saltwater lagoon almost entirely enclosed by two islands, creating a sheltered pool of turquoise water so calm it looks artificial. One of the best swimming spots in the region, especially for families. The color changes throughout the day depending on the sun angle — from pale aquamarine in the morning to deep jade by afternoon.',
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=43.0261501%2C16.2426532',
      },
      {
        name: 'Pakleni Islands (Palmižana / Ždrilca)',
        subtitle: 'Archipelago of 16 islands — car-free',
        badge: 'Car-free, pine-covered',
        description:
          "The name doesn't mean \"hellish\" — it comes from \"paklina,\" an old Croatian word for pine resin harvested here for centuries to waterproof ship hulls. Almost entirely uninhabited and car-free, the archipelago has the clearest water in the Adriatic, beach bars hidden between pine trees, and a quiet that's hard to find anywhere near a tourist town in summer.",
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=43.1622432%2C16.3686729',
      },
    ],
  },
  {
    id: 'route-2',
    label: 'Red Rocks & Pakleni',
    duration: 'Half Day · 4h',
    mapsUrl: 'https://maps.app.goo.gl/XU6Gx2karGzVvebw9',
    stops: [
      {
        name: 'Borče Bay',
        subtitle: 'Milna, Hvar — sheltered bay, first stop',
        badge: 'Calm water',
        // TODO: Nikola to confirm description
        description:
          'A quiet sheltered bay near Milna village — typically the first stop on the Red Rocks route. Protected from the wind, with calm and clear water. A good spot for an early swim before the main route continues east.',
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=Bor%C4%8De%20Bay%2C%20Hvar',
      },
      {
        name: 'Red Rocks (Crvena Stijena)',
        subtitle: 'Hvar — iron-oxide limestone breccia',
        badge: 'Best cliff jumping on Hvar',
        description:
          'The color is geology in action. The formations near Milna are breccia — angular limestone fragments cemented with iron-rich minerals. Tectonic forces pushed these layers upright; rain and waves eroded the softer limestone around them, leaving the harder, iron-oxide-stained breccia exposed. The iron oxidized — exactly like metal rusting. The cliffs drop straight into the sea, creating perfect conditions for cliff jumping and some of the best snorkeling on the island.',
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=43.1395393%2C16.5477497',
      },
      {
        name: 'Dubovica Beach (+ Secret Cave)',
        subtitle: 'Hvar — 16th-century stone house on the shore',
        badge: '16th-century stone house',
        description:
          'A stone house built by a local nobleman sits on the rocky point at the edge of the bay — one of the oldest standing structures on this part of the island. The beach is protected by a small peninsula that cuts the wind, making the water unusually calm and warm even in early season. A small sea cave just off the eastern cliff face is worth exploring by snorkel.',
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=43.1459862%2C16.5344875',
      },
      {
        name: 'Pakleni Islands (Ždrilca & Taršće)',
        subtitle: 'Archipelago of 16 islands — car-free',
        badge: 'Car-free, pine-covered',
        description:
          "The name doesn't mean \"hellish\" — it comes from \"paklina,\" an old Croatian word for pine resin harvested here for centuries to waterproof ship hulls. Almost entirely uninhabited and car-free, the archipelago has the clearest water in the Adriatic, beach bars hidden between pine trees, and a quiet that's hard to find anywhere near a tourist town in summer.",
        mapsHref: 'https://www.google.com/maps/search/?api=1&query=43.1622432%2C16.3686729',
      },
    ],
  },
];

// ──────────────────────────────────────────────
// Restaurant data — Skipper's Picks
// ──────────────────────────────────────────────
const RESTAURANTS = [
  {
    name: 'Tri Grede',
    favorite: true,
    location: 'Uvala Ždrilca, Marinkovac Island (Pakleni)',
    cuisine: 'Seafood & Mediterranean — boat access only',
    description:
      'A beach restaurant on Marinkovac island accessible only by boat, with colorful beanbags on the pebble beach and a menu built around whatever came off the fishing boats that morning. The squid-ink risotto and grilled fish are outstanding. Family-run, relaxed, no pretension.',
    mustOrder: 'Squid ink risotto, grilled fresh catch',
    skippersNote: 'This is our go-to lunch stop on Pakleni days. Get there before 1pm or the good tables are gone.',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Konoba%20Tri%20Grede%2C%20%C5%BDdrilca',
  },
  {
    name: 'Moli Onte',
    favorite: false,
    location: 'Milna Bay, Hvar — arrive by boat, dinghy transfer included',
    cuisine: 'Dalmatian seafood — 30+ years running',
    description:
      'A family konoba terraced into the hillside above Milna bay, operating for over 30 years. You arrive by boat and they transfer you to the restaurant by dinghy — free of charge. Every table has a view of the bay. Fresh fish, grilled octopus, homemade olive oil. The kind of place with no written menu — the waiter just tells you what\'s good today.',
    mustOrder: 'Fresh grilled fish of the day, octopus salad',
    skippersNote: 'Book ahead in July/August. Worth the detour every time.',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Moli%20Onte%2C%20Milna%2C%20Hvar',
  },
  {
    name: 'Gego',
    favorite: false,
    location: 'Zaraće Bay, Hvar — 3 mooring buoys for boats',
    cuisine: 'Seafood, family-run since 2002 — cash only',
    description:
      'Hidden at the end of a narrow road on one of Hvar\'s best beaches — Zaraće bay. Antonella and Nikša have been running this konoba since 2002. Three black mooring buoys for boats. The Tagliatelle Gego is their signature dish and the reason half their regulars come back.',
    mustOrder: 'Tagliatelle Gego, octopus salad, panna cotta',
    skippersNote: 'Ask for a table by the rocks if you arrive by boat. Best value restaurant on the island.',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Konoba%20Gego%2C%20Zara%C4%87e%2C%20Hvar',
  },
  {
    name: 'Bacchus Palmižana',
    favorite: false,
    location: 'Sveti Klement Island, Palmižana (Pakleni)',
    cuisine: 'Traditional Dalmatian — wood-fired oven, 50+ years',
    description:
      'Set in their own olive grove on Sveti Klement island, Bacchus has been cooking with a traditional stone bread oven for over 50 years. The oven gives their meat and fish a flavor you can\'t replicate anywhere else. Good option for groups — they offer set menus. ACI Marina Palmižana is right nearby for mooring.',
    mustOrder: 'Anything from the wood-fired oven, grilled octopus',
    skippersNote: 'More suited for groups or a proper dinner. Book in advance for summer.',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Bacchus%2C%20Palmi%C5%BEana',
  },
];

export default function GuidePage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <FAQJsonLd faqs={guideFaqs} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-20 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at top, rgba(59,201,219,0.18) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Guest Guide
          </p>
          <h1 className="mt-3 font-display text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] sm:text-4xl md:text-6xl">
            Everything You Need to Know Before Your Tour
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Where we go, what to bring, the rules on board and what happens if the weather turns.
            Read once, sail relaxed.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppTrackedLink href={WA_URL} label="guide_hero" className={ctaButtonClass}>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </WhatsAppTrackedLink>
          </div>
        </div>
      </section>

      {/* WHERE WE GO — map + 2 routes (merged) */}
      <section
        id="where-we-go"
        className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="On the chart" title="Where We Go" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            {whereWeGoIntro}
          </p>

          {/* Map */}
          <div className="mt-10">
            <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              {mapsData.whereWeGo.title}
            </h3>
            <div className="relative h-[400px] overflow-hidden rounded-xl md:h-[500px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-10 h-[60px] w-full"
                style={{ background: 'var(--bg)' }}
              />
              <iframe
                src={mapsData.whereWeGo.embedUrl}
                title={mapsData.whereWeGo.title}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Routes */}
          <div className="mt-12 space-y-10">
            {ROUTES.map((route) => (
              <div
                key={route.id}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:p-8"
              >
                {/* Route header */}
                <div className="flex flex-wrap items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--accent)]">
                      {route.duration}
                    </p>
                    <h3 className="mt-1 w-full font-display text-2xl font-bold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)] md:text-3xl">
                      {route.label}
                    </h3>
                  </div>
                  <a
                    href={route.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-pill border border-[color:var(--accent)] px-5 py-2.5 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]"
                  >
                    Open full route in Google Maps
                  </a>
                </div>

                {/* Stops */}
                <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {route.stops.map((stop, idx) => (
                    <li
                      key={stop.name}
                      className="flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/15 font-body text-xs font-bold tabular-nums text-[color:var(--accent)]">
                          {idx + 1}
                        </span>
                        <div className="flex flex-col gap-1">
                          <span className="self-start whitespace-nowrap rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-[color:var(--accent)]">
                            {stop.badge}
                          </span>
                          <h4 className="font-display text-base font-bold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)]">
                            {stop.name}
                          </h4>
                        </div>
                      </div>
                      <p className="mt-1.5 font-body text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--accent)]/70">
                        {stop.subtitle}
                      </p>
                      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                        {stop.description}
                      </p>
                      <a
                        href={stop.mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 font-body text-xs font-medium text-[color:var(--accent)]/60 transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline"
                      >
                        <span aria-hidden="true">📍</span>
                        Open in Google Maps
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-4 font-body text-sm text-[color:var(--gray)]">
            Want the full story on every stop?{' '}
            <Link
              href="/hvar-islands-guide/"
              className="text-[color:var(--accent)] underline underline-offset-2 transition-colors hover:text-[color:var(--accent-dk)]"
            >
              Read the Hvar Islands Guide
            </Link>
          </p>
        </div>
      </section>

      {/* WHERE TO EAT — map + cards (merged) */}
      <section
        id="where-to-eat"
        className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Skipper's picks" title="Where to Eat" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Spots we often recommend along the route — reachable only by boat or a short walk. Our
            skippers have been anchoring at these places for years.
          </p>

          {/* Map */}
          <div className="mt-10">
            <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              {mapsData.whereToEat.title}
            </h3>
            <div className="relative h-[400px] overflow-hidden rounded-xl md:h-[500px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-10 h-[60px] w-full"
                style={{ background: 'var(--surface)' }}
              />
              <iframe
                src={mapsData.whereToEat.embedUrl}
                title={mapsData.whereToEat.title}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Restaurant cards */}
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {RESTAURANTS.map((r) => (
              <li
                key={r.name}
                className="flex flex-col rounded-2xl border border-[color:var(--border)] border-l-[3px] border-l-[color:var(--accent)] bg-[color:var(--bg)]/60 py-6 pl-5 pr-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)]">
                      {r.name}
                    </h3>
                    {r.favorite && (
                      <span className="mt-1 inline-block rounded-pill bg-[color:var(--accent)]/15 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-[color:var(--accent)]">
                        ⭐ Skipper&apos;s Favorite
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-2 font-body text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--accent)]/70">
                  {r.location}
                </p>
                <p className="mt-0.5 font-body text-xs text-[color:var(--gray)]/70">{r.cuisine}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {r.description}
                </p>
                <div className="mt-4 space-y-1.5">
                  <p className="font-body text-xs text-[color:var(--white)]">
                    <span className="font-semibold">Must order:</span> {r.mustOrder}
                  </p>
                  <p className="font-body text-xs italic text-[color:var(--gray)]">
                    &ldquo;{r.skippersNote}&rdquo;
                  </p>
                </div>
                <a
                  href={r.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 font-body text-xs font-medium text-[color:var(--accent)]/60 transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:underline"
                >
                  <span aria-hidden="true">📍</span>
                  Open in Google Maps
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT TO BRING */}
      <section
        id="what-to-bring"
        className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Pack list" title="What to Bring" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            Six things make the day easier. Everything else is optional.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatToBring.map((item) => (
              <li
                key={item.key}
                className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6"
              >
                <span className="text-[color:var(--accent)]">
                  <Icon name={item.key} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                  {item.label}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ PRE-TOUR */}
      <section
        id="faq"
        className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Common questions" title="FAQ — Before You Book" />
          <div className="mt-8 space-y-3">
            {guideFaqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                defaultOpen={i === 0}
              >
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL TIPS map */}
      <section
        id="hvar-local-map"
        className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="On land" title="Local Tips" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)]">
            Pharmacy, ferry dock, ATM, Old Town landmarks — everything useful within Hvar.
          </p>
          <div className="mt-10">
            <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              {mapsData.localTips.title}
            </h3>
            <div className="relative h-[400px] overflow-hidden rounded-xl md:h-[500px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-10 h-[60px] w-full"
                style={{ background: 'var(--surface)' }}
              />
              <iframe
                src={mapsData.localTips.embedUrl}
                title={mapsData.localTips.title}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/d/viewer?mid=1nuvwn07MXgnNuy-bwl99s361tV4PMsI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-pill border border-[color:var(--accent)] px-5 py-2.5 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.97]"
              >
                Open all tips in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WEATHER POLICY */}
      <section
        id="weather"
        className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <div
            role="note"
            aria-labelledby="weather-policy-title"
            className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/50 font-display text-lg font-bold text-amber-300"
              >
                !
              </span>
              <div className="flex-1">
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                  Important
                </p>
                <h2
                  id="weather-policy-title"
                  className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)] md:text-3xl"
                >
                  {weatherPolicy.title}
                </h2>
                <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--white)]/90">
                  {weatherPolicy.body}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {weatherPolicy.contactNote}
                </p>
                <div className="mt-6">
                  <WhatsAppTrackedLink href={WA_WEATHER_URL} label="guide_weather" className={ctaButtonClass}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    Message Nikola on WhatsApp
                  </WhatsAppTrackedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative overflow-hidden bg-[color:var(--bg)] px-4 py-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(59,201,219,0.12) 0%, transparent 70%)',
        }}
      >
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Still have questions?
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            More Questions? Message Nikola.
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            We reply within the hour during the season. Send your date, group size and what you
            want to see.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppTrackedLink href={WA_URL} label="guide_final_cta" className={ctaButtonClass}>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </WhatsAppTrackedLink>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--accent)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--accent)] transition-colors duration-300 hover:bg-[color:var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              See All Tours
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center justify-center rounded-pill border border-[color:var(--border)] px-6 py-3 font-body text-sm font-semibold text-[color:var(--gray)] transition-colors duration-300 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 active:scale-[0.98]"
            >
              Explore Hvar
            </Link>
          </div>
        </div>
      </section>

      <nav aria-label="Tour internal links" className="sr-only">
        <ul>
          {toursData.map((tour) => (
            <li key={tour.slug}>
              <Link href={`/tours/${tour.slug}`}>{tour.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

// MOVED_TO_RENTALS
// {/* RULES & RENTALS */}
// <section
//   id="rules"
//   className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20"
// >
//   <div className="mx-auto max-w-3xl">
//     <SectionHeading eyebrow="On board" title="Rules & Rentals" />
//     <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
//       Quick rundown of what works and what does not on the boat. Tap to open.
//     </p>
//     <div className="mt-8 space-y-3">
//       {rulesAndRentals.map((rule, i) => (
//         <AccordionItem
//           key={rule.key}
//           question={rule.title}
//           defaultOpen={i === 0}
//         >
//           <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
//             <StatusBadge status={rule.status} />
//             <p className="flex-1">{rule.detail}</p>
//           </div>
//         </AccordionItem>
//       ))}
//     </div>
//   </div>
// </section>
