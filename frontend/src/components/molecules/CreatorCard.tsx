import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { homeContent } from '@/content/home'

export function CreatorCard() {
  return (
    <Card className="card-hover">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
              AJ
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <Text size="lg" weight="bold" color="primary" className="mb-2">
              {homeContent.creator.name}
            </Text>
            <Text size="base" weight="semibold" color="secondary" className="mb-4">
              {homeContent.creator.role}
            </Text>
            <Text color="muted" className="mb-6 leading-relaxed">
              {homeContent.creator.bio}
            </Text>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={homeContent.creator.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href={homeContent.creator.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
