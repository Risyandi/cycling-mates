import { LucideIcon, LucideProps } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: string
  size?: number | string
  className?: string
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  // Dynamically import the icon from lucide-react
  // Note: This is a simplified approach. In a real app, you might want to
  // pre-import commonly used icons for better performance
  const icons: Record<string, LucideIcon> = {
    // Activity icons
    Activity: require('lucide-react').Activity,
    ChartLine: require('lucide-react').ChartLine,
    Timer: require('lucide-react').Timer,
    Trophy: require('lucide-react').Trophy,

    // Navigation icons
    Menu: require('lucide-react').Menu,
    X: require('lucide-react').X,
    ChevronDown: require('lucide-react').ChevronDown,
    ChevronRight: require('lucide-react').ChevronRight,

    // Social icons
    Github: require('lucide-react').Github,
    Linkedin: require('lucide-react').Linkedin,
    Twitter: require('lucide-react').Twitter,
    Mail: require('lucide-react').Mail,

    // Form icons
    Send: require('lucide-react').Send,
    Check: require('lucide-react').Check,
    AlertCircle: require('lucide-react').AlertCircle,
  }

  const IconComponent = icons[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`)
    return null
  }

  return (
    <IconComponent
      size={size}
      className={cn(className)}
      {...props}
    />
  )
}
