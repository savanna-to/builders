import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Ruler, Hammer, Zap, Droplet } from "lucide-react"

const services = [
  {
    icon: Ruler,
    title: "Masonry & Concrete Works",
    description: "Durable foundations, walls, and stonework.",
    features: [
      "Brick & Stone Walls",
      "Concrete Foundations",
      "Patios & Walkways",
      "Retaining Walls",
      "Exterior Painting",
    ],
  },
  {
    icon: Hammer,
    title: "Carpentry & Joinery",
    description: "Custom woodwork and timber installations.",
    features: [
      "Doors & Windows",
      "Custom Cabinetry",
      "Lowered Ceilings",
      "Timber Roofing",
      "Interior Painting & Finishing",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Installations",
    description: "Safe and reliable power systems.",
    features: ["Wiring & Rewiring", "Solar Installations", "Lighting Systems", "Power Outlets & Switches"],
  },
  {
    icon: Droplet,
    title: "Plumbing & Drainage Works",
    description: "Complete water and drainage solutions.",
    features: ["Pipe Installation", "Drainage Systems", "Rain Water Harvesting", "Water Supply Systems"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-[#362610] sm:text-4xl lg:text-5xl mb-4 text-balance">
            {"Our Expert Services"}
          </h2>
          <p className="text-lg text-[#6b5d52] leading-relaxed">
            {"Quality construction services for your home or business."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon as React.ComponentType<{ className?: string }>
            return (
              <Card
                key={index}
                className="border-2 hover:border-[#A07533] transition-all duration-300 hover:shadow-lg group bg-white"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#EFB019]/10 text-[#A07533] group-hover:bg-[#EFB019] group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#362610] mb-3">{service.title}</h3>
                  <p className="text-[#6b5d52] mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#362610]">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#EFB019] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
