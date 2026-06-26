import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { DashboardContent } from "@/components/dashboard/dashboard-content";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen">
      <DotPattern
        width={24}
        height={24}
        cr={1}
        className="fixed inset-0 -z-10 text-white/[0.06]"
      />
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
