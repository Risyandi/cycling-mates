import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils/cn'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn('card-hover h-full', className)}>
      <CardHeader className="pb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon name={icon} size={24} className="text-primary" />
        </div>
        <CardTitle className="text-xl font-manrope">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
