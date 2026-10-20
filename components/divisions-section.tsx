"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ComponentType } from "react";
import {
  Bot,
  Rocket,
  Apple,
  BarChart3,
  ArrowUpRight,
  type LucideProps,
} from "lucide-react";

type Program = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ComponentType<LucideProps>;
  points: string[];
  href?: string;
  cta?: string;
  status?: "live" | "soon";
  featured?: boolean;
};

const programs: Program[] = [
  {
    index: "01",
    title: "Launch Vehicles & Rocket Propulsion",
    subtitle: "Primary program",
    description:
      "Reusable orbital launch vehicles and high-thrust rocket engines engineered for rapid turnaround, high mass-fraction efficiency, and reliable access to space.",
    icon: Rocket,
    points: ["Reusable stage architecture", "High-thrust propulsion", "Rapid pad turnaround"],
    featured: true,
  },
  {
    index: "02",
    title: "Autonomous Avionics & Pad Robotics",
    subtitle: "Supporting program",
    description:
      "Flight-critical guidance, navigation, and control paired with robotic ground systems that automate vehicle integration, propellant servicing, and launch operations.",
    icon: Bot,
    points: ["Guidance, navigation & control", "Robotic pad & stage handling", "Autonomous range checkout"],
    featured: true,
  },
  {
    index: "03",
    title: "Ignition Analytics AI",
    subtitle: "Applied AI · In development",
    description:
      "High-frequency telemetry analysis, anomaly detection, and predictive modeling — born from rocket test stands and flight data to turn raw sensor streams into real-time decisions.",
    icon: BarChart3,
    points: ["Test-stand & flight telemetry", "Anomaly detection", "Real-time predictive modeling"],
    status: "soon",
    cta: "Coming soon",
  },
  {
    index: "04",
    title: "Phone Eats First AI",
    subtitle: "Applied AI · Live",
    description:
      "An AI-powered nutrition platform that makes calorie tracking effortless, applying our perception and agentic intelligence stack to everyday human performance.",
    icon: Apple,
    points: ["Effortless calorie tracking", "Agentic coaching", "Intuitive analytics"],
    href: "https://phoneeatsfirst.ai",
    cta: "Visit product",
    status: "live",
  },
];

function StatusBadge({ status }: { status: "live" | "soon" }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-highlight/30 bg-highlight/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-highlight">
      In dev
    </span>
  );
}

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = program.icon;

  const inner = (
    <>
      <div className="relative flex h-full flex-col p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-center rounded-xl border border-border bg-secondary/40 p-3 text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:text-accent">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <span className="font-mono text-xs text-muted-foreground/50">
            {program.index}
          </span>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="eyebrow text-primary/80">{program.subtitle}</span>
          {program.status && <StatusBadge status={program.status} />}
        </div>

        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          {program.title}
        </h3>

        <p className="mt-3 leading-relaxed text-muted-foreground">
          {program.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {program.points.map((point) => (
            <li
              key={point}
              className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
            >
              {point}
            </li>
          ))}
        </ul>

        {program.cta && (
          <div className="mt-auto pt-7">
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                program.href
                  ? "text-accent group-hover:text-primary"
                  : "text-muted-foreground"
              } transition-colors`}
            >
              {program.cta}
              {program.href && (
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </span>
          </div>
        )}
      </div>
    </>
  );

  const baseClass = `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-card/70 ${
    program.featured ? "lg:col-span-3" : "lg:col-span-3"
  }`;

  return (
    <motion.div
      ref={ref}
      className={program.featured ? "lg:col-span-3" : "lg:col-span-3"}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {program.href ? (
        <a
          href={program.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {inner}
        </a>
      ) : (
        <div className={baseClass}>{inner}</div>
      )}
    </motion.div>
  );
}

export function DivisionsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="section-rule mb-16 h-px w-full" />

        <motion.div
          ref={headerRef}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow text-primary">What we build</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Built for flight. Powered by intelligence.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            From high-thrust rocket engines and reusable stages to the
            autonomous avionics, pad robotics, and AI software that run every
            mission — our programs are built on a unified engineering stack.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
