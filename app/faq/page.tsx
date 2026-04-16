import Link from 'next/link';
import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { buildFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = generateSEO({
  title: 'Boat Tour Hvar FAQ | Common Questions Answered',
  description:
    'Frequently asked questions about boat tours in Hvar: do you need a license, how much does it cost, what to bring, group sizes and more. Mare Boats Hvar.',
  keywords: [
    'boat tour hvar faq',
    'do I need license hvar boat',
    'how much boat tour hvar',
    'hvar boat tour questions',
    'what to bring hvar boat tour',
  ],
  slug: 'faq',
});

const WA_URL =
  'https://wa.me/385951966734?text=Hi!%20I%20have%20a%20question%20about%20your%20tours.';

const faqSections = [
  {
    section: 'Booking',
    faqs: [
      {
        question: 'How do I book a boat tour from Hvar?',
        answer:
          'The easiest way is to message us on WhatsApp (+385 95 196 6734). We confirm availability, discuss your preferences and send details within hours. No advance payment required to hold your spot — we confirm via WhatsApp.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'We recommend booking 2–3 days in advance in peak season (July–August). Outside peak season, same-day bookings are often possible. Always worth a quick WhatsApp message.',
      },
      {
        question: 'Do I need to pay a deposit?',
        answer:
          'We accept cash (EUR) on the day of the tour. For larger groups or custom tours we may ask for a small deposit via bank transfer to confirm the booking. All details are agreed via WhatsApp.',
      },
    ],
  },
  {
    section: 'The Tours',
    faqs: [
      {
        question: 'Are the boat tours private?',
        answer:
          'Yes — all tours are 100% private. You will never share the boat with strangers. The boat is exclusively for your group.',
      },
      {
        question: 'How many people can join a tour?',
        answer:
          'Our speedboats accommodate up to 12 people. For larger groups (weddings, corporate events, agencies) we arrange multiple boats running together.',
      },
      {
        question: 'Do you include drone and underwater video?',
        answer:
          'Yes — aerial drone footage and underwater video are included in all private tours. This is one of our key differentiators. You leave with a unique visual keepsake of your day.',
      },
      {
        question: 'Can you customise the itinerary?',
        answer:
          'Absolutely. The private custom tour is fully tailored to your group. Message us on WhatsApp and we plan together based on your interests, the weather forecast and sea conditions that day.',
      },
    ],
  },
  {
    section: 'Practical',
    faqs: [
      {
        question: 'What should I bring on a boat tour from Hvar?',
        answer:
          'Bring: sunscreen, sunglasses, hat, swimwear, towel, and a light jacket (especially for sunset tours). We provide water, snorkeling equipment and an icebox.',
      },
      {
        question: 'Do I need a boat license for the tours?',
        answer:
          'No license needed for any guided tour — our skipper handles everything. A valid license is only required if you book our self-drive boat rental option.',
      },
      {
        question: 'Is it safe for children?',
        answer:
          'Yes. We provide life jackets for all ages. Our skippers are experienced and prioritise safety at all times. Kids especially love the snorkeling and cave visits.',
      },
      {
        question: 'What if the weather is bad?',
        answer:
          'Safety is our first priority. If sea conditions are unsuitable we will reschedule or issue a full refund. We monitor forecasts closely and contact you in advance.',
      },
      {
        question: 'Is the Blue Cave entrance fee included?',
        answer:
          'No — the Blue Cave entrance fee (approximately €18 per person) and Green Cave fee (~€12 pp) are paid separately on site. These are national park fees set by the Croatian government.',
      },
      {
        question: 'Do you provide lunch?',
        answer:
          'We provide water and snacks. For full-day tours (8h) we stop at a restaurant on the Pakleni Islands or you can bring your own picnic. Let us know your preference when booking.',
      },
    ],
  },
];

const allFaqs = faqSections.flatMap((s) => s.faqs);

export default function FaqPage() {
  const faqSchema = buildFAQSchema(allFaqs);

  return (
    <main>
      <JsonLd data={faqSchema as Record<string, unknown>} />

      {/* Header */}
      <section className="bg-mare-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Boat Tour Hvar — Frequently Asked Questions
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto">
          Everything you need to know before booking a private boat tour from Hvar, Croatia.
        </p>
      </section>

      {/* FAQ sections */}
      <section className="py-14 px-4 max-w-3xl mx-auto">
        {faqSections.map((section) => (
          <div key={section.section} className="mb-10">
            <h2 className="text-xl font-semibold text-mare-dark mb-4 pb-2 border-b border-gray-200">
              {section.section}
            </h2>
            <dl className="space-y-4">
              {section.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-gray-200 rounded-xl p-5 hover:border-mare-primary transition-colors"
                >
                  <dt className="font-semibold text-mare-dark">{faq.question}</dt>
                  <dd className="text-gray-600 mt-1 text-sm leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </section>

      {/* Still have questions */}
      <section className="bg-mare-light py-14 px-4 text-center">
        <h2 className="section-heading mb-3">Still have questions?</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Message us directly on WhatsApp — we reply within hours and are happy to help plan your
          perfect day on the water.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Ask on WhatsApp
          </a>
          <Link href="/tours" className="inline-flex items-center justify-center gap-2 border-2 border-mare-primary text-mare-primary font-semibold px-6 py-3 rounded-lg hover:bg-mare-primary hover:text-white transition-all">
            View All Tours
          </Link>
        </div>
      </section>
    </main>
  );
}
