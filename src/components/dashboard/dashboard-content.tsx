"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CalendarDays, RefreshCw, Sparkles } from "lucide-react";

import { metrics } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { MetricCard } from "./metric-card";
import { AiSummaryCard } from "./ai-summary-card";
import { AttackSurfaceCard } from "./attack-surface-card";
import { RecentActivityCard } from "./recent-activity-card";
import { ScansTable } from "./scans-table";
import { FindingsSection } from "./findings-section";
import { DashboardSkeleton } from "./dashboard-skeleton";
import { MotionGroup, MotionItem } from "./motion";

export function DashboardContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1400px] px-5 py-7 lg:px-8">
      {/* Header */}
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
            <Sparkles className="size-3" />
            AI copilot enabled
          </div>
          <h1 className="text-[28px] font-semibold tracking-tight text-balance">
            Overview
          </h1>
          <p className="mt-1 text-[14px] text-muted">
            Your attack surface changed in the last 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex items-center gap-2"
        >
          <Button variant="secondary" size="sm">
            <CalendarDays className="size-4" />
            Last 24 hours
          </Button>
          <Button variant="secondary" size="icon">
            <RefreshCw className="size-4" />
          </Button>
        </motion.div>
      </div>

      {loading ? (
        <DashboardSkeleton />
      ) : (
        <div className="space-y-6">
          {/* Metric cards */}
          <MotionGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </MotionGroup>

          {/* Second row */}
          <MotionGroup className="grid grid-cols-1 gap-4 xl:grid-cols-12">
            <div className="xl:col-span-4">
              <RecentActivityCard />
            </div>
            <div className="xl:col-span-5">
              <AttackSurfaceCard />
            </div>
            <div className="xl:col-span-3">
              <AiSummaryCard />
            </div>
          </MotionGroup>

          {/* Scans table */}
          <MotionGroup>
            <ScansTable />
          </MotionGroup>

          {/* Findings */}
          <MotionGroup>
            <FindingsSection />
          </MotionGroup>

          <MotionItem className="pt-2 text-center text-[11.5px] text-muted-foreground">
            VAYNE · Attack surface monitored continuously · Data shown is
            simulated
          </MotionItem>
        </div>
      )}
    </div>
  );
}
