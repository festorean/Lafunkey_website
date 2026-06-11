import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND, whatsappLink } from '@/lib/brand'

export function WhatsAppCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#25D366] px-6 py-12 text-center text-white sm:px-12">
        <span className="flex size-14 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="size-7" />
        </span>
        <div className="flex flex-col gap-2">
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
            Order in seconds on WhatsApp
          </h2>
          <p className="mx-auto max-w-lg text-pretty leading-relaxed text-white/90">
            Prefer to chat? Message us directly, ask questions, send a photo of
            what you want, and we&apos;ll help you complete your order instantly.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-white text-[#128C3E] hover:bg-white/90"
          render={
            <a
              href={whatsappLink(
                `Hello ${BRAND.shortName}! I'd like to place an order.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <MessageCircle data-icon="inline-start" />
          Chat on WhatsApp
        </Button>
      </div>
    </section>
  )
}
