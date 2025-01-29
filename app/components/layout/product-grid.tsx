"use client"

import * as React from "react"
import { ProductCard } from "@/components/layout/product-card"
import type { Product } from "@/components/layout/product-card"

interface ProductGridProps {
  products: Product[]
  aspectRatio?: number
  columns?: {
    default: number
    sm?: number
    lg?: number
    xl?: number
  }
}

export function ProductGrid({ products, aspectRatio, columns }: ProductGridProps) {
  return (
    <div className="mx-auto px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            aspectRatio={aspectRatio}
          />
        ))}
      </div>
    </div>
  )
} 