export type GuideFaq = { question: string; answer: string };

export const guideFaqs: GuideFaq[] = [
  {
    question: 'What should I bring on a boat tour in Hvar?',
    answer:
      'Sunscreen SPF 50+, a hat, sunglasses, swimwear and a light layer for the breeze. We recommend water shoes for rocky coves, a small towel and some cash for lunch stops. Snorkeling gear and bottled water are on board.',
  },
  {
    question: 'Can you swim inside the Blue Cave in Croatia?',
    answer:
      'No — swimming inside the Blue Cave (Biševo) is not allowed. You enter on a small boat for a few minutes to see the light effect. We plan separate swimming stops in clear bays around Vis and the Pakleni Islands during the same tour.',
  },
  {
    question: 'What if the weather is bad on the day of my tour?',
    answer:
      'If wind (Bura or Jugo) or sea conditions make the trip unsafe, the captain reschedules. If we cancel, you get a full refund or a new date — whichever you prefer. We always check forecasts the day before and confirm by WhatsApp.',
  },
  {
    question: 'Is there a toilet on board?',
    answer:
      'Yes, the boat has a small toilet. For longer stops we also recommend planning a beach bar or restaurant break.',
  },
  {
    question: 'Can I bring babies or small children?',
    answer:
      'Yes. Tell us their ages when you book and we adapt the route — calmer water, shorter stops, life jackets in the right sizes.',
  },
  {
    question: 'Do you accept card payments?',
    answer:
      'We confirm the booking by WhatsApp and settle on the day. Cash (EUR) is easiest; bank transfer in advance is also possible. Restaurant stops are paid directly to each venue.',
  },
  {
    question: 'What if I get seasick?',
    answer:
      'Take a motion-sickness tablet 30–45 minutes before boarding if you know you are sensitive. Tell the captain — we choose calmer routes and stop more often. Looking at the horizon and avoiding heavy meals before the tour also help.',
  },
];

export const whatToBring = [
  'Sunscreen SPF 50+ (reef-friendly preferred)',
  'Hat and polarized sunglasses',
  'Swimwear and a quick-dry towel',
  'Water shoes for rocky beaches and coves',
  'Light long-sleeve layer for the breeze on the way back',
  'Camera or phone (we also film aerial drone & underwater footage)',
  'Cash in euros for lunch stops at island restaurants',
  'Motion-sickness tablet if you are sensitive at sea',
];

export const onBoardRules = [
  'No shoes on the deck — bare feet are easier and safer.',
  'Life jackets are on board for every guest, in adult and child sizes.',
  'No glass bottles. Cans, tetra-packs and reusable bottles are fine.',
  'Smoking only in the open-air seating area, never below deck.',
];

export const swimmingSpots = [
  {
    name: 'Pakleni Islands',
    detail:
      'Shallow bays with turquoise water, perfect for swimming and snorkeling. Visibility is often 10+ metres on calm days.',
  },
  {
    name: 'Hidden coves around Vis',
    detail:
      'Quieter stops away from the main tour boats. The captain picks the best one based on wind and crowds that day.',
  },
  {
    name: 'Blue Cave (Biševo)',
    detail:
      'A short visit on a small boat — no swimming inside. The blue glow is strongest between roughly 11:00 and 13:00 in summer.',
  },
];

export const restaurants = [
  {
    name: 'Konoba Menego',
    detail: 'Stone-walled tavern in Hvar old town. Traditional Dalmatian small plates, walking distance from the harbour.',
  },
  {
    name: 'Fig Hvar',
    detail: 'Casual Mediterranean menu close to the seafront. Good for a relaxed lunch before or after the tour.',
  },
  {
    name: 'Lola Bar & Bistro',
    detail: 'Lively spot in the centre of Hvar town. Cocktails, sharing plates and a young crowd.',
  },
  {
    name: 'Konoba Toni (Palmižana)',
    detail: 'On the Pakleni Islands — fresh fish, garden seating. A classic mid-tour lunch stop if you want a longer break.',
  },
];
