
"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export function useBackNavigation(fallbackPath = "/home") {
  const router = useRouter();
  const goBack = useCallback(() => {
    // رفتار مشابه دکمه Back مرورگر
    if (window.history.length > 1) {
      router.back();
      return;
    }

    // اگر صفحه مستقیماً باز شده باشد
    router.replace(fallbackPath);
  }, [fallbackPath, router]);

  return { goBack };
}
