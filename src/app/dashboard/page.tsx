import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { DashboardContent } from "@/components/dashboard/dashboard-content";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen bg-black">
      <DotPattern
        width={24}
        height={24}
        cr={1}
        className="fixed inset-0 -z-10 text-white/[0.04]"
      />
      <Sidebar />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex-1">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}
