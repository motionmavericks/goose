import React from "react"
import { ScrollArea } from "../components/ui/scroll-area"
import { PhotoCard } from "./photo-card"
import { mockData } from "../lib/mock-data"

export function MainContent() {
  return (
    <main className="flex-1 overflow-hidden">
      <ScrollArea className="h-full px-6 py-4">
        <div className="space-y-6">
          {mockData.mainContent.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              <p className="text-sm text-muted-foreground">{section.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {section.items.map((item, itemIndex) => (
                  <PhotoCard
                    key={itemIndex}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    time={item.time}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </ScrollArea>
    </main>
  )
}

