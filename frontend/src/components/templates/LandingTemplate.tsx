'use client'

import { useEffect } from 'react'
import { NavBar } from '@/components/molecules/NavBar'
import { Footer } from '@/components/molecules/Footer'
import { Hero } from '@/components/organisms/Hero'
import { ProblemsSection } from '@/components/organisms/ProblemsSection'
import { FeaturesSection } from '@/components/organisms/FeaturesSection'
import { CreatorSection } from '@/components/organisms/CreatorSection'
import { ContactSection } from '@/components/organisms/ContactSection'
import { homeContent } from '@/content/home'
import { analytics } from '@/lib/utils/analytics'

export function LandingTemplate() {
  // Track page view on mount
  useEffect(() => {
    analytics.page('/', {
      title: 'Landing Page',
      section: 'home'
    })
  }, [])

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <ProblemsSection />
        <FeaturesSection />
        <CreatorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
