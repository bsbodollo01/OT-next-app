import Image from "next/image"
import { HeartHandshake } from "lucide-react"
import therapists from "@/components/images/therapist.jpeg"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const credentials = [
  "Master's in Occupational Therapy from Stanford University",
  "Board Certified in Pediatric Occupational Therapy",
  "Specialized training in sensory integration therapy",
  "Member of the American Occupational Therapy Association",
  "Published researcher in occupational therapy interventions",
]

export function About() {
  return (
    <AnimatedSection id="about" className="py-16">
      <div className="w-full px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
              className="relative aspect-square rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={therapists}
                alt="Occupational Therapist"
                fill
                className="object-cover"
              />
            </motion.div>
          <div>
            <motion.h2
              className="text-3xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            About Dr. Ericka Eulogio
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              With over 15 years of experience, Dr. Johnson is a certified occupational therapist specializing in
              helping individuals of all ages overcome physical, cognitive, and developmental challenges.
            </motion.p>
            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={listItemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                <HeartHandshake className="h-5 w-5 text-[#F53D99] mt-0.5" />
                </motion.div>
                  <p>{credential}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

