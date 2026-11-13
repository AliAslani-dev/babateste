"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { hamdamService } from "../services";
import { hamdamKeys } from "../queries/keys";
import type { HamdamChatPayload } from "../payloads";

export function useHamdamChat() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: HamdamChatPayload) => hamdamService.chat(payload),
    onSuccess: () => {
      // بعد از ارسال پیام جدید، تاریخچه رو دوباره بگیر
      queryClient.invalidateQueries({ queryKey: hamdamKeys.history() });
    },
  });
}