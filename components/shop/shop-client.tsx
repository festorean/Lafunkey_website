'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { CATEGORIES, PRODUCTS, type Category } from '@/lib/products'
import { formatNaira } from '@/lib/brand'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from '@/components/ui/input-group'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'

const PRICE_MAX = 250000
const PAGE_SIZE = 6

function FilterPanel({
  selectedCategories,
  onToggleCategory,
  price,
  onPriceChange,
  inStockOnly,
  onInStockChange,
  onReset,
}: {
  selectedCategories: Category[]
  onToggleCategory: (c: Category) => void
  price: number
  onPriceChange: (v: number) => void
  inStockOnly: boolean
  onInStockChange: (v: boolean) => void
  onReset: () => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Category
        </h3>
        <div className="flex flex-col gap-3">
          {CATEGORIES.map((cat) => (
            <Label
              key={cat.value}
              className="flex items-center gap-3 font-normal text-muted-foreground"
            >
              <Checkbox
                checked={selectedCategories.includes(cat.value)}
                onCheckedChange={() => onToggleCategory(cat.value)}
              />
              {cat.label}
            </Label>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Max price
        </h3>
        <Slider
          value={[price]}
          min={10000}
          max={PRICE_MAX}
          step={5000}
          onValueChange={(v) => onPriceChange(v[0])}
        />
        <p className="text-sm text-muted-foreground">
          Up to <span className="font-medium text-foreground">{formatNaira(price)}</span>
        </p>
      </div>

      <Separator />

      <Label className="flex items-center gap-3 font-normal text-muted-foreground">
        <Checkbox
          checked={inStockOnly}
          onCheckedChange={(v) => onInStockChange(Boolean(v))}
        />
        In stock only
      </Label>

      <Button variant="ghost" onClick={onReset} className="w-fit px-0 text-muted-foreground hover:text-foreground">
        <X data-icon="inline-start" />
        Reset filters
      </Button>
    </div>
  )
}

export function ShopClient({ initialCategory }: { initialCategory?: Category }) {
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    initialCategory ? [initialCategory] : [],
  )
  const [price, setPrice] = useState(PRICE_MAX)
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sort, setSort] = useState<SortKey>('featured')
  const [page, setPage] = useState(1)

  function toggleCategory(c: Category) {
    setPage(1)
    setSelectedCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    )
  }

  function resetFilters() {
    setSelectedCategories([])
    setPrice(PRICE_MAX)
    setInStockOnly(false)
    setQuery('')
    setPage(1)
  }

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category))
        return false
      if (p.price > price) return false
      if (inStockOnly && !p.inStock) return false
      if (query.trim()) {
        const q = query.toLowerCase()
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.shortDescription.toLowerCase().includes(q)
        )
          return false
      }
      return true
    })

    list = [...list].sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew))
        default:
          return Number(Boolean(b.bestSeller)) - Number(Boolean(a.bestSeller))
      }
    })
    return list
  }, [selectedCategories, price, inStockOnly, query, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paged = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-3 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          The collection
        </p>
        <h1 className="font-serif text-3xl font-semibold sm:text-4xl">
          Shop all accessories
        </h1>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Curated glasses, wristwatches and jewelry. Filter by category and
          price to find your next statement piece.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <FilterPanel
            selectedCategories={selectedCategories}
            onToggleCategory={toggleCategory}
            price={price}
            onPriceChange={(v) => {
              setPrice(v)
              setPage(1)
            }}
            inStockOnly={inStockOnly}
            onInStockChange={(v) => {
              setInStockOnly(v)
              setPage(1)
            }}
            onReset={resetFilters}
          />
        </aside>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <InputGroup className="sm:max-w-xs">
              <InputGroupAddon>
                <Search className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Search accessories..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setPage(1)
                }}
              />
            </InputGroup>

            <div className="flex items-center gap-3">
              <Sheet>
                <SheetTrigger
                  render={<Button variant="outline" className="lg:hidden" />}
                >
                  <SlidersHorizontal data-icon="inline-start" />
                  Filters
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto p-6">
                  <SheetHeader className="px-0">
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <FilterPanel
                    selectedCategories={selectedCategories}
                    onToggleCategory={toggleCategory}
                    price={price}
                    onPriceChange={(v) => {
                      setPrice(v)
                      setPage(1)
                    }}
                    inStockOnly={inStockOnly}
                    onInStockChange={(v) => {
                      setInStockOnly(v)
                      setPage(1)
                    }}
                    onReset={resetFilters}
                  />
                </SheetContent>
              </Sheet>

              <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Top rated</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Showing {paged.length} of {filtered.length} products
          </p>

          {paged.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed py-20 text-center">
              <p className="font-medium">No products match your filters.</p>
              <Button variant="outline" onClick={resetFilters}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {paged.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <Pagination className="pt-4">
              <PaginationContent>
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    Previous
                  </Button>
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <Button
                      variant={currentPage === i + 1 ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  >
                    Next
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  )
}
