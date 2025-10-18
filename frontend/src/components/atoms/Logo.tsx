import { cn } from '@/lib/utils/cn'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white' | 'dark'
}

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const variantClasses = {
    default: 'text-primary',
    white: 'text-white',
    dark: 'text-dark'
  }

  return (
    <div className={cn(
      'font-bold font-manrope tracking-tight',
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      Athletic Dash
    </div>
  )
}
