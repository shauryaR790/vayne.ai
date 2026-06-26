"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Finding } from "@/lib/mock-data";
import { severityLabel } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { CollapsibleWorkspaceCard } from "@/components/shared/collapsible-workspace-card";
import { ProgressBar } from "@/components/shared/risk-meter";
import { RiskMeter } from "@/components/shared/risk-meter";
import { SectionLabel } from "@/components/shared/workspace-card";

export function FindingCardRich({ finding }: { finding: Finding }) {
  const exploitPct =
    finding.exploitability === "High"
      ? 90
      : finding.exploitability === "Medium"
        ? 55
        : 25;

  return (
    <CollapsibleWorkspaceCard
      expandLabel="View finding details"
      previewValue={finding.confidence}
      title={
        <>
          <h2 className="text-base font-black uppercase leading-snug tracking-wide sm:text-lg">
            {finding.name}
          </h2>
          <Badge
            variant={
              finding.severity === "critical" ? "critical" : "default"
            }
          >
            {severityLabel[finding.severity]}
          </Badge>
        </>
      }
      subtitle={
        <p className="font-mono text-[12px] text-white/55">{finding.asset}</p>
      }
    >
      <div className="grid gap-0 lg:grid-cols-12">
        <div className="space-y-4 border-b border-white/15 p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
          <div>
            <SectionLabel>Target Asset</SectionLabel>
            <p className="mt-2 font-mono text-[13px] uppercase text-white/80">
              {finding.asset}
            </p>
          </div>
          <div>
            <SectionLabel>Asset Type</SectionLabel>
            <p className="mt-2 text-[13px] font-bold uppercase">
              {finding.assetType}
            </p>
          </div>
          {finding.cve && (
            <div>
              <SectionLabel>CVE</SectionLabel>
              <p className="mt-2 font-mono text-[12px] uppercase text-white/60">
                {finding.cve}
              </p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <SectionLabel>Discovered</SectionLabel>
              <p className="mt-2 text-[12px] font-bold uppercase">
                {finding.discoveredAt}
              </p>
            </div>
            <div>
              <SectionLabel>Exploit Time</SectionLabel>
              <p className="mt-2 text-[12px] font-bold uppercase">
                {finding.exploitTime}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 border-b border-white/15 p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
          <ProgressBar value={finding.confidence} label="Confidence" />
          <ProgressBar
            value={exploitPct}
            label="Exploitability"
            display={finding.exploitability}
          />
          <div>
            <SectionLabel>Business Impact</SectionLabel>
            <p className="mt-2 text-[15px] font-bold uppercase leading-snug">
              {finding.businessImpact}
            </p>
          </div>
        </div>

        <div className="flex flex-col p-6 lg:col-span-4">
          <SectionLabel>AI Reasoning</SectionLabel>
          <p className="mt-3 flex-1 text-[14px] leading-relaxed text-white/70">
            {finding.aiReasoning}
          </p>
          <div className="mt-5 border-t border-white/15 pt-5">
            <RiskMeter value={finding.riskScore} label="Risk Score" />
          </div>
          <Link
            href={`/investigations/${finding.id}`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-white bg-white/[0.06] px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-colors hover:bg-white hover:text-black sm:w-auto"
          >
            Investigate
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </CollapsibleWorkspaceCard>
  );
}
