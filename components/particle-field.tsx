"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
}

/**
 * Refined ambient node lattice. Lower density and opacity than a typical
 * "particle network" so it reads as a quiet technical backdrop rather than
 * a busy screensaver. Sits on a flat near-black backdrop with a hairline grid.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Sparser than before for a more premium, calmer feel.
      const count = Math.min(90, Math.floor((w * h) / 26000));
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1.4 + 0.4,
        baseAlpha: Math.random() * 0.4 + 0.15,
      }));
    };

    const maxDist = 150;

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = w;
        if (n.x > w) n.x = 0;
        if (n.y < 0) n.y = h;
        if (n.y > h) n.y = 0;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(205, 212, 226, ${n.baseAlpha})`;
        ctx.fill();
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const a = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 116, 165, ${a})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Cursor halo links
        const mdx = mouse.x - nodes[i].x;
        const mdy = mouse.y - nodes[i].y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 180) {
          const a = (1 - mdist / 180) * 0.22;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(120, 140, 210, ${a})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    init();
    if (prefersReduced) {
      render();
      cancelAnimationFrame(rafRef.current);
      // Draw a single static frame for reduced-motion users.
    } else {
      render();
    }

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Hairline blueprint grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Node lattice */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
