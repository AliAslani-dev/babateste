export type MessageRole = "user" | "assistant";

export type Message = {
  id: number;
  role: MessageRole;
  content: string;
  time: string;
};

export type ApiChatMessage = {
  role: "system" | MessageRole;
  content: string;
};