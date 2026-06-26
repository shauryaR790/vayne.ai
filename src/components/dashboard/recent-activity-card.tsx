"use client";

import { motion } from "motion/react";

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
      <Card className="flex h-full flex-col">
        <CardHeader>
          <CardTitle>Recent Scan Activity</CardTitle>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
            {active.length} active
          </span>
        </CardHeader>

        <CardContent className="space-y-0 p-0">
          {recentScans.slice(0, 4).map((scan, i) => (
            <motion.div
              key={scan.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="border-b border-white/20 px-5 py-4 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate font-mono text-[12px]">
                  {scan.target}
                </span>
                <StatusPill status={scan.status} />
              </div>

              <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-wider text-white/50">
                <span>{scan.type}</span>
                <span>
                  {scan.findings} findings · {scan.time}
                </span>
              </div>

              {scan.status === "running" && scan.progress != null && (
                <div className="mt-3 h-px w-full bg-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${scan.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-px bg-white"
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
