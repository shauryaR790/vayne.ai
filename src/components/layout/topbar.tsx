"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b border-white bg-black px-5 lg:px-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
        VAYNE / Dashboard
      </p>

      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" className="hidden sm:inline-flex">
          Quick actions
        </Button>

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
