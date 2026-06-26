/**
 * Mock cybersecurity data for the VAYNE dashboard.
 * Frontend-only — no backend. Shaped to resemble a real attack-surface platform.
 */

export type Severity = "critical" | "high" | "medium" | "low";
export type ScanStatus = "completed" | "running" | "queued" | "failed";

export type Metric = {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  // whether an upward trend is good (green) or bad (red)
  positive: boolean;
  hint: string;
  spark: number[];
};

export const metrics: Metric[] = [
  {
    id: "critical",
    label: "Critical Findings",
    value: "14",
    delta: "+3",
    trend: "up",
    positive: false,
    hint: "3 new in last 24h",
    spark: [6, 8, 7, 9, 11, 10, 14],
  },
  {
    id: "false-positives",
    label: "Likely False Positives",
    value: "37",
    delta: "-12",
    trend: "down",
    positive: true,
    hint: "Auto-triaged by AI",
    spark: [52, 49, 48, 44, 41, 39, 37],
  },
  {
    id: "new-assets",
    label: "New Assets",
    value: "26",
    delta: "+9",
    trend: "up",
    positive: true,
    hint: "Discovered this week",
    spark: [10, 12, 15, 14, 19, 22, 26],
  },
  {
    id: "time-saved",
    label: "Estimated Time Saved",
    value: "41h",
    delta: "+6h",
    trend: "up",
    positive: true,
    hint: "vs. manual triage",
    spark: [18, 22, 27, 30, 34, 38, 41],
  },
];

export type AttackSurfaceStat = {
  id: string;
  label: string;
  value: number;
  delta: number;
  // 0..1 share used for the radial / bar visualization
  ratio: number;
  color: string;
};

export const attackSurface: AttackSurfaceStat[] = [
  {
    id: "assets",
    label: "Assets Discovered",
    value: 1284,
    delta: 26,
    ratio: 1,
    color: "var(--color-accent)",
  },
  {
    id: "live-hosts",
    label: "Live Hosts",
    value: 612,
    delta: 14,
    ratio: 0.48,
    color: "var(--color-info)",
  },
  {
    id: "open-ports",
    label: "Open Ports",
    value: 3471,
    delta: 58,
    ratio: 0.72,
    color: "var(--color-low)",
  },
  {
    id: "vulnerabilities",
    label: "Vulnerabilities",
    value: 208,
    delta: -11,
    ratio: 0.36,
    color: "var(--color-high)",
  },
];

// Monthly discovery vs. resolved for the attack surface chart
export type ChartPoint = {
  label: string;
  discovered: number;
  resolved: number;
};

export const surfaceTrend: ChartPoint[] = [
  { label: "Jan", discovered: 120, resolved: 90 },
  { label: "Feb", discovered: 168, resolved: 110 },
  { label: "Mar", discovered: 142, resolved: 130 },
  { label: "Apr", discovered: 205, resolved: 150 },
  { label: "May", discovered: 248, resolved: 190 },
  { label: "Jun", discovered: 286, resolved: 240 },
  { label: "Jul", discovered: 312, resolved: 268 },
];

export type AiInsight = {
  id: string;
  type: "discovery" | "confirmed" | "cleanup" | "attack-path";
  title: string;
  detail: string;
  time: string;
};

export const aiInsights: AiInsight[] = [
  {
    id: "ai-1",
    type: "discovery",
    title: "New subdomain discovered",
    detail:
      "staging-api.vayne-corp.io exposes an unauthenticated GraphQL endpoint.",
    time: "8m ago",
  },
  {
    id: "ai-2",
    type: "confirmed",
    title: "Apache vulnerability confirmed",
    detail:
      "CVE-2024-38476 validated on 4 hosts running Apache 2.4.59 (RCE, exploitable).",
    time: "23m ago",
  },
  {
    id: "ai-3",
    type: "cleanup",
    title: "Multiple false positives removed",
    detail:
      "AI auto-triaged 12 low-confidence TLS warnings as non-exploitable noise.",
    time: "1h ago",
  },
  {
    id: "ai-4",
    type: "attack-path",
    title: "High-risk attack path detected",
    detail:
      "Exposed S3 bucket → leaked IAM key → lateral path to production database.",
    time: "2h ago",
  },
];

export type Scan = {
  id: string;
  target: string;
  type: string;
  findings: number;
  critical: number;
  status: ScanStatus;
  time: string;
  progress?: number;
};

export const recentScans: Scan[] = [
  {
    id: "scan-1",
    target: "vayne-corp.io",
    type: "Full Surface",
    findings: 42,
    critical: 5,
    status: "completed",
    time: "12m ago",
  },
  {
    id: "scan-2",
    target: "api.vayne-corp.io",
    type: "API Recon",
    findings: 18,
    critical: 2,
    status: "running",
    time: "now",
    progress: 64,
  },
  {
    id: "scan-3",
    target: "10.0.0.0/16",
    type: "Internal Net",
    findings: 96,
    critical: 7,
    status: "completed",
    time: "1h ago",
  },
  {
    id: "scan-4",
    target: "auth.vayne-corp.io",
    type: "Web App",
    findings: 11,
    critical: 0,
    status: "completed",
    time: "3h ago",
  },
  {
    id: "scan-5",
    target: "cdn.vayne-corp.io",
    type: "DNS / CDN",
    findings: 7,
    critical: 1,
    status: "queued",
    time: "scheduled",
  },
  {
    id: "scan-6",
    target: "vpn.vayne-corp.io",
    type: "Service Scan",
    findings: 0,
    critical: 0,
    status: "failed",
    time: "4h ago",
  },
];

export type Finding = {
  id: string;
  name: string;
  cve?: string;
  severity: Severity;
  confidence: number;
  asset: string;
  explanation: string;
};

export const recentFindings: Finding[] = [
  {
    id: "f-1",
    name: "Apache HTTP Server RCE",
    cve: "CVE-2024-38476",
    severity: "critical",
    confidence: 97,
    asset: "edge-01.vayne-corp.io",
    explanation:
      "An unauthenticated attacker can achieve remote code execution via a crafted request. VAYNE confirmed exploitability with a safe proof-of-concept.",
  },
  {
    id: "f-2",
    name: "Exposed S3 Bucket (public write)",
    severity: "high",
    confidence: 91,
    asset: "assets-vayne-prod",
    explanation:
      "Bucket allows public PUT operations, enabling content tampering and supply-chain injection into your CDN.",
  },
  {
    id: "f-3",
    name: "Leaked IAM Access Key",
    severity: "critical",
    confidence: 88,
    asset: "github.com/vayne/infra",
    explanation:
      "A long-lived AWS key was committed to a public repo. It grants read access to production secrets — chainable to a full account takeover.",
  },
  {
    id: "f-4",
    name: "Outdated TLS (TLS 1.0 enabled)",
    severity: "medium",
    confidence: 72,
    asset: "legacy.vayne-corp.io",
    explanation:
      "Deprecated TLS versions are accepted, exposing sessions to downgrade attacks. Low active-exploit likelihood but a compliance risk.",
  },
];

export type NavBadge = { count: number; tone: "accent" | "critical" };
export const navBadges: Record<string, NavBadge> = {
  findings: { count: 14, tone: "critical" },
  scans: { count: 3, tone: "accent" },
};

export const severityLabel: Record<Severity, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
};
