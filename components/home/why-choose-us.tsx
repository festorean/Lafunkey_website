import { Award, Headphones, RefreshCw, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const REASONS = [
  {
    icon: Award,
    title: 'Authentic quality',
    description:
      'Every piece is carefully sourced and quality-checked before it reaches you.',
  },
  {
    icon: Sparkles,
    title: 'Curated for you',
    description:
      'A tightly edited collection of timeless, fashion-forward accessories.',
  },
  {
    icon: RefreshCw,
    title: 'Easy returns',
    description:
      '7-day hassle-free returns on eligible items, no awkward questions.',
  },
  {
    icon: Headphones,
    title: 'Real human support',
    description:
      'Chat with our team on WhatsApp before, during and after your purchase.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Why LAFUNKY"
        title="Shopping you can trust"
        description="We obsess over the details so you can shop with total confidence."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((reason) => (
          <div
            key={reason.title}
            className="flex flex-col gap-3 rounded-xl border bg-card p-6"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent">
              <reason.icon className="size-5" />
            </span>
            <h3 className="font-medium">{reason.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
