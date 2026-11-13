"use client";

import { useRouter } from "next/navigation";

export function useBackNavigation(fallbackPath = "/home") {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallbackPath);
  };

  return { goBack };
}