import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative">
      <Header />
      <div className="w-full flex flex-col place-items-center justify-center gap-4 py-20 md:py-32 text-center">
      <motion.h1
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Empowering Independence Through{" "}
          <motion.span
            className="text-[#F53D99]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Occupational Therapy
          </motion.span>
        </motion.h1>
        <motion.p
          className="max-w-[700px] text-muted-foreground md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Personalized therapy services to help you overcome challenges and improve your quality of life.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button size="lg" asChild>
            <Link href="#contact">Book a Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

