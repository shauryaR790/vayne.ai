"use client";

import {
  Globe,
  ShieldAlert,
  Sparkles,
  Trash2,
  Route,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { aiInsights, type AiInsight } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionItem } from "./motion";

const config: Record<
  AiInsight["type"],
  { icon: React.ElementType; tint: string; ring: string }
> = {
  discovery: {
    icon: Globe,
    tint: "text-[var(--color-low)]",
    ring: "bg-[var(--color-low)]/10",
  },
  confirmed: {
    icon: ShieldAlert,
    tint: "text-[var(--color-critical)]",
    ring: "bg-[var(--color-critical)]/10",
  },
  cleanup: {
    icon: Trash2,
    tint: "text-[var(--color-success)]",
    ring: "bg-[var(--color-success)]/10",
  },
  "attack-path": {
    icon: Route,
    tint: "text-accent",
    ring: "bg-accent-soft",
  },
};

export function AiSummaryCard() {
  return (
    <MotionItem className="h-full">
      <Card className="relative h-full overflow-hidden">
        <CardHeader>
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-accent-soft ring-1 ring-accent/30">
              <Sparkles className="size-4 text-accent" />
            </span>
            <div>
              <CardTitle>AI Summary</CardTitle>
              <p className="text-[12px] text-muted">Last 24 hours</p>
            </div>
          </div>
          <Badge variant="accent">Live</Badge>
        </CardHeader>

        <CardContent className="space-y-2.5 pt-1">
          {aiInsights.map((insight, i) => {
            const c = config[insight.type];
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="group flex gap-3 rounded-2xl border border-transparent p-2.5 transition-colors hover:border-border hover:bg-white/[0.03]"
              >
                <span
                  className={cn(
                    "mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg",
                    c.ring
                  )}
                >
                  <c.icon className={cn("size-4", c.tint)} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13.5px] font-medium leading-snug">
                    {insight.title}
                  </p>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-muted">
                    {insight.detail}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] text-muted-foreground">
                  {insight.time}
                </span>
              </motion.div>
            );
          })}

          <button className="mt-1 flex w-full items-center justify-center gap-1.5 rounded-2xl border border-border bg-white/[0.02] py-2.5 text-[12.5px] font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground">
            Open AI investigation
            <ArrowRight className="size-3.5" />
          </button>
        </CardContent>
      </Card>
    </MotionItem>
  );
}
