"use client";

import { Box, IconButton } from "@mui/material";
import { Input } from "@/components/ui/Input";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SendIcon from "@mui/icons-material/Send";
import {
  inputBoxSx,
  inputContainerSx,
  inputWrapperSx,
  keyboardButtonSx,
  keyboardIconSx,
  sendButtonSx,
  sendIconSx,
} from "../styles/chat.styles";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
};

export function ChatInput({
  value,
  onChange,
  onSend,
  disabled = false,
}: Props) {
  const canSend = value.trim().length > 0 && !disabled;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (canSend) onSend();
    }
  };

  return (
    <Box sx={inputWrapperSx}>
      <Box sx={inputContainerSx}>
        {/* دکمه ارسال — سمت راست */}
        <IconButton
          onClick={onSend}
          disabled={!canSend}
          sx={sendButtonSx}
        >
          <SendIcon sx={sendIconSx} />
        </IconButton>

        {/* دکمه کیبورد — سمت چپ */}
        <IconButton sx={keyboardButtonSx}>
          <KeyboardIcon sx={keyboardIconSx} />
        </IconButton>

        {/* input وسط */}
        <Input
          fullWidth
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="اینجا بنویس..."
          sx={inputBoxSx}
        />
      </Box>
    </Box>
  );
}