"use client";

import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/navigation";

import type { CourseAboutProps } from "./CourseAbout.types";

import {
  CourseAboutStyles,
  CourseDetailTextStyles,
  LearningOutcomesSectionStyles,
  LearningOutcomesTitleStyles,
  LearningOutcomesListStyles,
  LearningOutcomeItemStyles,
  LearningOutcomeCheckStyles,
  LearningOutcomeTextStyles,
  RequestButtonStyles,
} from "./CourseAbout.styles";
import { Button } from "@/components/ui/Button";
import { useSnackbar } from "@/providers/SnackbarProvider/SnackbarProvider";

import { useEnrollCourse, useIsEnrolled } from "@/features/education/api";

export default function CourseAbout({
  courseId,
  detail,
  learningOutcomes,
}: CourseAboutProps) {
  const router = useRouter();
  const enroll = useEnrollCourse();
  const { isEnrolled, isLoading: checkingEnrolled } = useIsEnrolled(courseId);
  const snackbar = useSnackbar();

  const handleClick = () => {
    if (!courseId) return;

    if (isEnrolled) {
      router.push(`/education/course-list/course-detail/${courseId}/watch`);
      return;
    }

    enroll.mutate(
      { courseId },
      {
        onSuccess: () => {
          router.push(`/education/course-list/course-detail/${courseId}/watch`);
        },
        onError: (error) => {
          snackbar.showError(error);
        },
      },
    );
  };

  const isPending = enroll.isPending || checkingEnrolled;

  return (
    <Box sx={CourseAboutStyles}>
      <Typography variant="mediumBase" sx={CourseDetailTextStyles}>
        {detail}
      </Typography>

      <Box sx={LearningOutcomesSectionStyles}>
        <Typography variant="boldBase" sx={LearningOutcomesTitleStyles}>
          آنچه یاد می‌گیرید
        </Typography>

        <Box sx={LearningOutcomesListStyles}>
          {learningOutcomes.map((outcome, index) => (
            <Box key={`${index}-${outcome}`} sx={LearningOutcomeItemStyles}>
              <Box sx={LearningOutcomeCheckStyles}>
                <CheckIcon sx={{ fontSize: 15 }} />
              </Box>

              <Typography variant="mediumBase" sx={LearningOutcomeTextStyles}>
                {outcome}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          id="course-cta-button"
          color="primary"
          appearance="solid"
          size="xs"
          shape="pill"
          fullWidth
          onClick={handleClick}
          disabled={isPending || !courseId}
          sx={RequestButtonStyles}
        >
          {isPending
            ? "لطفاً صبر کنید..."
            : isEnrolled
              ? "مشاهده دوره"
              : "شروع دوره"}
        </Button>
      </Box>
    </Box>
  );
}