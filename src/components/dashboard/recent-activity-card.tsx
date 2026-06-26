"use client";

import { motion } from "motion/react";
import { Radar, Target, ShieldAlert, Activity } from "lucide-react";

import { recentScans } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MotionItem } from "./motion";
import { StatusPill } from "./status-pill";

export function RecentActivityCard() {
  const active = recentScans.filter(
    (s) => s.status === "running" || s.status === "queued"
  );

  return (
    <MotionItem className="h-full">
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-white/[0.04] ring-1 ring-border">
              <Radar className="size-4 text-accent" />
            </span>
            <CardTitle>Recent Scan Activity</CardTitle>
          </div>
          <span className="flex items-center gap-1.5 text-[12px] text-muted">
            <Activity className="size-3.5 text-accent" />
            {active.length} active
          </span>
        </CardHeader>

        <CardContent className="space-y-3">
          {recentScans.slice(0, 4).map((scan, i) => (
            <motion.div
              key={scan.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="rounded-2xl border border-border bg-white/[0.02] p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2.5">
                  <Target className="size-4 shrink-0 text-muted" />
                  <span className="truncate font-mono text-[12.5px] text-foreground">
                    {scan.target}
                  </span>
                </div>
                <StatusPill status={scan.status} />
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[11.5px] text-muted">
                <span>{scan.type}</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <ShieldAlert className="size-3.5" />
                    {scan.findings} findings
                  </span>
                  <span>{scan.time}</span>
                </span>
              </div>

              {scan.status === "running" && scan.progress != null && (
                <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${scan.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-accent shadow-[0_0_12px_rgba(255,90,31,0.7)]"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </MotionItem>
  );
}
