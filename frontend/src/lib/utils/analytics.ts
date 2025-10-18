// Analytics placeholder - replace with your preferred analytics service
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  userId?: string
  timestamp?: Date
}

export class Analytics {
  private static instance: Analytics
  private isEnabled: boolean = true

  private constructor() {
    // Initialize analytics service here (e.g., Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined') {
      // Browser environment - initialize client-side analytics
      this.initializeBrowserAnalytics()
    }
  }

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics()
    }
    return Analytics.instance
  }

  private initializeBrowserAnalytics() {
    // Placeholder for browser analytics initialization
    // Example: gtag, mixpanel.init(), etc.
    console.log('Analytics initialized (placeholder)')
  }

  public track(event: AnalyticsEvent) {
    if (!this.isEnabled) return

    const eventData = {
      ...event,
      timestamp: event.timestamp || new Date(),
    }

    // Placeholder for actual analytics tracking
    console.log('Analytics event tracked:', eventData)

    // Replace with actual analytics service calls:
    // - Google Analytics: gtag('event', event.name, event.properties)
    // - Mixpanel: mixpanel.track(event.name, event.properties)
    // - Segment: analytics.track(event.name, event.properties)
  }

  public identify(userId: string, traits?: Record<string, any>) {
    if (!this.isEnabled) return

    console.log('Analytics user identified:', { userId, traits })

    // Replace with actual analytics service calls:
    // - Mixpanel: mixpanel.identify(userId), mixpanel.people.set(traits)
    // - Segment: analytics.identify(userId, traits)
  }

  public page(path: string, properties?: Record<string, any>) {
    if (!this.isEnabled) return

    console.log('Analytics page view:', { path, properties })

    // Replace with actual analytics service calls:
    // - Google Analytics: gtag('config', 'GA_MEASUREMENT_ID', { page_path: path })
    // - Mixpanel: mixpanel.track('Page View', { ...properties, path })
  }

  public disable() {
    this.isEnabled = false
  }

  public enable() {
    this.isEnabled = true
  }
}

// Export singleton instance
export const analytics = Analytics.getInstance()

// React hook for using analytics in components
export function useAnalytics() {
  return {
    track: (event: AnalyticsEvent) => analytics.track(event),
    identify: (userId: string, traits?: Record<string, any>) => analytics.identify(userId, traits),
    page: (path: string, properties?: Record<string, any>) => analytics.page(path, properties),
  }
}
