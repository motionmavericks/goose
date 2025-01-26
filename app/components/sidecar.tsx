import React from "react"
import { Button } from "../components/ui/button"
import { Calendar, ImageIcon, Users, Star } from "lucide-react"
import { mockData } from "../lib/mock-data"

const iconMap: { [key: string]: React.ElementType } = {
  Calendar,
  ImageIcon,
  Users,
  Star,
}

export function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col gap-6 border-r p-4 sticky top-0 h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold tracking-tight">{mockData.conferenceName}</h2>
      {mockData.sidebarCategories.map((category, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">{category.title}</h2>
          <div className="space-y-1">
            {category.items.map((item, itemIndex) => {
              const Icon = iconMap[item.icon]
              return (
                <Button key={itemIndex} variant="ghost" className="w-full justify-start gap-2">
                  <Icon size={20} />
                  {item.name}
                </Button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

