"use client";

import { useQuery } from "@tanstack/react-query";
import { cooperationRequestService } from "../../services";
import { cooperationKeys } from "../index";

export function useExpertiseTags() {
  return useQuery({
    queryKey: cooperationKeys.expertiseTags(),
    queryFn: () => cooperationRequestService.getExpertiseTags(),
    staleTime: 10 * 60 * 1000, // تگ‌ها به‌ندرت تغییر می‌کنن
  });
}
