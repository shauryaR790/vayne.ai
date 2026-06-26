import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { DashboardContent } from "@/components/dashboard/dashboard-content";

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <div className="relative z-10 flex min-h-screen flex-1 flex-col">
        <Topbar />
        <main className="flex-1">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}
