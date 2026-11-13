// src/app/(app)/layout.tsx  ← مسیر پیشنهادی
import AppShell from "@/components/layout/AppShell";
import { NavbarUp } from "@/components/layout/navbar-up";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell navbar={<NavbarUp/>}>
      {/* <SplashScreen> */}
      {children}
      {/* </SplashScreen> */}
    </AppShell>
  );
}
