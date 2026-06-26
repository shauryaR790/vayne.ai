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
        <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/50">
          {label}
        </span>
      )}
      <div className="flex items-center gap-3">
        <div className="h-2 min-w-0 max-w-[58%] flex-1 overflow-hidden border border-black bg-white/10">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <span className="shrink-0 text-lg font-black leading-none">
          {value.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

export function ProgressBar({
  value,
  label,
  display,
  className,
  invertOnGroupHover,
}: {
  value: number;
  label: string;
  display?: string;
  className?: string;
  invertOnGroupHover?: boolean;
}) {
  const displayValue = (display ?? `${value}%`).toUpperCase();

  return (
    <div className={cn("space-y-2", className)}>
      <span
        className={cn(
          "text-[12px] font-bold uppercase tracking-[0.14em] text-white/50",
          invertOnGroupHover && "group-hover:text-black/55"
        )}
      >
        {label}
      </span>
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "h-2 min-w-0 max-w-[58%] flex-1 overflow-hidden border border-black bg-black",
            invertOnGroupHover && "group-hover:bg-black/10"
          )}
        >
          <motion.div
            className={cn(
              "h-full bg-white",
              invertOnGroupHover && "group-hover:bg-black"
            )}
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
        <span
          className={cn(
            "shrink-0 text-lg font-black uppercase leading-none",
            invertOnGroupHover && "group-hover:text-black"
          )}
        >
          {displayValue}
        </span>
      </div>
    </div>
  );
}
