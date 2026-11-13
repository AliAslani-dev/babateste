import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { API_CONFIG } from "../config/api.config";
import { ApiException } from "./errors";
import type { ApiResponse } from "./types";
import { tokenStorage } from ".";

export const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
  // headers: { "Content-Type": "application/json" },
});

// ─── Request: attach token ───
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = tokenStorage.get();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ─── Response: unwrap + normalize errors ───
api.interceptors.response.use(
  (response) => {
    const payload = response.data as ApiResponse;

    // سرور با success: false برگردوند (ولی HTTP 2xx)
    if (payload && payload.success === false) {
      const message = payload.message || "خطای ناشناخته";
      const status = payload.status || response.status;

      return Promise.reject(new ApiException(message, status, payload.data));
    }

    return response;
  },
  (error: AxiosError<ApiResponse>) => {
    const status = error.response?.status ?? 0;
    const payload = error.response?.data;

    const message =
      payload?.message ??
      (error.code === "ECONNABORTED"
        ? "زمان درخواست به پایان رسید"
        : error.code === "ERR_NETWORK"
          ? "خطا در ارتباط با سرور"
          : error.message) ??
      "خطای ناشناخته";

    return Promise.reject(new ApiException(message, status, payload?.data));
  }
);