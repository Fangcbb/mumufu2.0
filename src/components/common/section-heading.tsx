type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl leading-tight font-medium md:text-5xl">{title}</h2>
      {description ? (
        <p className="text-pretty text-base text-sand-soft md:text-lg">{description}</p>
      ) : null}
    </header>
  );
}
