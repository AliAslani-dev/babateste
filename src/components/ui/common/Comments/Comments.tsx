"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography, CircularProgress, TextField } from "@mui/material";

import { Button } from "@/components/ui/Button";
import type { CommentsProps } from "./Comments.types";
import {
  commentsWrapperStyles,
  commentFormStyles,
  commentItemStyles,
  commentHeaderStyles,
  commentAvatarStyles,
  commentTextStyles,
  commentsEmptyStyles,
} from "./Comments.styles";

export default function Comments({
  comments,
  isLoading,
  isError,
  isSubmitting,
  placeholder = "نظر خود را بنویسید...",
  emptyText = "هنوز نظری ثبت نشده",
  errorText = "خطا در دریافت نظرات",
  submitLabel = "ارسال نظر",
  submittingLabel = "در حال ارسال...",
  onSubmit,
  renderItem,
}: CommentsProps) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    try {
      await onSubmit(trimmed);
      setText("");
    } catch {
      // متن برای تلاش مجدد حفظ می‌شود
    }
  };

  return (
    <Box sx={commentsWrapperStyles}>
      {/* فرم ثبت نظر */}
      <Box sx={commentFormStyles}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          multiline
          minRows={2}
          fullWidth
          size="small"
        />
        <Button
          color="primary"
          appearance="solid"
          size="xs"
          shape="pill"
          onClick={handleSubmit}
          disabled={isSubmitting || !text.trim()}
        >
          {isSubmitting ? submittingLabel : submitLabel}
        </Button>
      </Box>

      {/* لیست نظرات */}
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress size={24} />
        </Box>
      )}

      {isError && (
        <Typography
          variant="mediumBase"
          color="error"
          sx={{ textAlign: "center" }}
        >
          {errorText}
        </Typography>
      )}

      {!isLoading && !isError && (!comments || comments.length === 0) && (
        <Typography variant="mediumBase" sx={commentsEmptyStyles}>
          {emptyText}
        </Typography>
      )}

      {!isLoading &&
        !isError &&
        comments?.map((c, index) =>
          renderItem ? (
            <Box key={index}>{renderItem(c, index)}</Box>
          ) : (
            <Box key={index} sx={commentItemStyles}>
              <Box sx={commentHeaderStyles}>
                <Box
                  sx={{
                    ...commentAvatarStyles,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {c.commenter.profileImage ? (
                    <Image
                      src={c.commenter.profileImage}
                      alt={c.commenter.name ?? "کاربر"}
                      fill
                      sizes="32px"
                      unoptimized
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    c.commenter.name?.charAt(0) ?? "؟"
                  )}
                </Box>
                <Typography variant="boldSm" color="text.primary">
                  {c.commenter.name ?? c.commenter.phoneNumber}
                </Typography>
              </Box>
              <Typography variant="mediumBase" sx={commentTextStyles}>
                {c.commentText}
              </Typography>
            </Box>
          ),
        )}
    </Box>
  );
}