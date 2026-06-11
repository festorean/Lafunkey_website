import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function RatingStars({
  rating,
  className,
  size = 'sm',
}: {
  rating: number
  className?: string
  size?: 'sm' | 'md'
}) {
  const dim = size === 'sm' ? 'size-3.5' : 'size-4'
  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            dim,
            i < Math.round(rating)
              ? 'fill-accent text-accent'
              : 'fill-muted text-muted',
          )}
        />
      ))}
    </div>
  )
}
