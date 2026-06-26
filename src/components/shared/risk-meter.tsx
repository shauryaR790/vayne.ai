"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export function RiskMeter({
  value,
  max = 10,
  label,
  className,
}: {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}) {
  const pct = Math.min(100, (value / max) * 100);

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/50">
            {label}
          </span>
          <span className="text-2xl font-black">{value.toFixed(1)}</span>
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden bg-white/10">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function ProgressBar({
  value,
  label,
  display,
  className,
}: {
  value: number;
  label: string;
  display?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-end justify-between gap-2">
        <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/50">
          {label}
        </span>
        <span className="text-2xl font-black leading-none">
          {display ?? `${value}%`}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden border border-white/20 bg-black">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
