"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3", label: "Core programs" },
  { value: "∞", label: "Possibilities" },
  { value: "1", label: "Shared mission" },
  { value: "0", label: "Limits" },
];

export function MissionSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="mission"
      ref={containerRef}
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      {/* faint crosshair lines */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-0 top-1/2 h-px w-full bg-primary/20" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow text-primary">Our mantra</span>

          <blockquote className="mt-8 text-balance font-display text-2xl font-light leading-snug text-foreground sm:text-3xl lg:text-4xl">
            We solve the most challenging and complex problems by harnessing the
            symmetry between{" "}
            <span className="text-primary font-normal">information</span>{" "}
            <span className="font-mono text-primary/70">⇄</span>{" "}
            <span className="text-primary font-normal">energy</span>.
          </blockquote>

          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Intelligence is information given direction; motion is energy given
            purpose. Aetherize Labs lives at the boundary where the two meet —
            turning models into machines, and machines into work, from the
            factory floor to the launch pad.
          </p>

          <div className="mt-8">
            <span className="font-mono text-sm tracking-wider text-muted-foreground">
              — Aetherize Labs LLC
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/40 px-6 py-8 text-center backdrop-blur-sm"
            >
              <div className="font-display text-4xl font-semibold text-primary">
                {stat.value}
              </div>
              <div className="eyebrow mt-2 text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
