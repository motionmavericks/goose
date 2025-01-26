import { Sidebar } from "../components/sidebar"
import { SidebarProvider, SidebarInset } from "../components/ui/sidebar"
import { Header } from "@/components/header"
import { MainContent } from "../components/main-content"

export default function ConferenceGallery() {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <SidebarInset className="flex-1">
          <main className="flex-1">
            <Header />
            <MainContent />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

