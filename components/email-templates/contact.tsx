import * as React from "react"

export interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div className="border">
    <h1>New form submission by {name}</h1>
    <span>{email}</span>
    <p>{message}</p>
  </div>
)
