"use client";

import type { Asset } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { CollapsibleWorkspaceCard } from "@/components/shared/collapsible-workspace-card";
import { ProgressBar } from "@/components/shared/risk-meter";
import {
  MetricTile,
  SectionLabel,
} from "@/components/shared/workspace-card";

export function AssetCard({ asset }: { asset: Asset }) {
  return (
    <CollapsibleWorkspaceCard
      expandLabel="Inspect asset"
      previewValue={asset.exposureScore}
      title={
        <h2 className="font-mono text-base font-black uppercase sm:text-lg">
          {asset.hostname}
        </h2>
      }
      subtitle={
        <p className="text-[12px] font-bold uppercase tracking-wider text-white/45">
          {asset.assetType}
        </p>
      }
      trailing={
        <div className="flex flex-wrap justify-end gap-2">
          <Badge
            variant={asset.riskLevel === "Critical" ? "critical" : "default"}
          >
            {asset.riskLevel}
          </Badge>
          <span className="border border-black bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
            {asset.environment}
          </span>
        </div>
      }
    >
      <div className="grid gap-px border-b border-white/15 bg-black sm:grid-cols-2">
        <div className="bg-white/[0.04] p-5">
          <SectionLabel>IP Address</SectionLabel>
          <p className="mt-2 font-mono text-[15px] font-bold">{asset.ip}</p>
        </div>
        <div className="bg-white/[0.04] p-5">
          <SectionLabel>Host Status</SectionLabel>
          <p className="mt-2 text-[15px] font-bold uppercase">
            {asset.hostStatus}
          </p>
        </div>
        <div className="bg-white/[0.04] p-5">
          <SectionLabel>Exposure</SectionLabel>
          <p className="mt-2 text-[14px] font-medium uppercase">
            {asset.exposureLevel}
          </p>
        </div>
        <div className="bg-white/[0.04] p-5">
          <SectionLabel>Last Scan</SectionLabel>
          <p className="mt-2 text-[14px] font-medium uppercase">
            {asset.lastScan}
          </p>
        </div>
      </div>

      <div className="border-b border-white/15 p-6">
        <SectionLabel>Tech Stack</SectionLabel>
        <div className="mt-3 flex flex-wrap gap-2">
          {asset.technologies.map((tech) => (
            <span
              key={tech}
              className="border border-black bg-white/[0.04] px-3 py-1.5 text-[12px] font-bold uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="border-b border-white/15 p-6">
        <SectionLabel>Open Ports</SectionLabel>
        <div className="mt-3 flex flex-wrap gap-2">
          {asset.ports.map((port) => (
            <span
              key={port}
              className="border border-black bg-white/[0.04] px-3 py-1.5 font-mono text-[13px] font-bold"
            >
              {port}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-5 p-6">
        <ProgressBar value={asset.exposureScore} label="Exposure Score" />
        <ProgressBar value={asset.healthScore} label="Asset Health" />
      </div>

      <div className="grid grid-cols-2 gap-px bg-black sm:grid-cols-4">
        <MetricTile label="Findings" value={asset.findings} large />
        <MetricTile label="Critical" value={asset.critical} large />
        <MetricTile label="Attack Paths" value={asset.attackPaths} large />
        <MetricTile
          label="Exposure"
          value={asset.exposureScore}
          sub="/ 100"
          large
        />
      </div>
    </CollapsibleWorkspaceCard>
  );
}
