"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254118591590?text=Hi%2C%20I'd%20like%20to%20inquire%20about%20your%20construction%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white font-semibold shadow-lg transition-all hover:bg-[#1ebe57] hover:shadow-xl hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm">{"WhatsApp Us"}</span>
    </a>
  )
}
