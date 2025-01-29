"use server"

import { getPlaiceholder } from "plaiceholder"

export async function getBlurDataURL(imageUrl: string) {
  try {
    const res = await fetch(imageUrl)
    const buffer = await res.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
  } catch (err) {
    console.error("Error generating blur placeholder:", err)
    return undefined
  }
} 