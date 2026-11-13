"use client";

import { useEffect, useState } from "react";
import { tokenStorage } from "@/lib/api";
import { useMe } from "@/features/auth";

export function useAuth() {
  const [hasToken, setHasToken] = useState<boolean | null>(null);

  useEffect(() => {
    setHasToken(!!tokenStorage.get());
  }, []);

  const { data: user, isLoading, isError } = useMe();

  return {
    user,
    isAuthenticated: !!user && !!hasToken,
    isLoading: hasToken === null || (hasToken && isLoading),
    isError,
  };
}