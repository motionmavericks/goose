"use client"

import * as React from "react"
import { Settings2, ArrowDown, ArrowUp, Tags } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { usePhotosStore } from "@/lib/photos-store"

interface PhotosControlsProps {
  size: number
  onSizeChange: (size: number) => void
  columnCount: number
  className?: string
}

export function PhotosControls({ size, onSizeChange, columnCount, className }: PhotosControlsProps) {
  const { sortBy, setSortBy, sortOrder, setSortOrder, showInfo, setShowInfo } = usePhotosStore()

  const handleSizeChange = React.useCallback((value: number[]) => {
    onSizeChange(value[0])
  }, [onSizeChange])

  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button size="lg" className="h-14 w-14 rounded-full shadow-lg">
            <Settings2 className="h-6 w-6" />
            <span className="sr-only">Open photo controls</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80" collisionPadding={20}>
          <DropdownMenuLabel>Grid Size</DropdownMenuLabel>
          <DropdownMenuItem className="focus:bg-transparent" onSelect={(e) => e.preventDefault()}>
            <div className="flex w-full flex-col gap-2 py-2">
              <Slider
                value={[size]}
                min={200}
                max={800}
                step={50}
                onValueChange={handleSizeChange}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>200px</span>
                <span>{columnCount} columns</span>
                <span>800px</span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {sortOrder === "asc" ? <ArrowUp className="mr-2 h-4 w-4" /> : <ArrowDown className="mr-2 h-4 w-4" />}
                Sort by {sortBy}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                  <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price">Price</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                  <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-transparent" onSelect={(e) => e.preventDefault()}>
            <div className="flex items-center justify-between w-full py-2">
              <div className="flex items-center space-x-2">
                <Tags className="h-4 w-4" />
                <Label htmlFor="show-info">Show Info</Label>
              </div>
              <Switch
                id="show-info"
                checked={showInfo}
                onCheckedChange={setShowInfo}
              />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 