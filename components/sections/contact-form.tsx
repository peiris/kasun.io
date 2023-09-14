"use client"

import React from "react"
import { Field, Form, Formik, FormikProps } from "formik"
import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { toast } from "sonner"
import * as yup from "yup"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Values {
  name: string
  email: string
  message: string
}

interface Form {
  action: (data: Values) => Promise<void>
}

const FormSchema = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().required("Email is required.").email("Invalid email."),
  message: yup.string().required("Message is required."),
})

export default function ContactForm({ action }: Form) {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validateOnBlur={false}
      onSubmit={async (values, { resetForm }) => {
        const submission: any = await action(values)

        if (submission.id) {
          toast.success("Your message has been sent successfully.")
          resetForm()
        }
      }}
      validationSchema={FormSchema}
    >
      {({ errors, isValid, submitForm, isSubmitting }: FormikProps<any>) => {
        return (
          <Form className="grid gap-3">
            <div className="grid w-full items-center gap-1.5">
              <Label size="sm" htmlFor="name">
                Your Name <span className="text-red-400">*</span>
              </Label>

              <Field
                name="name"
                id="name"
                placeholder="Enter your name"
                component={Input}
              />

              {errors.name && (
                <span className="text-red-400 text-xs font-medium">
                  {errors.name as string}
                </span>
              )}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label size="sm" htmlFor="email">
                Your Email <span className="text-red-400">*</span>
              </Label>

              <Field
                name="email"
                id="email"
                placeholder="Enter your email"
                component={Input}
              />

              {errors.email && (
                <span className="text-red-400 text-xs font-medium">
                  {errors.email as string}
                </span>
              )}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label
                size="sm"
                htmlFor="message"
                footNote="Be descriptive as much as you want."
              >
                Your Message <span className="text-red-400">*</span>
              </Label>

              <Field
                name="message"
                id="message"
                placeholder="Enter your message"
                component={Textarea}
              />

              {errors.message && (
                <span className="text-red-400 text-xs font-medium">
                  {errors.message as string}
                </span>
              )}
            </div>

            <div className="grid w-full items-center gap-1.5 pt-2">
              <Button
                disabled={isSubmitting}
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.preventDefault()

                  if (!isValid)
                    return toast.error("Please fill all the required fields")

                  submitForm()
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
