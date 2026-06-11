import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { SectionHeading } from '@/components/section-heading'
import { getBestSellers } from '@/lib/products'

export function BestSellers() {
  const products = getBestSellers().slice(0, 4)

  return (
    <section className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Customer favourites"
            title="Best sellers"
            description="The pieces our customers can't stop wearing."
          />
          <Button variant="outline" className="shrink-0" render={<Link href="/shop" />}>
            View all
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
