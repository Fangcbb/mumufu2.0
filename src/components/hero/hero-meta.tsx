import type { HeroLayer } from "@/content/home-hero";

type HeroMetaProps = {
  eyebrow: string;
  title: string;
  blurb: string;
  activeLayer: HeroLayer;
};

export function HeroMeta({ eyebrow, title, blurb, activeLayer }: HeroMetaProps) {
  return (
    <header className="max-w-3xl space-y-4">
      <p className="text-[11px] tracking-[0.2em] text-sand-soft uppercase">{eyebrow}</p>
      <h1 className="text-balance text-3xl leading-tight font-medium text-sand md:text-5xl">{title}</h1>
      <p className="max-w-2xl text-sm text-sand-soft md:text-base">{blurb}</p>
      <p className="text-xs text-sand-soft/80 uppercase">
        Active plane: <span className="text-sand">{activeLayer.title}</span>
      </p>
    </header>
  );
}
