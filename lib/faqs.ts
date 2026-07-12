import { EXTRAS } from '@/lib/pricing';

export type FaqItem = { question: string; answer: string };

export const homepageFaqs: FaqItem[] = [
  {
    question: 'What is included in the tour?',
    answer:
      `Local captain, fuel for the itinerary, snorkeling masks, icebox and bottled water on board. Lunch stops at island restaurants and cave entrance fees (Blue Cave €${EXTRAS.blueCave}, Green Cave €${EXTRAS.greenCave}) are at your own tab. Drone and underwater video are available on request as a paid add-on when Fede is on board - not included by default.`,
  },
  {
    question: 'How many people fit on the boat?',
    answer:
      'Our speedboats are licensed for up to 12 passengers. We cap every tour at 8, so there\'s room to move, sit comfortably, and enjoy the ride without feeling packed in. That\'s the whole point of keeping groups small.',
  },
  {
    question: 'What languages do you speak on board?',
    answer: 'English, Croatian, Italian, Spanish and German.',
  },
  {
    question: 'What happens if the weather is bad?',
    answer:
      'If wind or sea conditions are unsafe, the captain reschedules at no extra cost. If we cancel, you choose: full refund or a new date. We confirm by WhatsApp the evening before.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Sunscreen, hat, sunglasses, swimwear and a light layer for the breeze. Water shoes help on rocky coves. Snorkeling gear and towels are on board.',
  },
  {
    question: 'Can we customize the route?',
    answer:
      'Yes. Want more time at Blue Cave, a quieter beach or a specific lunch stop? Tell us when you book and the captain plans around it.',
  },
  {
    question: 'How do I book a boat tour in Hvar?',
    answer:
      'WhatsApp at +385 95 196 6734. Send your date, group size and the tour you want. We reply within the hour during the season and confirm the same day.',
  },
];
