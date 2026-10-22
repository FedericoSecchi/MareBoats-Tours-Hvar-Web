import { MetadataRoute } from 'next';
import { toursData } from '@/lib/tours-data';
import { YACHT_SECTION_LIVE, YACHT_EXPERIENCES, YACHT_BASE } from '@/lib/yacht-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mareboatshvar.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/tours/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/rentals/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/rentals/boat-rental-hvar-without-licence/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/explore/private-boat-tour-hvar-families/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/explore/short-boat-tour-hvar-few-hours/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/transfers/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/conditions/`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.6 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/explore/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/hvar-islands-guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/hvar-boat-tour-photos/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/careers/skipper/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/sea-care/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    // noindex (excluded): /qr, /on-tour, /review, /landing/*, /crew-9f3kq2, internal handbook
    // redirects (excluded): /contact, /faq, /blue-cave, /sunset, /services/scooter-rental
  ];

  const tourPages: MetadataRoute.Sitemap = toursData.map((t) => ({
    url: `${base}/tours/${t.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Private yacht section: only once it is live. Request and thanks pages never.
  const yachtPages: MetadataRoute.Sitemap = YACHT_SECTION_LIVE
    ? [
        { url: `${base}${YACHT_BASE}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        ...YACHT_EXPERIENCES.map((e) => ({
          url: `${base}${YACHT_BASE}/${e.slug}/`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        })),
      ]
    : [];

  return [...staticPages, ...tourPages, ...yachtPages];
}
