"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Finding } from "@/lib/mock-data";
import { severityLabel } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { ConfidenceRing } from "@/components/shared/confidence-ring";
import { RiskMeter } from "@/components/shared/risk-meter";
import {
  MetricTile,
  SectionLabel,
  WorkspaceCard,
} from "@/components/shared/workspace-card";

export function InvestigationCard({ finding }: { finding: Finding }) {
  return (
    <Link href={`/investigations/${finding.id}`} className="block">
      <WorkspaceCard className="p-0">
        {/* TOP */}
        <div className="flex flex-col gap-5 border-b border-white/15 p-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-black uppercase tracking-wide sm:text-xl">
                {finding.name}
              </h2>
              <Badge
                variant={
                  finding.severity === "critical" ? "critical" : "default"
                }
              >
                {severityLabel[finding.severity]}
              </Badge>
              <span className="border border-white/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                {finding.investigationStatus}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] sm:grid-cols-4">
              <div>
                <SectionLabel>Asset</SectionLabel>
                <p className="mt-1 font-mono text-[13px] font-medium text-white/80">
                  {finding.asset}
                </p>
              </div>
              <div>
                <SectionLabel>Asset Type</SectionLabel>
                <p className="mt-1 font-medium">{finding.assetType}</p>
              </div>
              <div>
                <SectionLabel>Discovered</SectionLabel>
                <p className="mt-1 font-medium">{finding.discoveredAt}</p>
              </div>
              <div>
                <SectionLabel>Exploit Time</SectionLabel>
                <p className="mt-1 font-bold">{finding.exploitTime}</p>
              </div>
            </div>
          </div>
          <ConfidenceRing value={finding.confidence} size={72} />
        </div>

        {/* MIDDLE */}
        <div className="grid gap-0 border-b border-white/15 lg:grid-cols-2">
          <div className="border-b border-white/15 p-6 lg:border-b-0 lg:border-r">
            <SectionLabel>AI Investigation</SectionLabel>
            <p className="mt-3 text-[14px] leading-relaxed text-white/75">
              {finding.aiSummary}
            </p>
          </div>
          <div className="p-6">
            <SectionLabel>Root Cause</SectionLabel>
            <p className="mt-3 text-[14px] leading-relaxed text-white/75">
              {finding.rootCause}
            </p>
          </div>
        </div>

        {/* Attack chain preview */}
        <div className="border-b border-white/15 px-6 py-4">
          <SectionLabel>Attack Path Preview</SectionLabel>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {finding.attackChainPreview.map((node, i) => (
              <span key={node} className="flex items-center gap-2">
                <span className="border border-white/40 bg-white/[0.04] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">
                  {node}
                </span>
                {i < finding.attackChainPreview.length - 1 && (
                  <span className="text-white/30">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM metrics */}
        <div className="grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-5">
          <MetricTile label="Business Impact" value={finding.businessImpact} />
          <MetricTile label="Exploitability" value={finding.exploitability} />
          <MetricTile
            label="Risk Score"
            value={finding.riskScore.toFixed(1)}
            large
          />
          <MetricTile
            label="Path Depth"
            value={finding.attackPathDepth}
            large
          />
          <div className="col-span-2 border border-white/15 bg-black p-4 sm:col-span-1">
            <SectionLabel>Remediation</SectionLabel>
            <p className="mt-2 text-[13px] font-bold leading-snug">
              {finding.remediationPriority}
            </p>
            <div className="mt-3 flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider text-white/50 transition-colors group-hover:text-white">
              Open
              <ArrowRight className="size-3.5" />
            </div>
          </div>
        </div>

        <div className="px-6 py-4">
          <RiskMeter value={finding.riskScore} label="Investigation Risk" />
        </div>
      </WorkspaceCard>
    </Link>
  );
}
