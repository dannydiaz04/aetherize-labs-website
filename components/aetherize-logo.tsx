"use client";

import { motion } from "framer-motion";

export function AetherizeLogo({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href="#top"
      className={`group flex items-center gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className="relative flex h-9 w-9 items-center justify-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 100 100"
          className="relative text-primary"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.25"
          />
          <motion.g
            style={{ transformOrigin: "50px 50px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            <ellipse
              cx="50"
              cy="50"
              rx="44"
              ry="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.45"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="44"
              ry="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.45"
              transform="rotate(60 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="44"
              ry="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.45"
              transform="rotate(120 50 50)"
            />
          </motion.g>
          <circle cx="50" cy="50" r="9" fill="currentColor" opacity="0.85" />
          <circle cx="50" cy="50" r="3.5" fill="currentColor" />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Aetherize
        <span className="text-muted-foreground/60"> Labs</span>
      </span>
    </motion.a>
  );
}
