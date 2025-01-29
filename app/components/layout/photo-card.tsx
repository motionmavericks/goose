import * as React from "react"
import Link from "next/link"
import { Image } from "@/components/ui/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { LikeButton } from "@/components/ui/like-button"
import { usePhotosStore } from "@/lib/photos-store"

export interface Photo {
  id: number
  name: string
  href: string
  price: string
  imageSrc: string
  imageAlt: string
  tags: string[]
  blurDataURL?: string
  liked?: boolean
}

interface PhotoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  photo: Photo
  aspectRatio?: number
}

export function PhotoCard({
  photo,
  aspectRatio = 1,
  className,
  ...props 
}: PhotoCardProps) {
  const { showInfo } = usePhotosStore()
  const imageKey = React.useMemo(() => `${photo.id}`, [photo.id])

  return (
    <Link 
      href={photo.href}
      className={cn("group block w-full", className)}
      {...props}
    >
      <div 
        className="overflow-hidden rounded-lg bg-muted relative group w-full"
        style={{
          width: '100%',
          aspectRatio: aspectRatio
        }}
      >
        <Image
          key={imageKey}
          src={photo.imageSrc}
          alt={photo.imageAlt}
          aspectRatio={aspectRatio}
          className="group-hover:opacity-75 transition-opacity duration-300"
          blurDataURL={photo.blurDataURL}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          priority={false}
        />
        <div className="absolute inset-0 z-30">
          <LikeButton 
            liked={photo.liked}
          />
        </div>
      </div>
      {showInfo && (
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="secondary">
            {photo.name}
          </Badge>
          <Badge variant="default">
            {photo.price}
          </Badge>
          {photo.tags?.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Link>
  )
} 