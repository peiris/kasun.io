import fs from "fs"
import path from "path"
import { ArrowUpRight } from "lucide-react"
import { compileMDX } from "next-mdx-remote/rsc"

import * as Components from "@/components/ui"

const rootDirectory = path.join(process.cwd(), "app", "content")

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "")
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {
      ...Components,
      a: ({ children, ...props }) => (
        <a {...props} className="[&_*]:inline underline-offset-4">
          <span>{children}</span>
          <ArrowUpRight size={16} strokeWidth={1} absoluteStrokeWidth />
        </a>
      ),
      h2: ({ children, ...props }) => (
        <h2 {...props} className="text-3xl lg:text-4xl font-bold mb-6 mt-5">
          {children}
        </h2>
      ),
    },
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}
