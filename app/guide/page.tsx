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
  whereWeGoDestinations,
  whereWeGoIntro,
  type BringItem,
  type Rule,
} from '@/lib/guide-content';
import { toursData } from '@/lib/tours-data';

export const metadata: Metadata = generateSEO({
  title: 'Hvar Boat Tour Guide | What to Bring, Rules & Tips',
  description:
    'Complete guide for MareBoats tours: packing list, weather policy, FAQs, and insider tips for your Hvar boat experience.',
  keywords: [
    'hvar boat tour guide',
    'what to bring boat tour',
    'boat tour packing list',
    'hvar tour rules',
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
// Destination guide data
// ──────────────────────────────────────────────
const DESTINATIONS = [
  {
    name: 'Blue Cave (Modra Špilja)',
    subtitle: 'Biševo Island — 15 permanent residents',
    badge: 'Best at noon',
    description:
      'The electric blue glow happens when sunlight enters through an underwater opening and reflects off the white limestone seabed, absorbing red wavelengths and scattering only blue. The cave was carved by wave erosion over millennia. First documented in 1884 by Austrian painter Baron Eugen von Ransonnet, who had the entrance blasted open with dynamite so boats could enter. Biševo is one of the most remote islands in Croatia. Best light: 11am–12pm on calm days.',
  },
  {
    name: 'Green Cave (Zelena Špilja)',
    subtitle: 'Ravnik Island — open ceiling, emerald water',
    badge: 'You can swim here',
    description:
      "The Blue Cave's wilder sibling. The Green Cave creates the same optical phenomenon but its interior is larger and open at the top — so the light comes from above, giving the water an intense emerald-green tone. You can actually swim inside. Less regulated, less crowded, and for many visitors the more memorable of the two.",
  },
  {
    name: 'Red Rocks (Crvena Stijena)',
    subtitle: 'Hvar — iron-oxide limestone breccia',
    badge: 'Best cliff jumping on Hvar',
    description:
      'The color is geology in action. The formations near Milna are breccia — angular limestone fragments cemented with iron-rich minerals. Tectonic forces pushed these layers upright; rain and waves eroded the softer limestone around them, leaving the harder, iron-oxide-stained breccia exposed. The iron oxidized — exactly like metal rusting. The cliffs drop straight into the sea, creating perfect conditions for cliff jumping and some of the best snorkeling on the island.',
  },
  {
    name: 'Stiniva Beach',
    subtitle: 'Hvar — only reachable by boat or steep hike',
    badge: 'Named Best Beach in Europe',
    description:
      'A hidden cove almost completely enclosed by towering limestone cliffs, with an entrance so narrow that only small boats can pass. The pebble beach inside is completely sheltered, the water crystal clear, and the acoustics of the cliffs create a silence that feels surreal. Named Best Beach in Europe by Which? magazine. Arriving by boat is the only way to skip the 45-minute hike down from the cliffs above.',
  },
  {
    name: 'Plaža Dubovica',
    subtitle: 'Hvar — 16th-century stone house on the shore',
    badge: '16th-century stone house',
    description:
      'A stone house built by a local nobleman sits on the rocky point at the edge of the bay — one of the oldest standing structures on this part of the island. The beach is protected by a small peninsula that cuts the wind, making the water unusually calm and warm even in early season. A small sea cave just off the eastern cliff face is worth exploring by snorkel.',
  },
  {
    name: 'Pakleni Islands (Pakleni Otoci)',
    subtitle: 'Archipelago of 16 islands — car-free',
    badge: 'Car-free, pine-covered',
    description:
      "The name doesn't mean \"hellish\" — it comes from \"paklina,\" an old Croatian word for pine resin harvested here for centuries to waterproof ship hulls. Almost entirely uninhabited and car-free, the archipelago has the clearest water in the Adriatic, beach bars hidden between pine trees, and a quiet that's hard to find anywhere near a tourist town in summer.",
  },
  {
    name: 'Veliki Budikovac — Blue Lagoon',
    subtitle: 'Natural saltwater lagoon, sheltered and calm',
    badge: 'Natural lagoon, zero waves',
    description:
      'A natural saltwater lagoon almost entirely enclosed by two islands, creating a sheltered pool of turquoise water so calm it looks artificial. One of the best swimming spots in the region, especially for families. The color changes throughout the day depending on the sun angle — from pale aquamarine in the morning to deep jade by afternoon.',
  },
] as const;

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
  },
] as const;

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
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-6xl">
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

      {/* Section 1 — WHERE WE GO */}
      <section
        id="where-we-go"
        className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="On the chart" title="Where We Go" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            {whereWeGoIntro}
          </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                {mapsData.whereWeGo.title}
              </h3>
              <div className="relative overflow-hidden rounded-xl h-[280px] md:h-[400px]">
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
                <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-10 h-10 w-10" style={{ background: 'var(--bg)' }} />
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {whereWeGoDestinations.map((d) => (
                <li
                  key={d.name}
                  className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5"
                >
                  <h3 className="font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
                    {d.name}
                  </h3>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                    {d.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Destination Guide — SEO content */}
      <section
        id="destination-guide"
        className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Know before you go" title="Where We Go — Your Destination Guide" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Seven stops, each with a story. History, geology and what to expect when you get there.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {DESTINATIONS.map((d) => (
              <li
                key={d.name}
                className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]/60 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-[-0.01em] text-[color:var(--white)]">
                    {d.name}
                  </h3>
                  <span className="shrink-0 rounded-pill border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-[color:var(--accent)] whitespace-nowrap">
                    {d.badge}
                  </span>
                </div>
                <p className="mt-1 font-body text-xs font-medium uppercase tracking-[0.15em] text-[color:var(--accent)]/70">
                  {d.subtitle}
                </p>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-[color:var(--gray)]">
                  {d.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where to Eat — partner restaurants map */}
      <section
        id="where-to-eat"
        className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Good food" title="Where to Eat" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Spots we often recommend along the route — reachable only by boat or a short walk.
          </p>
          <div className="mt-10">
            <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-[-0.01em] text-[color:var(--white)]">
              {mapsData.whereToEat.title}
            </h3>
            <div className="relative overflow-hidden rounded-xl h-[280px] md:h-[400px]">
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
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-10 h-10 w-10" style={{ background: 'var(--surface)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Cards — Skipper's Picks */}
      <section
        id="skippers-picks"
        className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-container">
          <SectionHeading eyebrow="Skipper's picks" title="Where to Eat — Local Favourites" />
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[color:var(--gray)] md:text-lg">
            Our skippers have been anchoring at these spots for years. These aren&apos;t tourist traps — they&apos;re the places locals actually go.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {RESTAURANTS.map((r) => (
              <li
                key={r.name}
                className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] pl-5 pr-6 py-6 border-l-[3px] border-l-[color:var(--accent)]"
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
                <p className="font-body text-xs text-[color:var(--gray)]/70 mt-0.5">{r.cuisine}</p>
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2 — WHAT TO BRING */}
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

      {/* Section 3 — RULES & RENTALS (accordion) */}
      <section
        id="rules"
        className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="On board" title="Rules & Rentals" />
          <p className="mt-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
            Quick rundown of what works and what does not on the boat. Tap to open.
          </p>
          <div className="mt-8 space-y-3">
            {rulesAndRentals.map((rule, i) => (
              <AccordionItem
                key={rule.key}
                question={rule.title}
                defaultOpen={i === 0}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <StatusBadge status={rule.status} />
                  <p className="flex-1">{rule.detail}</p>
                </div>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — FAQ PRE-TOUR (accordion) */}
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

      {/* Hvar map — local tips (pharmacy, ferry, Old Town, etc.) */}
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
            <div className="relative overflow-hidden rounded-xl h-[280px] md:h-[400px]">
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
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-10 h-10 w-10" style={{ background: 'var(--surface)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — WEATHER POLICY (alert box) */}
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
