import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#362610] sm:text-4xl lg:text-5xl mb-4 text-balance">
              Get In Touch
            </h2>
            <p className="text-lg text-[#362610]/70 text-pretty">
              Have a project in mind? Send us an email and we'll get back to you within 24-48 hours
(we're based in Kenya 🇰🇪).
            </p>
          </div>

          {/* Email Display */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-[#A07533]/10">
            <div className="flex flex-col items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-[#EFB019]/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-[#EFB019]" />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-[#362610]/60 uppercase tracking-wide">Email Us</p>
                <a
                  href="mailto:info@savannabuilders.com"
                  className="text-2xl sm:text-3xl font-semibold text-[#362610] hover:text-[#EFB019] transition-colors duration-200"
                >
                  hi@savanna.builders
                </a>
              </div>

              <p className="text-sm text-[#362610]/60 max-w-md">
                We typically respond within 24-48 hours during business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
