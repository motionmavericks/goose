"use client"

import { PhotoGrid } from "@/components/layout/photo-grid"
import { PhotosControls } from "@/components/layout/photos-controls"
import { usePhotosStore } from "@/lib/photos-store"
import { useMemo } from "react"

const photos = [
  {
    id: 1,
    name: 'Sleepy Tabby',
    href: '#',
    price: '$48',
    imageSrc: 'https://placecats.com/1600/2000',
    imageAlt: 'A sleepy tabby cat lounging on a windowsill',
    tags: ['Sleepy', 'Tabby', 'Cozy'],
  },
  {
    id: 2,
    name: 'Playful Kitten',
    href: '#',
    price: '$35',
    imageSrc: 'https://placecats.com/1601/2000',
    imageAlt: 'A playful kitten chasing a toy',
    tags: ['Playful', 'Kitten', 'Active'],
  },
  {
    id: 3,
    name: 'Majestic Persian',
    href: '#',
    price: '$89',
    imageSrc: 'https://placecats.com/1602/2000',
    imageAlt: 'A majestic Persian cat with flowing fur',
    tags: ['Persian', 'Elegant', 'Fluffy'],
  },
  {
    id: 4,
    name: 'Curious Siamese',
    href: '#',
    price: '$35',
    imageSrc: 'https://placecats.com/1603/2000',
    imageAlt: 'A curious Siamese cat exploring',
    tags: ['Siamese', 'Curious', 'Alert'],
  },
  {
    id: 5,
    name: 'British Shorthair',
    href: '#',
    price: '$55',
    imageSrc: 'https://placecats.com/1604/2000',
    imageAlt: 'A plump British Shorthair cat',
    tags: ['British', 'Plump', 'Gentle'],
  },
  {
    id: 6,
    name: 'Maine Coon',
    href: '#',
    price: '$95',
    imageSrc: 'https://placecats.com/1605/2000',
    imageAlt: 'A majestic Maine Coon cat',
    tags: ['Maine Coon', 'Large', 'Majestic'],
  },
  {
    id: 7,
    name: 'Ragdoll',
    href: '#',
    price: '$75',
    imageSrc: 'https://placecats.com/1606/2000',
    imageAlt: 'A relaxed Ragdoll cat',
    tags: ['Ragdoll', 'Relaxed', 'Fluffy'],
  },
  {
    id: 8,
    name: 'Scottish Fold',
    href: '#',
    price: '$85',
    imageSrc: 'https://placecats.com/1607/2000',
    imageAlt: 'A cute Scottish Fold cat',
    tags: ['Scottish', 'Fold', 'Cute'],
  },
  {
    id: 9,
    name: 'Bengal Tiger',
    href: '#',
    price: '$125',
    imageSrc: 'https://placecats.com/1608/2000',
    imageAlt: 'A spotted Bengal cat',
    tags: ['Bengal', 'Spotted', 'Active'],
  },
  {
    id: 10,
    name: 'Sphynx',
    href: '#',
    price: '$100',
    imageSrc: 'https://placecats.com/1609/2000',
    imageAlt: 'A hairless Sphynx cat',
    tags: ['Sphynx', 'Hairless', 'Unique'],
  },
  {
    id: 11,
    name: 'Russian Blue',
    href: '#',
    price: '$80',
    imageSrc: 'https://placecats.com/1610/2000',
    imageAlt: 'An elegant Russian Blue cat',
    tags: ['Russian', 'Blue', 'Elegant'],
  },
  {
    id: 12,
    name: 'Norwegian Forest',
    href: '#',
    price: '$95',
    imageSrc: 'https://placecats.com/1611/2000',
    imageAlt: 'A fluffy Norwegian Forest cat',
    tags: ['Norwegian', 'Forest', 'Wild'],
  },
  {
    id: 13,
    name: 'Exotic Shorthair',
    href: '#',
    price: '$70',
    imageSrc: 'https://placecats.com/1612/2000',
    imageAlt: 'A cute Exotic Shorthair cat',
    tags: ['Exotic', 'Short', 'Sweet'],
  },
  {
    id: 14,
    name: 'Abyssinian',
    href: '#',
    price: '$85',
    imageSrc: 'https://placecats.com/1613/2000',
    imageAlt: 'An active Abyssinian cat',
    tags: ['Abyssinian', 'Active', 'Smart'],
  },
  {
    id: 15,
    name: 'Birman',
    href: '#',
    price: '$92',
    imageSrc: 'https://placecats.com/1614/2000',
    imageAlt: 'A regal Birman cat with blue eyes',
    tags: ['Birman', 'Regal', 'Gentle'],
  },
  {
    id: 16,
    name: 'Tonkinese',
    href: '#',
    price: '$78',
    imageSrc: 'https://placecats.com/1615/2000',
    imageAlt: 'A playful Tonkinese cat',
    tags: ['Tonkinese', 'Social', 'Energetic'],
  },
  {
    id: 17,
    name: 'Chartreux',
    href: '#',
    price: '$88',
    imageSrc: 'https://placecats.com/1616/2000',
    imageAlt: 'A blue-gray Chartreux cat',
    tags: ['Chartreux', 'French', 'Quiet'],
  },
  {
    id: 18,
    name: 'Somali',
    href: '#',
    price: '$82',
    imageSrc: 'https://placecats.com/1617/2000',
    imageAlt: 'A fox-like Somali cat',
    tags: ['Somali', 'Active', 'Fox-like'],
  },
  {
    id: 19,
    name: 'Balinese',
    href: '#',
    price: '$95',
    imageSrc: 'https://placecats.com/1618/2000',
    imageAlt: 'An elegant Balinese cat',
    tags: ['Balinese', 'Elegant', 'Vocal'],
  },
  {
    id: 20,
    name: 'Burmese',
    href: '#',
    price: '$72',
    imageSrc: 'https://placecats.com/1619/2000',
    imageAlt: 'A compact Burmese cat',
    tags: ['Burmese', 'Affectionate', 'Compact'],
  },
  {
    id: 21,
    name: 'Turkish Van',
    href: '#',
    price: '$86',
    imageSrc: 'https://placecats.com/1620/2000',
    imageAlt: 'A swimming-loving Turkish Van cat',
    tags: ['Turkish', 'Van', 'Swimmer'],
  },
  {
    id: 22,
    name: 'Korat',
    href: '#',
    price: '$79',
    imageSrc: 'https://placecats.com/1621/2000',
    imageAlt: 'A silver-blue Korat cat',
    tags: ['Korat', 'Thai', 'Lucky'],
  },
  {
    id: 23,
    name: 'Havana Brown',
    href: '#',
    price: '$93',
    imageSrc: 'https://placecats.com/1622/2000',
    imageAlt: 'A chocolate-colored Havana Brown cat',
    tags: ['Havana', 'Brown', 'Rare'],
  },
  {
    id: 24,
    name: 'Manx',
    href: '#',
    price: '$68',
    imageSrc: 'https://placecats.com/1623/2000',
    imageAlt: 'A tailless Manx cat',
    tags: ['Manx', 'Tailless', 'Hunter'],
  },
  {
    id: 25,
    name: 'Egyptian Mau',
    href: '#',
    price: '$98',
    imageSrc: 'https://placecats.com/1624/2000',
    imageAlt: 'A spotted Egyptian Mau cat',
    tags: ['Egyptian', 'Spotted', 'Fast'],
  },
  {
    id: 26,
    name: 'Cornish Rex',
    href: '#',
    price: '$87',
    imageSrc: 'https://placecats.com/1625/2000',
    imageAlt: 'A curly-coated Cornish Rex cat',
    tags: ['Cornish', 'Rex', 'Curly'],
  },
  {
    id: 27,
    name: 'Devon Rex',
    href: '#',
    price: '$89',
    imageSrc: 'https://placecats.com/1626/2000',
    imageAlt: 'An elfin Devon Rex cat',
    tags: ['Devon', 'Rex', 'Elfin'],
  },
  {
    id: 28,
    name: 'Ocicat',
    href: '#',
    price: '$91',
    imageSrc: 'https://placecats.com/1627/2000',
    imageAlt: 'A spotted Ocicat',
    tags: ['Ocicat', 'Spotted', 'Wild-looking'],
  },
  {
    id: 29,
    name: 'Singapura',
    href: '#',
    price: '$94',
    imageSrc: 'https://placecats.com/1628/2000',
    imageAlt: 'A small Singapura cat',
    tags: ['Singapura', 'Small', 'Curious'],
  },
  {
    id: 30,
    name: 'LaPerm',
    href: '#',
    price: '$76',
    imageSrc: 'https://placecats.com/1629/2000',
    imageAlt: 'A curly-coated LaPerm cat',
    tags: ['LaPerm', 'Curly', 'Affectionate'],
  },
  {
    id: 31,
    name: 'Toyger',
    href: '#',
    price: '$105',
    imageSrc: 'https://placecats.com/1630/2000',
    imageAlt: 'A tiger-like Toyger cat',
    tags: ['Toyger', 'Striped', 'Designer'],
  },
  {
    id: 32,
    name: 'Chausie',
    href: '#',
    price: '$115',
    imageSrc: 'https://placecats.com/1631/2000',
    imageAlt: 'A wild-looking Chausie cat',
    tags: ['Chausie', 'Wild', 'Athletic'],
  },
  {
    id: 33,
    name: 'Peterbald',
    href: '#',
    price: '$120',
    imageSrc: 'https://placecats.com/1632/2000',
    imageAlt: 'An elegant Peterbald cat',
    tags: ['Peterbald', 'Hairless', 'Elegant'],
  },
  {
    id: 34,
    name: 'Savannah',
    href: '#',
    price: '$150',
    imageSrc: 'https://placecats.com/1633/2000',
    imageAlt: 'A tall Savannah cat',
    tags: ['Savannah', 'Exotic', 'Large'],
  }
]

export default function PhotosPage() {
  const { size, isResizing, setIsResizing, columnCount, sortBy, sortOrder } = usePhotosStore()

  const sortedPhotos = useMemo(() => {
    const sorted = [...photos]
    
    switch (sortBy) {
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "price":
        sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('$', ''))
          const priceB = parseFloat(b.price.replace('$', ''))
          return priceA - priceB
        })
        break
      case "newest":
        sorted.sort((a, b) => b.id - a.id)
        break
    }

    if (sortOrder === "desc") {
      sorted.reverse()
    }

    return sorted
  }, [sortBy, sortOrder])

  return (
    <main className="relative h-full p-4">
      <PhotoGrid 
        photos={sortedPhotos}
        columns={{
          default: 1,
          sm: 2,
          lg: 3,
          xl: 4
        }}
        size={size}
        isResizing={isResizing}
        onResizingChange={setIsResizing}
      />
      <PhotosControls 
        size={size}
        onSizeChange={(newSize) => {
          usePhotosStore.setState({ size: newSize, isResizing: true })
        }}
        columnCount={columnCount}
      />
    </main>
  )
} 