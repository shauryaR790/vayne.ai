import * as React from "react";

import { cn } from "@/lib/utils";
import { ShineBorder } from "./shine-border";

function Card({
  className,
  children,
  shine = true,
  ...props
}: React.ComponentProps<"div"> & { shine?: boolean }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "glass relative overflow-hidden rounded-[var(--radius-card)] text-foreground",
        className
      )}
      {...props}
    >
      {shine && (
        <ShineBorder
          borderWidth={1}
          duration={14}
          shineColor={["rgba(255,90,31,0.7)", "rgba(255,255,255,0.35)"]}
        />
      )}
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex items-start justify-between gap-3 px-5 pt-5",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-[15px] font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-[13px] text-muted", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-5 py-5", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-5 pb-5", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
