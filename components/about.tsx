import Image from "next/image"
import { HeartHandshake } from "lucide-react"
import therapists from "@/components/images/therapist.jpeg"

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="w-full px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={therapists}
              alt="Occupational Therapist"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Dr. Ericka Eulogio</h2>
            <p className="text-muted-foreground mb-6">
              With over 15 years of experience, Dr. Eulogio is a certified occupational therapist specializing in
              helping individuals of all ages overcome physical, cognitive, and developmental challenges.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <HeartHandshake className="h-5 w-5 text-[#F53D99] mt-0.5" />
                <p>Master&#39;s in Occupational Therapy from Stanford University</p>
              </div>
              <div className="flex items-start gap-2">
                <HeartHandshake className="h-5 w-5 text-[#F53D99] mt-0.5" />
                <p>Board Certified in Pediatric Occupational Therapy</p>
              </div>
              <div className="flex items-start gap-2">
                <HeartHandshake className="h-5 w-5 text-[#F53D99] mt-0.5" />
                <p>Specialized training in sensory integration therapy</p>
              </div>
              <div className="flex items-start gap-2">
                <HeartHandshake className="h-5 w-5 text-[#F53D99] mt-0.5" />
                <p>Member of the American Occupational Therapy Association</p>
              </div>
              <div className="flex items-start gap-2">
                <HeartHandshake className="h-5 w-5 text-[#F53D99] mt-0.5" />
                <p>Published researcher in occupational therapy interventions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

