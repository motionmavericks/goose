import { Sidebar } from "@/components/ui/sidebar"
import { Header } from "../components/header"
import { MainContent } from "../components/main-content"

export default function ConferenceGallery() {
  return (
    <div className="grid lg:grid-cols-[240px_1fr] h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col overflow-y-auto">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}

