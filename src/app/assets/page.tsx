import { AppShell } from "@/components/layout/app-shell";
import { assets } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AssetsPage() {
  return (
    <AppShell activeNav="assets">
      <div className="mx-auto max-w-[1200px] px-5 py-8 lg:px-8">
        <div className="mb-8 border-b border-white pb-6">
          <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
            Assets
          </h1>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
            {assets.length} discovered assets
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {assets.map((asset) => (
            <Card key={asset.id} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-mono text-[13px] font-bold">
                  {asset.hostname}
                </h2>
                <Badge
                  variant={
                    asset.riskLevel === "Critical" ? "critical" : "default"
                  }
                >
                  {asset.riskLevel}
                </Badge>
              </div>

              <dl className="mt-4 space-y-3 text-[12px]">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                    IP
                  </dt>
                  <dd className="mt-1 font-mono">{asset.ip}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                    Ports
                  </dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {asset.ports.map((port) => (
                      <span
                        key={port}
                        className="border border-white/40 px-2 py-0.5 font-mono text-[11px]"
                      >
                        {port}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                    Tech
                  </dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {asset.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/40 px-2 py-0.5 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="flex gap-6 border-t border-white/20 pt-3">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      Findings
                    </dt>
                    <dd className="mt-1 text-lg font-bold">{asset.findings}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      Critical
                    </dt>
                    <dd className="mt-1 text-lg font-bold">{asset.critical}</dd>
                  </div>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
