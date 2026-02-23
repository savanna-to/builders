"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Testimonials", href: "#testimonials" },
    // { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#362610] backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative logo-nod">
              <Image
                src="/images/savannabuilders-logo.png"
                alt="Savannah Builders Logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain transition-all group-hover:scale-110"
              />
            </div>
            <span className="font-heading text-xl font-bold text-[#EFB019] sm:text-2xl drop-shadow-md">
              savanna builders
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white hover:text-[#EFB019] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#services">
              <Button size="lg" className="bg-[#EFB019] hover:bg-[#d99a15] text-[#362610] font-semibold">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-[#EFB019]" /> : <Menu className="h-6 w-6 text-[#EFB019]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#A07533]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-[#EFB019] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="#services" onClick={() => setIsMenuOpen(false)}>
                <Button size="lg" className="bg-[#EFB019] hover:bg-[#d99a15] text-[#362610] font-semibold w-full">
                  Learn More
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
