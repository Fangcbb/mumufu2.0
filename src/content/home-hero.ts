export type HeroLayer = {
  id: string;
  image: string;
  title: string;
  category: string;
  width: number;
  height: number;
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  opacity: number;
  scale: number;
};

export const homeHeroLayers: HeroLayer[] = [
  {
    id: "northbound-atlas",
    image: "/images/hero/layer-atlas.svg",
    title: "Northbound Atlas",
    category: "Editorial System",
    width: 420,
    height: 560,
    x: 4,
    y: 12,
    z: 130,
    rotateX: 5,
    rotateY: -14,
    rotateZ: -3,
    opacity: 0.96,
    scale: 1,
  },
  {
    id: "auric-index",
    image: "/images/hero/layer-index.svg",
    title: "Auric Index",
    category: "Brand Narrative",
    width: 360,
    height: 460,
    x: 58,
    y: 8,
    z: 80,
    rotateX: 2,
    rotateY: 8,
    rotateZ: 4,
    opacity: 0.88,
    scale: 0.94,
  },
  {
    id: "mori-materials",
    image: "/images/hero/layer-materials.svg",
    title: "Mori Materials",
    category: "Spatial Portfolio",
    width: 340,
    height: 460,
    x: 67,
    y: 48,
    z: 40,
    rotateX: -3,
    rotateY: 10,
    rotateZ: 8,
    opacity: 0.82,
    scale: 0.92,
  },
  {
    id: "field-notes",
    image: "/images/hero/layer-notes.svg",
    title: "Field Notes",
    category: "Story Fragments",
    width: 300,
    height: 390,
    x: 23,
    y: 56,
    z: 24,
    rotateX: -6,
    rotateY: -8,
    rotateZ: -7,
    opacity: 0.74,
    scale: 0.9,
  },
  {
    id: "signal-grid",
    image: "/images/hero/layer-grid.svg",
    title: "Signal Grid",
    category: "Interaction Prototype",
    width: 300,
    height: 360,
    x: 41,
    y: 30,
    z: 6,
    rotateX: -2,
    rotateY: 0,
    rotateZ: 2,
    opacity: 0.62,
    scale: 0.86,
  },
];

export const homeHeroMeta = {
  eyebrow: "Spatial Edition",
  title: "An image-first field of layered narratives.",
  blurb:
    "A depth-based homepage study where projects orbit through subtle perspective, motion, and focus.",
};
