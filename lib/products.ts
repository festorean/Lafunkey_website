export type Category = 'glasses' | 'watches' | 'jewelry'

export type Product = {
  id: string
  slug: string
  name: string
  category: Category
  price: number
  compareAtPrice?: number
  rating: number
  reviewCount: number
  images: string[]
  shortDescription: string
  description: string
  features: string[]
  inStock: boolean
  bestSeller?: boolean
  isNew?: boolean
}

export const CATEGORIES: { value: Category; label: string; image: string; blurb: string }[] = [
  {
    value: 'glasses',
    label: 'Glasses',
    image: '/category-glasses.png',
    blurb: 'Statement frames & UV-protected lenses',
  },
  {
    value: 'watches',
    label: 'Wristwatches',
    image: '/category-watches.png',
    blurb: 'Timepieces that command the room',
  },
  {
    value: 'jewelry',
    label: 'Jewelry',
    image: '/category-jewelry.png',
    blurb: 'Gold-tone pieces for everyday luxury',
  },
]

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'aurelia-gold-aviators',
    name: 'Aurelia Gold Aviators',
    category: 'glasses',
    price: 45000,
    compareAtPrice: 60000,
    rating: 4.9,
    reviewCount: 128,
    images: ['/products/sunglasses-1.png', '/products/sunglasses-3.png', '/products/sunglasses-2.png'],
    shortDescription: 'Gold-framed aviators with gradient lenses.',
    description:
      'The Aurelia Gold Aviators pair a feather-light gold-tone metal frame with gradient brown lenses for an effortlessly elevated look. Polarised and UV400 protected, they are built for Lagos sun and beyond.',
    features: ['UV400 polarised lenses', 'Lightweight gold-tone metal frame', 'Includes premium case & cloth', 'Unisex fit'],
    inStock: true,
    bestSeller: true,
  },
  {
    id: '2',
    slug: 'milano-tortoise-optical',
    name: 'Milano Tortoise Optical',
    category: 'glasses',
    price: 38000,
    rating: 4.7,
    reviewCount: 64,
    images: ['/products/sunglasses-2.png', '/products/sunglasses-1.png', '/products/sunglasses-3.png'],
    shortDescription: 'Handcrafted tortoiseshell acetate frames.',
    description:
      'Round tortoiseshell acetate frames handcrafted for a refined, intellectual silhouette. Fitted with anti-blue-light lenses, perfect for screen-heavy days.',
    features: ['Anti-blue-light lenses', 'Italian acetate frame', 'Spring hinges', 'Prescription ready'],
    inStock: true,
    isNew: true,
  },
  {
    id: '3',
    slug: 'noir-oversized-shades',
    name: 'Noir Oversized Shades',
    category: 'glasses',
    price: 42000,
    rating: 4.8,
    reviewCount: 91,
    images: ['/products/sunglasses-3.png', '/products/sunglasses-1.png', '/products/sunglasses-2.png'],
    shortDescription: 'Bold oversized square frames in matte black.',
    description:
      'Make an entrance with these oversized matte-black square frames. Dark tinted lenses deliver full coverage with high-fashion attitude.',
    features: ['UV400 protection', 'Matte-black acetate', 'Oversized coverage', 'Unisex fit'],
    inStock: true,
    bestSeller: true,
  },
  {
    id: '4',
    slug: 'imperial-gold-chronograph',
    name: 'Imperial Gold Chronograph',
    category: 'watches',
    price: 120000,
    compareAtPrice: 150000,
    rating: 4.9,
    reviewCount: 203,
    images: ['/products/watch-1.png', '/products/watch-2.png', '/products/watch-3.png'],
    shortDescription: 'Gold stainless steel watch with white dial.',
    description:
      'The Imperial Gold Chronograph fuses a polished gold stainless-steel bracelet with a crisp white dial and Roman numerals. Water resistant and built to last a lifetime.',
    features: ['Stainless steel case & bracelet', '5ATM water resistant', 'Japanese quartz movement', '2-year warranty'],
    inStock: true,
    bestSeller: true,
  },
  {
    id: '5',
    slug: 'midnight-leather-classic',
    name: 'Midnight Leather Classic',
    category: 'watches',
    price: 85000,
    rating: 4.6,
    reviewCount: 77,
    images: ['/products/watch-2.png', '/products/watch-1.png', '/products/watch-3.png'],
    shortDescription: 'Navy minimalist dial on black leather.',
    description:
      'A minimalist navy dial sits on a supple black leather strap for understated everyday sophistication. The Midnight Leather Classic goes from boardroom to dinner with ease.',
    features: ['Genuine leather strap', '3ATM water resistant', 'Minimalist navy dial', '2-year warranty'],
    inStock: true,
    isNew: true,
  },
  {
    id: '6',
    slug: 'rose-mesh-elegance',
    name: 'Rose Mesh Elegance',
    category: 'watches',
    price: 95000,
    rating: 4.8,
    reviewCount: 112,
    images: ['/products/watch-3.png', '/products/watch-1.png', '/products/watch-2.png'],
    shortDescription: 'Rose-gold mesh band, mother-of-pearl dial.',
    description:
      'A rose-gold mesh band and luminous mother-of-pearl dial make the Rose Mesh Elegance a timeless gift. Slim, light and endlessly versatile.',
    features: ['Rose-gold mesh band', 'Mother-of-pearl dial', '3ATM water resistant', 'Adjustable clasp'],
    inStock: true,
    bestSeller: true,
  },
  {
    id: '7',
    slug: 'lumiere-gold-necklace',
    name: 'Lumière Gold Necklace',
    category: 'jewelry',
    price: 32000,
    compareAtPrice: 40000,
    rating: 4.9,
    reviewCount: 156,
    images: ['/products/jewelry-1.png', '/products/jewelry-3.png', '/products/jewelry-2.png'],
    shortDescription: 'Delicate gold chain with pendant.',
    description:
      'A dainty gold-tone chain finished with a subtle pendant — the Lumière layers beautifully or shines alone. Tarnish-resistant and hypoallergenic.',
    features: ['18k gold-tone plating', 'Hypoallergenic', 'Tarnish resistant', 'Adjustable length'],
    inStock: true,
    bestSeller: true,
  },
  {
    id: '8',
    slug: 'aria-gold-hoops',
    name: 'Aria Gold Hoops',
    category: 'jewelry',
    price: 25000,
    rating: 4.7,
    reviewCount: 88,
    images: ['/products/jewelry-2.png', '/products/jewelry-1.png', '/products/jewelry-3.png'],
    shortDescription: 'Everyday gold hoop earrings.',
    description:
      'Lightweight gold-tone hoops sized for everyday wear. The Aria Hoops add a polished finish to any look without weighing you down.',
    features: ['18k gold-tone plating', 'Lightweight & comfortable', 'Secure click clasp', 'Hypoallergenic'],
    inStock: true,
    isNew: true,
  },
  {
    id: '9',
    slug: 'celeste-diamond-bangle',
    name: 'Celeste Diamond Bangle',
    category: 'jewelry',
    price: 48000,
    rating: 4.8,
    reviewCount: 64,
    images: ['/products/jewelry-3.png', '/products/jewelry-1.png', '/products/jewelry-2.png'],
    shortDescription: 'Gold bangle with diamond accents.',
    description:
      'The Celeste bangle catches the light with delicate diamond-cut accents set into a smooth gold-tone band. A modern heirloom for special moments.',
    features: ['Gold-tone finish', 'CZ diamond accents', 'Hinged clasp', 'Gift-boxed'],
    inStock: false,
  },
]

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 3) {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, limit)
}

export function getBestSellers() {
  return PRODUCTS.filter((p) => p.bestSeller)
}
