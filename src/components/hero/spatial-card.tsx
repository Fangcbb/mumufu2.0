"use client";

import Image from "next/image";
import type { HeroLayer } from "@/content/home-hero";

type SpatialCardProps = {
  layer: HeroLayer;
  isActive: boolean;
  pointerX: number;
  pointerY: number;
  scrollProgress: number;
  onFocus: (id: string) => void;
};

export function SpatialCard({
  layer,
  isActive,
  pointerX,
  pointerY,
  scrollProgress,
  onFocus,
}: SpatialCardProps) {
  const xOffset = (pointerX * 28 + scrollProgress * 18) * ((layer.z + 40) / 190);
  const yOffset = (pointerY * 20 - scrollProgress * 22) * ((layer.z + 20) / 200);
  const activeZBoost = isActive ? 42 : 0;

  return (
    <button
      type="button"
      aria-label={`${layer.title} — ${layer.category}`}
      onMouseEnter={() => onFocus(layer.id)}
      onFocus={() => onFocus(layer.id)}
      className="group absolute relative overflow-hidden rounded-2xl border border-white/20 bg-black/20 text-left shadow-2xl outline-none transition-all duration-400 focus-visible:border-sand focus-visible:ring-2 focus-visible:ring-sand/60"
      style={{
        width: `${layer.width}px`,
        height: `${layer.height}px`,
        left: `${layer.x}%`,
        top: `${layer.y}%`,
        opacity: isActive ? 1 : layer.opacity,
        transform: `translate3d(${xOffset}px, ${yOffset}px, ${layer.z + activeZBoost}px) rotateX(${layer.rotateX + pointerY * -4}deg) rotateY(${layer.rotateY + pointerX * 6}deg) rotateZ(${layer.rotateZ}deg) scale(${isActive ? layer.scale + 0.07 : layer.scale})`,
        transformStyle: "preserve-3d",
        zIndex: Math.round(layer.z + activeZBoost),
      }}
    >
      <Image
        src={layer.image}
        alt={layer.title}
        fill
        sizes="(max-width: 768px) 80vw, 420px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
      <div className="absolute right-4 bottom-4 left-4">
        <p className="text-[10px] tracking-[0.18em] text-sand-soft/90 uppercase">{layer.category}</p>
        <p className="mt-1 text-sm font-medium text-sand">{layer.title}</p>
      </div>
    </button>
  );
}
