"use client";

import { Bell, ChevronRight, Plus, Command, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-background/70 px-5 backdrop-blur-xl lg:px-8">
      <div className="flex min-w-0 items-center gap-2 text-[13px]">
        <span className="flex items-center gap-1.5 text-muted">
          <ShieldCheck className="size-4 text-accent" />
          VAYNE
        </span>
        <ChevronRight className="size-3.5 text-muted-foreground" />
        <span className="text-muted">Workspace</span>
        <ChevronRight className="size-3.5 text-muted-foreground" />
        <span className="font-medium text-foreground">Dashboard</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="mr-1 hidden items-center gap-2 rounded-full border border-success/20 bg-success/10 px-3 py-1.5 text-[12px] font-medium text-[var(--color-success)] sm:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--color-success)] opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-[var(--color-success)]" />
          </span>
          Monitoring active
        </div>

        <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
          <Command className="size-3.5" />
          Quick actions
        </Button>

        <Button size="sm">
          <Plus className="size-4" />
          New Scan
        </Button>

        <button className="relative grid size-9 place-items-center rounded-xl border border-border bg-white/[0.03] text-muted transition-colors hover:border-border-strong hover:text-foreground">
          <Bell className="size-[18px]" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-accent ring-2 ring-background" />
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-border bg-white/[0.03] py-1 pl-1 pr-2.5 transition-colors hover:border-border-strong">
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-[#ff8a3d] text-[12px] font-bold text-white">
            AR
          </span>
          <span className="hidden text-left leading-tight md:block">
            <span className="block text-[12.5px] font-medium">Alex Rao</span>
            <span className="block text-[10.5px] text-muted-foreground">
              Security Lead
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
