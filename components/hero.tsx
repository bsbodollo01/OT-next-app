import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative">
      <Header />
      <div className="w-full flex flex-col place-items-center justify-center gap-4 py-20 md:py-32 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Empowering Independence Through <span className="text-[#F53D99]">Occupational Therapy</span>
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Personalized therapy services to help you overcome challenges and improve your quality of life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button size="lg" asChild>
            <Link href="#contact">Book a Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

