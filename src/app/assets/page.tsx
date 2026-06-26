"use client";

import { AppShell } from "@/components/layout/app-shell";
import { AssetManifestRow } from "@/components/assets/asset-manifest-row";
import { assets } from "@/lib/mock-data";

export default function AssetsPage() {
  return (
    <AppShell activeNav="assets">
      <div className="mx-auto max-w-[1280px] px-5 py-8 lg:px-8">
        <div className="mb-10 border-b border-white pb-6">
          <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
            Assets
          </h1>
          <p className="mt-2 text-[13px] font-bold uppercase tracking-wider text-white/50">
            {assets.length} infrastructure targets · live manifest
          </p>
        </div>

        <div className="mb-6 hidden grid-cols-[auto_1fr_auto] gap-6 border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 sm:grid">
          <span>#</span>
          <span>Target</span>
          <span className="text-right">Status</span>
        </div>

        <div>
          {assets.map((asset, i) => (
            <AssetManifestRow key={asset.id} asset={asset} index={i} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
