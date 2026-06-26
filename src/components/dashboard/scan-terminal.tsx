"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { MotionItem } from "./motion";

export function ScanTerminal() {
  return (
    <MotionItem className="h-full">
      <Terminal className="h-full min-h-[320px]">
        <TypingAnimation duration={30}>
          $ vayne scan --surface vayne-corp.io
        </TypingAnimation>
        <AnimatedSpan className="text-white/50">
          [init] attack surface monitor · 2 active jobs
        </AnimatedSpan>
        <AnimatedSpan>
          [done] vayne-corp.io · full surface · 42 findings · 5 critical
        </AnimatedSpan>
        <AnimatedSpan>
          [run ] api.vayne-corp.io · api recon · 64% · 18 findings
        </AnimatedSpan>
        <AnimatedSpan>
          [done] 10.0.0.0/16 · internal net · 96 findings · 7 critical
        </AnimatedSpan>
        <AnimatedSpan>
          [done] auth.vayne-corp.io · web app · 11 findings · 0 critical
        </AnimatedSpan>
        <AnimatedSpan className="text-white/50">
          [wait] cdn.vayne-corp.io · dns/cdn · scheduled
        </AnimatedSpan>
        <AnimatedSpan className="text-white/40">
          ── summary: 167 findings · 14 critical · 41h saved
        </AnimatedSpan>
      </Terminal>
    </MotionItem>
  );
}
