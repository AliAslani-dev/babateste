"use client";

import { useState } from "react";
import { Box, Typography, CircularProgress, TextField } from "@mui/material";

import { useCourseComments, useCommentCourse } from "@/features/education/api";
import { Button } from "@/components/ui/Button";
import { useSnackbar } from "@/providers/SnackbarProvider/SnackbarProvider";
import {
  commentsWrapperStyles,
  commentItemStyles,
  commentHeaderStyles,
  commentAvatarStyles,
  commentTextStyles,
  commentFormStyles,
  commentsEmptyStyles,
} from "./CourseComments.styles";

interface CourseCommentsProps {
  courseId: number | string;
}

export default function CourseComments({ courseId }: CourseCommentsProps) {
  const [text, setText] = useState("");
  const snackbar = useSnackbar();
  const { data: comments, isLoading, isError } = useCourseComments(courseId);

  const comment = useCommentCourse();

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    comment.mutate(
      { courseId, comment_text: trimmed },
      {
        onSuccess: (data) => {
          setText("");
          snackbar.showSuccess(data.message);
        },
        onError: (error) => {
          snackbar.showError(error);
        },
      },
    );
  };

  return (
    <Box sx={commentsWrapperStyles}>
      {/* فرم ثبت نظر */}
      <Box sx={commentFormStyles}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="نظر خود را بنویسید..."
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
          disabled={comment.isPending || !text.trim()}
        >
          {comment.isPending ? "در حال ارسال..." : "ارسال نظر"}
        </Button>
      </Box>

      {/* لیست نظرات */}
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress size={24} />
        </Box>
      )}

      {isError && (
        <Typography variant="mediumBase" color="error" sx={{textAlign:"center"}}>
          خطا در دریافت نظرات
        </Typography>
      )}

      {!isLoading && !isError && (!comments || comments.length === 0) && (
        <Typography variant="mediumBase" sx={commentsEmptyStyles}>
          هنوز نظری ثبت نشده
        </Typography>
      )}

      {!isLoading &&
        !isError &&
        comments?.map((c, index) => (
          <Box key={index} sx={commentItemStyles}>
            <Box sx={commentHeaderStyles}>
              <Box sx={commentAvatarStyles}>
                {c.commenter.name?.charAt(0) ?? "؟"}
              </Box>
              <Typography variant="boldSm" color="text.primary">
                {c.commenter.name ?? c.commenter.phoneNumber}
              </Typography>
            </Box>
            <Typography variant="mediumBase" sx={commentTextStyles}>
              {c.commentText}
            </Typography>
          </Box>
        ))}
    </Box>
  );
}
