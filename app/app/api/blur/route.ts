import { getBlurDataURL } from "@/lib/image-blur"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
  }

  try {
    const blurDataURL = await getBlurDataURL(url)
    return NextResponse.json({ blurDataURL })
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate blur data" }, { status: 500 })
  }
} 