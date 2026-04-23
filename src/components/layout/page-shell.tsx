import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

/**
 * Shared width + spacing wrapper for top-level pages.
 * Later phases can compose section blocks inside this shell.
 */
export function PageShell({ children }: PageShellProps) {
  return <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">{children}</div>;
}
