"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AppSnackbar } from "@/components/ui/AppSnackBar";
import { ApiException } from "@/lib/api";

import { ProfileService } from "../services/Profile.service";
import { profileKeys } from "../queries/keys/profile.keys";
import type { UpdatePersonalInformationPayload } from "../payloads/profile.payloads";
import { authKeys } from "@/features/auth";

export function useUpdatePersonalInformation() {
  const queryClient = useQueryClient();

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "success" | "error";
  }>({
    open: false,
    message: "",
    type: "success",
  });

  const mutation = useMutation({
    mutationFn: (payload: UpdatePersonalInformationPayload) =>
      ProfileService.updatePersonalInformation(payload),

    onSuccess: async (response) => {
      if (!response.success) {
        setSnackbar({
          open: true,
          message: response.message || "ذخیره اطلاعات ناموفق بود.",
          type: "error",
        });
        return;
      }

      setSnackbar({
        open: true,
        message: response.message || "اطلاعات با موفقیت ذخیره شد.",
        type: "success",
      });

      await queryClient.invalidateQueries({
        queryKey: profileKeys.detail(),
      });
      await queryClient.invalidateQueries({
        queryKey: authKeys.me(),
      });
    },

    onError: (error: unknown) => {
      let message = "خطایی رخ داده است.";

      if (error instanceof ApiException) {
        if (
          typeof error.data === "object" &&
          error.data !== null &&
          "message" in error.data &&
          typeof error.data.message === "string"
        ) {
          message = error.data.message;
        } else if (error.message.trim()) {
          message = error.message;
        }
      } else if (error instanceof Error && error.message.trim()) {
        message = error.message;
      }

      setSnackbar({
        open: true,
        message,
        type: "error",
      });
    },
  });

  const snackbarElement = (
    <AppSnackbar
      open={snackbar.open}
      message={snackbar.message}
      type={snackbar.type}
      onClose={() => setSnackbar((previous) => ({ ...previous, open: false }))}
    />
  );

  return {
    ...mutation,
    snackbarElement,
  };
}
