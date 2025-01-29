"use client"

import * as React from "react"
import { PhotoCard } from "@/components/layout/photo-card"
import { Slider } from "@/components/ui/slider"
import type { Photo } from "@/components/layout/photo-card"
import { cn } from "@/lib/utils"

interface PhotoGridProps {
  photos: Photo[]
  aspectRatio?: number
  columns?: {
    default: number
    sm?: number
    lg?: number
    xl?: number
  }
  size: number
  isResizing: boolean
  onResizingChange: (isResizing: boolean) => void
}

export function PhotoGrid({ 
  photos, 
  aspectRatio = 1, 
  columns,
  size,
  isResizing,
  onResizingChange
}: PhotoGridProps) {
  const [columnCount, setColumnCount] = React.useState(3) // Default to 3 columns

  // Debounce the resize end
  React.useEffect(() => {
    if (!isResizing) return

    const timer = setTimeout(() => {
      onResizingChange(false)
    }, 150) // Wait for slider to settle

    return () => clearTimeout(timer)
  }, [size, isResizing, onResizingChange])

  // Calculate columns based on size - moved to useEffect to be client-side only
  const getColumnCount = React.useCallback(() => {
    const containerWidth = window.innerWidth - 64
    const calculatedColumns = Math.floor(containerWidth / size)
    return Math.max(1, Math.min(calculatedColumns, 6))
  }, [size])

  // Update columns on mount and resize
  React.useEffect(() => {
    const updateColumns = () => {
      setColumnCount(getColumnCount())
    }

    // Initial calculation
    updateColumns()

    // Listen for resize
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [getColumnCount])

  return (
    <div className="h-full overflow-auto">
      <div 
        className="grid w-full gap-6"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`
        }}
      >
        {photos.map((photo) => (
          <PhotoCard 
            key={photo.id}
            photo={photo}
            aspectRatio={aspectRatio}
            className={cn(
              "w-full",
              isResizing && "transition-all duration-150"
            )}
          />
        ))}
      </div>
    </div>
  )
} 