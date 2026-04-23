import type { HeroLayer } from "@/content/home-hero";

type SpatialNavProps = {
  layers: HeroLayer[];
  activeLayerId: string;
  onSelect: (id: string) => void;
};

export function SpatialNav({ layers, activeLayerId, onSelect }: SpatialNavProps) {
  return (
    <nav aria-label="Hero layer navigation" className="mt-4">
      <ul className="flex flex-wrap gap-2">
        {layers.map((layer, index) => {
          const isActive = activeLayerId === layer.id;

          return (
            <li key={layer.id}>
              <button
                type="button"
                onClick={() => onSelect(layer.id)}
                className={`rounded-full border px-3 py-1 text-xs tracking-wide uppercase transition ${
                  isActive
                    ? "border-sand bg-sand text-ink"
                    : "border-line text-sand-soft hover:border-sand-soft hover:text-sand"
                }`}
              >
                {String(index + 1).padStart(2, "0")} {layer.category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
