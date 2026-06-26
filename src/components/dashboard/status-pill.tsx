import { cn } from "@/lib/utils";
import type { ScanStatus } from "@/lib/mock-data";

const map: Record<ScanStatus, { label: string; dot: string; text: string }> = {
  completed: {
    label: "Completed",
    dot: "bg-[var(--color-success)]",
    text: "text-[var(--color-success)]",
  },
  running: {
    label: "Running",
    dot: "bg-accent animate-pulse",
    text: "text-accent",
  },
  queued: {
    label: "Queued",
    dot: "bg-[var(--color-low)]",
    text: "text-[var(--color-low)]",
  },
  failed: {
    label: "Failed",
    dot: "bg-[var(--color-critical)]",
    text: "text-[var(--color-critical)]",
  },
};

export function StatusPill({ status }: { status: ScanStatus }) {
  const s = map[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11.5px] font-medium",
        s.text
      )}
    >
      <span className={cn("size-1.5 rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}
