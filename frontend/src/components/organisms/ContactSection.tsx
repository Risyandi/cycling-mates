'use client'

import { useState } from 'react'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'
import { ContactForm } from '@/components/molecules/ContactForm'
import { useUIStore } from '@/lib/store/ui.store'
import { homeContent } from '@/content/home'
import { analytics } from '@/lib/utils/analytics'

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { setContactFormOpen } = useUIStore()

  const handleContactClick = () => {
    analytics.track({
      name: 'Contact Section CTA Clicked',
      properties: {
        location: 'contact_section'
      }
    })

    setIsModalOpen(true)
    setContactFormOpen(true)
  }

  return (
    <>
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heading
              level={2}
              size="3xl"
              color="dark"
              align="center"
              className="mb-4"
            >
              {homeContent.contact.title}
            </Heading>
            <Text
              size="lg"
              color="muted"
              align="center"
              className="max-w-2xl mx-auto"
            >
              {homeContent.contact.subtitle}
            </Text>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Modal (Alternative approach if needed) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Heading level={3} size="xl" color="dark">
                  {homeContent.contact.title}
                </Heading>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsModalOpen(false)
                    setContactFormOpen(false)
                  }}
                >
                  ✕
                </Button>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
