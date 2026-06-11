import type { Metadata } from 'next'
import { ShopClient } from '@/components/shop/shop-client'
import type { Category } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop Accessories',
  description:
    'Browse premium glasses, wristwatches and jewelry. Filter by category and price. Nationwide delivery and pay on delivery across Nigeria.',
}

const VALID: Category[] = ['glasses', 'watches', 'jewelry']

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const initialCategory = VALID.includes(category as Category)
    ? (category as Category)
    : undefined

  return <ShopClient initialCategory={initialCategory} />
}
