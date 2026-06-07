import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import ConditionsContent from './ConditionsContent';

export const metadata: Metadata = {
  ...generateSEO({
    title: 'Hvar Sea Conditions Today | Water Temp, Weather & Blue Cave Status',
    description:
      'Live sea temperature, air temperature, weather forecast and Blue Cave conditions for Hvar. Check before you book your boat tour.',
    keywords: [
      'sea temperature hvar',
      'blue cave conditions',
      'weather hvar today',
      'boat tour weather hvar',
      'hvar sea conditions',
      'hvar water temperature',
      'blue cave open today',
      'hvar weather forecast',
    ],
    slug: 'conditions',
  }),
  robots: { index: true, follow: true },
};

export default function ConditionsPage() {
  return <ConditionsContent />;
}
