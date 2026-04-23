import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <main className="flex-1 py-24 md:py-32">
      <PageShell>
        <section className="space-y-4">
          <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">404</p>
          <h1 className="text-4xl leading-tight font-medium md:text-5xl">Page not found</h1>
          <p className="max-w-2xl text-base text-sand-soft">This route is not available yet.</p>
          <Link href="/" className="text-sm text-sand underline underline-offset-4">
            Return home
          </Link>
        </section>
      </PageShell>
    </main>
  );
}
