"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import {
  recentFindings,
  severityLabel,
  type Finding,
} from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/shared/risk-meter";
import { RiskMeter } from "@/components/shared/risk-meter";
import { SectionLabel, WorkspaceCard } from "@/components/shared/workspace-card";
import { AskVayneButton } from "@/components/shared/ask-vayne-button";
import { MotionItem } from "./motion";

function FindingCard({
  finding,
  index,
  linkToInvestigation,
}: {
  finding: Finding;
  index: number;
  linkToInvestigation?: boolean;
}) {
  const exploitPct =
    finding.exploitability === "High"
      ? 90
      : finding.exploitability === "Medium"
        ? 55
        : 25;

  const inner = (
    <WorkspaceCard className="flex h-full flex-col p-0">
      <div className="border-b border-white/15 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="text-[14px] font-black uppercase leading-snug tracking-wide">
              {finding.name}
            </h4>
            <p className="mt-1.5 truncate font-mono text-[12px] text-white/50">
              {finding.asset}
            </p>
          </div>
          <Badge
            variant={finding.severity === "critical" ? "critical" : "default"}
          >
            {severityLabel[finding.severity]}
          </Badge>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <ProgressBar value={finding.confidence} label="Confidence" />
        <ProgressBar
          value={exploitPct}
          label="Exploitability"
          display={finding.exploitability}
        />
        <div>
          <SectionLabel>Business Impact</SectionLabel>
          <p className="mt-2 text-[13px] font-medium uppercase leading-snug">
            {finding.businessImpact}
          </p>
        </div>
        <div className="border-t border-white/15 pt-4">
          <SectionLabel>AI Reasoning</SectionLabel>
          <p className="mt-2 text-[13px] leading-relaxed text-white/65">
            {finding.aiReasoning}
          </p>
        </div>
        <RiskMeter value={finding.riskScore} label="Risk Score" />
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-white/15 px-5 py-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
          Investigate
        </span>
        <ArrowRight className="size-4 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
      </div>
    </WorkspaceCard>
  );

  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {linkToInvestigation ? (
        <Link href={`/investigations/${finding.id}`} className="block h-full">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.div>
  );
}

export function FindingsSection({
  linkToInvestigation,
  showHeader = true,
}: {
  linkToInvestigation?: boolean;
  showHeader?: boolean;
}) {
  return (
    <MotionItem>
      {showHeader && (
        <div className="mb-4 flex items-center justify-between border-b border-white pb-4">
          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em]">
              Recent Findings
            </h3>
            <p className="mt-1 text-[12px] uppercase tracking-wider text-white/50">
              AI-validated vulnerabilities
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AskVayneButton />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/findings">
                View all
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      )}

      <motion.div
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {recentFindings.map((finding, i) => (
          <FindingCard
            key={finding.id}
            finding={finding}
            index={i}
            linkToInvestigation={linkToInvestigation}
          />
        ))}
      </motion.div>
    </MotionItem>
  );
}
