import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import logo from "@/components/images/flower.png"

const socialVariants = {
  hover: { scale: 1.2, rotate: 5 },
}

export function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: "hsl(var(--muted) / 0.3)" }}>
      <div className="w-full px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                  <Image
                  src={logo}
                  alt="Occupational Therapist"
                  className="w-6 h-6"
                />
              </motion.div>
              <span className="text-xl font-bold">Play Hearts Therapy Center</span>
            </motion.div>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering individuals to live their best lives through personalized occupational therapy.
            </motion.p>
          </div>
          <div>
            <motion.h3
              className="font-medium text-lg mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {["Services", "About", "Testimonials", "Contact"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h3
              className="font-medium text-lg mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Resources
            </motion.h3>
            <ul className="space-y-2">
              {["Blog", "FAQ", "Insurance", "Privacy Policy"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                >
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h3
              className="font-medium text-lg mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Connect With Us
            </motion.h3>
            <motion.div 
              className="flex gap-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
              ].map((social) => (
                <motion.div key={social.label} variants={socialVariants} whileHover="hover">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Subscribe to our newsletter for tips and updates.
            </motion.p>
          </div>
        </div>
        <motion.div
          className="border-t mt-8 pt-6 text-center text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} Play Hearts. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

