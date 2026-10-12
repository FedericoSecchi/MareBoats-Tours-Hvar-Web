import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { getYachtExperience, yachtRobots } from '@/lib/yacht-data';
import { ExperienceTemplate } from '@/components/yacht/ExperienceTemplate';

const exp = getYachtExperience('boat-tour-with-lunch');

export const metadata: Metadata = {
  ...generateSEO({
    title: exp.seoTitle,
    description: exp.seoDescription,
    keywords: exp.keywords,
    slug: `private-yacht-hvar/${exp.slug}`,
    ogImage: exp.heroImage.src,
  }),
  robots: yachtRobots,
};

export default function BoatTourWithLunchPage() {
  return <ExperienceTemplate exp={exp} withJuli />;
}
