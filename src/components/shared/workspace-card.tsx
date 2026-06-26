"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export function WorkspaceCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group block border border-white/25 bg-black transition-colors hover:border-white/50 hover:bg-white/[0.03]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function MetricTile({
  label,
  value,
  sub,
  large,
}: {
  label: string;
  value: string | number;
  sub?: string;
  large?: boolean;
}) {
  return (
    <div className="border border-white/15 bg-white/[0.02] p-4">
      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/45">
        {label}
      </p>
      <p
        className={cn(
          "mt-2 font-black leading-none",
          large ? "text-4xl" : "text-2xl"
        )}
      >
        {value}
      </p>
      {sub && (
        <p className="mt-1.5 text-[12px] font-medium text-white/55">{sub}</p>
      )}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/45">
      {children}
    </p>
  );
}
