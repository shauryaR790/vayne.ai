"use client";

import { motion } from "motion/react";
import { ShieldCheck, Sparkles, ArrowRight, Server } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  recentFindings,
  severityLabel,
  type Finding,
  type Severity,
} from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import { MotionItem } from "./motion";

const severityBar: Record<Severity, string> = {
  critical: "bg-[var(--color-critical)]",
  high: "bg-[var(--color-high)]",
  medium: "bg-[var(--color-medium)]",
  low: "bg-[var(--color-low)]",
};

function FindingCard({ finding, index }: { finding: Finding; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="glass glass-hover group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] hover:border-border-strong"
    >
      <ShineBorder
        borderWidth={1}
        duration={14}
        shineColor={["rgba(255,90,31,0.7)", "rgba(255,255,255,0.35)"]}
      />
      <span
        className={cn(
          "absolute inset-y-0 left-0 z-10 w-[3px]",
          severityBar[finding.severity]
        )}
      />
      <div className="flex flex-1 flex-col p-5 pl-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="truncate text-[14.5px] font-semibold tracking-tight">
              {finding.name}
            </h4>
            <div className="mt-1.5 flex items-center gap-2 text-[11.5px] text-muted">
              <Server className="size-3.5" />
              <span className="truncate font-mono">{finding.asset}</span>
            </div>
          </div>
          <Badge variant={finding.severity}>
            {severityLabel[finding.severity]}
          </Badge>
        </div>

        {finding.cve && (
          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md border border-border bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted">
            {finding.cve}
          </span>
        )}

        <div className="mt-3 flex items-start gap-2 rounded-xl border border-border bg-white/[0.02] p-3">
          <Sparkles className="mt-0.5 size-3.5 shrink-0 text-accent" />
          <p className="text-[12px] leading-relaxed text-muted">
            {finding.explanation}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${finding.confidence}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-accent to-[#ff8a3d]"
              />
            </div>
            <span className="text-[11.5px] font-medium text-muted">
              {finding.confidence}% confidence
            </span>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="opacity-90 group-hover:border-accent/40 group-hover:text-accent"
          >
            Remediate
            <ArrowRight className="size-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function FindingsSection() {
  return (
    <MotionItem>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-white/[0.04] ring-1 ring-border">
            <ShieldCheck className="size-4 text-accent" />
          </span>
          <div>
            <h3 className="text-[15px] font-semibold tracking-tight">
              Recent Findings
            </h3>
            <p className="text-[12px] text-muted">
              AI-validated vulnerabilities, ranked by risk
            </p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          View all
          <ArrowRight className="size-3.5" />
        </Button>
      </div>

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
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
