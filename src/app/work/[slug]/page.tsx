import { PageShell } from "@/components/layout/page-shell";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="flex-1 py-24 md:py-32">
      <PageShell>
        <section className="space-y-4">
          <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">Phase 1</p>
          <h1 className="text-4xl leading-tight font-medium md:text-5xl">Work Item</h1>
          <p className="max-w-2xl text-base text-sand-soft">Placeholder detail page scaffold for: {slug}</p>
        </section>
      </PageShell>
    </main>
  );
}
