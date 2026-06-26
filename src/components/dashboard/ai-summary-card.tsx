"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { aiInsights } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionItem } from "./motion";

export function AiSummaryCard() {
  return (
    <MotionItem className="h-full">
      <Card className="flex h-full flex-col">
        <CardHeader>
          <div>
            <CardTitle>AI Summary</CardTitle>
            <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
              Last 24 hours
            </p>
          </div>
          <Badge variant="accent">Live</Badge>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col space-y-0 p-0">
          {aiInsights.map((insight, i) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="border-b border-white/20 px-5 py-4 last:border-b-0"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[12px] font-bold uppercase tracking-wide">
                  {insight.title}
                </p>
                <span className="shrink-0 text-[10px] uppercase tracking-wider text-white/40">
                  {insight.time}
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-white/60">
                {insight.detail}
              </p>
            </motion.div>
          ))}

          <button className="mt-auto flex w-full items-center justify-center gap-2 border-t border-white py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:bg-white hover:text-black">
            Open investigation
            <ArrowRight className="size-3.5" />
          </button>
        </CardContent>
      </Card>
    </MotionItem>
  );
}
