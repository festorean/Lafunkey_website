import type { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact/contact-form'
import { BRAND, whatsappLink } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with LAFUNKY VENTURES. Reach us by WhatsApp, email or phone, or send a message and we will respond within 24 hours.',
}

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: BRAND.socials.instagram },
  { icon: Twitter, label: 'Twitter', href: BRAND.socials.twitter },
  { icon: Facebook, label: 'Facebook', href: BRAND.socials.facebook },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="flex flex-col gap-3 pb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          We&apos;re here to help
        </span>
        <h1 className="text-balance font-serif text-4xl font-semibold sm:text-5xl">
          Get in touch
        </h1>
        <p className="mx-auto max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Questions about a product, your order or delivery? Reach out and our
          team will respond promptly.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <ContactItem
            icon={MessageCircle}
            title="WhatsApp"
            value={BRAND.whatsappDisplay}
            href={whatsappLink(`Hello ${BRAND.shortName}!`)}
            external
            highlight
          />
          <ContactItem
            icon={Mail}
            title="Email"
            value={BRAND.email}
            href={`mailto:${BRAND.email}`}
          />
          <ContactItem
            icon={Phone}
            title="Phone"
            value={BRAND.phoneDisplay}
            href={`tel:${BRAND.whatsappNumber}`}
          />
          <ContactItem icon={MapPin} title="Visit us" value={BRAND.address} />

          <div className="flex flex-col gap-3 pt-2">
            <span className="text-sm font-medium">Follow us</span>
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  aria-label={social.label}
                  render={
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <social.icon className="size-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          <h2 className="mb-6 font-serif text-2xl font-semibold">
            Send us a message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
  external,
  highlight,
}: {
  icon: React.ElementType
  title: string
  value: string
  href?: string
  external?: boolean
  highlight?: boolean
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <span
        className={
          highlight
            ? 'flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#128C3E]'
            : 'flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent'
        }
      >
        <Icon className="size-5" />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm leading-relaxed text-muted-foreground">
          {value}
        </span>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="rounded-lg transition-colors hover:bg-secondary/60"
      >
        {inner}
      </a>
    )
  }
  return inner
}
