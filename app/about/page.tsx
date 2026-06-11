import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Gem, Heart, Sparkles, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { BRAND } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn the story behind LAFUNKY VENTURES — a Nigerian fashion accessories brand crafting premium glasses, wristwatches and jewelry for the bold and refined.',
}

const VALUES = [
  {
    icon: Gem,
    title: 'Premium quality',
    body: 'Every piece is selected and inspected for craftsmanship, durability and finish.',
  },
  {
    icon: Heart,
    title: 'Customer first',
    body: 'From WhatsApp orders to pay-on-delivery, we make buying effortless and trusted.',
  },
  {
    icon: Sparkles,
    title: 'Style forward',
    body: 'We curate pieces that feel current, confident and uniquely Nigerian.',
  },
  {
    icon: Users,
    title: 'Built on trust',
    body: 'Authentic products, transparent pricing and reliable nationwide delivery.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our story
            </span>
            <h1 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Accessories that carry confidence
            </h1>
            <p className="max-w-md text-pretty leading-relaxed text-primary-foreground/75">
              {BRAND.name} was born in Lagos with a simple belief: the right
              accessory transforms how you feel and how the world sees you. We
              bring premium glasses, wristwatches and jewelry within reach of
              every Nigerian who values quality and style.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                render={<Link href="/shop" />}
              >
                Explore the collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                render={<Link href="/contact" />}
              >
                Get in touch
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/about-story.png"
              alt="LAFUNKY VENTURES premium accessories styling"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border bg-card p-8">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Target className="size-6" />
            </span>
            <h2 className="font-serif text-2xl font-semibold">Our mission</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              To make premium fashion accessories accessible, trustworthy and
              effortless to buy across Nigeria — pairing world-class style with
              local convenience like pay-on-delivery and WhatsApp ordering.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border bg-card p-8">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Eye className="size-6" />
            </span>
            <h2 className="font-serif text-2xl font-semibold">Our vision</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              To become Nigeria&apos;s most-loved accessories brand — the first
              name people think of when they want to look sharp, feel premium
              and shop with total confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we stand for"
            title="Our values"
            description="The principles that guide every product we curate and every order we fulfil."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-3 rounded-xl bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <value.icon className="size-5" />
                </span>
                <h3 className="font-medium">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
            Ready to find your statement piece?
          </h2>
          <p className="max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
            Browse the collection and enjoy nationwide delivery with pay on
            delivery available.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={<Link href="/shop" />}
          >
            Shop now
          </Button>
        </div>
      </section>
    </div>
  )
}
