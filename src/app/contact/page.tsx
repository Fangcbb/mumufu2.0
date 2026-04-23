import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { contactContent } from "@/content";

export default function ContactPage() {
  return (
    <main className="flex-1 py-20 md:py-28">
      <PageShell>
        <section className="max-w-3xl space-y-8">
          <p className="text-xs tracking-[0.24em] text-sand-soft uppercase">Contact</p>
          <h1 className="text-balance text-5xl leading-[1.04] font-medium md:text-7xl">
            {contactContent.title}
          </h1>
          <p className="text-lg text-sand-soft md:text-xl">{contactContent.intro}</p>

          <div className="space-y-3 border-t border-line pt-8 text-lg">
            <p>
              <span className="text-sand-soft">Email:</span>{" "}
              <Link
                href={`mailto:${contactContent.email}`}
                className="underline underline-offset-4"
              >
                {contactContent.email}
              </Link>
            </p>
            <p>
              <span className="text-sand-soft">Location:</span> {contactContent.location}
            </p>
          </div>
        </section>
      </PageShell>
    </main>
  );
}
