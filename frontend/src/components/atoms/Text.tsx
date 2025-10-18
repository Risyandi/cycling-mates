import { cn } from '@/lib/utils/cn'

interface TextProps {
  children: React.ReactNode
  className?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'accent' | 'dark' | 'white'
  align?: 'left' | 'center' | 'right'
  as?: 'p' | 'span' | 'div'
  balance?: boolean
}

export function Text({
  children,
  className,
  size = 'base',
  weight = 'normal',
  color = 'default',
  align = 'left',
  as = 'p',
  balance = false
}: TextProps) {
  const Component = as

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }

  const colorClasses = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    dark: 'text-dark',
    white: 'text-white'
  }

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <Component
      className={cn(
        'font-inter leading-relaxed',
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        alignClasses[align],
        balance && 'text-balance',
        className
      )}
    >
      {children}
    </Component>
  )
}
