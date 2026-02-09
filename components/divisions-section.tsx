"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket,
  Gem,
  BarChart3,
  Apple,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const divisions = [
  {
    title: "Aerospace SSTO",
    subtitle: "Single Stage to Orbit",
    description:
      "Revolutionary aircraft and jet propulsion systems designed for single-stage takeoff to orbit. Breaking the barriers of traditional multi-stage rockets.",
    icon: Rocket,
    features: [
      "Reusable Launch Systems",
      "Advanced Propulsion",
      "Atmospheric Re-entry",
    ],
    gradient: "from-primary/20 to-primary/5",
    accentColor: "text-primary",
    borderColor: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Space Mining",
    subtitle: "Extraterrestrial Resources",
    description:
      "Pioneering the extraction and utilization of resources from asteroids and celestial bodies. The next frontier of sustainable resource acquisition.",
    icon: Gem,
    features: ["Asteroid Prospecting", "Zero-G Extraction", "Resource Processing"],
    gradient: "from-accent/20 to-accent/5",
    accentColor: "text-accent",
    borderColor: "border-accent/20 hover:border-accent/40",
  },
  {
    title: "Analytics AI",
    subtitle: "Intelligent Insights",
    description:
      "Advanced artificial intelligence systems for data analysis, pattern recognition, and predictive modeling across industries.",
    icon: BarChart3,
    features: ["Predictive Analytics", "Deep Learning", "Real-time Processing"],
    gradient: "from-primary/20 to-accent/5",
    accentColor: "text-primary",
    borderColor: "border-primary/20 hover:border-primary/40",
  },
  {
    title: "Nutrition AI",
    subtitle: "Personalized Health",
    description:
      "AI-powered nutrition optimization platforms that analyze individual biomarkers and genetic data for personalized dietary recommendations.",
    icon: Apple,
    features: [
      "Biomarker Analysis",
      "Genetic Integration",
      "Adaptive Recommendations",
    ],
    gradient: "from-accent/20 to-primary/5",
    accentColor: "text-accent",
    borderColor: "border-accent/20 hover:border-accent/40",
  },
];

function DivisionCard({
  division,
  index,
}: {
  division: (typeof divisions)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card
        className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border ${division.borderColor} transition-all duration-500 hover:bg-card/80`}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <CardContent className="relative p-8">
          {/* Icon */}
          <motion.div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/50 ${division.accentColor} mb-6`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <division.icon className="w-7 h-7" />
          </motion.div>

          {/* Subtitle */}
          <span
            className={`text-xs font-mono uppercase tracking-widest ${division.accentColor} opacity-80`}
          >
            {division.subtitle}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-bold mt-2 mb-4 text-foreground">
            {division.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {division.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {division.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Sparkles className={`w-3 h-3 ${division.accentColor}`} />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#"
            className={`inline-flex items-center gap-2 text-sm font-medium ${division.accentColor} group/link`}
            whileHover={{ x: 5 }}
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function DivisionsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="divisions" className="relative py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">
            Our Divisions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Solving the Impossible
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Four pillars of innovation driving humanity forward. Each division
            tackles challenges once thought insurmountable.
          </p>
        </motion.div>

        {/* Division Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {divisions.map((division, index) => (
            <DivisionCard key={division.title} division={division} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
