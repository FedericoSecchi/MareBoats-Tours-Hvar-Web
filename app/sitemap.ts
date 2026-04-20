import { MetadataRoute } from 'next';
import { toursData } from '@/lib/tours-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mareboatshvar.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/tours/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blue-cave/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/boat-rental/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/transfers/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sunset/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/landing/explore/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/landing/guide-hvar/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/scooter-rental/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const tourPages: MetadataRoute.Sitemap = toursData.map((t) => ({
    url: `${base}/tours/${t.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...tourPages];
}
