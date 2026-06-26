"use client";

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
import { MotionItem } from "./motion";

function FindingCard({ finding, index }: { finding: Finding; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="flex h-full flex-col p-5">
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

        {finding.cve && (
          <span className="mt-3 inline-block border border-white/40 px-2 py-0.5 font-mono text-[10px] text-white/60">
            {finding.cve}
          </span>
        )}

        <p className="mt-4 flex-1 text-[12px] leading-relaxed text-white/60">
          {finding.explanation}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
            {finding.confidence}% confidence
          </span>
          <Button variant="secondary" size="sm">
            Remediate
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export function FindingsSection() {
  return (
    <MotionItem>
      <div className="mb-4 flex items-center justify-between border-b border-white pb-4">
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.15em]">
            Recent Findings
          </h3>
          <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
            AI-validated vulnerabilities
          </p>
        </div>
        <Button variant="ghost" size="sm">
          View all
          <ArrowRight className="size-3.5" />
        </Button>
      </div>

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
          <FindingCard key={finding.id} finding={finding} index={i} />
        ))}
      </motion.div>
    </MotionItem>
  );
}
