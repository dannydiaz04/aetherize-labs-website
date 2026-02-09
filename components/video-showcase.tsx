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
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={containerRef} className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">
            Witness Innovation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Beyond the Horizon
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Video Element - Using a space/tech stock video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%230a0a12' width='1920' height='1080'/%3E%3Ccircle cx='960' cy='540' r='200' fill='%231a1a2e' opacity='0.5'/%3E%3C/svg%3E"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-planet-earth-view-from-space-9082/1080p.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30 pointer-events-none" />

          {/* Video Controls */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </motion.button>
              <motion.button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </motion.button>
            </div>

            <div className="text-sm font-mono text-foreground/70">
              AETHERIZE LABS — Energizing the Cosmos
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50 opacity-0" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 opacity-0" />
        </motion.div>

        {/* Caption */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our vision extends beyond Earth — to the stars and back, advancing human knowledge with every mission.
        </motion.p>
      </div>
    </section>
  );
}
