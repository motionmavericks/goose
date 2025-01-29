import * as React from "react"
import Link from "next/link"
import { Image } from "@/components/ui/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { LikeButton } from "@/components/ui/like-button"

export interface Product {
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

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
  aspectRatio?: number
}

export function ProductCard({ 
  product, 
  aspectRatio = 1,
  className,
  ...props 
}: ProductCardProps) {
  return (
    <Link 
      href={product.href}
      className={cn("group block space-y-3", className)}
      {...props}
    >
      <div className="overflow-hidden rounded-lg bg-muted relative group">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          aspectRatio={aspectRatio}
          className="group-hover:opacity-75 transition-opacity duration-300"
          blurDataURL={product.blurDataURL}
        />
        <div className="absolute inset-0 z-30">
          <LikeButton 
            liked={product.liked}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">
          {product.name}
        </Badge>
        <Badge variant="default">
          {product.price}
        </Badge>
        {product.tags?.map((tag) => (
          <Badge 
            key={tag} 
            variant="outline"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  )
} 