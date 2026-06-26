"use client";

import { motion } from "motion/react";
import { Search } from "lucide-react";

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
            <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
              Latest scans across your attack surface
            </p>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <div className="flex flex-1 items-center gap-2 border border-white px-3 py-2 sm:w-56">
              <Search className="size-4 text-white/50" />
              <input
                placeholder="Search scans"
                className="w-full bg-transparent text-[12px] uppercase tracking-wider text-white outline-none placeholder:text-white/40"
              />
            </div>
            <Button variant="secondary" size="sm">
              Filter
            </Button>
          </div>
        </CardHeader>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-t border-white/20 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                <th className="border-b border-white/20 px-5 py-3">Target</th>
                <th className="border-b border-white/20 px-5 py-3">
                  Scan Type
                </th>
                <th className="border-b border-white/20 px-5 py-3">Findings</th>
                <th className="border-b border-white/20 px-5 py-3">Critical</th>
                <th className="border-b border-white/20 px-5 py-3">Status</th>
                <th className="border-b border-white/20 px-5 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentScans.map((scan, i) => (
                <motion.tr
                  key={scan.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-white/10 transition-colors hover:bg-white/5"
                >
                  <td className="px-5 py-3.5 font-mono text-[12px]">
                    {scan.target}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="border border-white/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                      {scan.type}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-[12px]">{scan.findings}</td>
                  <td className="px-5 py-3.5 text-[12px] font-bold">
                    {scan.critical}
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusPill status={scan.status} />
                  </td>
                  <td className="px-5 py-3.5 text-[11px] uppercase tracking-wider text-white/50">
                    {scan.time}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </MotionItem>
  );
}
