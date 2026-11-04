"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";

export function DivisionsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="section-rule mb-16 h-px w-full" />

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-3xl">
            <span className="eyebrow text-primary">What we build</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Built for flight. Powered by intelligence.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              We are focused on reusable launch vehicles and rocket propulsion,
              supported by AI-enabled engineering and operations.
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-sm">
            <div className="inline-flex rounded-xl border border-border bg-secondary/40 p-3 text-primary">
              <Rocket className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <p className="eyebrow mt-6 text-primary/80">Primary program</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Launch Vehicles &amp; Rocket Propulsion
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              Reusable launch vehicles and high-thrust rocket engines engineered
              for rapid turnaround, high mass-fraction efficiency, and reliable
              access to space.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Reusable stage architecture", "High-thrust propulsion", "Rapid pad turnaround"].map((point) => (
                <li key={point} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
