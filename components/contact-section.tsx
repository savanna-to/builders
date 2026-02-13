import { Mail, MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/254118591590?text=Hi%2C%20I'd%20like%20to%20inquire%20about%20your%20construction%20services"

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
              {"Have a project in mind? Reach out on WhatsApp for the fastest response, or send us an email (we're based in Kenya)."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            {/* WhatsApp - Primary */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#25D366]/30 hover:border-[#25D366] transition-colors duration-200 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="h-8 w-8 text-[#25D366]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#25D366] uppercase tracking-wide">{"Preferred"}</p>
                  <p className="text-lg font-semibold text-[#362610] group-hover:text-[#25D366] transition-colors">
                    {"WhatsApp Us"}
                  </p>
                </div>
                <p className="text-sm text-[#362610]/60">{"Tap to start a conversation"}</p>
              </div>
            </a>

            {/* Email - Secondary */}
            <a
              href="mailto:hi@savanna.builders"
              className="bg-white rounded-2xl shadow-lg p-8 border border-[#A07533]/10 hover:border-[#EFB019]/40 transition-colors duration-200 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-[#EFB019]/10 flex items-center justify-center group-hover:bg-[#EFB019]/20 transition-colors">
                  <Mail className="h-8 w-8 text-[#EFB019]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#362610]/40 uppercase tracking-wide">{"Email"}</p>
                  <p className="text-lg font-semibold text-[#362610] group-hover:text-[#EFB019] transition-colors">
                    {"hi@savanna.builders"}
                  </p>
                </div>
                <p className="text-sm text-[#362610]/60">{"We reply within 24-48 hours"}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
