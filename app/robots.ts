import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/*", "/api/og/*"],
      disallow: "/cms/",
    },
    sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
  }
}
