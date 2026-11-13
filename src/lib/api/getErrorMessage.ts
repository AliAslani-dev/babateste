import { ApiException } from "./errors";

export function getErrorMessage(error: unknown): string {
  // ApiException = همون payload.message از API
  if (error instanceof ApiException) {
    return error.message;
  }

  // AxiosError خام
  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "data" in error.response &&
    error.response.data &&
    typeof error.response.data === "object" &&
    "message" in error.response.data
  ) {
    const msg = (error.response.data as { message?: string }).message;
    if (msg) return msg;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "خطای ناشناخته";
}