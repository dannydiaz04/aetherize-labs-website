import { ParticleField } from "@/components/particle-field";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { DivisionsSection } from "@/components/divisions-section";
import { MissionSection } from "@/components/mission-section";
import { TechnologySection } from "@/components/technology-section";
import { VideoShowcase } from "@/components/video-showcase";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated Particle Background */}
      <ParticleField />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Divisions Section */}
      <DivisionsSection />

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Mission Section */}
      <MissionSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
