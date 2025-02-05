import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s - Goose",
    default: "Goose",
  },
  description: "A modern web application built with Next.js and shadcn/ui",
}

// Mock events data - replace with real data source later
const mockEvents = [
  { id: "1", name: "Summer Festival", url: "/events/summer-festival" },
  { id: "2", name: "Tech Conference", url: "/events/tech-conference" },
  { id: "3", name: "Design Workshop", url: "/events/design-workshop" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} flex min-h-full flex-col bg-white dark:bg-zinc-950`}>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative flex w-full flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
