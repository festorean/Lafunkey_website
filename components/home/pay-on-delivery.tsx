import { Wallet, ShieldCheck, HandCoins } from 'lucide-react'

export function PayOnDelivery() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Wallet className="size-3.5" />
            Pay on delivery
          </span>
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
            Only pay when it arrives
          </h2>
          <p className="max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
            Shop with complete peace of mind. Confirm your order, receive your
            package, inspect it, then pay your dispatch rider in cash or by
            transfer. No upfront payment, no risk.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Step
            icon={ShieldCheck}
            title="Inspect before you pay"
            text="Open and check your items before any money changes hands."
          />
          <Step
            icon={HandCoins}
            title="Cash or transfer"
            text="Pay the rider whichever way is most convenient for you."
          />
        </div>
      </div>
    </section>
  )
}

function Step({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType
  title: string
  text: string
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <Icon className="size-5" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-primary-foreground/70">{text}</p>
      </div>
    </div>
  )
}
