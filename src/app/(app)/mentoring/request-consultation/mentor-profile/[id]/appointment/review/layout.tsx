import AppShell from "@/components/layout/AppShell";
import { NavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail";

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell navbar={<NavbarDetail title="مرور و پرداخت" hideActions />} contentPadding={0}>
      {children}
    </AppShell>
  );
}
