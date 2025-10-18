import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { homeContent } from '@/content/home'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Text size="lg" weight="bold" color="white">
                {homeContent.footer.about.title}
              </Text>
            </div>
            <Text color="white" className="opacity-80 mb-6">
              {homeContent.footer.about.description}
            </Text>

            {/* Social Links */}
            <div className="flex space-x-4">
              {homeContent.footer.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Text size="lg" weight="bold" color="white" className="mb-4">
              Quick Links
            </Text>
            <div className="space-y-2">
              {Object.entries(homeContent.footer.links).map(([key, link]) => (
                <a
                  key={key}
                  href={link.href}
                  className="block text-white opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <Text size="lg" weight="bold" color="white" className="mb-4">
              Get Started
            </Text>
            <Text color="white" className="opacity-80 mb-4">
              Ready to track smarter? Join our community of athletes.
            </Text>
            <Button
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white hover:text-dark"
            >
              Start Free Trial
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text color="white" className="opacity-70">
              © {currentYear} {homeContent.footer.copyright}
            </Text>
            <Text color="white" className="opacity-50 text-sm mt-2 md:mt-0">
              {homeContent.footer.images}
            </Text>
          </div>
        </div>
      </div>
    </footer>
  )
}
