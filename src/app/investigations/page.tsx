"use client";

import { AppShell } from "@/components/layout/app-shell";
import { InvestigationCard } from "@/components/investigations/investigation-card";
import { recentFindings } from "@/lib/mock-data";

export default function InvestigationsPage() {
  return (
    <AppShell activeNav="investigations">
      <div className="mx-auto max-w-[1280px] px-5 py-8 lg:px-8">
        <div className="mb-8 border-b border-white pb-6">
          <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
            Investigations
          </h1>
          <p className="mt-2 text-[13px] font-bold uppercase tracking-wider text-white/50">
            {recentFindings.length} active AI-led security investigations
          </p>
        </div>

        <div className="space-y-5">
          {recentFindings.map((finding) => (
            <InvestigationCard key={finding.id} finding={finding} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
