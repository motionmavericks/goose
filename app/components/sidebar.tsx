import React from "react"
import { Button } from "./ui/button"
import { Calendar, ImageIcon, Users, Star, Menu } from "lucide-react"
import { mockData } from "../lib/mock-data"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex flex-col gap-6 p-4 h-screen overflow-y-auto">
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
      </SheetContent>
    </Sheet>
  )
}

