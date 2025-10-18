import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import '../styles/globals.css'
import { generateMetadata, jsonLd } from '@/lib/utils/seo'
import { NavBar } from '@/components/molecules/NavBar'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = generateMetadata({
  title: "Athletic Dash — Track, improve, repeat",
  description: "A sporty dashboard for athletes to track progress with real-time insights.",
  keywords: [
    "athletic dashboard",
    "sports tracking",
    "fitness app",
    "performance metrics",
    "athlete training",
    "workout tracker",
    "sports analytics"
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd.person),
          }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
