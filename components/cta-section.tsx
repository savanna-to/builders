import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#362610] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 text-balance">
            {"Ready to Start Your Project?"}
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            {
              "Get a free, no-obligation quote today. Our team is ready to discuss your vision and provide expert guidance for your next construction project."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#EFB019] text-[#362610] hover:bg-[#d99a15] font-semibold text-base group min-w-[200px]"
            >
              {"Request Free Quote"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#362610] font-semibold text-base min-w-[200px] bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              {"(555) 123-4567"}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="font-heading text-3xl font-bold mb-1 text-[#EFB019]">{"25+"}</div>
                <div className="text-sm text-white/80">{"Years in Business"}</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold mb-1 text-[#EFB019]">{"500+"}</div>
                <div className="text-sm text-white/80">{"Happy Clients"}</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold mb-1 text-[#EFB019]">{"100%"}</div>
                <div className="text-sm text-white/80">{"Licensed & Insured"}</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold mb-1 text-[#EFB019]">{"A+"}</div>
                <div className="text-sm text-white/80">{"BBB Rating"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
