"use client";

import { AppShell } from "@/components/layout/app-shell";
import { AssetCard } from "@/components/assets/asset-card";
import { assets } from "@/lib/mock-data";

export default function AssetsPage() {
  return (
    <AppShell activeNav="assets">
      <div className="mx-auto max-w-[1280px] px-5 py-8 lg:px-8">
        <div className="mb-8 border-b border-white pb-6">
          <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
            Assets
          </h1>
          <p className="mt-2 text-[13px] font-bold uppercase tracking-wider text-white/50">
            {assets.length} discovered infrastructure targets under continuous
            monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
