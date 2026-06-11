'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { ArrowRight } from 'lucide-react'
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from '@/components/ui/input-group'

export function NewsletterForm() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    toast.success('You are subscribed! Welcome to LAFUNKY.')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="bg-primary-foreground/10 [--radius:0.375rem]">
        <InputGroupInput
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          className="text-primary-foreground placeholder:text-primary-foreground/50"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            type="submit"
            size="icon-xs"
            aria-label="Subscribe"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <ArrowRight />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}
