// src/app/(auth)/layout.tsx
import AuthShell from "@/components/layout/AuthShell";
import { GuestGuard } from "@/guards";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GuestGuard>
        <AuthShell>{children}</AuthShell>
      </GuestGuard>
    </>
  );
}
