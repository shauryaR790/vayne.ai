import { AppShell } from "@/components/layout/app-shell";
import { attackPaths } from "@/lib/mock-data";
import { AttackPathGraph } from "@/components/shared/attack-path-graph";
import { Card } from "@/components/ui/card";

export default function AttackPathsPage() {
  return (
    <AppShell activeNav="attack-paths">
      <div className="mx-auto max-w-[1200px] px-5 py-8 lg:px-8">
        <div className="mb-8 border-b border-white pb-6">
          <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
            Attack Paths
          </h1>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
            Visual attack graph analysis
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {attackPaths.map((path) => (
            <div key={path.id}>
              <h2 className="mb-4 text-[12px] font-bold uppercase tracking-wider">
                {path.title}
              </h2>
              <AttackPathGraph nodes={path.nodes} riskScore={path.riskScore} />
              <Card className="mt-4 p-4">
                <div className="grid grid-cols-3 gap-4 text-center text-[11px]">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      Risk Score
                    </p>
                    <p className="mt-1 text-xl font-bold">
                      {path.riskScore}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      Likelihood
                    </p>
                    <p className="mt-1 font-bold">{path.likelihood}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      Impact
                    </p>
                    <p className="mt-1 font-bold">{path.impact}</p>
                  </div>
                </div>
                <p className="mt-3 border-t border-white/20 pt-3 text-center text-[10px] font-bold uppercase tracking-wider text-white/50">
                  Exploitability: {path.exploitability}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
