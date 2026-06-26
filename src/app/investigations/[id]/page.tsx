import Link from "next/link";
import { notFound } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { AskVayneButton } from "@/components/shared/ask-vayne-button";
import { AttackPathGraph } from "@/components/shared/attack-path-graph";
import { getInvestigation, severityLabel } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default async function InvestigationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const investigation = getInvestigation(id);

  if (!investigation) {
    notFound();
  }

  return (
    <AppShell activeNav="investigations">
      <div className="mx-auto max-w-[1200px] px-5 py-8 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 border-b border-white pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
              {investigation.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Badge
                variant={
                  investigation.severity === "critical"
                    ? "critical"
                    : "default"
                }
              >
                {severityLabel[investigation.severity]}
              </Badge>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                Confidence: {investigation.confidence}%
              </span>
            </div>
          </div>
          <AskVayneButton />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                AI Investigation
              </p>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                  Root Cause
                </p>
                <p className="mt-1 text-[13px]">{investigation.rootCause}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                  Business Impact
                </p>
                <p className="mt-1 text-[13px]">
                  {investigation.businessImpact}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                    Confidence
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {investigation.aiConfidence}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                    Est. Exploit Time
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    {investigation.exploitTime}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Attack Path Visualization
            </p>
            <AttackPathGraph
              nodes={investigation.nodes}
              riskScore={investigation.riskScore}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Remediation Timeline
              </p>
              <ul className="mt-4 space-y-3">
                {investigation.remediation.map((step) => (
                  <li
                    key={step.action}
                    className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0"
                  >
                    <span className="mt-0.5 size-3 shrink-0 border border-white" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                        {step.timeframe}
                      </p>
                      <p className="mt-0.5 text-[12px]">{step.action}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Technical Evidence
              </p>
              <dl className="mt-4 space-y-3 text-[12px]">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/50">Affected Resource</dt>
                  <dd className="font-mono font-bold">
                    {investigation.evidence.resource}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/50">Public Access</dt>
                  <dd className="font-bold">
                    {investigation.evidence.publicAccess}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <dt className="text-white/50">IAM Keys</dt>
                  <dd className="font-bold">
                    {investigation.evidence.iamKeys}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/50">Exposure</dt>
                  <dd className="font-bold">
                    {investigation.evidence.exposure}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Link
            href="/findings"
            className="text-[11px] font-bold uppercase tracking-wider text-white/50 hover:text-white"
          >
            ← Back to findings
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
