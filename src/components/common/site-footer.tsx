import Link from "next/link";
import { navigationItems, siteConfig } from "@/config/site";
import { PageShell } from "@/components/layout/page-shell";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-12">
      <PageShell>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="space-y-2">
            <p className="text-sm text-sand">{siteConfig.name}</p>
            <p className="text-sm text-sand-soft">© 2026. All rights reserved.</p>
          </div>
          <ul className="flex flex-wrap gap-5 text-sm text-sand-soft">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PageShell>
    </footer>
  );
}
