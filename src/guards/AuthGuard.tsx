"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";

import { tokenStorage } from "@/lib/api";
import { useMe } from "@/features/auth";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [hasToken, setHasToken] = useState<boolean | null>(null);

  useEffect(() => {
    setHasToken(!!tokenStorage.get());
  }, []);

  const { isLoading, isError } = useMe();

  useEffect(() => {
    if (hasToken === null) return;

    if (!hasToken) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    if (isError) {
      tokenStorage.clear();
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [hasToken, isError, pathname, router]);

  if (hasToken === null || (hasToken && isLoading)) {
    return (
      <Box
        sx={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </Box>
    );
  }

  if (!hasToken || isError) return null;

  return <>{children}</>;
}