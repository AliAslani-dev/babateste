import AppShell from "@/components/layout/AppShell";
import { NavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail";

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell navbar={<NavbarDetail title="درخواست مشاوره" hideActions />} contentPadding={0}>
      {children}
    </AppShell>
  );
}
