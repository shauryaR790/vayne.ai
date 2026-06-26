"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { attackSurface, surfaceTrend } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MotionItem } from "./motion";

export function AttackSurfaceCard() {
  const [range, setRange] = useState<"monthly" | "yearly">("monthly");
  const max = Math.max(...surfaceTrend.map((p) => p.discovered));

  return (
    <MotionItem className="h-full">
      <Card className="h-full">
        <CardHeader>
          <div>
            <CardTitle>Attack Surface Overview</CardTitle>
            <p className="text-[12px] text-muted">Discovered vs. resolved</p>
          </div>
          <div className="flex rounded-full border border-border bg-white/[0.03] p-0.5">
            {(["monthly", "yearly"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={cn(
                  "relative rounded-full px-3 py-1 text-[11.5px] font-medium capitalize transition-colors",
                  range === r ? "text-white" : "text-muted hover:text-foreground"
                )}
              >
                {range === r && (
                  <motion.span
                    layoutId="range-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{r}</span>
              </button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {attackSurface.map((stat) => {
              const positive = stat.delta >= 0;
              return (
                <div
                  key={stat.id}
                  className="rounded-2xl border border-border bg-white/[0.02] p-3"
                >
                  <p className="text-[11.5px] text-muted">{stat.label}</p>
                  <p className="mt-1.5 text-xl font-semibold tracking-tight">
                    {stat.value.toLocaleString()}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="h-1 w-full max-w-[60%] overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.ratio * 100}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: stat.color }}
                      />
                    </div>
                    <span
                      className={cn(
                        "inline-flex items-center text-[10.5px] font-semibold",
                        positive
                          ? "text-[var(--color-success)]"
                          : "text-[var(--color-critical)]"
                      )}
                    >
                      {positive ? (
                        <ArrowUpRight className="size-3" />
                      ) : (
                        <ArrowDownRight className="size-3" />
                      )}
                      {Math.abs(stat.delta)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bar chart */}
          <div>
            <div className="flex h-44 items-end gap-3">
              {surfaceTrend.map((p, i) => {
                const dH = (p.discovered / max) * 100;
                const rH = (p.resolved / max) * 100;
                return (
                  <div
                    key={p.label}
                    className="group flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="relative flex h-full w-full items-end justify-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${dH}%` }}
                        transition={{
                          duration: 0.7,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                        className="w-2.5 rounded-full bg-gradient-to-t from-accent/40 to-accent shadow-[0_0_20px_-4px_rgba(255,90,31,0.6)]"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${rH}%` }}
                        transition={{
                          duration: 0.7,
                          delay: i * 0.05 + 0.1,
                          ease: "easeOut",
                        }}
                        className="w-2.5 rounded-full bg-white/10"
                      />
                      <div className="pointer-events-none absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg border border-border bg-elevated px-2.5 py-1.5 text-[11px] opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
                        <span className="block text-accent">
                          {p.discovered} discovered
                        </span>
                        <span className="block text-muted">
                          {p.resolved} resolved
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-muted-foreground">
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center gap-4 text-[11.5px] text-muted">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-accent" /> Discovered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-white/25" /> Resolved
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </MotionItem>
  );
}
