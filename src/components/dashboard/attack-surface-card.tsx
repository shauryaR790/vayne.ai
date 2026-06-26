"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { attackSurface, surfaceTrend } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MotionItem } from "./motion";

export function AttackSurfaceCard() {
  const [range, setRange] = useState<"monthly" | "yearly">("monthly");
  const max = Math.max(...surfaceTrend.map((p) => p.discovered));

  return (
    <MotionItem>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Attack Surface Overview</CardTitle>
            <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
              Discovered vs resolved
            </p>
          </div>
          <div className="flex border border-white">
            {(["monthly", "yearly"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={cn(
                  "px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors",
                  range === r
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white"
                )}
              >
                {r}
              </button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-px border border-white bg-white sm:grid-cols-4">
            {attackSurface.map((stat) => (
              <div
                key={stat.id}
                className="bg-black p-4"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-bold tracking-tight">
                  {stat.value.toLocaleString()}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-px flex-1 overflow-hidden bg-white/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.ratio * 100}%` }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full bg-white"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-white/60">
                    {stat.delta >= 0 ? "+" : ""}
                    {stat.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex h-40 items-end gap-1 border-b border-white pb-2">
              {surfaceTrend.map((p, i) => {
                const dH = (p.discovered / max) * 100;
                const rH = (p.resolved / max) * 100;
                return (
                  <div
                    key={p.label}
                    className="group flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="relative flex h-full w-full items-end justify-center gap-0.5">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${dH}%` }}
                        transition={{
                          duration: 0.7,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                        className="w-3 bg-white"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${rH}%` }}
                        transition={{
                          duration: 0.7,
                          delay: i * 0.05 + 0.1,
                          ease: "easeOut",
                        }}
                        className="w-3 bg-white/30"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-white/50">
              <span className="flex items-center gap-2">
                <span className="size-2 bg-white" /> Discovered
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 bg-white/30" /> Resolved
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </MotionItem>
  );
}
