import { MetadataRoute } from 'next';
import { toursData } from '@/lib/tours-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mareboatshvar.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/tours/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/rentals/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/rentals/boat-rental-hvar-without-licence/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/explore/private-boat-tour-hvar-families/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/transfers/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/conditions/`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.6 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/explore/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/hvar-islands-guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/careers/skipper/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    // noindex (excluded): /qr, /on-tour, /review, /landing/*, /crew-9f3kq2, /crew-handbook-7x2m9p
    // redirects (excluded): /contact, /faq, /blue-cave, /sunset, /services/scooter-rental
  ];

  const tourPages: MetadataRoute.Sitemap = toursData.map((t) => ({
    url: `${base}/tours/${t.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...tourPages];
}
