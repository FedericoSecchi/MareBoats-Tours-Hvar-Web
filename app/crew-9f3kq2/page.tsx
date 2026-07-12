import type { Metadata } from 'next';
import CrewDashboard from './CrewDashboard';

export const metadata: Metadata = {
  title: 'Crew Pricing — MareBoats',
  robots: { index: false, follow: false, nocache: true },
};

export default function CrewPage() {
  return <CrewDashboard />;
}
