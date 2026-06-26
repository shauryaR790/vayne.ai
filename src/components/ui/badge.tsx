import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-white/[0.04] text-muted",
        critical:
          "border-[var(--color-critical)]/25 bg-[var(--color-critical)]/10 text-[var(--color-critical)]",
        high: "border-[var(--color-high)]/25 bg-[var(--color-high)]/10 text-[var(--color-high)]",
        medium:
          "border-[var(--color-medium)]/25 bg-[var(--color-medium)]/10 text-[var(--color-medium)]",
        low: "border-[var(--color-low)]/25 bg-[var(--color-low)]/10 text-[var(--color-low)]",
        success:
          "border-[var(--color-success)]/25 bg-[var(--color-success)]/10 text-[var(--color-success)]",
        accent:
          "border-accent/30 bg-accent-soft text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
