'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { homeContent } from '@/content/home'
import { useUIStore } from '@/lib/store/ui.store'
import { analytics } from '@/lib/utils/analytics'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { setContactFormOpen } = useUIStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Track successful form submission
      analytics.track({
        name: 'Contact Form Submitted',
        properties: {
          form_location: 'landing_page',
        }
      })

      console.log('Contact form data:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Text color="primary" className="text-2xl">✓</Text>
        </div>
        <Text size="xl" weight="bold" color="primary" className="mb-2">
          Message Sent!
        </Text>
        <Text color="muted" className="mb-6">
          {homeContent.contact.success}
        </Text>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false)
            setContactFormOpen(false)
          }}
        >
          Close
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          {homeContent.contact.fields.name}
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your full name"
        />
        {errors.name && (
          <Text size="sm" color="primary" className="mt-1">
            {errors.name.message}
          </Text>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          {homeContent.contact.fields.email}
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <Text size="sm" color="primary" className="mt-1">
            {errors.email.message}
          </Text>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          {homeContent.contact.fields.message}
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Tell us about your project or question..."
        />
        {errors.message && (
          <Text size="sm" color="primary" className="mt-1">
            {errors.message.message}
          </Text>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Text size="sm" color="muted">
          {homeContent.contact.privacy}
        </Text>
        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : homeContent.contact.submit}
        </Button>
      </div>
    </form>
  )
}
