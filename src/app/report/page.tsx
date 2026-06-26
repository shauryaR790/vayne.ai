import { AppShell } from "@/components/layout/app-shell";
import { DashboardContent } from "@/components/dashboard/dashboard-content";

export default function ReportPage() {
  return (
    <AppShell activeNav="reports">
      <DashboardContent />
    </AppShell>
  );
}
