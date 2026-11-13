import AppShell from "@/components/layout/AppShell";
import NavbarWelcome from "@/components/layout/navbar-up/components/NavbarWelcome";
import NavbarHomeHeader from "@/components/layout/navbar-up/components/NavbarHomeHeader";
import { BottomNavbar } from "@/components/layout/bottom-navbar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell navbar={<NavbarHomeHeader />} bottomNavbar={<BottomNavbar/>} hasBottomNavbar={true}>
      <NavbarWelcome />
      {/* <SplashScreen> */}
      {children}
      {/* </SplashScreen> */}
    </AppShell>
  );
}
