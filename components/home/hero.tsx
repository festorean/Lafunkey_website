import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Truck, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
            Premium accessories • Made for Nigeria
          </span>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Accessories that make a statement
          </h1>
          <p className="max-w-md text-pretty text-base leading-relaxed text-primary-foreground/75">
            Discover curated glasses, wristwatches and jewelry crafted for the
            bold and the refined. Nationwide delivery. Pay on delivery. Effortless
            ordering via WhatsApp.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/shop">
                Shop the collection
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/about">Our story</Link>
            </Button>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6">
            <Feature icon={Truck} label="Nationwide delivery" />
            <Feature icon={Wallet} label="Pay on delivery" />
            <Feature icon={ShieldCheck} label="Authentic & insured" />
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:aspect-[5/6]">
          <Image
            src="/hero.png"
            alt="Models wearing premium LAFUNKY VENTURES accessories"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function Feature({
  icon: Icon,
  label,
}: {
  icon: React.ElementType
  label: string
}) {
  return (
    <div className="flex flex-col items-start gap-2">
      <Icon className="size-5 text-accent" />
      <span className="text-xs font-medium leading-tight text-primary-foreground/80">
        {label}
      </span>
    </div>
  )
}
