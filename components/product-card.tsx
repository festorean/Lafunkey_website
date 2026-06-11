'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RatingStars } from '@/components/rating-stars'
import { useCart } from '@/components/cart/cart-provider'
import { formatNaira } from '@/lib/brand'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
        <Link href={`/product/${product.slug}`} className="absolute inset-0">
          <Image
            src={product.images[0] || '/placeholder.svg'}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <Badge className="bg-accent text-accent-foreground">New</Badge>
          )}
          {product.compareAtPrice && (
            <Badge variant="destructive">Sale</Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary">Sold out</Badge>
          )}
        </div>

        {product.inStock && (
          <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Button
              size="sm"
              className="w-full"
              onClick={() => addItem(product)}
            >
              <ShoppingBag data-icon="inline-start" />
              Add to cart
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5 pt-3">
        <div className="flex items-center gap-2">
          <RatingStars rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>
        <Link
          href={`/product/${product.slug}`}
          className="font-medium leading-tight transition-colors hover:text-accent"
        >
          {product.name}
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg font-semibold">
            {formatNaira(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatNaira(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
