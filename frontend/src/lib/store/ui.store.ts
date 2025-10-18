import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UIState {
  // Mobile navigation
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void

  // Theme mode
  themeMode: 'light' | 'dark' | 'system'
  setThemeMode: (mode: 'light' | 'dark' | 'system') => void

  // Contact form
  contactFormOpen: boolean
  setContactFormOpen: (open: boolean) => void

  // Scroll position for animations
  scrollY: number
  setScrollY: (y: number) => void

  // Loading states
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set, get) => ({
        // Mobile navigation
        mobileMenuOpen: false,
        setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),
        toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),

        // Theme mode
        themeMode: 'system',
        setThemeMode: (mode: 'light' | 'dark' | 'system') => set({ themeMode: mode }),

        // Contact form
        contactFormOpen: false,
        setContactFormOpen: (open: boolean) => set({ contactFormOpen: open }),

        // Scroll position
        scrollY: 0,
        setScrollY: (y: number) => set({ scrollY: y }),

        // Loading states
        isLoading: false,
        setIsLoading: (loading: boolean) => set({ isLoading: loading }),
      }),
      {
        name: 'athletic-dash-ui-store',
        partialize: (state) => ({
          themeMode: state.themeMode,
          mobileMenuOpen: state.mobileMenuOpen,
        }),
      }
    ),
    {
      name: 'UI Store',
    }
  )
)

// Selectors for common state combinations
export const useMobileMenu = () => {
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUIStore()
  return { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu }
}

export const useTheme = () => {
  const { themeMode, setThemeMode } = useUIStore()
  return { themeMode, setThemeMode }
}

export const useScroll = () => {
  const { scrollY, setScrollY } = useUIStore()
  return { scrollY, setScrollY }
}
