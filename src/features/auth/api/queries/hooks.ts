"use client";

import { useQuery } from "@tanstack/react-query";
import { tokenStorage } from "@/lib/api";
import { authService } from "../services";
import { authKeys } from "./keys";

export function useMe() {
  return useQuery({
    queryKey: authKeys.me(),
    queryFn: () => authService.me(),
    enabled: typeof window !== "undefined" && !!tokenStorage.get(),
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}