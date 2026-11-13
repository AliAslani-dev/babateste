import type { SxProps, Theme } from "@mui/material";

export const rootSx: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  bgcolor: "#fff",
  overflow: "hidden",
};

export const errorBoxSx: SxProps<Theme> = {
  px: 2,
  py: 1,
  bgcolor: "#fff1f1",
  borderBottom: "1px solid #ffd5d5",
};

export const errorTextSx: SxProps<Theme> = {
  fontSize: 11,
  color: "#d32f2f",
  textAlign: "right",
};

export const messagesBoxSx: SxProps<Theme> = {
  flex: 1,
  overflowY: "auto",
  py: 2,
  display: "flex",
  flexDirection: "column",
  gap: 1.2,
  "&::-webkit-scrollbar": { width: 4 },
  "&::-webkit-scrollbar-thumb": { bgcolor: "#ddd", borderRadius: 10 },
};

/* ---------- Input Area ---------- */

export const inputWrapperSx: SxProps<Theme> = {
  px: 1.5,
  pt: 1,
  pb: 1.5,
  bgcolor: "#fff",
};

export const inputContainerSx: SxProps<Theme> = {
  position: "relative",
  width: "100%",
};

export const inputBoxSx: SxProps<Theme> = {
  width: "100%",
  direction: "rtl",
  border: "1px solid #E4E4E7",
  borderRadius: "16px",
  backgroundColor: "#fff",
  height: 42,
  padding: 0,
  overflow: "hidden",

  "& input": {
    fontSize: 12,
    textAlign: "right",
    paddingInlineStart: "42px",
    paddingInlineEnd: "42px",
    height: "40px",
    "&::placeholder": {
      color: "#757575",
      opacity: 1,
    },
  },
};

export const sendButtonSx: SxProps<Theme> = {
  position: "absolute",
  right: 9,
  top: "50%",
  transform: "translateY(-50%)",
  width: 24,
  height: 24,
  minWidth: 24,
  bgcolor: "#0092B8",
  color: "#fff",
  flexShrink: 0,
  p: 0,
  zIndex: 2,
  "&:hover": { bgcolor: "#0080a0" },
  "&.Mui-disabled": { bgcolor: "#c8dfe6", color: "#fff" },
};

export const sendIconSx: SxProps<Theme> = {
  fontSize: 16,
};

export const keyboardButtonSx: SxProps<Theme> = {
  position: "absolute",
  left: 9,
  top: "50%",
  transform: "translateY(-50%)",
  width: 24,
  height: 24,
  minWidth: 24,
  bgcolor: "#757575",
  color: "#fff",
  flexShrink: 0,
  p: 0,
  zIndex: 2,
  "&:hover": { bgcolor: "#5f5f5f" },
};

export const keyboardIconSx: SxProps<Theme> = {
  fontSize: 16,
};

/* ---------- ChatMessage ---------- */

export const messageRowSx = (isUser: boolean): SxProps<Theme> => ({
  display: "flex",
  flexDirection: isUser ? "row" : "row-reverse",
  alignItems: "flex-start",
  gap: 1,
  direction: "rtl",
});

export const avatarSx = (isUser: boolean): SxProps<Theme> => ({
  width: 36,
  height: 36,
  flexShrink: 0,
  bgcolor: isUser ? "#ffe8eb" : "#e5f5fa",
  border: "1px solid #eee",
  overflow: "hidden",
  p: 0,
  position: "relative",
});

export const messageColumnSx = (isUser: boolean): SxProps<Theme> => ({
  maxWidth: "78%",
  display: "flex",
  flexDirection: "column",
  alignItems: isUser ? "flex-start" : "flex-end",
});

export const bubbleSx: SxProps<Theme> = {
  px: 1.5,
  py: 1.1,
  bgcolor: "#e4f4f8",
  borderRadius: "15px",
  direction: "rtl",
};

export const bubbleTextSx: SxProps<Theme> = {
  fontSize: 11.5,
  lineHeight: 1.9,
  color: "#202020",
  textAlign: "right",
  direction: "rtl",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
};

export const timeSx: SxProps<Theme> = {
  mt: 0.5,
  px: 1,
  fontSize: 9,
  color: "#777",
};

/* ---------- Typing ---------- */

export const typingRowSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "flex-start",
  gap: 1,
};

export const typingAvatarSx: SxProps<Theme> = {
  width: 36,
  height: 36,
  bgcolor: "#e5f5fa",
  border: "1px solid #eee",
  overflow: "hidden",
  p: 0,
  position: "relative",
};

export const typingBubbleSx: SxProps<Theme> = {
  px: 2,
  py: 1.5,
  bgcolor: "#e4f4f8",
  borderRadius: "15px",
};

export const typingDotsRowSx: SxProps<Theme> = {
  display: "flex",
  gap: 0.5,
};

/* ---------- LoadingDot ---------- */

export const loadingDotSx = (delay = 0): SxProps<Theme> => ({
  width: 5,
  height: 5,
  borderRadius: "50%",
  bgcolor: "#777",
  animation: "chatLoading 1.2s infinite ease-in-out",
  animationDelay: `${delay}s`,
  "@keyframes chatLoading": {
    "0%, 80%, 100%": { opacity: 0.3, transform: "scale(0.8)" },
    "40%": { opacity: 1, transform: "scale(1)" },
  },
});
