"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function VideoShowcase() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section ref={containerRef} className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="section-rule mb-16 h-px w-full" />

        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow text-primary">In motion</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Beyond the horizon.
          </h2>
        </motion.div>

        <motion.div
          className="group relative aspect-video overflow-hidden rounded-3xl border border-border bg-card"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23080a0e' width='1920' height='1080'/%3E%3Ccircle cx='960' cy='540' r='200' fill='%23161620' opacity='0.5'/%3E%3C/svg%3E"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-planet-earth-view-from-space-9082/1080p.mp4"
              type="video/mp4"
            />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-background/25" />

          {/* corner ticks */}
          <div className="pointer-events-none absolute left-5 top-5 h-7 w-7 border-l border-t border-primary/40" />
          <div className="pointer-events-none absolute right-5 top-5 h-7 w-7 border-r border-t border-primary/40" />
          <div className="pointer-events-none absolute bottom-5 left-5 h-7 w-7 border-b border-l border-primary/40" />
          <div className="pointer-events-none absolute bottom-5 right-5 h-7 w-7 border-b border-r border-primary/40" />

          <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-foreground/10 text-foreground backdrop-blur-md transition-colors hover:bg-foreground/20"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="ml-0.5 h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-foreground/10 text-foreground backdrop-blur-md transition-colors hover:bg-foreground/20"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
            </div>
            <div className="eyebrow text-foreground/70">
              Aetherize Labs — Earth to orbit
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Our vision spans the full operating domain — from robots working on the
          ground to the autonomous systems that will help carry hardware to
          orbit.
        </motion.p>
      </div>
    </section>
  );
}
