import { Skeleton } from "@/components/ui/skeleton";

function CardShell({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-border bg-surface p-5 ${className ?? ""}`}
    >
      <div className="flex items-center justify-between">
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="h-5 w-10 rounded-full" />
      </div>
      <Skeleton className="mt-4 h-8 w-20" />
      <Skeleton className="mt-3 h-3 w-32" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardShell key={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-5 xl:col-span-4">
          <Skeleton className="h-4 w-40" />
          <div className="mt-5 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full rounded-2xl" />
            ))}
          </div>
        </div>
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-5 xl:col-span-5">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="mt-5 h-44 w-full rounded-2xl" />
        </div>
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-5 xl:col-span-3">
          <Skeleton className="h-4 w-32" />
          <div className="mt-5 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-14 w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
        <Skeleton className="h-4 w-36" />
        <div className="mt-5 space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
