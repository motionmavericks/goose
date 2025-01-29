"use client"

import * as React from "react"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

export interface ImageProps extends Omit<NextImageProps, "src" | "alt"> {
  src: string
  alt: string
  aspectRatio?: number
  className?: string
  blurDataURL?: string
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, aspectRatio, src, blurDataURL, ...props }, ref) => {
    const [blur, setBlur] = React.useState(blurDataURL)
    const [isLoading, setIsLoading] = React.useState(true)
    const [isVisible, setIsVisible] = React.useState(false)
    const [shouldLoad, setShouldLoad] = React.useState(false)
    const imageRef = React.useRef<HTMLDivElement>(null)

    // Intersection Observer for lazy loading
    React.useEffect(() => {
      if (!imageRef.current) return
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        },
        { rootMargin: '50px' }
      )

      observer.observe(imageRef.current)
      return () => observer.disconnect()
    }, [])

    // Fetch blur data if not provided
    React.useEffect(() => {
      if (!blurDataURL && src && shouldLoad) {
        fetch(`/api/blur?url=${encodeURIComponent(src)}`)
          .then(res => res.json())
          .then(data => {
            if (data.blurDataURL) setBlur(data.blurDataURL)
          })
          .catch(console.error)
      }
    }, [src, blurDataURL, shouldLoad])

    const handleLoadingComplete = () => {
      setIsLoading(false)
      setIsVisible(true)
    }

    return (
      <div ref={imageRef} className={cn("relative", className)}>
        {aspectRatio ? (
          <AspectRatio ratio={aspectRatio}>
            {/* Base loading state with spinner */}
            {shouldLoad && isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                <Spinner className="text-muted-foreground" />
              </div>
            )}

            {/* Blur placeholder */}
            {shouldLoad && blur && (
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  isVisible ? "opacity-0" : "opacity-100"
                )}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${blur})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(10px)',
                    transform: 'scale(1.1)'
                  }}
                />
              </div>
            )}

            {/* Actual image */}
            {shouldLoad && (
              <NextImage
                ref={ref}
                src={src}
                className={cn(
                  "h-full w-full object-cover transition-opacity duration-300",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                fill
                onLoadingComplete={handleLoadingComplete}
                {...props}
              />
            )}
          </AspectRatio>
        ) : (
          shouldLoad && (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                  <Spinner className="text-muted-foreground" />
                </div>
              )}
              <NextImage
                ref={ref}
                src={src}
                className={cn(
                  "transition-opacity duration-300",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                onLoadingComplete={handleLoadingComplete}
                {...props}
              />
            </>
          )
        )}
      </div>
    )
  }
)
Image.displayName = "Image"

export { Image } 