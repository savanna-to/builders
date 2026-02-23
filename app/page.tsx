import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
// import { PricingSection } from "@/components/pricing-section"
// import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <WhatsAppFloat />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      {/* <PricingSection /> */}
      {/* <CtaSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
