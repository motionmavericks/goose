import React from "react"
import { Button } from "../components/ui/button"
import { Calendar, ImageIcon, Users, Star } from "lucide-react"
import { mockData } from "../lib/mock-data"

export function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col gap-6 border-r p-4 sticky top-0 h-screen overflow-y-auto">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">{mockData.conferenceName}</h2>
        <div className="space-y-1">
          {mockData.sidebarCategories.map((category) => (
            <div key={category.title} className="space-y-1">
              <h3 className="text-sm font-medium">{category.title}</h3>
              {category.items.map((item) => (
                <Button key={item.name} variant="ghost" className="w-full justify-start gap-2">
                  {item.icon === "ImageIcon" && <ImageIcon size={20} />}
                  {item.icon === "Star" && <Star size={20} />}
                  {item.icon === "Users" && <Users size={20} />}
                  {item.name}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Schedule</h2>
        <div className="space-y-1">
          {mockData.sidebarCategories[1].items.map((item) => (
            <Button key={item.name} variant="ghost" className="w-full justify-start gap-2">
              <Calendar size={20} />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Session Types</h2>
        <div className="space-y-1">
          {mockData.sidebarCategories[2].items.map((item) => (
            <Button key={item.name} variant="ghost" className="w-full justify-start gap-2">
              <Users size={20} />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

