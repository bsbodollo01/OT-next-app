import Link from "next/link"
import logo from "@/components/images/flower.png"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <motion.header
      className={`sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all duration-300 ${
        scrolled ? "bg-background/95" : "bg-background/80"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="w-full flex px-5 h-14 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo}
              alt="Occupational Therapist"
              className="w-6 h-6"
            />          </motion.div>
          <span className="text-xl font-bold">OccuTherapy</span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {["Services", "About", "Testimonials", "Contact"].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="font-medium transition-colors hover:text-primary">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="hidden md:flex" asChild>
              <Link href="#contact">Book Appointment</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  )
}

