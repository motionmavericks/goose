import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"
import { mockData } from "@/lib/mock-data"

export default function Page(): React.ReactNode {
  return (
    <div className="min-h-screen">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b px-6">
        <Tabs defaultValue="day1" className="flex-1">
          <TabsList className="grid w-full max-w-[400px] grid-cols-3">
            {mockData.tabItems.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Button className="ml-auto">
          <PlusCircle className="mr-2 h-4 w-4" />
          Upload Photos
        </Button>
      </header>
    </div>
  )
}

