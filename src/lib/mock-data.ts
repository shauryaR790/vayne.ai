/**
 * Mock cybersecurity data for VAYNE.
 * Frontend-only — shaped for demo workflows and investigations.
 */

export type Severity = "critical" | "high" | "medium" | "low";
export type ScanStatus = "completed" | "running" | "queued" | "failed";

export type Metric = {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  positive: boolean;
  hint: string;
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
  },
  {
    id: "false-positives",
    label: "Likely False Positives",
    value: "37",
    delta: "-12",
    trend: "down",
    positive: true,
    hint: "Auto-triaged by AI",
  },
  {
    id: "new-assets",
    label: "New Assets",
    value: "26",
    delta: "+9",
    trend: "up",
    positive: true,
    hint: "Discovered this week",
  },
  {
    id: "time-saved",
    label: "Estimated Time Saved",
    value: "41h",
    delta: "+6h",
    trend: "up",
    positive: true,
    hint: "vs. manual triage",
  },
];

export const executiveSummary = {
  lastUpdated: "8m ago",
  surfaceIncrease: "14%",
  criticalFindings: 14,
  falsePositivesValidated: 37,
  highRiskPaths: 1,
  hoursSaved: 41,
};

export const recentTargets = [
  "tesla.com",
  "stripe.com",
  "openai.com",
  "github.com",
];

export const quickScanTypes = [
  { id: "surface", label: "Surface Scan" },
  { id: "webapp", label: "Web App Scan" },
  { id: "api", label: "API Recon" },
  { id: "internal", label: "Internal Network" },
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
  analystHoursSaved: string;
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
    analystHoursSaved: "41h",
  },
  {
    id: "scan-2",
    target: "api.vayne-corp.io",
    type: "API Recon",
    findings: 18,
    critical: 2,
    status: "running",
    time: "now",
    analystHoursSaved: "12h",
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
    analystHoursSaved: "28h",
  },
  {
    id: "scan-4",
    target: "auth.vayne-corp.io",
    type: "Web App",
    findings: 11,
    critical: 0,
    status: "completed",
    time: "3h ago",
    analystHoursSaved: "6h",
  },
  {
    id: "scan-5",
    target: "cdn.vayne-corp.io",
    type: "DNS / CDN",
    findings: 7,
    critical: 1,
    status: "queued",
    time: "scheduled",
    analystHoursSaved: "—",
  },
  {
    id: "scan-6",
    target: "vpn.vayne-corp.io",
    type: "Service Scan",
    findings: 0,
    critical: 0,
    status: "failed",
    time: "4h ago",
    analystHoursSaved: "0h",
  },
];

export type Finding = {
  id: string;
  name: string;
  cve?: string;
  severity: Severity;
  confidence: number;
  asset: string;
  exploitability: string;
  businessImpact: string;
  aiReasoning: string;
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
    exploitability: "High",
    businessImpact: "Production compromise",
    aiReasoning:
      "Version fingerprint matches known vulnerable release. Safe PoC confirmed RCE.",
    explanation:
      "An unauthenticated attacker can achieve remote code execution via a crafted request.",
  },
  {
    id: "f-2",
    name: "Exposed S3 Bucket (public write)",
    severity: "high",
    confidence: 91,
    asset: "assets-vayne-prod",
    exploitability: "High",
    businessImpact: "Production compromise",
    aiReasoning:
      "Public write access enabled on production asset bucket. CDN supply-chain risk.",
    explanation:
      "Bucket allows public PUT operations, enabling content tampering and supply-chain injection.",
  },
  {
    id: "f-3",
    name: "Leaked IAM Access Key",
    severity: "critical",
    confidence: 88,
    asset: "github.com/vayne/infra",
    exploitability: "High",
    businessImpact: "Account takeover",
    aiReasoning:
      "Long-lived key in public repo grants read access to production secrets.",
    explanation:
      "A long-lived AWS key was committed to a public repo — chainable to full account takeover.",
  },
  {
    id: "f-4",
    name: "Outdated TLS (TLS 1.0 enabled)",
    severity: "medium",
    confidence: 72,
    asset: "legacy.vayne-corp.io",
    exploitability: "Low",
    businessImpact: "Compliance risk",
    aiReasoning:
      "Deprecated TLS accepted. Low active-exploit likelihood but fails compliance baseline.",
    explanation:
      "Deprecated TLS versions expose sessions to downgrade attacks.",
  },
];

export type AttackPathNode = {
  id: string;
  label: string;
};

export type AttackPath = {
  id: string;
  title: string;
  nodes: AttackPathNode[];
  riskScore: number;
  likelihood: string;
  impact: string;
  exploitability: string;
};

export const attackPaths: AttackPath[] = [
  {
    id: "ap-1",
    title: "S3 → IAM → Production DB",
    nodes: [
      { id: "n1", label: "Internet" },
      { id: "n2", label: "CDN" },
      { id: "n3", label: "S3 Bucket" },
      { id: "n4", label: "IAM" },
      { id: "n5", label: "Production DB" },
    ],
    riskScore: 9.8,
    likelihood: "High",
    impact: "Critical",
    exploitability: "High",
  },
  {
    id: "ap-2",
    title: "GitHub → AWS Secrets",
    nodes: [
      { id: "n1", label: "Internet" },
      { id: "n2", label: "GitHub" },
      { id: "n3", label: "Leaked Key" },
      { id: "n4", label: "Secrets Manager" },
      { id: "n5", label: "Production" },
    ],
    riskScore: 9.2,
    likelihood: "High",
    impact: "Critical",
    exploitability: "High",
  },
];

export type Asset = {
  id: string;
  hostname: string;
  ip: string;
  ports: number[];
  technologies: string[];
  findings: number;
  critical: number;
  riskLevel: string;
};

export const assets: Asset[] = [
  {
    id: "a-1",
    hostname: "api.vayne-corp.io",
    ip: "172.31.44.10",
    ports: [80, 443, 8080],
    technologies: ["Apache", "PHP", "Laravel"],
    findings: 4,
    critical: 1,
    riskLevel: "High",
  },
  {
    id: "a-2",
    hostname: "edge-01.vayne-corp.io",
    ip: "172.31.44.22",
    ports: [443],
    technologies: ["Apache", "mod_ssl"],
    findings: 6,
    critical: 2,
    riskLevel: "Critical",
  },
  {
    id: "a-3",
    hostname: "auth.vayne-corp.io",
    ip: "172.31.45.8",
    ports: [443],
    technologies: ["nginx", "Node.js"],
    findings: 2,
    critical: 0,
    riskLevel: "Low",
  },
  {
    id: "a-4",
    hostname: "cdn.vayne-corp.io",
    ip: "172.31.46.1",
    ports: [80, 443],
    technologies: ["CloudFront", "S3"],
    findings: 3,
    critical: 1,
    riskLevel: "Medium",
  },
];

export type RemediationStep = {
  timeframe: string;
  action: string;
  done: boolean;
};

export type Investigation = {
  id: string;
  findingId: string;
  title: string;
  severity: Severity;
  confidence: number;
  rootCause: string;
  businessImpact: string;
  aiConfidence: number;
  exploitTime: string;
  riskScore: number;
  nodes: AttackPathNode[];
  evidence: {
    resource: string;
    publicAccess: string;
    iamKeys: string;
    exposure: string;
  };
  remediation: RemediationStep[];
};

export const investigations: Record<string, Investigation> = {
  "f-1": {
    id: "inv-1",
    findingId: "f-1",
    title: "Apache HTTP Server RCE",
    severity: "critical",
    confidence: 97,
    rootCause: "Unpatched Apache 2.4.59 on edge nodes.",
    businessImpact: "Production compromise via unauthenticated RCE.",
    aiConfidence: 97,
    exploitTime: "<5 minutes",
    riskScore: 9.6,
    nodes: [
      { id: "n1", label: "Internet" },
      { id: "n2", label: "CDN" },
      { id: "n3", label: "Apache Edge" },
      { id: "n4", label: "App Server" },
      { id: "n5", label: "Production DB" },
    ],
    evidence: {
      resource: "edge-01.vayne-corp.io",
      publicAccess: "Internet-facing",
      iamKeys: "Not required",
      exposure: "Port 443, CVE-2024-38476",
    },
    remediation: [
      { timeframe: "Immediate", action: "Patch Apache to 2.4.62+", done: false },
      { timeframe: "24h", action: "Validate all edge nodes", done: false },
      { timeframe: "72h", action: "Deploy WAF rule for CVE", done: false },
      { timeframe: "1 week", action: "Automate version scanning", done: false },
    ],
  },
  "f-2": {
    id: "inv-2",
    findingId: "f-2",
    title: "Exposed S3 Bucket",
    severity: "high",
    confidence: 91,
    rootCause: "Public write access enabled.",
    businessImpact: "Potential production compromise.",
    aiConfidence: 94,
    exploitTime: "<15 minutes",
    riskScore: 9.8,
    nodes: [
      { id: "n1", label: "Internet" },
      { id: "n2", label: "CDN" },
      { id: "n3", label: "S3 Bucket" },
      { id: "n4", label: "IAM Credential" },
      { id: "n5", label: "Production Database" },
    ],
    evidence: {
      resource: "assets-vayne-prod",
      publicAccess: "Enabled",
      iamKeys: "Detected",
      exposure: "Internet-facing",
    },
    remediation: [
      { timeframe: "Immediate", action: "Close S3 bucket", done: false },
      { timeframe: "24h", action: "Rotate IAM keys", done: false },
      { timeframe: "72h", action: "Audit permissions", done: false },
      { timeframe: "1 week", action: "Rebuild IAM policies", done: false },
    ],
  },
  "f-3": {
    id: "inv-3",
    findingId: "f-3",
    title: "Leaked IAM Access Key",
    severity: "critical",
    confidence: 88,
    rootCause: "AWS key committed to public GitHub repository.",
    businessImpact: "Full account takeover possible.",
    aiConfidence: 92,
    exploitTime: "<10 minutes",
    riskScore: 9.4,
    nodes: [
      { id: "n1", label: "Internet" },
      { id: "n2", label: "GitHub" },
      { id: "n3", label: "Leaked Key" },
      { id: "n4", label: "Secrets Manager" },
      { id: "n5", label: "Production" },
    ],
    evidence: {
      resource: "github.com/vayne/infra",
      publicAccess: "Public repo",
      iamKeys: "AKIA...exposed",
      exposure: "Internet-facing",
    },
    remediation: [
      { timeframe: "Immediate", action: "Revoke exposed key", done: false },
      { timeframe: "24h", action: "Rotate all production secrets", done: false },
      { timeframe: "72h", action: "Enable secret scanning", done: false },
      { timeframe: "1 week", action: "Migrate to OIDC auth", done: false },
    ],
  },
  "f-4": {
    id: "inv-4",
    findingId: "f-4",
    title: "Outdated TLS Configuration",
    severity: "medium",
    confidence: 72,
    rootCause: "TLS 1.0 still enabled on legacy endpoint.",
    businessImpact: "Compliance and session downgrade risk.",
    aiConfidence: 78,
    exploitTime: "Hours",
    riskScore: 5.2,
    nodes: [
      { id: "n1", label: "Internet" },
      { id: "n2", label: "Legacy Host" },
      { id: "n3", label: "TLS 1.0" },
      { id: "n4", label: "Session Data" },
    ],
    evidence: {
      resource: "legacy.vayne-corp.io",
      publicAccess: "Internet-facing",
      iamKeys: "N/A",
      exposure: "Port 443, TLS 1.0",
    },
    remediation: [
      { timeframe: "Immediate", action: "Disable TLS 1.0/1.1", done: false },
      { timeframe: "24h", action: "Update cipher suites", done: false },
      { timeframe: "72h", action: "Compliance scan", done: false },
      { timeframe: "1 week", action: "Decommission legacy host", done: false },
    ],
  },
};

export const severityLabel: Record<Severity, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
};

export function getInvestigation(id: string): Investigation | undefined {
  return investigations[id];
}
