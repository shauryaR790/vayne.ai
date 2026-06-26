import { cn } from "@/lib/utils";
import type { AttackPathNode } from "@/lib/mock-data";

export function AttackPathGraph({
  nodes,
  riskScore,
  className,
}: {
  nodes: AttackPathNode[];
  riskScore?: number;
  className?: string;
}) {
  return (
    <div className={cn("border border-white bg-black p-6", className)}>
      <div className="flex flex-col items-center">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex w-full flex-col items-center">
            <div className="flex w-full max-w-xs items-center justify-center border border-white px-4 py-3 text-center text-[11px] font-bold uppercase tracking-wider">
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <div className="flex flex-col items-center py-2">
                <div className="h-6 w-px bg-white/40" />
                <span className="text-[10px] text-white/40">↓</span>
                <div className="h-6 w-px bg-white/40" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/20 pt-4">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center">
            <span className="size-2 border border-white bg-white" />
            {i < nodes.length - 1 && (
              <span className="mx-1 h-px w-4 bg-white/40 sm:w-8" />
            )}
          </div>
        ))}
      </div>

      {riskScore != null && (
        <p className="mt-4 text-center text-[11px] font-bold uppercase tracking-wider">
          Risk Score:{" "}
          <span className="text-white">{riskScore.toFixed(1)}/10</span>
        </p>
      )}
    </div>
  );
}
