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
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-background">
      <ParticleField />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <DivisionsSection />
        <VideoShowcase />
        <MissionSection />
        <TechnologySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
