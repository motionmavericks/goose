'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  ArrowRightFromLine,
  ChevronDown,
  ChevronUp,
  Cog,
  HelpCircle,
  Home,
  LightbulbIcon,
  Plus,
  Settings,
  ShieldCheck,
  Sparkles,
  SquareStack,
  Ticket,
  User,
} from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface Event {
  id: string
  name: string
  url: string
}

interface ApplicationLayoutProps {
  events: Event[]
  children: React.ReactNode
}

function AccountDropdownMenu({ anchor = "bottom" }: { anchor?: "top" | "bottom" }) {
  return (
    <DropdownMenuContent className="w-64" align={anchor === "bottom" ? "end" : "start"}>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>My account</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <ShieldCheck className="mr-2 h-4 w-4" />
        <span>Privacy policy</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LightbulbIcon className="mr-2 h-4 w-4" />
        <span>Share feedback</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <ArrowRightFromLine className="mr-2 h-4 w-4" />
        <span>Sign out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

function SidebarNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-2", className)} {...props}>
      <Button
        variant={pathname === "/" ? "secondary" : "ghost"}
        className="justify-start"
        asChild
      >
        <a href="/">
          <Home className="mr-2 h-4 w-4" />
          Home
        </a>
      </Button>
      <Button
        variant={pathname.startsWith("/events") ? "secondary" : "ghost"}
        className="justify-start"
        asChild
      >
        <a href="/events">
          <SquareStack className="mr-2 h-4 w-4" />
          Events
        </a>
      </Button>
      <Button
        variant={pathname.startsWith("/orders") ? "secondary" : "ghost"}
        className="justify-start"
        asChild
      >
        <a href="/orders">
          <Ticket className="mr-2 h-4 w-4" />
          Orders
        </a>
      </Button>
      <Button
        variant={pathname.startsWith("/settings") ? "secondary" : "ghost"}
        className="justify-start"
        asChild
      >
        <a href="/settings">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </a>
      </Button>
    </nav>
  )
}

export function ApplicationLayout({ events, children }: ApplicationLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden border-r bg-zinc-50/40 lg:block lg:w-72 lg:flex-shrink-0 dark:bg-zinc-900">
        <div className="flex h-full flex-col">
          {/* Team Selector */}
          <div className="border-b p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/teams/catalyst.svg" alt="Catalyst" />
                      <AvatarFallback>CT</AvatarFallback>
                    </Avatar>
                    <span>Catalyst</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="start">
                <DropdownMenuItem>
                  <Cog className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Avatar className="mr-2 h-6 w-6">
                    <AvatarImage src="/teams/catalyst.svg" alt="Catalyst" />
                    <AvatarFallback>CT</AvatarFallback>
                  </Avatar>
                  <span>Catalyst</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Avatar className="mr-2 h-6 w-6 bg-purple-500">
                    <AvatarFallback>BE</AvatarFallback>
                  </Avatar>
                  <span>Big Events</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>New team...</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-auto py-4">
            <div className="px-4">
              <SidebarNav />
            </div>

            {/* Upcoming Events */}
            <div className="mt-8 px-4">
              <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Upcoming Events
              </h2>
              <div className="space-y-1">
                {events.map((event) => (
                  <Button
                    key={event.id}
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <a href={event.url}>{event.name}</a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="mt-auto px-4">
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Support
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Changelog
                </Button>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="border-t p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/users/erica.jpg" alt="Erica" />
                      <AvatarFallback>EA</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="text-sm font-medium">Erica</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        erica@example.com
                      </div>
                    </div>
                  </div>
                  <ChevronUp className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <AccountDropdownMenu anchor="top" />
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 z-40 flex w-full border-t bg-white p-2 lg:hidden dark:bg-zinc-900">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/teams/catalyst.svg" alt="Catalyst" />
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <SidebarNav />
            </div>
          </SheetContent>
        </Sheet>

        <SidebarNav className="flex flex-row flex-1 items-center justify-around" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/users/erica.jpg" alt="Erica" />
                <AvatarFallback>EA</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <AccountDropdownMenu />
        </DropdownMenu>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <main className="min-h-screen bg-white px-4 pb-16 lg:px-8 lg:pb-8 dark:bg-zinc-950">
          {children}
        </main>
      </div>
    </div>
  )
} 
