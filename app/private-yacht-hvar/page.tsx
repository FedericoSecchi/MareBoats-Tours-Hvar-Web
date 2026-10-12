import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildFAQSchema } from '@/lib/schema';
import { formatYachtFrom, getYachtLowestPrice } from '@/lib/pricing';
import {
  YACHT_BASE,
  YACHT_EXPERIENCES,
  YACHT_HUB,
  yachtRobots,
  yachtWhatsAppUrl,
} from '@/lib/yacht-data';
import { YachtHero } from '@/components/yacht/YachtHero';
import { LifeOnWater } from '@/components/yacht/LifeOnWater';
import {
  BoatFeatures,
  ExperienceCards,
  JuliBlock,
  YachtCTA,
  YachtFAQList,
  YachtReviews,
  type ExperienceCard,
} from '@/components/yacht/Blocks';

const SITE = 'https://mareboatshvar.com';

export const metadata: Metadata = {
  ...generateSEO({
    title: YACHT_HUB.seoTitle,
    description: YACHT_HUB.seoDescription,
    keywords: YACHT_HUB.keywords,
    slug: 'private-yacht-hvar',
    ogImage: YACHT_HUB.heroImage.src,
  }),
  robots: yachtRobots,
};

export default function PrivateYachtHubPage() {
  const lowest = getYachtLowestPrice();
  const wa = yachtWhatsAppUrl();

  const faqs = [
    ...(lowest != null
      ? [
          {
            question: 'How much does a private yacht day cost?',
            answer: `From €${lowest} for the whole boat, up to 8 guests. The final price for your date is confirmed in March 2027. Nothing to pay now.`,
          },
        ]
      : []),
    ...YACHT_HUB.faqs,
  ];

  const cards: ExperienceCard[] = [
    ...YACHT_EXPERIENCES.map((e) => ({
      href: `${YACHT_BASE}/${e.slug}/`,
      name: e.name,
      summary: e.cardSummary,
      image: e.heroImage,
      priceLine: formatYachtFrom(e.priceKey),
    })),
    {
      href: YACHT_HUB.transferCard.href,
      name: YACHT_HUB.transferCard.name,
      summary: YACHT_HUB.transferCard.summary,
      image: {
        src: '/images/destinations/hvar-old-town-aerial-spanjola-drone-2026-01.jpg',
        alt: 'Hvar old town and the Spanjola fortress from above',
      },
      priceLine: formatYachtFrom('transfer'),
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private yacht days from Hvar',
    serviceType: 'Private yacht day charter',
    description: YACHT_HUB.seoDescription,
    url: `${SITE}${YACHT_BASE}/`,
    areaServed: { '@type': 'Place', name: 'Hvar, Croatia' },
    provider: { '@type': 'LocalBusiness', name: 'MareBoats Hvar', url: SITE },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Private yacht experiences',
      itemListElement: YACHT_EXPERIENCES.map((e) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: e.h1, url: `${SITE}${YACHT_BASE}/${e.slug}/` },
      })),
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Private yacht', item: `${SITE}${YACHT_BASE}/` },
    ],
  };

  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={buildFAQSchema(faqs) as Record<string, unknown>} />

      <YachtHero
        tall
        eyebrow={YACHT_HUB.eyebrow}
        title={YACHT_HUB.h1}
        intro={YACHT_HUB.intro}
        image={YACHT_HUB.heroImage}
        experience="hub"
        whatsappUrl={wa}
        priceLine={lowest != null ? `From €${lowest}` : null}
      />
      <BoatFeatures intro="For 2027 we are bringing a larger boat to the MareBoats Hvar fleet, for private days only. This is what every day on it includes." />
      <ExperienceCards cards={cards} />
      <LifeOnWater steps={YACHT_HUB.dayFlow} />
      <JuliBlock />
      <YachtReviews />
      <YachtFAQList faqs={faqs} />
      <YachtCTA experience="hub" whatsappUrl={wa} />
    </main>
  );
}
