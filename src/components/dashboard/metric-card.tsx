"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import type { Metric } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { MotionItem } from "./motion";

export function MetricCard({ metric }: { metric: Metric }) {
  const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <MotionItem className="h-full">
      <Card className="flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
            {metric.label}
          </p>
          <span className="inline-flex items-center gap-0.5 border border-white/40 px-1.5 py-0.5 text-[10px] font-bold text-white">
            <TrendIcon className="size-3" />
            {metric.delta}
          </span>
        </div>

        <div className="mt-6">
          <p className="text-[36px] font-bold leading-none tracking-tight">
            {metric.value}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-wider text-white/50">
            {metric.hint}
          </p>
        </div>
      </Card>
    </MotionItem>
  );
}
