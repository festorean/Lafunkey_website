'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Minus,
  Plus,
  ShoppingBag,
  MessageCircle,
  Check,
  Truck,
  Wallet,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { RatingStars } from '@/components/rating-stars'
import { useCart } from '@/components/cart/cart-provider'
import { BRAND, formatNaira, whatsappLink } from '@/lib/brand'
import { CATEGORIES, type Product } from '@/lib/products'
import { cn } from '@/lib/utils'

const DEFAULT_ACCORDION = ['features']

export function ProductDetail({ product }: { product: Product }) {
  const { addItem, setOpen } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const categoryLabel =
    CATEGORIES.find((c) => c.value === product.category)?.label ??
    product.category

  const orderMessage = `Hello ${BRAND.shortName}! I'm interested in the ${product.name} (${formatNaira(
    product.price,
  )}). Is it available?`

  function handleAddToCart() {
    addItem(product, quantity)
  }

  function handleBuyNow() {
    addItem(product, quantity)
    setOpen(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
            <Image
              src={product.images[activeImage] || '/placeholder.svg'}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 flex flex-col gap-1.5">
              {product.isNew && (
                <Badge className="bg-accent text-accent-foreground">New</Badge>
              )}
              {product.compareAtPrice && (
                <Badge variant="destructive">Sale</Badge>
              )}
            </div>
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img + i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  className={cn(
                    'relative aspect-square overflow-hidden rounded-lg bg-secondary ring-2 transition-all',
                    activeImage === i
                      ? 'ring-accent'
                      : 'ring-transparent hover:ring-border',
                  )}
                >
                  <Image
                    src={img || '/placeholder.svg'}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {categoryLabel}
            </span>
            <h1 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">
              {product.name}
            </h1>
            <div className="flex items-center gap-2">
              <RatingStars rating={product.rating} size="md" />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-semibold">
              {formatNaira(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatNaira(product.compareAtPrice)}
              </span>
            )}
          </div>

          <p className="text-pretty leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="flex items-center gap-2 text-sm">
            {product.inStock ? (
              <span className="inline-flex items-center gap-1.5 font-medium text-[#128C3E]">
                <Check className="size-4" /> In stock — ready to ship
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-medium text-destructive">
                Out of stock — order via WhatsApp for restock alerts
              </span>
            )}
          </div>

          <Separator />

          {/* Quantity + actions */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center rounded-lg border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex size-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Decrease quantity"
                  disabled={!product.inStock}
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-10 text-center text-sm tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex size-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Increase quantity"
                  disabled={!product.inStock}
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingBag data-icon="inline-start" />
                Add to cart
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                Buy now
              </Button>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-[#25D366] text-[#128C3E] hover:bg-[#25D366]/10 hover:text-[#128C3E]"
              render={
                <a
                  href={whatsappLink(orderMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle data-icon="inline-start" />
              Order via WhatsApp
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-4 rounded-xl bg-secondary/50 p-4 sm:grid-cols-4">
            <Trust icon={Truck} label="Nationwide delivery" />
            <Trust icon={Wallet} label="Pay on delivery" />
            <Trust icon={RotateCcw} label="Easy returns" />
            <Trust icon={ShieldCheck} label="Authentic items" />
          </div>

          {/* Accordion */}
          <Accordion defaultValue={DEFAULT_ACCORDION} className="mt-2">
            <AccordionItem value="features">
              <AccordionTrigger>Features & details</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="delivery">
              <AccordionTrigger>Delivery & returns</AccordionTrigger>
              <AccordionContent>
                <p>
                  Free delivery on orders above {formatNaira(100000)} within
                  Lagos. Nationwide delivery in 2–5 business days with pay-on-delivery
                  available in select cities. Returns accepted within 7 days of
                  delivery for unused items in original packaging.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger>Care guide</AccordionTrigger>
              <AccordionContent>
                <p>
                  Store in the provided case away from moisture. Clean with a soft,
                  dry cloth. Avoid contact with perfumes and harsh chemicals to
                  preserve finish and shine.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

function Trust({
  icon: Icon,
  label,
}: {
  icon: React.ElementType
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <Icon className="size-5 text-accent" />
      <span className="text-xs leading-tight text-muted-foreground">
        {label}
      </span>
    </div>
  )
}
