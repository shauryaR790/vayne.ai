"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

const segmentMap: Record<string, string> = {
  "/": "Home",
  "/report": "Reports",
  "/assets": "Assets",
  "/scans": "Scans",
  "/findings": "Findings",
  "/attack-paths": "Attack Paths",
  "/investigations": "Investigations",
};

export function Topbar() {
  const pathname = usePathname();

  let segment = "Home";
  if (pathname.startsWith("/investigations/")) {
    segment = "Investigation";
  } else {
    segment = segmentMap[pathname] ?? "Home";
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b border-white bg-black px-5 lg:px-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
        VAYNE / {segment}
      </p>

      <div className="flex items-center gap-2">
        {pathname !== "/" && (
          <Button variant="secondary" size="sm" asChild>
            <Link href="/">Home</Link>
          </Button>
        )}

        {pathname !== "/report" && pathname !== "/" && (
          <Button variant="secondary" size="sm" asChild>
            <Link href="/report">Reports</Link>
          </Button>
        )}

        {pathname === "/" && (
          <Button variant="secondary" size="sm" asChild>
            <Link href="/report">Reports</Link>
          </Button>
        )}

        <Button size="sm">
          <Plus className="size-4" />
          New Scan
        </Button>

        <button className="flex size-9 items-center justify-center border border-white text-[11px] font-bold uppercase">
          AR
        </button>
      </div>
    </header>
  );
}
