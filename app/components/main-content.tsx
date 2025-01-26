import React from "react"
import { ScrollArea } from "../components/ui/scroll-area"
import { PhotoCard } from "../components/photo-card"
import { mockData } from "../lib/mock-data"

export function MainContent() {
  return (
    <main className="flex-1 overflow-hidden">
      <ScrollArea className="h-full px-6 py-4">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Main Stage Sessions</h2>
            <p className="text-sm text-muted-foreground">
              Keynote addresses and feature panels on critical issues in sport.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {mockData.mainStageSessions.map((session) => (
                <PhotoCard
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  image={session.image}
                  time={session.time}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Breakout Streams</h2>
            <p className="text-sm text-muted-foreground">Focused sessions on key areas in the sports industry.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {mockData.breakoutStreams.map((session) => (
                <PhotoCard
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  image={session.image}
                  time={session.time}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Interactive Workshops</h2>
            <p className="text-sm text-muted-foreground">Hands-on sessions exploring various topics in sports.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {mockData.interactiveWorkshops.map((session) => (
                <PhotoCard
                  key={session.id}
                  title={session.title}
                  description={session.description}
                  image={session.image}
                  time={session.time}
                />
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>
    </main>
  )
}

