import { apiRequest } from "@/lib/api";
import { HAMDAM_ENDPOINTS } from "../endpoints";
import { toChatMessages, toHistoryList } from "../mappers";
import type {
  HamdamChatResponseDTO,
  HamdamHistoryResponseDTO,
} from "../dto";
import type { HamdamHistoryItem } from "../model";
import type { HamdamChatPayload } from "../payloads";

export const hamdamService = {
  /**
   * ارسال پیام به همدم
   * POST /hamdam
   */
  async chat(payload: HamdamChatPayload): Promise<string[]> {
    const response = await apiRequest<HamdamChatResponseDTO>({
      url: HAMDAM_ENDPOINTS.chat,
      method: "POST",
      data: payload,
    });
    return toChatMessages(response.data);
  },

  /**
   * دریافت تاریخچه چت
   * GET /hamdam/all
   */
  async getHistory(): Promise<HamdamHistoryItem[]> {
    const response = await apiRequest<HamdamHistoryResponseDTO>({
      url: HAMDAM_ENDPOINTS.history,
      method: "GET",
    });
    return toHistoryList(response.data);
  },
};