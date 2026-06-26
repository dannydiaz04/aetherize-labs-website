"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "3", label: "Core programs" },
  { value: "Earth → Orbit", label: "Operating domain" },
  { value: "24/7", label: "Autonomous systems" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pb-20 pt-36 sm:pt-40">
      <div className="mx-auto w-full max-w-6xl">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3.5 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="eyebrow text-muted-foreground">
              Robotics · Embodied Intelligence · Aerospace
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
        >
          <span className="text-foreground">Embodied intelligence</span>
          <br />
          <span className="text-primary">for the physical world.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
        >
          Aetherize Labs builds robots, the embodied AI that gives them
          autonomy, and the robotic systems engineered to run tomorrow&apos;s
          aerospace launch operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease }}
        >
          <Button
            type="button"
            size="lg"
            className="group h-12 rounded-full bg-primary px-7 text-base text-primary-foreground hover:bg-primary/90"
            onClick={() => scrollToSection("capabilities")}
          >
            Explore our work
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-border bg-transparent px-7 text-base hover:bg-secondary/50"
            onClick={() => scrollToSection("mission")}
          >
            Our mission
          </Button>
        </motion.div>

        {/* Stat strip */}
        <motion.dl
          className="mt-20 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card/40 px-6 py-5 backdrop-blur-sm">
              <dt className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                {stat.value}
              </dt>
              <dd className="eyebrow mt-1.5 text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("capabilities")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to capabilities"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
