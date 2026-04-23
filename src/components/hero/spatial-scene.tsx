"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { HeroLayer } from "@/content/home-hero";
import { SpatialCard } from "./spatial-card";

type SpatialSceneProps = {
  layers: HeroLayer[];
  activeLayerId: string;
  onLayerChange: (id: string) => void;
};

export function SpatialScene({ layers, activeLayerId, onLayerChange }: SpatialSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleMouseMove = (event: MouseEvent) => {
      const bounds = node.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      setPointer({ x: Math.max(-0.5, Math.min(0.5, x)), y: Math.max(-0.5, Math.min(0.5, y)) });
    };

    const handleMouseLeave = () => setPointer({ x: 0, y: 0 });

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const raw = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollProgress(clamped - 0.5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const orderedLayers = useMemo(() => [...layers].sort((a, b) => a.z - b.z), [layers]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[72vh] w-full overflow-hidden rounded-3xl border border-line bg-[#0a0a0b]"
      style={{ perspective: "1500px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${pointer.y * -4}deg) rotateY(${pointer.x * 7}deg)`,
          transition: "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {orderedLayers.map((layer) => (
          <SpatialCard
            key={layer.id}
            layer={layer}
            isActive={activeLayerId === layer.id}
            pointerX={pointer.x}
            pointerY={pointer.y}
            scrollProgress={scrollProgress}
            onFocus={onLayerChange}
          />
        ))}
      </div>
    </div>
  );
}
