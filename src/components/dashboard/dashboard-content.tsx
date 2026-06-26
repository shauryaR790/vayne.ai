"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CalendarDays, RefreshCw } from "lucide-react";

import { metrics, executiveSummary } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { AskVayneButton } from "@/components/shared/ask-vayne-button";
import { MetricCard } from "./metric-card";
import { AiSummaryCard } from "./ai-summary-card";
import { ScanTerminal } from "./scan-terminal";
import { ScansTable } from "./scans-table";
import { FindingsSection } from "./findings-section";
import { ExecutiveSummary } from "./executive-summary";
import { DashboardSkeleton } from "./dashboard-skeleton";
import { MotionGroup } from "./motion";

export function DashboardContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-8 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 border-b border-white pb-6 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-brutal text-2xl font-black uppercase tracking-[0.06em] sm:text-3xl">
            Attack Surface Overview
          </h1>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
            Last updated: {executiveSummary.lastUpdated}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex items-center gap-2"
        >
          <AskVayneButton />
          <Button variant="secondary" size="sm">
            <CalendarDays className="size-4" />
            Last 24h
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
          <MotionGroup>
            <ExecutiveSummary />
          </MotionGroup>

          <MotionGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </MotionGroup>

          <MotionGroup className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ScanTerminal />
            <AiSummaryCard />
          </MotionGroup>

          <MotionGroup>
            <ScansTable />
          </MotionGroup>

          <MotionGroup>
            <FindingsSection linkToInvestigation />
          </MotionGroup>

          <p className="border-t border-white/20 pt-6 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            VAYNE — Simulated data
          </p>
        </div>
      )}
    </div>
  );
}
