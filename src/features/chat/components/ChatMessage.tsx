"use client";

import { Avatar, Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import type { Message } from "../types/chat.types";
import { useMe } from "@/features/auth";
import {
  avatarSx,
  bubbleSx,
  bubbleTextSx,
  messageColumnSx,
  messageRowSx,
  timeSx,
} from "../styles/chat.styles";

type Props = { message: Message };

export function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  const { data: user } = useMe();

  const USER_AVATAR = user?.profileImage || "/images/chat/user.png";
  const BOT_AVATAR = "/images/chat/bot.png";

  const avatarSrc = isUser ? USER_AVATAR : BOT_AVATAR;
  return (
    <Box sx={messageRowSx(isUser)}>
      <Avatar sx={avatarSx(isUser)}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={avatarSrc}
            alt={isUser ? "کاربر" : "همدم"}
            fill
            sizes="36px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Avatar>

      <Box sx={messageColumnSx(isUser)}>
        <Paper elevation={0} sx={bubbleSx}>
          <Typography sx={bubbleTextSx}>{message.content}</Typography>
        </Paper>

        <Typography sx={timeSx}>{message.time}</Typography>
      </Box>
    </Box>
  );
}
