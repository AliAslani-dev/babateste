"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { ApiException } from "@/lib/api";

import { registrationService } from "../services/TourRegistration.service";
import type { SignupVariables } from "../payloads/TourRegistration.payloads";
import { AppSnackbar } from "@/components/ui/AppSnackBar";

export function useSignupForTour() {
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
    mutationFn: ({ eventId, payload }: SignupVariables) =>
      registrationService.signup(eventId, payload),

    onSuccess: (response) => {
      setSnackbar({
        open: true,
        message: response.message || "ثبت‌نام تور با موفقیت انجام شد.",
        type: response.success ? "success" : "success",
      });
    },

    onError: (error: unknown) => {
      let message = "ثبت‌نام تور با خطا مواجه شد.";

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
      onClose={() =>
        setSnackbar((previous) => ({
          ...previous,
          open: false,
        }))
      }
    />
  );

  return {
    ...mutation,
    snackbarElement,
  };
}
