export const homeContent = {
  // Hero Section
  hero: {
    headline: "Crush your goals. Track, improve, repeat.",
    subheadline: "A performance-first dashboard for athletes and teams. Insightful metrics, effortless tracking.",
    primaryCTA: "Get Started",
    secondaryCTA: "View Features",
    stats: [
      { number: "+10k", label: "athletes" },
      { number: "Realtime", label: "insights" },
      { number: "24/7", label: "tracking" }
    ]
  },

  // Problems Section
  problems: {
    title: "The problem we're solving",
    problems: [
      {
        title: "Scattered data",
        description: "Training metrics across tools make insights hard."
      },
      {
        title: "No real-time feedback",
        description: "Delayed progress signals slow improvement."
      },
      {
        title: "Generic plans",
        description: "One-size-fits-all coaching misses personal context."
      }
    ]
  },

  // Features Section
  features: {
    title: "Track smarter with features that push you further",
    features: [
      {
        icon: "Activity",
        title: "Live metrics",
        description: "See pace, HR, power in real time."
      },
      {
        icon: "ChartLine",
        title: "Smart insights",
        description: "Auto-detect trends and plateaus."
      },
      {
        icon: "Timer",
        title: "Plan builder",
        description: "Personalize training with your data."
      },
      {
        icon: "Trophy",
        title: "Achievements",
        description: "Celebrate milestones with badges."
      }
    ],
    callout: {
      title: "Ready to level up?",
      description: "Join thousands of athletes already tracking smarter",
      cta: "Start Free Trial"
    }
  },

  // Creator Section
  creator: {
    title: "Built by an athlete, for athletes",
    name: "Alex Johnson",
    role: "Founder & Former Collegiate Runner",
    bio: "I'm Alex, a developer and lifelong runner. I build tools that turn training data into momentum. After 6+ years building data tools and competing at the collegiate level, I know what athletes need to succeed.",
    social: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson-runner"
    }
  },

  // Contact Section
  contact: {
    title: "Let's talk",
    subtitle: "Have questions? Want to share feedback? We'd love to hear from you.",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message"
    },
    submit: "Send Message",
    success: "Thanks! We'll get back to you soon.",
    privacy: "We'll never share your info."
  },

  // Navigation
  navigation: {
    logo: "Athletic Dash",
    links: [
      { name: "Features", href: "#features" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" }
    ]
  },

  // Footer
  footer: {
    about: {
      title: "About",
      description: "A performance-first dashboard for athletes and teams. Track smarter, improve faster."
    },
    links: {
      features: { name: "Features", href: "#features" },
      about: { name: "About", href: "#about" },
      contact: { name: "Contact", href: "#contact" },
      privacy: { name: "Privacy", href: "/privacy" }
    },
    social: [
      { name: "GitHub", href: "https://github.com/athletic-dash", icon: "Github" },
      { name: "LinkedIn", href: "https://linkedin.com/company/athletic-dash", icon: "Linkedin" },
      { name: "Twitter", href: "https://twitter.com/athleticdash", icon: "Twitter" }
    ],
    copyright: "© 2024 Athletic Dash. All rights reserved.",
    images: "Images provided by Pexels"
  }
}

// Type exports for TypeScript
export type HomeContent = typeof homeContent
export type HeroContent = typeof homeContent.hero
export type ProblemsContent = typeof homeContent.problems
export type FeaturesContent = typeof homeContent.features
export type CreatorContent = typeof homeContent.creator
export type ContactContent = typeof homeContent.contact
export type NavigationContent = typeof homeContent.navigation
export type FooterContent = typeof homeContent.footer
