"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import type { Asset } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/shared/risk-meter";

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
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 transition-colors group-hover:text-black/55">
        {label}
      </p>
      <p
        className={cn(
          "mt-1 truncate text-[13px] font-bold transition-colors group-hover:font-black group-hover:text-black",
          mono ? "font-mono" : "uppercase"
        )}
      >
        {value}
      </p>
    </div>
  );
}

function ManifestLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/45 transition-colors group-hover:text-black/55">
      {children}
    </p>
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
  const isCritical = asset.riskLevel === "Critical";

  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      className="group border border-white/25 bg-black px-6 py-8 text-white transition-colors duration-200 hover:border-black hover:bg-white hover:text-black sm:px-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4 sm:gap-6">
          <span className="shrink-0 font-mono text-[11px] font-bold tracking-widest text-white/30 transition-colors group-hover:font-black group-hover:text-black/40">
            {idx}
          </span>
          <div className="min-w-0">
            <h2 className="font-mono text-lg font-black uppercase tracking-tight transition-colors group-hover:text-black sm:text-xl">
              {asset.hostname}
            </h2>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45 transition-colors group-hover:font-black group-hover:text-black/60">
              {asset.assetType} · {asset.environment}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
          <Badge
            variant={isCritical ? "critical" : "default"}
            className={cn(
              "transition-colors",
              isCritical
                ? "group-hover:border-black group-hover:bg-black group-hover:text-white"
                : "group-hover:border-black group-hover:text-black"
            )}
          >
            {asset.riskLevel}
          </Badge>
          <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 transition-colors group-hover:font-black group-hover:text-black">
            {asset.hostStatus}
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-6">
        <ManifestField label="IP" value={asset.ip} mono />
        <ManifestField label="Exposure" value={asset.exposureLevel} />
        <ManifestField label="Last Scan" value={asset.lastScan} />
        <ManifestField label="Findings" value={asset.findings} />
        <ManifestField label="Critical" value={asset.critical} />
        <ManifestField label="Attack Paths" value={asset.attackPaths} />
      </div>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8">
        <div className="min-w-0 flex-1">
          <ManifestLabel>Tech Stack</ManifestLabel>
          <p className="mt-2 font-mono text-[12px] font-bold uppercase tracking-wide text-white/70 transition-colors group-hover:font-black group-hover:text-black">
            {asset.technologies.join(" · ")}
          </p>
        </div>
        <div className="shrink-0">
          <ManifestLabel>Ports</ManifestLabel>
          <p className="mt-2 font-mono text-[13px] font-bold transition-colors group-hover:font-black group-hover:text-black">
            {asset.ports.map((p) => `:${p}`).join("  ")}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <ProgressBar
          value={asset.exposureScore}
          label="Exposure Score"
          invertOnGroupHover
        />
        <ProgressBar
          value={asset.healthScore}
          label="Asset Health"
          invertOnGroupHover
        />
      </div>
    </motion.article>
  );
}
