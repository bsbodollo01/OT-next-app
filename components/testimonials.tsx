import { Quote } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Dr. Johnson helped my son overcome his sensory processing issues. He's now thriving in school and social situations.",
    name: "Rebecca M.",
    role: "Parent",
    avatar: "RM",
  },
  {
    quote:
      "After my stroke, I thought I'd never be independent again. The therapy techniques I learned have given me my life back.",
    name: "James T.",
    role: "Stroke Recovery Patient",
    avatar: "JT",
  },
  {
    quote:
      "The home modification recommendations were life-changing for my elderly mother. She can now safely navigate her home.",
    name: "Lisa K.",
    role: "Family Caregiver",
    avatar: "LK",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function Testimonials() {
  return (
    <AnimatedSection className="py-16 bg-[hsl(var--background)] dark:bg-[hsl(var(--muted)_/_0.5)]">
    {/* <AnimatedSection id="testimonials" className="py-16 bg-[hsl(var--background)] dark:bg-[hsl(var(--muted)_/_0.5)]"> */}
      <div className="w-full px-5">
        <div className="text-center mb-12">
        <motion.h2
            className="text-3xl font-bold tracking-tight mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-[700px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from individuals and families who have experienced positive outcomes through our therapy services
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card key={index}>
                <CardContent className="pt-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="italic mb-4">{testimonial.quote}</p>
                  </motion.div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Avatar>
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

