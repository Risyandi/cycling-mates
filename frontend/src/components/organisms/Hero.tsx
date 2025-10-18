import Image from 'next/image'
import { Button } from '@/components/atoms/Button'
import { Badge } from '@/components/atoms/Badge'
import { Text } from '@/components/atoms/Text'
import { homeContent } from '@/content/home'
import { analytics } from '@/lib/utils/analytics'

export function Hero() {
  const handleCTAClick = (ctaType: 'primary' | 'secondary') => {
    analytics.track({
      name: 'Hero CTA Clicked',
      properties: {
        cta_type: ctaType,
        location: 'hero_section'
      }
    })

    if (ctaType === 'primary') {
      // Scroll to contact section or open modal
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Scroll to features section
      const featuresSection = document.querySelector('#features')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-primary overflow-hidden">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {homeContent.hero.stats.map((stat, index) => (
                <Badge key={index} variant="secondary" size="md">
                  {stat.number} {stat.label}
                </Badge>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">{homeContent.hero.headline.split('.').slice(0, -1).join('.')}</span>
              <span className="block text-secondary">
                {homeContent.hero.headline.split('.').pop()}
              </span>
            </h1>

            {/* Subheadline */}
            <Text
              size="xl"
              color="white"
              className="mb-8 max-w-2xl opacity-90 leading-relaxed"
              balance
            >
              {homeContent.hero.subheadline}
            </Text>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="inverse"
                size="lg"
                onClick={() => handleCTAClick('primary')}
                className="text-lg px-8 py-4"
              >
                {homeContent.hero.primaryCTA}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleCTAClick('secondary')}
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark"
              >
                {homeContent.hero.secondaryCTA}
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for athlete image from Pexels */}
              <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🏃‍♂️</div>
                  <Text size="lg" color="white" weight="semibold">
                    Athlete Training Image
                  </Text>
                  <Text size="sm" color="white" className="opacity-75">
                    (Pexels image will be loaded here)
                  </Text>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Text color="white" weight="bold" size="sm">24</Text>
                </div>
                <div>
                  <Text size="sm" weight="bold" color="dark">Real-time</Text>
                  <Text size="xs" color="muted">Active sessions</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
