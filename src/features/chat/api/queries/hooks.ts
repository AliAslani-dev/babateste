"use client";

import { useQuery } from "@tanstack/react-query";
import { hamdamService } from "../services";
import { hamdamKeys } from "./keys";

export function useHamdamHistory() {
  return useQuery({
    queryKey: hamdamKeys.history(),
    queryFn: () => hamdamService.getHistory(),
    staleTime: 1 * 60 * 1000, // ۱ دقیقه (چون چت هیستوری زود عوض میشه)
  });
}