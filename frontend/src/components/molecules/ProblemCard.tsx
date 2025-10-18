import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils/cn'

interface ProblemCardProps {
  title: string
  description: string
  className?: string
}

export function ProblemCard({ title, description, className }: ProblemCardProps) {
  return (
    <Card className={cn('card-hover h-full', className)}>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-manrope text-primary">
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
