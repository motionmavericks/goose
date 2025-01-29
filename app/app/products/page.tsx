import { ProductGrid } from "@/components/layout/product-grid"

const products = [
  {
    id: 1,
    name: 'Sleepy Tabby',
    href: '#',
    price: '$48',
    imageSrc: 'https://placecats.com/400/500',
    imageAlt: 'A sleepy tabby cat lounging on a windowsill',
    tags: ['Sleepy', 'Tabby', 'Cozy'],
  },
  {
    id: 2,
    name: 'Playful Kitten',
    href: '#',
    price: '$35',
    imageSrc: 'https://placecats.com/401/500',
    imageAlt: 'A playful kitten chasing a toy',
    tags: ['Playful', 'Kitten', 'Active'],
  },
  {
    id: 3,
    name: 'Majestic Persian',
    href: '#',
    price: '$89',
    imageSrc: 'https://placecats.com/402/500',
    imageAlt: 'A majestic Persian cat with flowing fur',
    tags: ['Persian', 'Elegant', 'Fluffy'],
  },
  {
    id: 4,
    name: 'Curious Siamese',
    href: '#',
    price: '$35',
    imageSrc: 'https://placecats.com/403/500',
    imageAlt: 'A curious Siamese cat exploring',
    tags: ['Siamese', 'Curious', 'Alert'],
  },
  {
    id: 5,
    name: 'British Shorthair',
    href: '#',
    price: '$55',
    imageSrc: 'https://placecats.com/404/500',
    imageAlt: 'A plump British Shorthair cat',
    tags: ['British', 'Plump', 'Gentle'],
  },
  {
    id: 6,
    name: 'Maine Coon',
    href: '#',
    price: '$95',
    imageSrc: 'https://placecats.com/405/500',
    imageAlt: 'A majestic Maine Coon cat',
    tags: ['Maine Coon', 'Large', 'Majestic'],
  },
  {
    id: 7,
    name: 'Ragdoll',
    href: '#',
    price: '$75',
    imageSrc: 'https://placecats.com/406/500',
    imageAlt: 'A relaxed Ragdoll cat',
    tags: ['Ragdoll', 'Relaxed', 'Fluffy'],
  },
  {
    id: 8,
    name: 'Scottish Fold',
    href: '#',
    price: '$85',
    imageSrc: 'https://placecats.com/407/500',
    imageAlt: 'A cute Scottish Fold cat',
    tags: ['Scottish', 'Fold', 'Cute'],
  },
  {
    id: 9,
    name: 'Bengal Tiger',
    href: '#',
    price: '$125',
    imageSrc: 'https://placecats.com/408/500',
    imageAlt: 'A spotted Bengal cat',
    tags: ['Bengal', 'Spotted', 'Active'],
  },
  {
    id: 10,
    name: 'Sphynx',
    href: '#',
    price: '$100',
    imageSrc: 'https://placecats.com/409/500',
    imageAlt: 'A hairless Sphynx cat',
    tags: ['Sphynx', 'Hairless', 'Unique'],
  },
  {
    id: 11,
    name: 'Russian Blue',
    href: '#',
    price: '$80',
    imageSrc: 'https://placecats.com/410/500',
    imageAlt: 'An elegant Russian Blue cat',
    tags: ['Russian', 'Blue', 'Elegant'],
  },
  {
    id: 12,
    name: 'Norwegian Forest',
    href: '#',
    price: '$95',
    imageSrc: 'https://placecats.com/411/500',
    imageAlt: 'A fluffy Norwegian Forest cat',
    tags: ['Norwegian', 'Forest', 'Wild'],
  },
  {
    id: 13,
    name: 'Exotic Shorthair',
    href: '#',
    price: '$70',
    imageSrc: 'https://placecats.com/412/500',
    imageAlt: 'A cute Exotic Shorthair cat',
    tags: ['Exotic', 'Short', 'Sweet'],
  },
  {
    id: 14,
    name: 'Abyssinian',
    href: '#',
    price: '$85',
    imageSrc: 'https://placecats.com/413/500',
    imageAlt: 'An active Abyssinian cat',
    tags: ['Abyssinian', 'Active', 'Smart'],
  },
]

export default function ProductsPage() {
  return (
    <ProductGrid 
      products={products}
      columns={{
        default: 1,
        sm: 2,
        lg: 3,
        xl: 4
      }}
    />
  )
} 