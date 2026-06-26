"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Finding } from "@/lib/mock-data";
import { severityLabel } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/shared/risk-meter";
import { RiskMeter } from "@/components/shared/risk-meter";
import { SectionLabel, WorkspaceCard } from "@/components/shared/workspace-card";

export function FindingCardRich({ finding }: { finding: Finding }) {
  const exploitPct =
    finding.exploitability === "High"
      ? 90
      : finding.exploitability === "Medium"
        ? 55
        : 25;

  return (
    <Link href={`/investigations/${finding.id}`} className="block">
      <WorkspaceCard className="p-0">
        <div className="grid gap-0 lg:grid-cols-12">
          {/* LEFT */}
          <div className="border-b border-white/15 p-6 lg:col-span-3 lg:border-b-0 lg:border-r">
            <h2 className="text-base font-black uppercase leading-snug tracking-wide sm:text-lg">
              {finding.name}
            </h2>
            <p className="mt-2 font-mono text-[13px] text-white/55">
              {finding.asset}
            </p>
            <div className="mt-4">
              <Badge
                variant={
                  finding.severity === "critical" ? "critical" : "default"
                }
              >
                {severityLabel[finding.severity]}
              </Badge>
            </div>
            {finding.cve && (
              <p className="mt-3 border border-white/25 px-2 py-1 font-mono text-[11px] text-white/50">
                {finding.cve}
              </p>
            )}
          </div>

          {/* CENTER */}
          <div className="space-y-5 border-b border-white/15 p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
            <ProgressBar value={finding.confidence} label="Confidence" />
            <ProgressBar
              value={exploitPct}
              label="Exploitability"
              display={finding.exploitability}
            />
            <div>
              <SectionLabel>Business Impact</SectionLabel>
              <p className="mt-2 text-[15px] font-bold leading-snug">
                {finding.businessImpact}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col p-6 lg:col-span-5">
            <SectionLabel>AI Reasoning</SectionLabel>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-white/70">
              {finding.aiReasoning}
            </p>
            <div className="mt-5 border-t border-white/15 pt-5">
              <RiskMeter value={finding.riskScore} label="Risk Score" />
            </div>
            <span className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-white bg-white/[0.06] px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-colors group-hover:bg-white group-hover:text-black sm:w-auto">
              Investigate
              <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
      </WorkspaceCard>
    </Link>
  );
}
