import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy',
  description:
    'How MareBoats Hvar collects, uses and stores personal data from website visitors and job applicants.',
  keywords: [],
  slug: 'privacy',
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-[color:var(--border)] pt-10">
      <h2 className="font-display text-2xl font-extrabold uppercase tracking-[-0.01em] text-[color:var(--white)]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 font-body text-base leading-relaxed text-[color:var(--gray)]">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--white)]">
      <div className="mx-auto max-w-container px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 font-body text-sm text-[color:var(--gray)]">Last updated: 21 August 2026</p>
          <p className="mt-6 font-body text-base leading-relaxed text-[color:var(--gray)]">
            This page explains what personal data we collect through this website, why we collect it, and what your rights are.
          </p>

          <Section title="Who is responsible">
            <p>The data controller is:</p>
            <address className="not-italic">
              Josip Mlačić<br />
              Ulica Veljka Kovačevića 28, 21450 Hvar, Croatia<br />
              OIB: HR48474408245
            </address>
            <p>
              For any question about your data, or to exercise any of the rights below, contact us through the WhatsApp number listed on this website.
            </p>
          </Section>

          <Section title="What we collect">
            <p>
              If you apply for a job through our careers page, we collect the information you enter in the application form: your name, email address, nationality, nautical licence details, previous seasons of experience, your availability, and your written answers to our questions.
            </p>
            <p>
              We ask for nationality only to know whether we need to arrange work paperwork for you. We do not ask for passport numbers, identity documents, health information or any other sensitive category of data through this website. Do not send us that information through the form.
            </p>
            <p>If you contact us through WhatsApp, we hold whatever you choose to send us in that conversation.</p>
            <p>
              This website uses Google Analytics to understand how visitors use the site. That data is aggregated and does not identify you personally.
            </p>
          </Section>

          <Section title="Why we collect it, and on what basis">
            <p>
              We use application data for one purpose only: to assess whether you are a good fit for a skipper position with us, and to contact you about it.
            </p>
            <p>
              The legal basis is taking steps at your request before entering into a contract, under Article 6(1)(b) of the GDPR.
            </p>
            <p>We do not use application data for marketing. We do not sell it. We do not share it with other companies.</p>
          </Section>

          <Section title="Who can see it">
            <p>Inside our company, your application is visible to the small group of people who make hiring decisions.</p>
            <p>
              We use two service providers to handle the data on our behalf: n8n, which receives the form submission, and Notion, where applications are stored. Both act as processors under our instructions.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep applications until 31 March 2027, so that we can consider you for the following season. After that date we delete them.
            </p>
            <p>If you ask us to delete your application earlier, we do it.</p>
          </Section>

          <Section title="Your rights">
            <p>
              Under the GDPR you can ask us to show you the data we hold about you, correct it if it is wrong, delete it, or restrict how we use it. You can also object to our processing.
            </p>
            <p>Write to us and we will action it. There is no charge and no form to fill in.</p>
            <p>
              If you are not satisfied with how we handle your request, you can complain to the Croatian Personal Data Protection Agency (AZOP).
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>If we change how we handle personal data, we update this page and change the date at the top.</p>
          </Section>
        </div>
      </div>
    </main>
  );
}
