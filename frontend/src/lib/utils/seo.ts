import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  noindex?: boolean
  keywords?: string[]
}

export function generateMetadata({
  title = "Athletic Dash — Track, improve, repeat",
  description = "A sporty dashboard for athletes to track progress with real-time insights.",
  image = "/og-image.jpg",
  url = "https://athletic-dash.com",
  type = "website",
  noindex = false,
}: SEOProps = {}): Metadata {
  const metadata: Metadata = {
    title,
    description,
    keywords: [
      "athletic dashboard",
      "sports tracking",
      "fitness app",
      "performance metrics",
      "athlete training",
      "workout tracker",
      "sports analytics"
    ],
    authors: [{ name: "Athletic Dash Team" }],
    creator: "Athletic Dash",
    publisher: "Athletic Dash",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Athletic Dash",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@athleticdash",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }

  if (noindex) {
    metadata.robots = {
      index: false,
      follow: false,
    }
  }

  return metadata
}

export const jsonLd = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Athletic Dash",
    url: "https://athletic-dash.com",
    logo: "https://athletic-dash.com/logo.png",
    description: "A performance-first dashboard for athletes and teams.",
    sameAs: [
      "https://github.com/athletic-dash",
      "https://linkedin.com/company/athletic-dash"
    ]
  },
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Johnson",
    jobTitle: "Founder & Developer",
    worksFor: {
      "@type": "Organization",
      name: "Athletic Dash"
    },
    url: "https://athletic-dash.com/about",
    sameAs: [
      "https://github.com/alexjohnson",
      "https://linkedin.com/in/alexjohnson-runner"
    ]
  }
}
