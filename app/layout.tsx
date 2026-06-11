import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { CartProvider } from '@/components/cart/cart-provider'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CartSheet } from '@/components/cart/cart-sheet'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'LAFUNKY VENTURES — Premium Fashion Accessories in Nigeria',
    template: '%s | LAFUNKY VENTURES',
  },
  description:
    'Shop premium glasses, wristwatches and jewelry from LAFUNKY VENTURES. Nationwide delivery across Nigeria, pay on delivery, and order easily via WhatsApp.',
  generator: 'v0.app',
  keywords: [
    'fashion accessories Nigeria',
    'luxury sunglasses Lagos',
    'wristwatches Nigeria',
    'jewelry Nigeria',
    'pay on delivery accessories',
    'LAFUNKY VENTURES',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="flex min-h-dvh flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <CartSheet />
            <WhatsAppButton />
            <Toaster position="top-center" richColors />
          </CartProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
