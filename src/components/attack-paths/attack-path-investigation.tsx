"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import type { AttackPath, AttackPathNode } from "@/lib/mock-data";
import { ProgressBar, RiskMeter } from "@/components/shared/risk-meter";
import {
  MetricTile,
  SectionLabel,
  WorkspaceCard,
} from "@/components/shared/workspace-card";

function PathNode({
  node,
  isLast,
  index,
}: {
  node: AttackPathNode;
  isLast: boolean;
  index: number;
}) {
  const active = node.active ?? index > 0;

  return (
    <div className="flex w-full flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.08 }}
        className={cn(
          "relative w-full max-w-sm border px-5 py-4 transition-colors",
          active
            ? "border-white bg-white/[0.06]"
            : "border-white/25 bg-black"
        )}
      >
        {active && (
          <span className="absolute -left-px top-0 h-full w-1 bg-white" />
        )}
        <p className="text-[13px] font-black uppercase tracking-wider">
          {node.label}
        </p>
        {node.assetType && (
          <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/45">
            {node.assetType}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {node.riskLevel && (
            <span className="border border-white/30 px-2 py-0.5 text-[10px] font-bold uppercase">
              Risk: {node.riskLevel}
            </span>
          )}
          {node.annotation && (
            <span className="bg-white px-2 py-0.5 text-[10px] font-bold uppercase text-black">
              {node.annotation}
            </span>
          )}
        </div>
        {node.privilegeGained && (
          <p className="mt-2 text-[12px] text-white/60">
            Privilege:{" "}
            <span className="font-bold text-white">{node.privilegeGained}</span>
          </p>
        )}
        {node.exploitability && (
          <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/50">
            Exploitability: {node.exploitability}
          </p>
        )}
      </motion.div>
      {!isLast && (
        <div className="flex flex-col items-center py-1">
          <div className="h-8 w-px bg-white/50" />
          <span className="my-0.5 text-sm text-white/40">↓</span>
          <div className="h-8 w-px bg-white/50" />
        </div>
      )}
    </div>
  );
}

export function AttackPathInvestigation({ path }: { path: AttackPath }) {
  return (
    <WorkspaceCard className="overflow-hidden p-0">
      <div className="border-b border-white/15 px-6 py-5">
        <h2 className="text-base font-black uppercase tracking-wide sm:text-lg">
          {path.title}
        </h2>
        <p className="mt-1 text-[12px] font-bold uppercase tracking-wider text-white/45">
          Path confidence: {path.pathConfidence}%
        </p>
      </div>

      <div className="border-b border-white/15 p-6">
        <div className="flex flex-col items-center">
          {path.nodes.map((node, i) => (
            <PathNode
              key={node.id}
              node={node}
              index={i}
              isLast={i === path.nodes.length - 1}
            />
          ))}
        </div>

        {/* Node rail */}
        <div className="mt-8 flex items-center justify-center border-t border-white/15 pt-6">
          {path.nodes.map((node, i) => (
            <div key={node.id} className="flex items-center">
              <span
                className={cn(
                  "size-2.5 border border-white",
                  node.active ? "bg-white" : "bg-transparent"
                )}
              />
              {i < path.nodes.length - 1 && (
                <span className="mx-1 h-px w-6 bg-white/40 sm:w-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-black sm:grid-cols-4">
        <MetricTile
          label="Risk Score"
          value={path.riskScore.toFixed(1)}
          large
        />
        <MetricTile label="Likelihood" value={path.likelihood} />
        <MetricTile label="Impact" value={path.impact} />
        <MetricTile label="Complexity" value={path.complexity} />
      </div>

      <div className="space-y-5 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <SectionLabel>Blast Radius</SectionLabel>
            <p className="mt-2 text-[14px] leading-relaxed text-white/75">
              {path.blastRadius}
            </p>
          </div>
          <div>
            <SectionLabel>Estimated Exploit Time</SectionLabel>
            <p className="mt-2 text-2xl font-black">{path.exploitTime}</p>
          </div>
        </div>
        <ProgressBar
          value={path.pathConfidence}
          label="Path Confidence"
        />
        <RiskMeter value={path.riskScore} label="Attack Path Score" />
      </div>
    </WorkspaceCard>
  );
}
