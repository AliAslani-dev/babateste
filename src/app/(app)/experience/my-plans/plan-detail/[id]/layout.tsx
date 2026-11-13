// src/app/(app)/layout.tsx  ← مسیر پیشنهادی
import AppShell from "@/components/layout/AppShell";
import { NavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell navbar={<NavbarDetail/>} contentPadding={0}>
      {/* <SplashScreen> */}
      {children}
      {/* </SplashScreen> */}
    </AppShell>
  );
}
