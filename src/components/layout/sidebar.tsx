"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Boxes,
  Radar,
  ShieldAlert,
  Route,
  FileText,
  Sparkles,
  Settings,
  Search,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { navBadges } from "@/lib/mock-data";
import { VayneLogo } from "./logo";

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  section: "main" | "intel" | "system";
};

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, section: "main" },
  { id: "assets", label: "Assets", icon: Boxes, section: "main" },
  { id: "scans", label: "Scans", icon: Radar, section: "main" },
  { id: "findings", label: "Findings", icon: ShieldAlert, section: "intel" },
  { id: "attack-paths", label: "Attack Paths", icon: Route, section: "intel" },
  { id: "reports", label: "Reports", icon: FileText, section: "intel" },
  { id: "ai-chat", label: "AI Chat", icon: Sparkles, section: "intel" },
  { id: "settings", label: "Settings", icon: Settings, section: "system" },
];

const sectionLabels: Record<string, string> = {
  main: "Workspace",
  intel: "Intelligence",
  system: "System",
};

export function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const grouped = navItems.reduce<Record<string, NavItem[]>>((acc, item) => {
    (acc[item.section] ??= []).push(item);
    return acc;
  }, {});

  return (
    <aside className="relative z-20 hidden h-screen w-[260px] shrink-0 flex-col border-r border-border bg-surface/60 backdrop-blur-xl lg:flex">
      <div className="px-5 pt-6 pb-5">
        <VayneLogo />
      </div>

      <div className="px-3 pb-4">
        <button className="group flex w-full items-center gap-2.5 rounded-xl border border-border bg-white/[0.03] px-3 py-2.5 text-left text-sm text-muted transition-colors hover:border-border-strong hover:bg-white/[0.05]">
          <Search className="size-4" />
          <span className="flex-1 text-[13px]">Search or jump to…</span>
          <kbd className="rounded-md border border-border bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            ⌘K
          </kbd>
        </button>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-4">
        {Object.entries(grouped).map(([section, items]) => (
          <div key={section} className="space-y-1">
            <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {sectionLabels[section]}
            </p>
            {items.map((item) => {
              const isActive = active === item.id;
              const badge = navBadges[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-[13.5px] font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground hover:bg-white/[0.04]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-xl border border-border-strong bg-white/[0.05]"
                    />
                  )}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,90,31,0.8)]" />
                  )}
                  <item.icon
                    className={cn(
                      "relative size-[18px] transition-colors",
                      isActive ? "text-accent" : "text-muted group-hover:text-foreground"
                    )}
                  />
                  <span className="relative flex-1">{item.label}</span>
                  {badge && (
                    <span
                      className={cn(
                        "relative rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                        badge.tone === "critical"
                          ? "bg-[var(--color-critical)]/15 text-[var(--color-critical)]"
                          : "bg-accent-soft text-accent"
                      )}
                    >
                      {badge.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-4">
          <p className="relative text-[13px] font-semibold">Upgrade to Enterprise</p>
          <p className="relative mt-1 text-[11.5px] leading-relaxed text-muted">
            Unlimited scans, SSO & continuous monitoring.
          </p>
          <button className="relative mt-3 flex items-center gap-1 text-[12px] font-semibold text-accent">
            View plans
            <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
