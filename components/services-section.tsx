import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Masonry & Concrete Works",
    description: "Durable foundations, walls, and stonework.",
    image: "/images/services/masonry.jpg",
    features: [
      "Brick & Stone Walls",
      "Concrete Foundations",
      "Patios & Walkways",
      "Retaining Walls",
      "Exterior Painting",
    ],
  },
  {
    title: "Carpentry & Joinery",
    description: "Custom woodwork and timber installations.",
    image: "/images/services/carpentry.jpg",
    features: [
      "Doors & Windows",
      "Custom Cabinetry",
      "Lowered Ceilings",
      "Timber Roofing",
      "Interior Painting & Finishing",
    ],
    cta: { label: "See our timber products", href: "#products" },
  },
  {
    title: "Electrical Installations",
    description: "Safe and reliable power systems.",
    image: "/images/services/electrical.jpg",
    features: ["Wiring & Rewiring", "Solar Installations", "Lighting Systems", "Power Outlets & Switches"],
  },
  {
    title: "Plumbing & Drainage Works",
    description: "Complete water and drainage solutions.",
    image: "/images/services/plumbing.jpg",
    features: ["Pipe Installation", "Drainage Systems", "Rain Water Harvesting", "Water Supply Systems"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#A07533] mb-3">
            {"What we do"}
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#362610] sm:text-4xl lg:text-5xl mb-4 text-balance">
            {"Our Expert Services"}
          </h2>
          <p className="text-lg text-[#6b5d52] leading-relaxed">
            {"Quality construction services for your home or business."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-white border border-[#362610]/10 hover:border-[#A07533]/40 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#362610]/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-[#362610] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6b5d52] leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-[#362610]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EFB019] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {"cta" in service && service.cta && (
                  <a
                    href={service.cta.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#A07533] hover:text-[#EFB019] transition-colors"
                  >
                    {service.cta.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
