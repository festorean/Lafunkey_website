/*
import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { NewsletterForm } from '@/components/layout/newsletter-form'
import { Separator } from '@/components/ui/separator'
import { BRAND } from '@/lib/brand'
*/
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6'
import { NewsletterForm } from '@/components/layout/newsletter-form'
import { Separator } from '@/components/ui/separator'
import { BRAND } from '@/lib/brand'

const SHOP_LINKS = [
  { href: '/shop?category=glasses', label: 'Glasses' },
  { href: '/shop?category=watches', label: 'Wristwatches' },
  { href: '/shop?category=jewelry', label: 'Jewelry' },
  { href: '/shop', label: 'All Products' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
  { href: '/delivery-returns', label: 'Delivery & Returns' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-tight">
                {BRAND.shortName}
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-primary-foreground/60">
                Ventures
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Premium glasses, wristwatches and jewelry — delivered nationwide
              across Nigeria with pay-on-delivery convenience.
            </p>
            <div className="flex gap-3">
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <FaInstagram className="size-4" />
              </a>
              <a
                href={BRAND.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <FaXTwitter className="size-4" />
              </a>
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <FaFacebook className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Stay in touch
            </h3>
            <NewsletterForm />
            <ul className="flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                {BRAND.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-accent" />
                {BRAND.phoneDisplay}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-accent" />
                {BRAND.email}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/15" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>Designed for the modern Nigerian wardrobe.</p>
        </div>
      </div>
    </footer>
  )
}
