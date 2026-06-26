"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Metric } from "@/lib/mock-data";
import { MotionItem } from "./motion";
import { Sparkline } from "./sparkline";

export function MetricCard({ metric }: { metric: Metric }) {
  const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;
  const sparkColor = metric.positive
    ? "var(--color-success)"
    : "var(--color-accent)";

  return (
    <MotionItem
      whileHover={{ y: -3 }}
      className="glass glass-hover group relative overflow-hidden rounded-[var(--radius-card)] p-5 hover:border-border-strong hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]"
    >
      <div className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <p className="text-[13px] font-medium text-muted">{metric.label}</p>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-semibold",
            metric.positive
              ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
              : "bg-[var(--color-critical)]/10 text-[var(--color-critical)]"
          )}
        >
          <TrendIcon className="size-3" />
          {metric.delta}
        </span>
      </div>

      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-[32px] font-semibold leading-none tracking-tight">
            {metric.value}
          </p>
          <p className="mt-2 text-[11.5px] text-muted-foreground">
            {metric.hint}
          </p>
        </div>
        <Sparkline
          data={metric.spark}
          color={sparkColor}
          className="h-9 w-24 opacity-90"
        />
      </div>
    </MotionItem>
  );
}
