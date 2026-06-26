"use client";

import { cn } from "@/lib/utils";
import type { AttackPathNode } from "@/lib/mock-data";

const STAGE_LABELS = ["ENTRY", "PIVOT", "ESCALATE", "IMPACT", "COMPROMISE"];

export function AttackChainTimeline({ nodes }: { nodes: AttackPathNode[] }) {
  return (
    <div className="border-t border-white/15 px-4 py-6 sm:px-6">
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
        Compromise progression
      </p>

      <div className="mt-5 flex items-start">
        {nodes.map((node, i) => {
          const active = node.active ?? i > 0;
          const isLast = i === nodes.length - 1;
          const stage =
            STAGE_LABELS[i] ?? `STAGE ${String(i + 1).padStart(2, "0")}`;

          return (
            <div key={node.id} className="flex min-w-0 flex-1 items-start">
              <div className="flex w-full flex-col items-center">
                <span className="font-mono text-[9px] font-bold tracking-widest text-white/35">
                  {stage}
                </span>
                <span
                  className={cn(
                    "mt-2 w-full border px-1 py-1.5 text-center text-[8px] font-bold uppercase leading-tight sm:text-[9px]",
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/25 text-white/45"
                  )}
                >
                  {node.label}
                </span>
                {node.privilegeGained && (
                  <span className="mt-1.5 text-center text-[8px] font-bold uppercase tracking-wide text-white/40">
                    {node.privilegeGained}
                  </span>
                )}
              </div>

              {!isLast && (
                <div className="mt-6 flex shrink-0 flex-col items-center px-0.5 sm:px-1">
                  <div
                    className={cn(
                      "h-px w-4 sm:w-8",
                      active ? "bg-white" : "bg-white/20"
                    )}
                  />
                  <span className="my-0.5 font-mono text-[8px] text-white/30">
                    →
                  </span>
                  <div
                    className={cn(
                      "h-px w-4 sm:w-8",
                      nodes[i + 1]?.active ? "bg-white" : "bg-white/20"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
