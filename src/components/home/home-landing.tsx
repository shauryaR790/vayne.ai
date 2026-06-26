"use client";

import { Plus, Mic } from "lucide-react";

import { recentTargets, quickScanTypes } from "@/lib/mock-data";
import { HyperText } from "@/components/ui/hyper-text";

export function HomeLanding() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl text-center">
        <HyperText
          as="h1"
          duration={1200}
          delay={200}
          startOnView={false}
          animateOnHover={false}
          className="text-brutal text-4xl font-black uppercase sm:text-6xl lg:text-7xl"
        >
          WELCOME BACK
        </HyperText>

        <div className="mx-auto mt-14 w-full border border-white bg-black">
          <div className="flex items-center gap-3 px-4 py-4">
            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center border border-white/40 text-white/70 transition-colors hover:border-white hover:text-white"
              aria-label="Add attachment"
            >
              <Plus className="size-4" />
            </button>
            <input
              type="text"
              placeholder="Enter your target"
              className="min-w-0 flex-1 bg-transparent text-base font-medium text-white outline-none placeholder:text-white/40"
            />
            <button
              type="button"
              className="flex size-9 shrink-0 items-center justify-center border border-white/40 text-white/70 transition-colors hover:border-white hover:text-white"
              aria-label="Voice input"
            >
              <Mic className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
            Recent Targets
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {recentTargets.map((target) => (
              <button
                key={target}
                type="button"
                className="border border-white/30 px-3 py-2.5 text-left font-mono text-[12px] text-white/80 transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                {target}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
            Quick Scan Types
          </p>
          <div className="mt-3 space-y-2">
            {quickScanTypes.map((scan) => (
              <button
                key={scan.id}
                type="button"
                className="flex w-full items-center gap-3 border border-white/30 px-4 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-white/80 transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                <span className="text-white/40">○</span>
                {scan.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
