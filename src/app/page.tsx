import { HeroSection } from "@/components/posts/HeroSection";
import { FeaturesSection } from "@/components/posts/FeaturesSection";
import { HowItWorksSection } from "@/components/posts/HowItWorksSection";
import { ServiceVideoSection } from "@/components/posts/ServiceVideoSection";
import { TestimonialsSection } from "@/components/posts/TestimonialsSection";
import { PricingSection } from "@/components/posts/PricingSection";
import { ContactSection } from "@/components/posts/ContactSection";
import { FAQSection } from "@/components/posts/FAQSection";
import { LuminousOrbBackground } from "@/components/common/LuminousOrbBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Luminous Orb Background - Fixed */}
      <LuminousOrbBackground />

      {/* Main Content */}
      <div className="relative">
        {/* Hero + Demo Video */}
        <HeroSection />

        {/* Core Features */}
        <FeaturesSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Service Video */}
        <ServiceVideoSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Pricing */}
        <PricingSection />

        {/* Contact / Email CTA */}
        <ContactSection />

        {/* FAQ */}
        <FAQSection />
      </div>
    </div>
  );
}
