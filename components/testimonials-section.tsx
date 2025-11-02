import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Lancelot",
    role: "Apartment Owner",
    content:
      "Recently had my apartment door replaced with a stunning custom-made Swahili wooden door. Savanna Builders demonstrated incredible skill and attention to detail. Could not be happier with the result!",
    rating: 5,
  },
  {
    name: "Peter",
    role: "Home Owner",
    content:
      "Savanna Builders had my custom home built from a to z with incredible skill, creativity, professionalism, and with a friendly spirit. Can wholehartedly reccomend them.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#A07533] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,176,25,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(160,117,51,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4 text-balance">
            {"What Our Clients Say"}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {"Don't just take our word for it. Here's what our customers have to say about working with us."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-white/10 hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#EFB019] text-[#EFB019]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#362610] leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div>
                  <div className="font-semibold text-[#362610]">{testimonial.name}</div>
                  <div className="text-sm text-[#6b5d52]">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
