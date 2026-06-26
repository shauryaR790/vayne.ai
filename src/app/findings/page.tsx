"use client";

import { AppShell } from "@/components/layout/app-shell";
import { AskVayneButton } from "@/components/shared/ask-vayne-button";
import { FindingCardRich } from "@/components/findings/finding-card-rich";
import { recentFindings } from "@/lib/mock-data";

export default function FindingsPage() {
  return (
    <AppShell activeNav="findings">
      <div className="mx-auto max-w-[1280px] px-5 py-8 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-white pb-6">
          <div>
            <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
              Findings
            </h1>
            <p className="mt-2 text-[13px] font-bold uppercase tracking-wider text-white/50">
              {recentFindings.length} AI-validated vulnerabilities — triage and
              investigate
            </p>
          </div>
          <AskVayneButton />
        </div>

        <div className="space-y-4">
          {recentFindings.map((finding) => (
            <FindingCardRich key={finding.id} finding={finding} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
