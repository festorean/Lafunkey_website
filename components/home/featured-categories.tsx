import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CATEGORIES } from '@/lib/products'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Shop by category"
        title="Find your signature piece"
        description="Three curated edits to elevate every look."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => (
          <Link
            key={category.value}
            href={`/shop?category=${category.value}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl"
          >
            <Image
              src={category.image || '/placeholder.svg'}
              alt={category.label}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl font-semibold">
                  {category.label}
                </h3>
                <p className="text-sm text-white/80">{category.blurb}</p>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
