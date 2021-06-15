export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''

export const pageview = (url: string): void => {
  if (!process.browser) return
  if (!gtag) {
    console.warn('GA does not exist')
    return
  }
  gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

export const event = ({ action, category, label, value }: Event): void => {
  if (!process.browser) return
  if (!gtag) {
    console.warn('GA does not exist')
    return
  }
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

interface Event {
  action: string
  category?: string
  label?: string
  value?: number
}

