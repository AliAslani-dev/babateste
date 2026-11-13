import AppShell from "@/components/layout/AppShell";
import { NavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail";
import { NavbarDetailProvider } from "@/components/layout/navbar-up/components/NavbarDetail/NavbarDetailContext";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <NavbarDetailProvider>
      <AppShell navbar={<NavbarDetail />} contentPadding={0}>
        {children}
      </AppShell>
    </NavbarDetailProvider>
  );
}
