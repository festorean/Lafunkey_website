import { Hero } from '@/components/home/hero'
import { FeaturedCategories } from '@/components/home/featured-categories'
import { BestSellers } from '@/components/home/best-sellers'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { DeliverySection } from '@/components/home/delivery-section'
import { PayOnDelivery } from '@/components/home/pay-on-delivery'
import { Testimonials } from '@/components/home/testimonials'
import { WhatsAppCta } from '@/components/home/whatsapp-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <WhyChooseUs />
      <DeliverySection />
      <PayOnDelivery />
      <Testimonials />
      <WhatsAppCta />
    </>
  )
}
