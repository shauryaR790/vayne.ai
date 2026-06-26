import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { DashboardContent } from "@/components/dashboard/dashboard-content";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col bg-black">
        <Topbar />
        <main className="relative flex-1">
          <DotPattern
            width={24}
            height={24}
            cr={1}
            className="pointer-events-none absolute inset-0 text-white/[0.12]"
          />
          <div className="relative z-10">
            <DashboardContent />
          </div>
        </main>
      </div>
    </div>
  );
}
