'use client'

import { MessageCircle } from 'lucide-react'
import { BRAND, whatsappLink } from '@/lib/brand'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(
        `Hello ${BRAND.shortName}! I have a question about your accessories.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Chat with us</span>
      <span className="absolute -right-0.5 -top-0.5 flex size-3">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex size-3 rounded-full bg-[#1ebe5a]" />
      </span>
    </a>
  )
}
