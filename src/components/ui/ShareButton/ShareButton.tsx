"use client";

import { useState } from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import { shareButtonStyles } from "./ShareButton.styles";
import type { ShareButtonProps } from "./ShareButton.types";
import { AppSnackbar } from "../AppSnackBar";
import { semanticColors } from "@/theme";
import type { AppSnackbarType } from "../AppSnackBar/AppSnackbar.types";
import { IconButton } from "../Button";

export default function ShareButton({
  title = "",
  color = semanticColors.text.primary,
  onShare,
}: ShareButtonProps) {
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] =
    useState<AppSnackbarType>("success");

  const showSnackbar = (text: string, type: AppSnackbarType) => {
    setMessage(text);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;

    try {
      if (typeof navigator.share === "function") {
        await navigator.share({
          title,
          url: shareUrl,
        });

        onShare?.();
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        showSnackbar("لینک صفحه کپی شد", "success");
        onShare?.();
        return;
      }

      showSnackbar(
        "امکان اشتراک‌گذاری در این مرورگر وجود ندارد",
        "warning",
      );
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }

      showSnackbar("اشتراک‌گذاری انجام نشد", "error");
    }
  };

  return (
    <>
      <IconButton
        aria-label="اشتراک‌گذاری"
        onClick={handleShare}
        sx={{
          ...shareButtonStyles.button,
          color,
        }}
      >
        <ShareOutlinedIcon />
      </IconButton>

      <AppSnackbar
        open={snackbarOpen}
        message={message}
        type={snackbarType}
        onClose={() => setSnackbarOpen(false)}
      />
    </>
  );
}