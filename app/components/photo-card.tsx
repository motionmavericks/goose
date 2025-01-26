import React from "react"
import Image from "next/image"

interface PhotoCardProps {
  title: string
  description: string
  image: string
  time: string
  onClick?: () => void
}

export function PhotoCard({ title, description, image, time, onClick }: PhotoCardProps) {
  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      className="group space-y-3 cursor-pointer"
    >
      <div className="overflow-hidden rounded-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={400}
          className="aspect-square h-auto w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium leading-none">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}

