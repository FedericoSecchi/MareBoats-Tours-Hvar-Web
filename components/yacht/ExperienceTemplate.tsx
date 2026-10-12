// Template for a private yacht experience page. Server component.

import { JsonLd } from '@/components/ui/JsonLd';
import { buildFAQSchema } from '@/lib/schema';
import { formatYachtFrom, YACHT_PRICES } from '@/lib/pricing';
import {
  JULI,
  MEETING_POINT,
  YACHT_BASE,
  YACHT_SEASON_RANGE,
  yachtWhatsAppUrl,
  type YachtExperience,
} from '@/lib/yacht-data';
import { YachtHero } from './YachtHero';
import { StickyStack, type StackItem } from './StickyStack';
import { CrossLink, FactsStrip, IncludesList, YachtCTA, YachtFAQList, YachtReviews } from './Blocks';

const SITE = 'https://mareboatshvar.com';

export function ExperienceTemplate({ exp, withJuli = false }: { exp: YachtExperience; withJuli?: boolean }) {
  const priceLine = formatYachtFrom(exp.priceKey);
  const price = YACHT_PRICES[exp.priceKey];
  const url = `${SITE}${YACHT_BASE}/${exp.slug}/`;
  const wa = yachtWhatsAppUrl(exp.name);
  // One array feeds both the visible FAQ and the FAQPage JSON-LD.
  const faqs = [...exp.faqs, { question: 'Where do we meet?', answer: MEETING_POINT }];

  const facts = [
    { label: 'Departs from', value: 'Beach Križa, Hvar' },
    ...(exp.duration ? [{ label: 'Duration', value: exp.duration }] : []),
    ...(exp.departureTime ? [{ label: 'Departure', value: exp.departureTime }] : []),
    { label: 'Guests', value: 'Up to 8, private' },
    { label: 'Season', value: YACHT_SEASON_RANGE },
  ];

  const stack: StackItem[] = exp.sections.map((s) => ({ ...s }));
  if (withJuli) {
    stack.push({
      eyebrow: 'Who cooks',
      heading: 'Juli, in the galley',
      paragraphs: [JULI.bio, 'Juli is part of the MareBoats Hvar crew and cooks on board on yacht days with lunch.'],
      image: { src: JULI.image, alt: JULI.imageAlt, objectPosition: JULI.objectPosition },
    });
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: exp.h1,
    serviceType: 'Private yacht day trip',
    description: exp.seoDescription,
    url,
    areaServed: { '@type': 'Place', name: 'Hvar, Croatia' },
    provider: { '@type': 'LocalBusiness', name: 'MareBoats Hvar', url: SITE },
    ...(price != null
      ? {
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/PreOrder',
            url,
          },
        }
      : {}),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Private yacht', item: `${SITE}${YACHT_BASE}/` },
      { '@type': 'ListItem', position: 3, name: exp.name, item: url },
    ],
  };

  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={buildFAQSchema(faqs) as Record<string, unknown>} />

      <YachtHero
        eyebrow={exp.eyebrow}
        title={exp.h1}
        intro={exp.intro}
        image={exp.heroImage}
        experience={exp.slug}
        whatsappUrl={wa}
        requestQuery={exp.slug}
        priceLine={priceLine}
      />
      <FactsStrip facts={facts} />
      <StickyStack items={stack} />
      <IncludesList includes={exp.includes} notIncludes={exp.notIncludes} />
      <CrossLink {...exp.crossLink} />
      <YachtReviews />
      <YachtFAQList faqs={faqs} />
      <YachtCTA experience={exp.slug} whatsappUrl={wa} requestQuery={exp.slug} />
    </main>
  );
}
