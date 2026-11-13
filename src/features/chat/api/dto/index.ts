/* ─── چت ─── */
export interface HamdamChatDTO {
  messages: string[];
}

export interface HamdamChatResponseDTO {
  messages: string[];
}

/* ─── هیستوری ─── */
export interface HamdamHistoryItemDTO {
  user_id: number | null;
  message_content: string;
  created_at: string;
}

export interface HamdamHistoryResponseDTO {
  messages: HamdamHistoryItemDTO[];
}