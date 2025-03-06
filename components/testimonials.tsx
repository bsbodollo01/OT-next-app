import { Quote } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[hsl(var--background)] dark:bg-[hsl(var(--muted)_/_0.5)]"
>
      <div className="w-full max-h-screen px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Hear from individuals and families who have experienced positive outcomes through our therapy services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="italic mb-4">{testimonial.quote}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

