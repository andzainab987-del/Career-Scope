import { HeroSection } from "@/components/ui/hero-futuristic";
import { OrbitalFieldShowcase } from "@/components/home/orbital-field-showcase";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturedFields } from "@/components/home/featured-fields";
import { QuizTeaser } from "@/components/home/quiz-teaser";
import { Testimonials } from "@/components/home/testimonials";

export const metadata = {
  title: "CareerScope AI",
  description: "AI-powered career intelligence for Tech, Engineering & Aviation.",
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturedFields />
      <OrbitalFieldShowcase />
      <QuizTeaser />
      <Testimonials />
    </div>
  );
}
