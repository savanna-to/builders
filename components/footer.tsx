import Image from "next/image"
import { Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#362610] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/savannabuilders-logo.png"
                alt="Savannah Builders Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-heading text-xl font-bold text-[#EFB019]">savanna builders</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              {"Quality construction services for your home or business."}
            </p>
          </div>

          {/* Contact Info - Email Only */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">{"Contact Us"}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/254118591590?text=Hi%2C%20I'd%20like%20to%20inquire%20about%20your%20construction%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#25D366] transition-colors text-sm"
                >
                  {"WhatsApp Us"}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#EFB019] flex-shrink-0" />
                <a
                  href="mailto:hi@savanna.builders"
                  className="text-white/80 hover:text-[#EFB019] transition-colors text-sm"
                >
                  {"hi@savanna.builders"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-white/60 text-sm">
              {"© 2025 Savanna Builders. All rights reserved."}
            </p>
            <span className="hidden md:inline text-white/30">{"/"}</span>
            <p className="text-white/40 text-sm">
              {"A Savanna Group company"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
