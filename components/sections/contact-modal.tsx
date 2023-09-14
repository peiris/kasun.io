import React from "react"

import { submitContactForm } from "@/lib/actions"
import { Button, ButtonProps } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from "@/components/sections/contact-form"

export interface ContactModalData {
  button: ButtonProps
}

export interface ContactModalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: ContactModalData
  toggleClassName?: string
}

export default function ContactModal({ data }: ContactModalProps) {
  const { button } = data

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...button} />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="gap-2 py-2">
          <DialogTitle>Let's work together</DialogTitle>
          <DialogDescription>
            Hey there! If you have a project that you want to get started, think
            you need my help with something or just fancy saying hey, submit the
            below form.
          </DialogDescription>
        </DialogHeader>

        <ContactForm action={submitContactForm} />
      </DialogContent>
    </Dialog>
  )
}
