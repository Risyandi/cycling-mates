import { Button as ShadcnButton } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    children,
    className,
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    ...props
  }, ref) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost',
      inverse: 'btn-inverse',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent'
    }

    return (
      <ShadcnButton
        ref={ref}
        className={cn(
          'font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
          sizeClasses[size],
          variantClasses[variant],
          (isLoading || disabled) && 'opacity-50 cursor-not-allowed',
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </div>
        )}
      </ShadcnButton>
    )
  }
)

Button.displayName = 'Button'
