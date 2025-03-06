import { Brain, HandMetal, Baby, Accessibility, Home, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Cognitive Rehabilitation",
    description: "Improve memory, attention, problem-solving, and other cognitive skills.",
  },
  {
    icon: <HandMetal className="h-10 w-10 text-primary" />,
    title: "Fine Motor Skills",
    description: "Enhance coordination, dexterity, and precision in hand movements.",
  },
  {
    icon: <Baby className="h-10 w-10 text-primary" />,
    title: "Pediatric Therapy",
    description: "Support for children with developmental delays or sensory processing issues.",
  },
  {
    icon: <Accessibility className="h-10 w-10 text-primary" />,
    title: "Adaptive Equipment",
    description: "Recommendations for tools and devices to increase independence.",
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Home Modifications",
    description: "Assessment and recommendations for creating accessible living spaces.",
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "Daily Living Skills",
    description: "Training in self-care, cooking, cleaning, and other essential activities.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16" style={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}>
      <div className="w-full px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Our Services</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Comprehensive occupational therapy services tailored to your unique needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

