import type { Metadata } from "next";
import Link from "next/link";
import { Apple, BarChart3, Bot } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ParticleField } from "@/components/particle-field";

export const metadata: Metadata = {
  title: "Subsidiaries | Aetherize Labs",
  description: "Learn about Aetherize Labs subsidiaries that are not currently operating.",
};

const subsidiaries = [
  {
    name: "Autonomous Avionics & Pad Robotics",
    description: "Guidance, navigation, and control alongside robotic systems for launch vehicle and ground operations.",
    icon: Bot,
  },
  {
    name: "Ignition Analytics AI",
    description: "Telemetry analysis, anomaly detection, and predictive modeling for test and flight data.",
    icon: BarChart3,
  },
  {
    name: "Phone Eats First AI",
    description: "An AI-powered nutrition platform focused on calorie tracking and coaching.",
    icon: Apple,
  },
];

export default function SubsidiariesPage() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-background">
      <ParticleField />
      <div className="relative z-10">
        <Navigation />
        <section className="px-6 pb-28 pt-40 sm:pb-36 sm:pt-48">
          <div className="mx-auto max-w-6xl">
            <span className="eyebrow text-primary">Aetherize Labs</span>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Subsidiaries
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              These subsidiaries are not currently operating. Our primary focus
              is the development of launch vehicles and rocket propulsion.
            </p>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {subsidiaries.map(({ name, description, icon: Icon }) => (
                <article key={name} className="rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-sm">
                  <div className="inline-flex rounded-xl border border-border bg-secondary/40 p-3 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <p className="eyebrow mt-6 text-muted-foreground">Not currently operating</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{name}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
            <Link href="/#capabilities" className="mt-10 inline-block text-sm font-medium text-primary transition-colors hover:text-accent">
              &larr; Explore our launch program
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
