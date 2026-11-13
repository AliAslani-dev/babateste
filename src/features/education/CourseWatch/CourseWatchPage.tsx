"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";

import { useCourseDetail, useCourseEpisodes } from "../api";
import { useSnackbar } from "@/providers/SnackbarProvider/SnackbarProvider";

import { CourseWatchSidebar } from "./CourseWatchSidebar";
import { CourseWatchPlayer } from "./CourseWatchPlayer";
import {
  watchPageWrapperStyles,
  watchPageMainStyles,
  watchPageHeaderStyles,
  watchPageCourseTitleStyles,
  watchPageMetaStyles,
  watchPageMetaItemStyles,
  watchPageSidebarStyles,
  watchPageEmptyStyles,
} from "./CourseWatchPage.styles";

interface CourseWatchPageProps {
  courseId: string;
}

const toFa = (n: number | string) =>
  String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function CourseWatchPage({ courseId }: CourseWatchPageProps) {
  const {
    data: course,
    isLoading: courseLoading,
    isError: courseError,
    error: courseErr,
    refetch: refetchCourse,
  } = useCourseDetail(courseId);

  const {
    data: episodes,
    isLoading: episodesLoading,
    isError: episodesError,
    error: episodesErr,
    refetch: refetchEpisodes,
  } = useCourseEpisodes(courseId);

  const [activeEpisodeId, setActiveEpisodeId] = useState<number | null>(null);
  const snackbar = useSnackbar();

  const isLoading = courseLoading || episodesLoading;
  const isError = courseError || episodesError;

  useEffect(() => {
    if (isError) {
      snackbar.showError(courseErr ?? episodesErr);
    }
  }, [isError, courseErr, episodesErr, snackbar]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert
        severity="error"
        sx={{ m: 2 }}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => {
              refetchCourse();
              refetchEpisodes();
            }}
          >
            تلاش دوباره
          </Button>
        }
      >
        خطا در دریافت اطلاعات دوره
      </Alert>
    );
  }

  if (!episodes || episodes.length === 0) {
    return (
      <Box sx={watchPageEmptyStyles}>
        <Typography variant="boldBase" color="text.secondary">
          هنوز اپیزودی برای این دوره ثبت نشده
        </Typography>
      </Box>
    );
  }

  const activeIndex = Math.max(
    0,
    episodes.findIndex((e) => e.id === activeEpisodeId),
  );
  const activeEpisode = episodes[activeIndex] ?? episodes[0];

  return (
    <Box sx={watchPageWrapperStyles}>
      <Box sx={watchPageMainStyles}>
        <CourseWatchPlayer
          episode={activeEpisode}
          courseTitle={course?.title ?? ""}
          episodeIndex={activeIndex}
          totalEpisodes={episodes.length}
        />

        <Box sx={watchPageHeaderStyles}>
          <Typography variant="bold2xl" sx={watchPageCourseTitleStyles}>
            {course?.title ?? ""}
          </Typography>

          <Box sx={watchPageMetaStyles}>
            <Box sx={watchPageMetaItemStyles}>
              <Typography variant="mediumSm">
                {toFa(episodes.length)} قسمت
              </Typography>
            </Box>
            {course?.totalHours ? (
              <Box sx={watchPageMetaItemStyles}>
                <Typography variant="mediumSm">
                  {toFa(course.totalHours)} ساعت
                </Typography>
              </Box>
            ) : null}
            {course?.teacher?.fullName ? (
              <Box sx={watchPageMetaItemStyles}>
                <Typography variant="mediumSm">
                  مدرس: {course.teacher.fullName}
                </Typography>
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>

      <Box sx={watchPageSidebarStyles}>
        <CourseWatchSidebar
          episodes={episodes}
          activeEpisodeId={activeEpisode.id}
          onSelect={setActiveEpisodeId}
        />
      </Box>
    </Box>
  );
}