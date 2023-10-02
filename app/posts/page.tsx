import Link from "next/link"

import { getAllPostsMeta } from "@/lib/mdx"

export default async function Page() {
  const posts = await getAllPostsMeta()
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <h1 className="max-w-[920px] text-5xl lg:text-7xl font-bold">Posts</h1>

        <div className="flex gap-6 pt-16">
          {posts?.map((post: any) => (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              className="rounded-md flex flex-col gap-4"
            >
              <span>
                <img
                  src={
                    post.coverImage ||
                    "https://images.unsplash.com/photo-1595325281545-e7d6cdd5f95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  }
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </span>

              <div className="flex flex-col">
                <h3 className="text-xl font-medium">{post.title}</h3>
                <time className="text-[12px] text-gray-400">
                  {post.publishDate}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
