import Image from "next/image"
import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Custom Timber Windows",
    description:
      "Made-to-measure timber windows in any style -- arched, half-circle, casement, or sash. Clear or frosted glass options.",
    image: "/images/products/timber-windows.jpg",
    startingPrice: "KSh 49,000",
    features: ["Any shape or size", "Hardwood frames", "Clear or tinted glass"],
  },
  {
    name: "Custom Timber Doors",
    description:
      "Solid timber doors handcrafted with arched panels, clean joinery, and quality hardware. Interior and exterior options.",
    image: "/images/products/timber-doors.jpg",
    startingPrice: "KSh 19,000",
    features: ["Solid cypress or mahogany build", "Custom panel designs", "Hardware available"],
  },
  {
    name: "Sliding Doors",
    description:
      "Timber-framed sliding doors with glass panels and decorative lattice headers. Perfect for patios and balconies.",
    image: "/images/products/sliding-doors.jpg",
    startingPrice: "KSh 69,000",
    features: ["Smooth track system", "Glass panel options", "Interior & exterior"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-[#362610]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#EFB019] mb-3">
            {"From our workshop"}
          </p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4 text-balance">
            {"Handcrafted Products"}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            {
              "Quality timber products built in our local workshop. Each piece is made to order -- choose from our range or bring us your custom design."
            }
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-[#2a1e0c] border border-white/10 hover:border-[#EFB019]/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1e0c]/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-[#EFB019] px-3 py-1 text-xs font-semibold text-[#362610]">
                  {"From "}{product.startingPrice}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EFB019] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/254118591590?text=Hi%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(product.name)}%20products`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="w-full bg-[#EFB019] hover:bg-[#d99a15] text-[#362610] font-semibold"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {"Inquire on WhatsApp"}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-sell to services */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-3">
            {"Need installation or custom sizing? Our builders can help."}
          </p>
          <a href="#services" className="inline-flex items-center gap-2 text-[#EFB019] text-sm font-medium hover:underline">
            {"View our building services"}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
