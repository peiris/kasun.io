import { ImageResponse } from "next/server"

export const runtime = "edge"

export async function GET() {
  const inter = await fetch(
    new URL("../../public/Inter-Bold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter"',
          backgroundColor: "#fff",
        }}
      >
        <div tw="bg-gray-900 text-white flex flex-col w-full h-full items-start px-40 pt-20">
          <div tw="flex items-center pb-6">
            <h1 tw="font-normal text-3xl">Hey, I'm Kasun 👋🏻</h1>
          </div>

          <h2 tw="text-7xl font-bold flex flex-col pb-4">
            <span>
              A <span tw="text-blue-600 px-5">full-stack</span>
            </span>
            <span>developer Specializes</span>
            <span>in JavaScript.</span>
          </h2>

          <div tw="flex">
            <span tw="bg-white text-lg text-gray-900 px-3 py-2 flex items-center rounded">
              kasun.io
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: inter,
          style: "normal",
        },
      ],
    }
  )
}
