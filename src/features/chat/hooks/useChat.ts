"use client";

import { useEffect, useState } from "react";
import { useHamdamHistory, useHamdamChat } from "@/features/chat/api";
import type { Message, MessageRole } from "../types/chat.types";
import { getTime } from "../utils/time";

const WELCOME_MESSAGE: Message = {
  id: 0,
  role: "assistant",
  content: "سلام 👋 من همدم هستم، دستیار هوشمند شما. هر سوالی داری بپرس.",
  time: getTime(),
};

export function useChat() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  
  // پیام‌هایی که در حال ارسال هستن و هنوز از سرور برنگشتن (برای Optimistic UI)
  const [pendingMessages, setPendingMessages] = useState<Message[]>([]);
  
  // پیام‌هایی که از سرور دریافت شدن (تاریخچه)
  const { 
    data: historyData, 
    isLoading: isLoadingHistory, 
    isError: isHistoryError,
    refetch: refetchHistory
  } = useHamdamHistory();

  const { 
    mutateAsync: sendChatMessage, 
    isPending: isSendingMessage 
  } = useHamdamChat();

  // تبدیل تاریخچه بک‌اند به فرمت UI
  const serverMessages: Message[] = (historyData ?? []).map((item, index) => ({
    id: index + 1,
    role: (item.userId ? "user" : "assistant") as MessageRole,
    content: item.messageContent,
    time: new Date(item.createdAt).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));

  // پیام خوش‌آمدگویی + پیام‌های سرور + پیام‌های در حال ارسال
  const messages = [WELCOME_MESSAGE, ...serverMessages, ...pendingMessages];

  // وقتی سرور جواب داد، pendingMessages رو پاک می‌کنیم تا پیام‌های اصلی جایگزین بشن
  useEffect(() => {
    if (!isSendingMessage && pendingMessages.length > 0) {
      const timer = setTimeout(() => {
        setPendingMessages([]);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isSendingMessage, pendingMessages.length]);

  const send = async () => {
    const text = input.trim();
    if (!text || isSendingMessage) return;

    // ۱. پیام کاربر رو فوراً به لیست اضافه کن
    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
      time: getTime(),
    };
    setPendingMessages([userMessage]); 
    setInput("");
    setError("");

    try {
      await sendChatMessage(
        { input: text },
        {
          onSuccess: () => {
            // تاریخچه رو دوباره بگیر تا پیام جدید هم توش بیاد
            refetchHistory();
          },
          onError: () => {
            setError("در ارتباط با سرور مشکلی پیش آمد.");
            setPendingMessages([]); // اگه خطا داد، پیام رو پاک کن
          },
        }
      );
    } catch (err) {
      // خطا هندل شده
    }
  };

  if (isHistoryError) {
    setError("خطا در دریافت تاریخچه چت.");
  }

  return {
    messages,
    input,
    setInput,
    loadingMessage: isLoadingHistory || isSendingMessage,
    isSendingMessage, // این رو جدا دادم که سه نقطه فقط موقع ارسال به سرور نمایش داده بشه
    error,
    send,
  };
}