"use client";

import { Plus, Mic } from "lucide-react";

import { TypingAnimation } from "@/components/ui/typing-animation";

export function HomeLanding() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl text-center">
        <TypingAnimation
          as="h1"
          typeSpeed={50}
          startOnView={false}
          showCursor
          blinkCursor
          cursorStyle="block"
          className="text-brutal text-4xl font-black uppercase sm:text-6xl lg:text-7xl"
        >
          WELCOME BACK
        </TypingAnimation>

        <div className="mx-auto mt-14 w-full max-w-2xl border border-white bg-black">
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
              placeholder="Ask VAYNE"
              className="min-w-0 flex-1 bg-transparent text-base font-medium text-white outline-none placeholder:text-white/40"
            />

            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden border border-white/40 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/50 sm:inline">
                Copilot
              </span>
              <button
                type="button"
                className="flex size-9 items-center justify-center border border-white/40 text-white/70 transition-colors hover:border-white hover:text-white"
                aria-label="Voice input"
              >
                <Mic className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          AI-powered attack surface monitoring
        </p>
      </div>
    </div>
  );
}
