"use client";

import { useMemo, useState } from "react";
import { homeHeroLayers, homeHeroMeta } from "@/content/home-hero";
import { HeroMeta } from "./hero-meta";
import { SpatialNav } from "./spatial-nav";
import { SpatialOverlay } from "./spatial-overlay";
import { SpatialScene } from "./spatial-scene";

export function SpatialHero() {
  const [activeLayerId, setActiveLayerId] = useState(homeHeroLayers[0]?.id ?? "");

  const activeLayer = useMemo(
    () => homeHeroLayers.find((layer) => layer.id === activeLayerId) ?? homeHeroLayers[0],
    [activeLayerId],
  );

  if (!activeLayer) {
    return null;
  }

  return (
    <section className="space-y-6" aria-label="Spatial homepage hero">
      <HeroMeta
        eyebrow={homeHeroMeta.eyebrow}
        title={homeHeroMeta.title}
        blurb={homeHeroMeta.blurb}
        activeLayer={activeLayer}
      />
      <div className="relative">
        <SpatialScene
          layers={homeHeroLayers}
          activeLayerId={activeLayer.id}
          onLayerChange={setActiveLayerId}
        />
        <SpatialOverlay activeLayer={activeLayer} />
      </div>
      <SpatialNav layers={homeHeroLayers} activeLayerId={activeLayer.id} onSelect={setActiveLayerId} />
    </section>
  );
}
