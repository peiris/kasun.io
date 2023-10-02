import { Metadata, ResolvingMetadata } from "next"

import { getPostBySlug } from "@/lib/mdx"

type Props = {
  params: { id?: string; slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const getPageContent = async (slug: string) => {
  const { meta, content }: { [x: string]: any } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title ?? "" }
}

export default async function Page({ params }: Props) {
  const { content, meta } = await getPageContent(params.slug)

  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <h1 className="max-w-[920px] text-5xl lg:text-7xl font-bold mb-10">
          {meta?.title}
        </h1>
        <article className="prose max-w-none">{content}</article>
      </div>
    </section>
  )
}
