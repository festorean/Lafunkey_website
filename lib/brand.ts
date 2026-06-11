export const BRAND = {
  name: 'LAFUNKY VENTURES',
  shortName: 'LAFUNKY',
  tagline: 'Premium Fashion Accessories',
  // Nigerian number in international format, no plus or spaces
  whatsappNumber: '2348012345678',
  whatsappDisplay: '+234 801 234 5678',
  email: 'hello@lafunkyventures.com',
  phoneDisplay: '+234 801 234 5678',
  address: '24 Adeola Odeku Street, Victoria Island, Lagos, Nigeria',
  socials: {
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },
}

export function formatNaira(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function whatsappLink(message: string) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`
}
