import { Skeleton } from "@/components/ui/skeleton";

function CardShell({ className }: { className?: string }) {
  return (
    <div
      className={`border border-white bg-black p-5 ${className ?? ""}`}
    >
      <Skeleton className="h-3 w-28" />
      <Skeleton className="mt-4 h-8 w-20" />
      <Skeleton className="mt-3 h-3 w-32" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardShell key={i} />
        ))}
      </div>

      <div className="border border-white p-5">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="mt-5 h-44 w-full" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="border border-white">
          <div className="border-b border-white/20 p-4">
            <Skeleton className="h-2 w-12" />
          </div>
          <div className="space-y-2 p-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-3 w-full max-w-[90%]" />
            ))}
          </div>
        </div>
        <div className="border border-white p-5">
          <Skeleton className="h-4 w-32" />
          <div className="mt-5 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-14 w-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="border border-white p-5">
        <Skeleton className="h-4 w-36" />
        <div className="mt-5 space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
