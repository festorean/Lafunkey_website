import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Truck,
  Wallet,
  RotateCcw,
  Clock,
  MapPin,
  PackageCheck,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { BRAND, whatsappLink } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Delivery & Returns',
  description:
    'LAFUNKY VENTURES delivery and returns policy — nationwide shipping across Nigeria, pay on delivery, timelines and our 7-day return guarantee.',
}

const HIGHLIGHTS = [
  {
    icon: Truck,
    title: 'Nationwide delivery',
    body: 'We ship to all 36 states through trusted logistics partners.',
  },
  {
    icon: Wallet,
    title: 'Pay on delivery',
    body: 'Available in Lagos and select cities — inspect before you pay.',
  },
  {
    icon: RotateCcw,
    title: '7-day returns',
    body: 'Changed your mind? Return unused items within 7 days.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & insured',
    body: 'Every order is handled with care and tracked to your door.',
  },
]

const DELIVERY_STEPS = [
  {
    icon: Clock,
    title: 'Processing',
    body: 'Orders are processed within 24 hours of confirmation, Monday to Saturday.',
  },
  {
    icon: MapPin,
    title: 'Dispatch & tracking',
    body: 'Once dispatched, we share tracking details so you can follow your package.',
  },
  {
    icon: PackageCheck,
    title: 'Delivery',
    body: 'Lagos: 1–2 business days. Nationwide: 2–5 business days depending on location.',
  },
]

export default function DeliveryReturnsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Shopping with confidence
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl text-balance font-serif text-4xl font-semibold sm:text-5xl">
            Delivery & Returns
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
            Fast, reliable nationwide delivery with pay-on-delivery options and a
            hassle-free return policy.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto -mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-xl border bg-card p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <item.icon className="size-5" />
              </span>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery process */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="How it works"
          title="Delivery process"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DELIVERY_STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                  {i + 1}
                </span>
                <step.icon className="size-5 text-muted-foreground" />
              </div>
              <h3 className="font-medium">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Policy details */}
      <section className="bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-5">
            <h2 className="font-serif text-2xl font-semibold">
              Delivery details
            </h2>
            <ul className="flex flex-col gap-4">
              <PolicyItem title="Delivery fees">
                Free delivery on Lagos orders above{' '}
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                  maximumFractionDigits: 0,
                }).format(100000)}
                . A flat rate applies elsewhere and is confirmed at checkout.
              </PolicyItem>
              <PolicyItem title="Pay on delivery">
                Inspect your order before paying in Lagos and select cities.
                Other locations may require a small deposit before dispatch.
              </PolicyItem>
              <PolicyItem title="Order tracking">
                We share tracking details once your order is dispatched so you
                always know where your package is.
              </PolicyItem>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-serif text-2xl font-semibold">
              Returns & exchanges
            </h2>
            <ul className="flex flex-col gap-4">
              <PolicyItem title="7-day return window">
                Return unused items in their original packaging within 7 days of
                delivery for a refund or exchange.
              </PolicyItem>
              <PolicyItem title="How to return">
                Message us on WhatsApp with your order details and reason. We
                arrange pickup or guide you to the nearest drop-off.
              </PolicyItem>
              <PolicyItem title="Refunds">
                Approved refunds are processed within 3–5 business days to your
                original payment method.
              </PolicyItem>
              <PolicyItem title="Non-returnable items">
                Earrings and personalised items cannot be returned for hygiene
                reasons unless faulty on arrival.
              </PolicyItem>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-2xl border bg-card px-6 py-10 text-center">
          <h2 className="font-serif text-2xl font-semibold">
            Questions about your order?
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Our team is ready to help with delivery, tracking or returns.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1ebe5a]"
              render={
                <a
                  href={whatsappLink(
                    `Hello ${BRAND.shortName}! I have a question about delivery.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle data-icon="inline-start" />
              Chat on WhatsApp
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/faq" />}>
              Read FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function PolicyItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="flex flex-col gap-1 border-l-2 border-accent/40 pl-4">
      <span className="font-medium">{title}</span>
      <span className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </span>
    </li>
  )
}
