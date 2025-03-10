import { Brain, HandMetal, Baby, Accessibility, Home, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Brain className="h-10 w-10 text-[#F53D99]" />,
    title: "Cognitive Rehabilitation",
    description: "Improve memory, attention, problem-solving, and other cognitive skills.",
  },
  {
    icon: <HandMetal className="h-10 w-10 text-[#F53D99]" />,
    title: "Fine Motor Skills",
    description: "Enhance coordination, dexterity, and precision in hand movements.",
  },
  {
    icon: <Baby className="h-10 w-10 text-[#F53D99]" />,
    title: "Pediatric Therapy",
    description: "Support for children with developmental delays or sensory processing issues.",
  },
  {
    icon: <Accessibility className="h-10 w-10 text-[#F53D99]" />,
    title: "Adaptive Equipment",
    description: "Recommendations for tools and devices to increase independence.",
  },
  {
    icon: <Home className="h-10 w-10 text-[#F53D99]" />,
    title: "Home Modifications",
    description: "Assessment and recommendations for creating accessible living spaces.",
  },
  {
    icon: <Utensils className="h-10 w-10 text-[#F53D99]" />,
    title: "Daily Living Skills",
    description: "Training in self-care, cooking, cleaning, and other essential activities.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function Services() {
  return (
    <AnimatedSection id="services" className="py-16" style={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}>
      <div className="w-full px-5">
        <div className="text-center mb-12">
        <motion.h2
            className="text-3xl font-bold tracking-tight mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-[700px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive occupational therapy services tailored to your unique needs
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card key={index} className="border border-white shadow-rose-200 hover:border-[#F53D99] drop-shadow-md divide-rose-200 transition-colors">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

