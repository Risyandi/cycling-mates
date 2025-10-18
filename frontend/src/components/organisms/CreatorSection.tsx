import { Heading } from '@/components/atoms/Heading'
import { CreatorCard } from '@/components/molecules/CreatorCard'
import { homeContent } from '@/content/home'

export function CreatorSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heading
            level={2}
            size="3xl"
            color="dark"
            align="center"
            className="mb-4"
          >
            {homeContent.creator.title}
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <CreatorCard />
        </div>
      </div>
    </section>
  )
}
