import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Events</h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Manage your upcoming and past events.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800" />
            <CardHeader>
              <CardTitle>Tech Conference {i}</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  Dec {10 + i}, 2024
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  Virtual Event
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-sm text-zinc-500">
                    <Users className="h-4 w-4" />
                    {120 + i * 10} Attendees
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 