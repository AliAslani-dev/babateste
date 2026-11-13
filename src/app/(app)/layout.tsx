// src/app/(app)/layout.tsx  ← مسیر پیشنهادی
import AppShell from "@/components/layout/AppShell";
import { BottomNavbar } from "@/components/layout/bottom-navbar";
import SplashScreen from "@/components/layout/SplashScreen";
import { AuthGuard } from "@/guards";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthGuard>
        <AppShell bottomNavbar={<BottomNavbar />} hasBottomNavbar>
          {/* <SplashScreen> */}
          {children}
          {/* </SplashScreen> */}
        </AppShell>
      </AuthGuard>
    </>
  );
}
