"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Metric } from "@/lib/mock-data";
import { ShineBorder } from "@/components/ui/shine-border";
import { MotionItem } from "./motion";

export function MetricCard({ metric }: { metric: Metric }) {
  const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <MotionItem
      whileHover={{ y: -3 }}
      className="glass glass-hover group relative overflow-hidden rounded-[var(--radius-card)] p-5 hover:border-border-strong"
    >
      <ShineBorder
        borderWidth={1}
        duration={14}
        shineColor={["rgba(255,90,31,0.7)", "rgba(255,255,255,0.35)"]}
      />
      <div className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between">
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

      <div className="relative mt-5">
        <p className="text-[34px] font-semibold leading-none tracking-tight">
          {metric.value}
        </p>
        <p className="mt-2.5 text-[11.5px] text-muted-foreground">
          {metric.hint}
        </p>
      </div>
    </MotionItem>
  );
}
