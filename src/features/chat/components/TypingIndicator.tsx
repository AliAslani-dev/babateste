"use client";

import { Avatar, Box, Paper } from "@mui/material";
import Image from "next/image";
import { LoadingDot } from "./LoadingDot";
import {
  typingAvatarSx,
  typingBubbleSx,
  typingDotsRowSx,
  typingRowSx,
} from "../styles/chat.styles";

// 👇 دقیقاً همون عکسی که توی ChatMessage استفاده کردی
const BOT_AVATAR = "/images/chat/bot.png";

export function TypingIndicator() {
  return (
    <Box sx={typingRowSx}>
      <Avatar sx={typingAvatarSx}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={BOT_AVATAR}
            alt="همدم"
            fill
            sizes="36px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Avatar>

      <Paper elevation={0} sx={typingBubbleSx}>
        <Box sx={typingDotsRowSx}>
          <LoadingDot />
          <LoadingDot delay={0.15} />
          <LoadingDot delay={0.3} />
        </Box>
      </Paper>
    </Box>
  );
}