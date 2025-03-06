import Link from "next/link"
import { Activity } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full  border-b border-gray-600 backdrop-blur supports-[backdrop-filter]:bg-opacity-60"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <div className="w-full flex px-5 h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6"/>
          <span className="text-xl font-bold">OccuTherapy</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs">
          <Link href="#services" className="font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#about" className="font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#testimonials" className="font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="#contact" className="font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:flex" variant="default" asChild>
            <Link href="#contact" className="text-sm">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

