import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$2,500",
    description: "Perfect for small projects and repairs",
    features: [
      "Up to 100 sq ft coverage",
      "Basic materials included",
      "Standard timeline",
      "30-day warranty",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,000",
    description: "Ideal for medium-sized renovations",
    features: [
      "Up to 300 sq ft coverage",
      "Premium materials included",
      "Priority scheduling",
      "1-year warranty",
      "Phone & email support",
      "Free consultation",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "For large-scale projects and commercial work",
    features: [
      "Unlimited coverage",
      "Luxury materials included",
      "Expedited timeline",
      "5-year warranty",
      "24/7 dedicated support",
      "Project management",
      "Design consultation",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-[#362610] sm:text-4xl lg:text-5xl mb-4 text-balance">
            {"Transparent Pricing"}
          </h2>
          <p className="text-lg text-[#6b5d52] leading-relaxed">
            {
              "Choose the plan that fits your project. All plans include our quality guarantee and expert craftsmanship."
            }
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 bg-white ${
                plan.popular ? "border-[#A07533] shadow-xl scale-105" : "border-gray-200 hover:border-[#A07533]/50"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#A07533] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {"Most Popular"}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="font-heading text-2xl font-bold text-[#362610] mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="font-heading text-4xl font-bold text-[#A07533]">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-[#6b5d52] ml-2">{"starting"}</span>}
                </div>
                <p className="text-sm text-[#6b5d52]">{plan.description}</p>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#A07533] flex-shrink-0 mt-0.5" />
                      <span className="text-[#362610]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full font-semibold ${
                    plan.popular
                      ? "bg-[#EFB019] hover:bg-[#d99a15] text-[#362610]"
                      : "bg-[#f5f1eb] hover:bg-[#A07533] hover:text-white text-[#362610]"
                  }`}
                  size="lg"
                >
                  {"Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-[#6b5d52] mt-12">
          {"All prices are estimates. Final costs depend on project scope, materials, and timeline. "}
          <a href="#contact" className="text-[#A07533] hover:underline font-medium">
            {"Contact us for a detailed quote."}
          </a>
        </p>
      </div>
    </section>
  )
}
