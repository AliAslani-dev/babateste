"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { tokenStorage } from "@/lib/api";
import { useSnackbar } from "@/providers/SnackbarProvider/SnackbarProvider";
import { authService } from "../services";
import type {
  LoginPayload,
  RegisterPayload,
  RequestOtpPayload,
} from "../payloads";

export function useRequestOtp() {
  return useMutation({
    mutationFn: (payload: RequestOtpPayload) => authService.requestOtp(payload),
  });
}

export function useLogin(redirectTo = "/home") {
  const router = useRouter();
  const queryClient = useQueryClient();
  const snackbar = useSnackbar();
  return useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),
    onSuccess: (session) => {
      snackbar.showSuccess("با موفقیت وارد شدید");
      tokenStorage.set(session.token);
      queryClient.clear();
      router.push(redirectTo);
    },
  });
}

export function useRegister(redirectTo = "/home") {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authService.register(payload),
    onSuccess: (session) => {
      tokenStorage.set(session.token);
      queryClient.clear();
      router.push(redirectTo);
    },
  });
}

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSettled: () => {
      // چه موفق چه خطا → کاربر رو لاگ‌اوت کن
      tokenStorage.clear();
      queryClient.clear();
      router.push("/login");
    },
  });
}
