'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you within 24 hours.")
      setForm({ name: '', email: '', subject: '', message: '' })
      setSubmitting(false)
    }, 700)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input
              id="name"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="h-10"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email address</FieldLabel>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="h-10"
            />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Input
            id="subject"
            required
            placeholder="How can we help?"
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
            className="h-10"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            required
            rows={5}
            placeholder="Tell us a little more..."
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </Field>
        <Button type="submit" size="lg" disabled={submitting} className="w-fit">
          <Send data-icon="inline-start" />
          {submitting ? 'Sending...' : 'Send message'}
        </Button>
      </FieldGroup>
    </form>
  )
}
