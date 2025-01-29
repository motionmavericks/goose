"use client"

import * as React from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeartButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  liked?: boolean
}

export function HeartButton({ className, liked = false, ...props }: HeartButtonProps) {
  const [isLiked, setIsLiked] = React.useState(liked)
  const [showConfetti, setShowConfetti] = React.useState(false)

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1500)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLiked(!isLiked)
    if (!isLiked) triggerConfetti()
  }

  return (
    <button
      className={cn(
        "absolute top-2 right-2 z-30 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-all hover:bg-background/90",
        isLiked && "text-red-500",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Center pieces */}
          <div className="animate-confetti-1 absolute top-1/2 left-1/2 w-2 h-2 bg-red-500" />
          <div className="animate-confetti-2 absolute top-1/2 left-1/2 w-2 h-2 bg-pink-500" />
          <div className="animate-confetti-3 absolute top-1/2 left-1/2 w-2 h-2 bg-rose-500" />
          {/* Outer pieces */}
          <div className="animate-confetti-4 absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-red-400" />
          <div className="animate-confetti-5 absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-pink-400" />
          <div className="animate-confetti-6 absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-rose-400" />
          {/* Small pieces */}
          <div className="animate-confetti-7 absolute top-1/2 left-1/2 w-1 h-1 bg-red-300" />
          <div className="animate-confetti-8 absolute top-1/2 left-1/2 w-1 h-1 bg-pink-300" />
        </div>
      )}
      <Heart 
        className={cn(
          "h-5 w-5 transition-all",
          isLiked && "fill-current scale-110"
        )} 
      />
    </button>
  )
} 