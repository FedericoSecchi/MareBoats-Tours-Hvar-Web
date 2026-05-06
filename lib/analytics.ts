type GTagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: unknown }).gtag !== 'undefined') {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}
