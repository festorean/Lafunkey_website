import { MapPin, Clock, PackageCheck } from 'lucide-react'

const POINTS = [
  {
    icon: MapPin,
    title: 'All 36 states',
    description: 'We deliver to every state in Nigeria, including the FCT.',
  },
  {
    icon: Clock,
    title: '1–4 day delivery',
    description: 'Same/next-day in Lagos. 2–4 days for other states.',
  },
  {
    icon: PackageCheck,
    title: 'Tracked dispatch',
    description: 'Get tracking updates on WhatsApp until it arrives.',
  },
]

export function DeliverySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 rounded-2xl border bg-card p-8 sm:p-12 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Nationwide delivery
          </span>
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
            Delivered to your doorstep, anywhere in Nigeria
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            From Lagos to Maiduguri, we partner with trusted dispatch riders and
            logistics companies to get your accessories to you quickly and
            safely — with live updates every step of the way.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 rounded-xl bg-secondary/60 p-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <point.icon className="size-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-medium">{point.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
