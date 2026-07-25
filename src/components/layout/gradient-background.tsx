"use client";

import { useEffect, useRef } from "react";

const SVG_NOISE = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.305'/></svg>")`;

const blobs = [
  {
    id: "apricot",
    color: "rgba(230, 176, 147, 1)",
    stop1: "rgba(230, 176, 147, 0.844)",
    stop2: "rgba(230, 176, 147, 0.5)",
    stop3: "rgba(230, 176, 147, 0.156)",
    baseX: 68.1,
    baseY: 46.03,
  },
  {
    id: "skyblue",
    color: "rgba(163, 206, 255, 1)",
    stop1: "rgba(163, 206, 255, 0.844)",
    stop2: "rgba(163, 206, 255, 0.5)",
    stop3: "rgba(163, 206, 255, 0.156)",
    baseX: 25.17,
    baseY: 75.99,
  },
  {
    id: "paper",
    color: "rgba(250, 249, 239, 1)",
    stop1: "rgba(250, 249, 239, 0.844)",
    stop2: "rgba(250, 249, 239, 0.5)",
    stop3: "rgba(250, 249, 239, 0.156)",
    baseX: 53.11,
    baseY: 12.71,
  },
];

function hashPhase(input: string) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) / 4294967295) * Math.PI * 2;
}

export function GradientBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const seed = "pipo-gradient";
    const phases = blobs.map((blob) => ({
      p: hashPhase(`${seed}:${blob.id}:x`),
      p2: hashPhase(`${seed}:${blob.id}:y`),
    }));

    const amt = 0.72;
    const dir = 1;
    const start = performance.now();
    let frameId: number;

    const render = (time: number) => {
      const t = (time - start) / 1000;
      const ph = t * 0.86;
      const spin = ph * dir;
      void spin;

      const gradients = blobs.map((blob, index) => {
        const { p, p2 } = phases[index];
        const dx = (Math.sin(ph * 0.55 + p) - Math.sin(p)) * 14 * amt;
        const dy = (Math.sin(ph * 0.43 + p2) - Math.sin(p2)) * 14 * amt;
        const x = blob.baseX + dx;
        const y = blob.baseY + dy;
        const stopDef = blob.id === "paper"
          ? `${blob.stop1} 16.66%, ${blob.stop2} 33.33%, ${blob.stop3} 49.99%, rgba(255,255,255,0) 66.65%`
          : `${blob.stop1} 10.28%, ${blob.stop2} 20.55%, ${blob.stop3} 30.83%, rgba(255,255,255,0) 41.1%`;

        return `radial-gradient(circle at ${x}% ${y}%, ${blob.color} 0%, ${stopDef})`;
      });

      element.style.backgroundImage = `${SVG_NOISE}, ${gradients.join(", ")}`;
      element.style.backgroundSize = "120px 120px, auto, auto, auto";
      element.style.backgroundBlendMode = "overlay, normal, normal, normal";
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return <div ref={ref} className="app-bg" aria-hidden="true" />;
}
