import Link from "next/link";
import { navigationItems, siteConfig } from "@/config/site";
import { PageShell } from "@/components/layout/page-shell";

export function SiteHeader() {
  return (
    <header className="border-b border-line py-6">
      <PageShell>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-sm tracking-[0.18em] uppercase">
            {siteConfig.name}
          </Link>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-5 text-sm text-sand-soft md:gap-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-sand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </PageShell>
    </header>
  );
}
