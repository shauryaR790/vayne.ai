"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Metric } from "@/lib/mock-data";
import { MagicCard } from "@/components/ui/magic-card";
import { MotionItem } from "./motion";

export function MetricCard({ metric }: { metric: Metric }) {
  const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <MotionItem whileHover={{ y: -3 }} className="rounded-[var(--radius-card)]">
      <MagicCard className="h-full rounded-[var(--radius-card)] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.9)]">
        <div className="p-5">
          <div className="flex items-center justify-between">
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

          <div className="mt-5">
            <p className="text-[34px] font-semibold leading-none tracking-tight">
              {metric.value}
            </p>
            <p className="mt-2.5 text-[11.5px] text-muted-foreground">
              {metric.hint}
            </p>
          </div>
        </div>
      </MagicCard>
    </MotionItem>
  );
}
