# Mare Boats Hvar — Conversion & Sales Audit

**Date:** February 2025  
**Phase:** Checkpoint & Analysis  
**Scope:** Homepage clarity, CTA strategy, trust signals, pricing, mobile flow, scalability

---

## 1. Current Strengths

| Area | What's Working |
|------|----------------|
| **Clarity** | H1 clearly states "Mare Boats Hvar — Private Boat Tours in Hvar, Croatia". Value prop is visible in under 10 seconds. |
| **Primary CTA** | WhatsApp is the main conversion path — Hero, FAB, Contact, Tours cards, Large Groups. Consistent and low-friction. |
| **Trust** | 8 real reviews (7 Google, 1 TripAdvisor) with names and platforms. Links to Google Maps and TripAdvisor for verification. |
| **Group positioning** | Large Groups section, About copy, FAQ all reinforce multi-boat capacity. No numeric limits that cap perceived scale. |
| **Mobile** | WhatsApp FAB always visible. Touch-friendly buttons. Reviews carousel swipeable. |
| **Pre-qualification** | Tour cards include date + people inputs before WhatsApp — helps qualify and personalize the conversation. |
| **FAQ** | Addresses objections: large groups, kids, payment, weather, lunch. Reduces friction before contact. |
| **Agency mention** | Large Groups explicitly mentions "Travel agencies and tour operators" — good for B2B/wholesale. |

---

## 2. High-Impact Missing Elements

| Gap | Impact | Recommendation |
|-----|--------|----------------|
| **Pricing shows "€ TBD"** | Visitors expect transparency. "TBD" can signal uncertainty or hidden costs. | Replace with "From €X" or "Price on request" per tour. Even a range (e.g. "€400–800") sets expectations and filters serious leads. |
| **No urgency or scarcity** | No reason to book now vs. later. | Add seasonal copy (e.g. "Summer slots filling fast") or "Limited boats per day" — only if true. |
| **Map button on tour cards links to "#"** | Dead link. Looks unprofessional. | Link to Google Maps with tour-specific location or remove the button. |
| **No "Book now" or "Check availability" hierarchy** | All CTAs say "WhatsApp" or "Contact us". No clear primary action label for high-intent users. | Consider "Book now" or "Check availability" for Hero primary CTA to signal immediacy. |

---

## 3. Medium-Impact Opportunities

| Opportunity | Impact | Recommendation |
|-------------|--------|----------------|
| **CTA consistency** | Large Groups uses "btn-lg", Hero uses "btn-cta". Slight visual inconsistency. | Apply `btn-cta` to Large Groups CTA for visual alignment. |
| **Reviews before Contact** | Reviews build trust right before Contact — good. But no CTA in Reviews section header. | "Planning a group trip?" is below the carousel. Consider a sticky or prominent CTA above the fold of Reviews. |
| **Contact section hierarchy** | WhatsApp, Instagram, TripAdvisor are equal weight. WhatsApp should dominate. | Make WhatsApp larger or primary-colored; demote Instagram/TripAdvisor to secondary. |
| **No social proof in Hero** | Hero has no review snippet or "X happy guests" stat. | Add one line: "Rated 5★ on Google & TripAdvisor" or "Trusted by 500+ guests" — if accurate. |
| **WhatsApp pre-fill is generic** | All links use "Hi! I'm interested in a boat tour." | Tour cards use `buildWhatsAppUrl` with tour name — good. Hero and FAB could add "from your website" or similar for attribution. |

---

## 4. Low-Priority or Future Ideas

| Idea | Notes |
|------|-------|
| **Calendar availability** | Would require backend. Not a quick win. |
| **Multi-language** | Croatian, German, Italian for Hvar tourists — high value but significant effort. |
| **Video testimonials** | Strong trust signal; needs production. |
| **Structured data for reviews** | Add `Review` schema to index.html for rich snippets. |
| **Agency/wholesale page** | Dedicated page for tour operators with contact form — future scaling. |

---

## 5. Quick Wins (< 1 hour)

| Action | Effort | Impact |
|--------|--------|--------|
| Fix Map button on tour cards (link to real map or remove) | 5 min | Medium — removes dead link |
| Add "Rated 5★ on Google" or similar in Hero | 10 min | Medium — trust at first glance |
| Apply `btn-cta` to Large Groups CTA | 2 min | Low — visual consistency |
| Replace "€ TBD" with "Price on request" or "From €X" | 15 min | High — sets expectations |
| Make WhatsApp visually primary in Contact section | 10 min | Medium — clearer hierarchy |

---

## 6. Recommended Execution Order

1. **Fix Map button** — Remove or link correctly. Quick, removes friction.
2. **Pricing clarity** — Replace "TBD" with "Price on request" or real ranges. Highest conversion impact.
3. **Hero trust line** — Add "Rated 5★ on Google & TripAdvisor" if accurate.
4. **Contact section hierarchy** — Emphasize WhatsApp over Instagram/TripAdvisor.
5. **CTA consistency** — Apply `btn-cta` to Large Groups.
6. **Urgency/scarcity** — Add only if truthful (e.g. seasonal messaging).

---

## Summary

The site is **conversion-ready** with clear value prop, strong trust signals (reviews), and a consistent WhatsApp-first flow. The main gaps are **pricing transparency** ("TBD" → clear messaging) and **minor UX fixes** (Map button, CTA hierarchy). No major structural changes needed — focus on copy and small UI tweaks.

**Next step:** Implement quick wins 1–3, then iterate based on real booking data.
