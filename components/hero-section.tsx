import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from "next/link"

export function HeroSection() {
  const badgeOptions = ["Licensed & Insured Contractors", "15+ Years of Excellence", "Quality Craftsmanship Guaranteed"]

  // Change the index (0, 1, or 2) to switch between badge options
  const selectedBadge = badgeOptions[2]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#A07533] to-[#EFB019] py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white w-fit backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                {"Based in Kenya"}
              </div>
              {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#362610]/80 px-4 py-2 text-sm font-medium text-white w-fit backdrop-blur-sm">
                {"Your Trusted Building Partner"}
              </div> */}
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              {"Building Dreams with Expert Craftsmanship"}
            </h1>

            <p className="text-lg text-white/90 leading-relaxed text-pretty">
              {
                "Professional building services and handcrafted timber products for your home or business. Quality work you can trust."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services">
                <Button
                  size="lg"
                  className="bg-[#362610] hover:bg-[#2a1e0c] text-white font-semibold text-base group w-full sm:w-auto"
                >
                  {"Explore Services"}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#362610] text-[#362610] hover:bg-[#362610] hover:text-white font-semibold text-base group w-full sm:w-auto"
                >
                  {"View Products"}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a
                href="https://wa.me/254118591590?text=Hi%2C%20I'd%20like%20to%20inquire%20about%20your%20construction%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#362610] font-semibold text-base bg-transparent w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {"WhatsApp Us"}
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
              <div>
                <div className="font-heading text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white/80">{"Years Experience"}</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-white">25+</div>
                <div className="text-sm text-white/80">{"Projects Done"}</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">{"Satisfaction"}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 shadow-2xl backdrop-blur-sm">
              <img
                src="/savanna-builders-workers.jpg"
                alt="Savanna Builders craftsmen installing custom wooden door frame with decorative lattice work"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-[#362610]/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
