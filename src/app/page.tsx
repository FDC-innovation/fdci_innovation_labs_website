import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { GuaranteeBadges } from "@/components/sections/GuaranteeBadges";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { WhyChooseFDC } from "@/components/sections/WhyChooseFDC";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClientLogos />
      <ServicesPreview />
      <GuaranteeBadges />
      <WhyChooseFDC />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
