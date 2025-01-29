"use client"

import * as React from "react"
import { Heart, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

interface LikeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  liked?: boolean
  bookmarked?: boolean
}

export function LikeButton({ className, liked = false, bookmarked = false, ...props }: LikeButtonProps) {
  const [isLiked, setIsLiked] = React.useState(liked)
  const [isBookmarked, setIsBookmarked] = React.useState(bookmarked)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }

  return (
    <div className="absolute bottom-2 right-2 z-30 flex gap-2">
      <button
        className={cn(
          "rounded-full p-2 backdrop-blur-sm transition-colors duration-200",
          "opacity-0 group-hover:opacity-100",
          isLiked ? "opacity-100 text-red-500" : "text-foreground",
          className
        )}
        onClick={handleLike}
        {...props}
      >
        <Heart 
          className={cn(
            "h-5 w-5 transition-colors duration-200",
            isLiked && "fill-red-500 text-red-500"
          )} 
        />
      </button>
      <button
        className={cn(
          "rounded-full p-2 backdrop-blur-sm transition-colors duration-200",
          "opacity-0 group-hover:opacity-100",
          isBookmarked ? "opacity-100 text-yellow-500" : "text-foreground",
          className
        )}
        onClick={handleBookmark}
      >
        <Bookmark 
          className={cn(
            "h-5 w-5 transition-colors duration-200",
            isBookmarked && "fill-yellow-500 text-yellow-500"
          )} 
        />
      </button>
    </div>
  )
} 