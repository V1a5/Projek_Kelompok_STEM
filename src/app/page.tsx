import HeroSection from "@/src/components/home/HeroSection";
import BenefitSection from "@/src/components/home/BenefitSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitSection />
    </div>
  );
}