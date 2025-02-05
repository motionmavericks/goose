import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="transition hover:text-zinc-500 dark:hover:text-zinc-400"
    >
      {children}
    </Link>
  )
}

export function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <Container>
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Link href="/" className="pointer-events-auto">
                <h1 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  Goose
                </h1>
              </Link>
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <nav className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  <li>
                    <NavLink href="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink href="/articles">Articles</NavLink>
                  </li>
                  <li>
                    <NavLink href="/projects">Projects</NavLink>
                  </li>
                  <li>
                    <NavLink href="/speaking">Speaking</NavLink>
                  </li>
                  <li>
                    <NavLink href="/uses">Uses</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <ModeToggle />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
} 