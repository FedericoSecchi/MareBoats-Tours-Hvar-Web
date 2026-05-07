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
}

export function trackWhatsAppClick(params: WhatsAppClickParams) {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') return
  window.gtag('event', 'whatsapp_click', {
    cta_text: params.cta_text,
    page_location: params.page_location ?? window.location.pathname,
    tour_name: params.tour_name,
    section: params.section ?? 'unknown',
  })
}
