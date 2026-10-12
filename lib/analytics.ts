declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

type GTagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

export type WhatsAppClickParams = {
  cta_text: string
  page_location?: string
  tour_name?: string
  section?: string
  /** Site area, e.g. 'premium' for the private yacht section. */
  page_section?: string
  /** Yacht experience name, only in the private yacht section. */
  experience?: string
}

export function trackWhatsAppClick(params: WhatsAppClickParams) {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return
  window.gtag('event', 'whatsapp_click', {
    cta_text: params.cta_text,
    page_location: params.page_location ?? window.location.pathname,
    tour_name: params.tour_name,
    section: params.section ?? 'unknown',
    ...(params.page_section ? { page_section: params.page_section } : {}),
    ...(params.experience ? { experience: params.experience } : {}),
  })
}

/** Private yacht section: request form sent (GA4 conversion candidate). */
export function trackYachtRequest(params: { experience: string; guests?: number }) {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return
  window.gtag('event', 'premium_form_submit', {
    experience: params.experience,
    guests: params.guests,
    page_section: 'premium',
  })
}

/** Private yacht section: thank-you page viewed (GA4 conversion). */
export function trackYachtThanks(experience: string) {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return
  window.gtag('event', 'premium_request_thanks', {
    experience,
    page_section: 'premium',
  })
}
