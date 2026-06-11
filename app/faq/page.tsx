import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { BRAND, whatsappLink } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about LAFUNKY VENTURES — ordering, payment, pay on delivery, shipping, returns and product authenticity.',
}

const FAQ_SECTIONS = [
  {
    title: 'Ordering & payment',
    items: [
      {
        q: 'How do I place an order?',
        a: 'Add items to your cart and check out via WhatsApp, or message us directly. You can also order any product straight from its page using the "Order via WhatsApp" button.',
      },
      {
        q: 'Do you offer pay on delivery?',
        a: 'Yes. Pay on delivery is available in Lagos and select major cities. For other locations we confirm a small delivery deposit before dispatch.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers, debit cards and cash on delivery (where available). Payment details are shared when you confirm your order.',
      },
    ],
  },
  {
    title: 'Shipping & delivery',
    items: [
      {
        q: 'How long does delivery take?',
        a: 'Lagos deliveries typically arrive within 1–2 business days. Nationwide delivery takes 2–5 business days depending on your location.',
      },
      {
        q: 'Do you deliver nationwide?',
        a: 'Yes, we deliver to all 36 states across Nigeria through trusted logistics partners.',
      },
      {
        q: 'Is delivery free?',
        a: `Delivery is free on orders above ${new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(100000)} within Lagos. A flat fee applies to other orders and is confirmed at checkout.`,
      },
    ],
  },
  {
    title: 'Returns & products',
    items: [
      {
        q: 'What is your return policy?',
        a: 'Unused items in their original packaging can be returned within 7 days of delivery. See our Delivery & Returns page for full details.',
      },
      {
        q: 'Are your products authentic?',
        a: 'Absolutely. Every piece is carefully sourced and quality-checked. We stand behind the authenticity and craftsmanship of everything we sell.',
      },
      {
        q: 'Do watches come with a warranty?',
        a: 'Yes, our wristwatches include a 2-year warranty covering movement and manufacturing defects.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Help center"
        title="Frequently asked questions"
        description="Everything you need to know about ordering, delivery and returns. Can't find your answer? Chat with us on WhatsApp."
      />

      <div className="mt-12 flex flex-col gap-10">
        {FAQ_SECTIONS.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h2 className="font-serif text-xl font-semibold">
              {section.title}
            </h2>
            <Accordion>
              {section.items.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger className="text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-secondary/50 px-6 py-10 text-center">
        <h2 className="font-serif text-2xl font-semibold">Still have questions?</h2>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Our team is a message away and happy to help with anything.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe5a]"
            render={
              <a
                href={whatsappLink(`Hello ${BRAND.shortName}! I have a question.`)}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle data-icon="inline-start" />
            Chat on WhatsApp
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/contact" />}>
            Contact us
          </Button>
        </div>
      </div>
    </div>
  )
}
