"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BrainCircuit,
  ScanEye,
  Hand,
  Boxes,
  Cpu,
  Radar,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

type Tech = {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
};

const technologies: Tech[] = [
  {
    icon: BrainCircuit,
    title: "Embodied foundation models",
    description:
      "Large models trained to map perception directly to action, giving robots general skills that transfer across tasks and hardware.",
  },
  {
    icon: ScanEye,
    title: "Perception & sensor fusion",
    description:
      "Real-time fusion of vision, depth, and proprioception into a coherent world model robust enough for the real world.",
  },
  {
    icon: Hand,
    title: "Manipulation & locomotion",
    description:
      "Dexterous control policies for grasping, assembly, and whole-body movement across uneven and dynamic terrain.",
  },
  {
    icon: Boxes,
    title: "Sim-to-real training",
    description:
      "Massively parallel simulation and domain randomization that lets policies learn safely before they ever touch a payload.",
  },
  {
    icon: Cpu,
    title: "On-robot edge compute",
    description:
      "Low-latency inference at the edge, engineered for power, thermal, and reliability budgets that survive the launch range.",
  },
  {
    icon: Radar,
    title: "Launch automation systems",
    description:
      "Autonomous ground handling, integration, and range coordination that take humans out of the most hazardous loops.",
  },
];

function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = tech.icon;

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 p-7 transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mb-5 inline-flex rounded-xl border border-border bg-secondary/40 p-2.5 text-primary transition-colors group-hover:text-accent">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {tech.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {tech.description}
      </p>
      <div className="pointer-events-none absolute -bottom-px left-7 right-7 h-px bg-primary/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

export function TechnologySection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="section-rule mb-16 h-px w-full" />

        <motion.div
          ref={headerRef}
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow text-primary">The stack</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Intelligence that acts.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Our core technologies turn models into motion — the connective
            tissue between an AI&apos;s decision and a robot&apos;s next move.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <TechCard key={tech.title} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
