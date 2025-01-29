import { create } from "zustand"

interface PhotosStore {
  size: number
  setSize: (size: number) => void
  isResizing: boolean
  setIsResizing: (isResizing: boolean) => void
  columnCount: number
  setColumnCount: (columnCount: number) => void
  sortBy: "name" | "price" | "newest"
  setSortBy: (sortBy: "name" | "price" | "newest") => void
  sortOrder: "asc" | "desc"
  setSortOrder: (sortOrder: "asc" | "desc") => void
  showInfo: boolean
  setShowInfo: (show: boolean) => void
}

export const usePhotosStore = create<PhotosStore>((set) => ({
  size: 500,
  setSize: (size) => set({ size }),
  isResizing: false,
  setIsResizing: (isResizing) => set({ isResizing }),
  columnCount: 3,
  setColumnCount: (columnCount) => set({ columnCount }),
  sortBy: "newest",
  setSortBy: (sortBy) => set({ sortBy }),
  sortOrder: "desc",
  setSortOrder: (sortOrder) => set({ sortOrder }),
  showInfo: true,
  setShowInfo: (show) => set({ showInfo: show }),
})) 