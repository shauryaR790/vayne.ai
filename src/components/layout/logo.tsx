import { cn } from "@/lib/utils";

export function VayneLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative grid size-9 place-items-center rounded-xl bg-accent shadow-[0_8px_24px_-8px_rgba(255,90,31,0.7)]">
        <svg
          viewBox="0 0 24 24"
          className="size-5 text-accent-foreground"
          fill="none"
        >
          <path
            d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <path
            d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m8.5 11.5 2.5 2.5 4.5-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -inset-px rounded-xl ring-1 ring-inset ring-white/20" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">VAYNE</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Security
        </span>
      </div>
    </div>
  );
}
