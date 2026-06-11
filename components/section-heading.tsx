import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-pretty text-muted-foreground',
            align === 'center' ? 'max-w-xl' : 'max-w-md',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
