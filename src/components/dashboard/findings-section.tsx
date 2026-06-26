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
import { Card } from "@/components/ui/card";
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
  const inner = (
    <Card className="flex h-full flex-col p-5 transition-colors hover:bg-white/5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-[12px] font-bold uppercase tracking-wide">
            {finding.name}
          </h4>
          <p className="mt-1.5 truncate font-mono text-[11px] text-white/50">
            {finding.asset}
          </p>
        </div>
        <Badge
          variant={finding.severity === "critical" ? "critical" : "default"}
        >
          {severityLabel[finding.severity]}
        </Badge>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-[11px]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
            Confidence
          </p>
          <p className="mt-1 font-bold">{finding.confidence}%</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
            Exploitability
          </p>
          <p className="mt-1 font-bold">{finding.exploitability}</p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
            Business Impact
          </p>
          <p className="mt-1">{finding.businessImpact}</p>
        </div>
      </div>

      <div className="mt-4 flex-1 border-t border-white/20 pt-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
          AI Reasoning
        </p>
        <p className="mt-2 text-[12px] leading-relaxed text-white/60">
          {finding.aiReasoning}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
          Investigate →
        </span>
        <Button variant="secondary" size="sm">
          Open
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </Card>
  );

  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {linkToInvestigation ? (
        <Link href={`/investigations/${finding.id}`} className="block">
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
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em]">
              Recent Findings
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
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
