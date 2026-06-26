import { AppShell } from "@/components/layout/app-shell";
import { ScansTable } from "@/components/dashboard/scans-table";

export default function ScansPage() {
  return (
    <AppShell activeNav="scans">
      <div className="mx-auto max-w-[1200px] px-5 py-8 lg:px-8">
        <div className="mb-8 border-b border-white pb-6">
          <h1 className="text-brutal text-2xl font-black uppercase sm:text-3xl">
            Scans
          </h1>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
            Recent scan activity across your attack surface
          </p>
        </div>
        <ScansTable />
      </div>
    </AppShell>
  );
}
