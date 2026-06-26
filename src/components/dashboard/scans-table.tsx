"use client";

import { motion } from "motion/react";
import { Search, SlidersHorizontal, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { recentScans } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionItem } from "./motion";
import { StatusPill } from "./status-pill";

export function ScansTable() {
  return (
    <MotionItem>
      <Card>
        <CardHeader className="flex-col gap-3 sm:flex-row sm:items-center">
          <div>
            <CardTitle>Recent Scans</CardTitle>
            <p className="text-[12px] text-muted">
              Latest scans across your attack surface
            </p>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-white/[0.03] px-3 py-2 sm:w-56">
              <Search className="size-4 text-muted" />
              <input
                placeholder="Search scans…"
                className="w-full bg-transparent text-[13px] text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="secondary" size="icon">
              <SlidersHorizontal className="size-4" />
            </Button>
          </div>
        </CardHeader>

        <div className="px-2 pb-3 sm:px-3">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-3 py-3 font-semibold">Target</th>
                  <th className="px-3 py-3 font-semibold">Scan Type</th>
                  <th className="px-3 py-3 font-semibold">Findings</th>
                  <th className="px-3 py-3 font-semibold">Critical</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                  <th className="px-3 py-3 font-semibold">Time</th>
                  <th className="px-3 py-3" />
                </tr>
              </thead>
              <tbody>
                {recentScans.map((scan, i) => (
                  <motion.tr
                    key={scan.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className="group border-t border-border transition-colors hover:bg-white/[0.025]"
                  >
                    <td className="px-3 py-3.5">
                      <span className="font-mono text-[12.5px] text-foreground">
                        {scan.target}
                      </span>
                    </td>
                    <td className="px-3 py-3.5">
                      <span className="rounded-lg border border-border bg-white/[0.03] px-2 py-1 text-[11.5px] text-muted">
                        {scan.type}
                      </span>
                    </td>
                    <td className="px-3 py-3.5 text-[13px] text-foreground">
                      {scan.findings}
                    </td>
                    <td className="px-3 py-3.5">
                      <span
                        className={cn(
                          "text-[13px] font-semibold",
                          scan.critical > 0
                            ? "text-[var(--color-critical)]"
                            : "text-muted"
                        )}
                      >
                        {scan.critical}
                      </span>
                    </td>
                    <td className="px-3 py-3.5">
                      <StatusPill status={scan.status} />
                    </td>
                    <td className="px-3 py-3.5 text-[12.5px] text-muted">
                      {scan.time}
                    </td>
                    <td className="px-3 py-3.5">
                      <button className="grid size-7 place-items-center rounded-lg text-muted opacity-0 transition-all hover:bg-white/[0.06] hover:text-foreground group-hover:opacity-100">
                        <MoreHorizontal className="size-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </MotionItem>
  );
}
