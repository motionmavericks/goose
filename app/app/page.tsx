<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
=======
import { Sidebar } from "@/components/ui/sidebar"
=======
import { Sidebar } from "../components/sidebar"
import { SidebarProvider, SidebarInset } from "../components/ui/sidebar"
>>>>>>> origin/Kelvin
import { Header } from "@/components/header"
import { MainContent } from "../components/main-content"
>>>>>>> origin/Kelvin

export default function ConferenceGallery() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-primary/20 to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Conference Gallery</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Capture and preserve every moment of our tech conference. Professional photos of all sessions, networking events, and memorable experiences.
          </p>
          <Button size="lg" className="text-lg px-8">Coming Soon</Button>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 container px-4 mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Preview Our Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Keynote Presentations", desc: "Capturing inspiring moments from industry leaders" },
            { title: "Interactive Workshops", desc: "Hands-on learning and collaboration in action" },
            { title: "Networking Events", desc: "Building connections in a vibrant atmosphere" }
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted" />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Gallery Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-3">Professional Quality</h3>
              <p className="text-muted-foreground">High-resolution photos captured by experienced event photographers</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Complete Coverage</h3>
              <p className="text-muted-foreground">Every session and event documented from multiple angles</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Easy Access</h3>
              <p className="text-muted-foreground">Simple platform for viewing and downloading conference memories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The gallery will be available after the conference. Check back soon to relive the experience.
          </p>
          <Button size="lg" variant="outline" className="text-lg px-8">Learn More</Button>
        </div>
      </section>
    </div>
  )
}
=======
    <div className="grid lg:grid-cols-[240px_1fr] h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col overflow-y-auto">
        <Header />
        <MainContent />
=======
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <SidebarInset className="flex-1">
          <main className="flex-1">
            <Header />
            <MainContent />
          </main>
        </SidebarInset>
>>>>>>> origin/Kelvin
      </div>
    </SidebarProvider>
  )
}

>>>>>>> origin/Kelvin
