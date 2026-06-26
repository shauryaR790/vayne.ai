"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "assets", label: "Assets" },
  { id: "scans", label: "Scans" },
  { id: "findings", label: "Findings" },
  { id: "attack-paths", label: "Attack Paths" },
  { id: "reports", label: "Reports" },
  { id: "ai-chat", label: "AI Chat" },
  { id: "settings", label: "Settings" },
];

export function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <aside className="sticky top-0 z-20 hidden h-screen w-[200px] shrink-0 flex-col border-r border-white bg-black lg:flex">
      <div className="border-b border-white py-8 text-center">
        <span className="text-sm font-bold uppercase tracking-[0.35em]">
          VAYNE
        </span>
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto py-2">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "w-full border-b border-white/20 px-4 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.12em] transition-colors",
                isActive
                  ? "bg-white text-black"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
