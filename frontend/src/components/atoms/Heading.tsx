import { cn } from '@/lib/utils/cn'

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'dark' | 'white' | 'gradient'
  align?: 'left' | 'center' | 'right'
}

export function Heading({
  level = 2,
  children,
  className,
  size,
  weight = 'bold',
  color = 'default',
  align = 'left'
}: HeadingProps) {
  const Component = `h${level}` as const

  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl',
    '2xl': 'text-4xl md:text-5xl',
    '3xl': 'text-5xl md:text-6xl'
  }

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }

  const colorClasses = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    dark: 'text-dark',
    white: 'text-white',
    gradient: 'text-gradient'
  }

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <Component
      className={cn(
        'font-manrope leading-tight',
        size && sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  )
}
