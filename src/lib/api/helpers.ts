import { api } from "./client";
import type { ApiResponse } from "./types";

/**
 * استخراج خودکار data از پاسخ استاندارد سرور
 * @example
 *   const user = await apiRequest<UserDTO>({ url: "/me", method: "GET" });
 */
export async function apiRequest<T>(
  config: Parameters<typeof api.request>[0],
): Promise<ApiResponse<T>> {
  const response = await api.request<ApiResponse<T>>(config);
  return response.data;
}



/**
 * استخراج data و meta از پاسخ استاندارد سرور
 * @example
 *   const { data, meta } = await apiRequestWithMeta<DataDTO, MetaDTO>({ url: "/list", method: "GET" });
 */
export async function apiRequestWithMeta<T, M = Record<string, unknown>>(
  config: Parameters<typeof api.request>[0],
): Promise<{ data: T; meta: M }> {
  const response = await api.request<ApiResponse<T> & { meta: M }>(config);
  return { data: response.data.data, meta: response.data.meta };
}

