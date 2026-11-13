"use client";

import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useChat } from "../hooks/useChat";
import { messagesBoxSx, rootSx } from "../styles/chat.styles";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import { ErrorBanner } from "./ErrorBanner";
import { TypingIndicator } from "./TypingIndicator";
import HamdamCard from "@/components/ui/common/cards/hamdam";
import { MicrophoneIcon } from "@/components/ui/icons";

export function Chat() {
  const { messages, input, setInput, loadingMessage, isSendingMessage, error, send } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  // اسکرول بدون پرش — موقع تغییر پیام‌ها یا وضعیت ارسال
  useEffect(() => {
    const el = bottomRef.current;
    if (!el) return;

    // دو فریم صبر می‌کنیم تا لیست کامل رندر بشه، بعد بدون smooth می‌ریم پایین
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "end" });
      });
    });

    return () => cancelAnimationFrame(id);
  }, [messages.length, isSendingMessage]);

  return (
    <>
      <Box sx={rootSx}>
        <Box sx={{ marginTop: "20px" }}>
          <HamdamCard
            image="/images/cards/hamdam/hamdam.svg"
            title="همدم"
            subtitle="دستیار هوشمند شما در شریف نوا"
            buttonText="صحبت با همدم"
            buttonIcon={<MicrophoneIcon />}
            buttonHref="/hamdam"
          />
        </Box>

        <ErrorBanner message={error} />

        <Box sx={messagesBoxSx}>
          {messages.map((m) => (
            <ChatMessage key={m.id} message={m} />
          ))}
          {isSendingMessage && <TypingIndicator />}
          <div ref={bottomRef} />
        </Box>

        <ChatInput
          value={input}
          onChange={setInput}
          onSend={send}
          disabled={loadingMessage}
        />
      </Box>
    </>
  );
}