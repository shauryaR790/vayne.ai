"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "assets", label: "Assets", href: "#" },
  { id: "scans", label: "Scans", href: "#" },
  { id: "findings", label: "Findings", href: "#" },
  { id: "attack-paths", label: "Attack Paths", href: "#" },
  { id: "reports", label: "Report", href: "/report" },
  { id: "ai-chat", label: "AI Chat", href: "#" },
  { id: "settings", label: "Settings", href: "#" },
];

export function Sidebar({ activeNav }: { activeNav?: string }) {
  const pathname = usePathname();

  const isActive = (id: string, href: string) => {
    if (activeNav) return activeNav === id;
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <aside className="sticky top-0 z-20 hidden h-screen w-[200px] shrink-0 flex-col border-r border-white bg-black lg:flex">
      <Link
        href="/"
        className="block border-b border-white py-8 text-center transition-colors hover:bg-white/5"
      >
        <span className="text-sm font-bold uppercase tracking-[0.35em]">
          VAYNE
        </span>
      </Link>

      <nav className="flex flex-1 flex-col overflow-y-auto py-2">
        {navItems.map((item) => {
          const active = isActive(item.id, item.href);
          const isLink = item.href !== "#";

          const className = cn(
            "w-full border-b border-white/20 px-4 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.12em] transition-colors",
            active
              ? "bg-white text-black"
              : "text-white/70 hover:bg-white/10 hover:text-white"
          );

          if (isLink) {
            return (
              <Link key={item.id} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          }

          return (
            <button key={item.id} type="button" className={className} disabled>
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
