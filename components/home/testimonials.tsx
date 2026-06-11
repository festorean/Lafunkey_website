import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { RatingStars } from '@/components/rating-stars'
import { SectionHeading } from '@/components/section-heading'

const TESTIMONIALS = [
  {
    name: 'Adaeze O.',
    location: 'Lagos',
    quote:
      'The gold aviators are stunning and arrived next day. Paid on delivery with zero stress. My new favourite store!',
    initials: 'AO',
  },
  {
    name: 'Emeka N.',
    location: 'Abuja',
    quote:
      'Ordered the Imperial Chronograph and the quality is unreal for the price. Customer service on WhatsApp was instant.',
    initials: 'EN',
  },
  {
    name: 'Funmi A.',
    location: 'Port Harcourt',
    quote:
      'I gifted the Lumière necklace to my sister and she loved it. Beautiful packaging and it hasn\u2019t tarnished at all.',
    initials: 'FA',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Loved by customers"
          title="What our customers say"
          description="Real reviews from shoppers across Nigeria."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="border-border/70">
              <CardContent className="flex flex-col gap-4">
                <RatingStars rating={5} size="md" />
                <p className="text-pretty leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <Avatar>
                    <AvatarFallback className="bg-accent/15 text-sm text-accent">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{t.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {t.location}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
