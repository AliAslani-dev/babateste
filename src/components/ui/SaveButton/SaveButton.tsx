
"use client";

import { useState } from "react";

import { IconButton } from "../Button";
import { semanticColors } from "@/theme";
import { saveButtonStyles } from "./SaveButton.styles";
import type { SaveButtonProps } from "./SaveButton.types";
import { AppSnackbar } from "../AppSnackBar";
import type { AppSnackbarType } from "../AppSnackBar/AppSnackbar.types";
import { BookmarkBorderIcon } from "../icons";
import BookmarkIcon from "../icons/Bookmark/BookMarkIcon";

export default function SaveButton({
  savedColor = semanticColors.background.primary,
  color = semanticColors.text.primary,
  isSaved = false,
  onSave,
}: SaveButtonProps) {
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] =
    useState<AppSnackbarType>("success");

  const showSnackbar = (msg: string, type: AppSnackbarType) => {
    setMessage(msg);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  const handleSave = () => {
    onSave?.();
    showSnackbar(
      isSaved ? "از ذخیره‌شده‌ها حذف شد" : "با موفقیت ذخیره شد",
      isSaved ? "info" : "success",
    );
  };

  return (
    <>
      <IconButton
        aria-label={isSaved ? "حذف از ذخیره‌شده‌ها" : "ذخیره"}
        aria-pressed={isSaved}
        onClick={handleSave}
        shape="circle"
        sx={{
          ...saveButtonStyles.button,
          color: isSaved ? savedColor : color,
        }}
      >
        {isSaved ? (
          <BookmarkIcon color={color} />
        ) : (
          <BookmarkBorderIcon color={color} />
        )}
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
