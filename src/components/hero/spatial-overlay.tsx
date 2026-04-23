import type { HeroLayer } from "@/content/home-hero";

type SpatialOverlayProps = {
  activeLayer: HeroLayer;
};

export function SpatialOverlay({ activeLayer }: SpatialOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex items-end justify-between bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_78%_0%,rgba(251,191,36,0.12),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.72)_100%)] p-6 md:p-8">
      <div>
        <p className="text-[10px] tracking-[0.2em] text-sand-soft/80 uppercase">Now in focus</p>
        <p className="mt-2 text-xl font-medium text-sand md:text-2xl">{activeLayer.title}</p>
      </div>
      <p className="hidden text-sm text-sand-soft/80 md:block">{activeLayer.category}</p>
    </div>
  );
}
