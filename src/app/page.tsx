import { AppShell } from "@/components/layout/app-shell";
import { HomeLanding } from "@/components/home/home-landing";

export default function HomePage() {
  return (
    <AppShell activeNav="home">
      <HomeLanding />
    </AppShell>
  );
}
