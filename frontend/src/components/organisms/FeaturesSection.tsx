import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { FeatureCard } from '@/components/molecules/FeatureCard'
import { homeContent } from '@/content/home'
import { analytics } from '@/lib/utils/analytics'

export function FeaturesSection() {
  const handleCalloutClick = () => {
    analytics.track({
      name: 'Features Callout CTA Clicked',
      properties: {
        location: 'features_section'
      }
    })

    // Scroll to contact section
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heading
            level={2}
            size="3xl"
            color="dark"
            align="center"
            className="mb-4"
          >
            {homeContent.features.title}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {homeContent.features.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Callout Band */}
        <div className="bg-dark rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Heading
              level={2}
              size="2xl"
              color="white"
              align="center"
              className="mb-4"
            >
              {homeContent.features.callout.title}
            </Heading>
            <Text
              size="lg"
              color="white"
              align="center"
              className="mb-8 opacity-90"
            >
              {homeContent.features.callout.description}
            </Text>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCalloutClick}
              className="border-white text-white hover:bg-white hover:text-dark"
            >
              {homeContent.features.callout.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
