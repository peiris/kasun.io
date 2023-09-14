"use server"

interface Values {
  name: string
  email: string
  message: string
}

export const submitContactForm = async (values: Values) => {
  const submit = await fetch(`${process.env.WEBSITE_URL}/api/email/contact`, {
    method: "POST",
    body: JSON.stringify(values),
  })

  return submit.json()
}
