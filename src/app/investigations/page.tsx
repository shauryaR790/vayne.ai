"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { recentFindings, severityLabel } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function InvestigationsPage() {
  return (
    <AppShell activeNav="investigations">
      <div className="mx-auto max-w-[1200px] px-5 py-8 lg:px-8">
        <div className="mb-8 border-b border-white pb-6">
          <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
            Investigations
          </h1>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
            Active AI-led security investigations
          </p>
        </div>

        <div className="space-y-3">
          {recentFindings.map((finding) => (
            <Link key={finding.id} href={`/investigations/${finding.id}`}>
              <Card className="flex items-center justify-between p-5 transition-colors hover:bg-white/5">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-wide">
                      {finding.name}
                    </span>
                    <Badge
                      variant={
                        finding.severity === "critical" ? "critical" : "default"
                      }
                    >
                      {severityLabel[finding.severity]}
                    </Badge>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-white/50">
                    {finding.asset} · {finding.confidence}% confidence
                  </p>
                </div>
                <ArrowRight className="size-4 text-white/50" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
