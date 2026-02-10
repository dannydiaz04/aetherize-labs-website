"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  Cpu,
  Globe,
  Layers,
  Infinity,
} from "lucide-react";

const technologies = [
  // {
  //   icon: Zap,
  //   title: "Quantum Propulsion",
  //   description:
  //     "Next-generation propulsion systems harnessing quantum mechanical principles for unprecedented efficiency.",
  // },
  // {
  //   icon: Shield,
  //   title: "Adaptive Shielding",
  //   description:
  //     "Self-healing materials and electromagnetic barriers protecting spacecraft from cosmic radiation.",
  // },
  {
    icon: Cpu,
    title: "Neural Networks",
    description:
      "Custom AI architectures designed for space-grade computing and real-time decision making.",
  },
  // {
  //   icon: Globe,
  //   title: "Orbital Mechanics",
  //   description:
  //     "Precision trajectory calculations enabling efficient single-stage orbital insertion.",
  // },
  {
    icon: Layers,
    title: "Material Science",
    description:
      "Advanced composites and metamaterials engineered for extreme temperature differentials.",
  },
  // {
  //   icon: Infinity,
  //   title: "Sustainable Systems",
  //   description:
  //     "Closed-loop life support and energy systems for long-duration space operations.",
  // },
];

function TechCard({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-secondary/50">
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <tech.icon className="w-6 h-6" />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {tech.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {tech.description}
        </p>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function TechnologySection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="relative py-32 px-6 bg-secondary/20">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 180, 220, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 180, 220, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">
            Core Technologies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Engineering the Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our proprietary technologies push the boundaries of what&apos;s
            possible, creating solutions that enable our ambitious missions.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={tech.title} tech={tech} index={index} />
          ))}
        </div>
        {/* Bottom CTA */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            Interested in our research?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View Publications & Papers
            <span aria-hidden="true">→</span>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
