import { LuminousOrbBackground } from './components/LuminousOrbBackground';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ServiceVideoSection } from './components/ServiceVideoSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Luminous Orb Background - Fixed */}
      <LuminousOrbBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}