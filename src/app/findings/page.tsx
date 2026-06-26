"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AppShell } from "@/components/layout/app-shell";
import { AskVayneButton } from "@/components/shared/ask-vayne-button";
import { recentFindings, severityLabel } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FindingsPage() {
  return (
    <AppShell activeNav="findings">
      <div className="mx-auto max-w-[1200px] px-5 py-8 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-white pb-6">
          <div>
            <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
              Findings
            </h1>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
              {recentFindings.length} AI-validated vulnerabilities
            </p>
          </div>
          <AskVayneButton />
        </div>

        <div className="space-y-4">
          {recentFindings.map((finding) => (
            <Link key={finding.id} href={`/investigations/${finding.id}`}>
              <Card className="p-5 transition-colors hover:bg-white/5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-[13px] font-bold uppercase tracking-wide">
                        {finding.name}
                      </h2>
                      <Badge
                        variant={
                          finding.severity === "critical"
                            ? "critical"
                            : "default"
                        }
                      >
                        {severityLabel[finding.severity]}
                      </Badge>
                      <span className="text-[11px] font-bold text-white/60">
                        {finding.confidence}% confidence
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-[11px] text-white/50">
                      {finding.asset}
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                          Exploitability
                        </p>
                        <p className="mt-1 text-[12px] font-bold">
                          {finding.exploitability}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                          Business Impact
                        </p>
                        <p className="mt-1 text-[12px]">
                          {finding.businessImpact}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                          AI Reasoning
                        </p>
                        <p className="mt-1 text-[12px] text-white/60">
                          {finding.aiReasoning}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm" className="shrink-0">
                    Investigate
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
