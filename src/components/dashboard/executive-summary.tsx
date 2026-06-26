import { executiveSummary } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";

export function ExecutiveSummary() {
  const s = executiveSummary;
  return (
    <Card>
      <CardContent className="space-y-3 py-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          Executive Summary
        </p>
        <ul className="space-y-2 text-[13px] leading-relaxed text-white/80">
          <li>Attack surface increased by {s.surfaceIncrease}.</li>
          <li>{s.criticalFindings} critical findings discovered.</li>
          <li>AI validated {s.falsePositivesValidated} false positives.</li>
          <li>
            One high-risk attack path to production was identified.
          </li>
          <li>
            Estimated analyst time saved:{" "}
            <span className="font-bold text-white">{s.hoursSaved} hours</span>.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
