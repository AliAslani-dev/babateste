import { createMapper } from "@/lib/api";
import type {
  HamdamChatResponseDTO,
  HamdamHistoryItemDTO,
  HamdamHistoryResponseDTO,
} from "../dto";
import type { HamdamHistoryItem } from "../model";

/* خروجی چت فقط یه آرایه از رشته‌هاست */
export const toChatMessages = createMapper<HamdamChatResponseDTO, string[]>(
  (dto) => dto.messages,
);

export const toHistoryItem = createMapper<
  HamdamHistoryItemDTO,
  HamdamHistoryItem
>((dto) => ({
  userId: dto.user_id,
  messageContent: dto.message_content,
  createdAt: dto.created_at,
}));

export const toHistoryList = createMapper<
  HamdamHistoryResponseDTO,
  HamdamHistoryItem[]
>((dto) => dto.messages.map((item) => toHistoryItem(item)));