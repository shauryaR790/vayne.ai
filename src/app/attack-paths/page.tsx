"use client";

import { AppShell } from "@/components/layout/app-shell";
import { AttackPathInvestigation } from "@/components/attack-paths/attack-path-investigation";
import { attackPaths } from "@/lib/mock-data";

export default function AttackPathsPage() {
  return (
    <AppShell activeNav="attack-paths">
      <div className="mx-auto max-w-[1280px] px-5 py-8 lg:px-8">
        <div className="mb-8 border-b border-white pb-6">
          <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
            Attack Paths
          </h1>
          <p className="mt-2 text-[13px] font-bold uppercase tracking-wider text-white/50">
            {attackPaths.length} high-confidence attack chains mapped by AI
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {attackPaths.map((path) => (
            <AttackPathInvestigation key={path.id} path={path} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
