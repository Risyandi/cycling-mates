'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { Icon } from '@/components/atoms/Icon'
import { useMobileMenu } from '@/lib/store/ui.store'
import { cn } from '@/lib/utils/cn'
import { homeContent } from '@/content/home'

export function NavBar() {
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useMobileMenu()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo
            className="cursor-pointer"
            variant={isScrolled ? 'default' : 'white'}
            size="md"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {homeContent.navigation.links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'font-medium transition-colors duration-200 hover:text-primary',
                  isScrolled ? 'text-dark' : 'text-white'
                )}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant={isScrolled ? 'primary' : 'inverse'}
              size="sm"
              onClick={() => handleNavClick('#contact')}
            >
              {homeContent.hero.primaryCTA}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              'md:hidden p-2 rounded-md transition-colors duration-200',
              isScrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={mobileMenuOpen ? 'X' : 'Menu'}
              size={24}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-md mt-2">
              {homeContent.navigation.links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-dark hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => handleNavClick('#contact')}
                >
                  {homeContent.hero.primaryCTA}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
