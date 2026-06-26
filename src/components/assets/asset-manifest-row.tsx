"use client";

import { motion } from "motion/react";

import type { Asset } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/shared/risk-meter";
import { SectionLabel } from "@/components/shared/workspace-card";

function ManifestField({
  label,
  value,
  mono,
}: {
  label: string;
  value: string | number;
  mono?: boolean;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
        {label}
      </p>
      <p
        className={`mt-1 truncate text-[13px] font-bold ${mono ? "font-mono" : "uppercase"}`}
      >
        {value}
      </p>
    </div>
  );
}

export function AssetManifestRow({
  asset,
  index,
}: {
  asset: Asset;
  index: number;
}) {
  const idx = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      className="group border-b border-white/15 py-8 first:pt-0 last:border-b-0"
    >
      {/* Primary rail */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4 sm:gap-6">
          <span className="shrink-0 font-mono text-[11px] font-bold tracking-widest text-white/30">
            {idx}
          </span>
          <div className="min-w-0">
            <h2 className="font-mono text-lg font-black uppercase tracking-tight sm:text-xl">
              {asset.hostname}
            </h2>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
              {asset.assetType} · {asset.environment}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
          <Badge
            variant={asset.riskLevel === "Critical" ? "critical" : "default"}
          >
            {asset.riskLevel}
          </Badge>
          <span className="text-[11px] font-bold uppercase tracking-wider text-white/40">
            {asset.hostStatus}
          </span>
        </div>
      </div>

      {/* Telemetry strip */}
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-6">
        <ManifestField label="IP" value={asset.ip} mono />
        <ManifestField label="Exposure" value={asset.exposureLevel} />
        <ManifestField label="Last Scan" value={asset.lastScan} />
        <ManifestField label="Findings" value={asset.findings} />
        <ManifestField label="Critical" value={asset.critical} />
        <ManifestField label="Attack Paths" value={asset.attackPaths} />
      </div>

      {/* Stack + ports — inline manifest line */}
      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
        <div className="min-w-0 flex-1">
          <SectionLabel>Tech Stack</SectionLabel>
          <p className="mt-2 font-mono text-[12px] font-bold uppercase tracking-wide text-white/70">
            {asset.technologies.join(" · ")}
          </p>
        </div>
        <div className="shrink-0">
          <SectionLabel>Ports</SectionLabel>
          <p className="mt-2 font-mono text-[13px] font-bold text-white">
            {asset.ports.map((p) => `:${p}`).join("  ")}
          </p>
        </div>
      </div>

      {/* Full-width vitals */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <ProgressBar value={asset.exposureScore} label="Exposure Score" />
        <ProgressBar value={asset.healthScore} label="Asset Health" />
      </div>

      {/* Hover scan line */}
      <div className="mt-5 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}
