"use client";

import { motion } from "framer-motion";

export function AetherizeLogo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        className="text-primary"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
        {/* Middle ring with glow */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
          strokeDasharray="10 5"
        />
        {/* Inner energy core */}
        <circle cx="50" cy="50" r="20" fill="url(#coreGradient)" opacity="0.8" />
        {/* Center point */}
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        {/* Orbital paths */}
        <ellipse
          cx="50"
          cy="50"
          rx="40"
          ry="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          transform="rotate(30 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="40"
          ry="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          transform="rotate(-30 50 50)"
        />
        <defs>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </motion.svg>
      <span className="text-xl font-mono font-bold tracking-wider text-foreground">
        AETHERIZE
      </span>
    </motion.div>
  );
}
