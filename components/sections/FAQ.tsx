'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { homepageFaqs } from '@/lib/faqs';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { fadeInUpContainer } from '@/lib/motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="faq" ref={ref} className="bg-[color:var(--bg)] py-20 px-4 md:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUpContainer}
        >
          <div className="mb-10">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--accent)]">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[color:var(--white)] md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <ul className="flex flex-col gap-3">
            {homepageFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-trigger-${index}`;

              return (
                <li
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]"
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold uppercase tracking-[-0.01em] text-[color:var(--white)] hover:text-[color:var(--accent)] focus-visible:bg-[color:var(--bg)]/40 focus-visible:outline-none active:opacity-90 md:text-lg"
                    >
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className={`relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent)]/40 text-[color:var(--accent)] transition-transform duration-300 ease-out ${
                          isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                      >
                        <span className="absolute h-3 w-0.5 bg-current" />
                        <span className="absolute h-0.5 w-3 bg-current" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="px-5 pb-5 font-body text-sm leading-relaxed text-[color:var(--gray)] md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
