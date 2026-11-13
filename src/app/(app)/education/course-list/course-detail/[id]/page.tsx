"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  CircularProgress,
  Alert,
  Button,
  Typography,
} from "@mui/material";

import { useCourseDetail } from "@/features/education/api";
import CourseDetails from "@/features/education/course-detail/components/CourseDetail/CourseDetails";

import { useNavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail/NavbarDetailContext";

import {
  useAddCourseFavorite,
  useRemoveCourseFavorite,
} from "@/features/education/api";

import { useCourseFavorites } from "@/features/education/api";

export default function CourseDetailPage() {
  const params = useParams<{ id: string }>();
  const courseId = Number(params?.id);

  const {
    data: course,
    isLoading,
    isError,
    refetch,
  } = useCourseDetail(params?.id);

  const { data: favorites = [], isLoading: isFavoritesLoading } =
    useCourseFavorites();

  const { setNavbarDetail } = useNavbarDetail();

  const { mutateAsync: addCourseFavorite, isPending: isAddingFavorite } =
    useAddCourseFavorite();

  const { mutateAsync: removeCourseFavorite, isPending: isRemovingFavorite } =
    useRemoveCourseFavorite();

  const [isSaved, setIsSaved] = useState(false);

  // تشخیص وضعیت علاقه‌مندی دوره
  useEffect(() => {
    if (isFavoritesLoading) return;

    const saved = favorites.some(
      (favorite) => Number(favorite.id) === courseId,
    );

    setIsSaved(saved);
  }, [favorites, isFavoritesLoading, courseId]);

  // افزودن یا حذف علاقه‌مندی
  const handleSave = useCallback(async () => {
    if (
      !Number.isInteger(courseId) ||
      courseId <= 0 ||
      isAddingFavorite ||
      isRemovingFavorite
    ) {
      return;
    }

    const previousValue = isSaved;
    const nextValue = !previousValue;

    setIsSaved(nextValue);

    try {
      if (nextValue) {
        await addCourseFavorite({
          CourseId: String(courseId),
        });
      } else {
        await removeCourseFavorite({
          CourseId: String(courseId),
        });
      }
    } catch (error) {
      setIsSaved(previousValue);

      console.error("خطا در تغییر علاقه‌مندی دوره:", error);
    }
  }, [
    courseId,
    isSaved,
    isAddingFavorite,
    isRemovingFavorite,
    addCourseFavorite,
    removeCourseFavorite,
  ]);

  // ارسال وضعیت و callback به NavbarDetail
  useEffect(() => {
    setNavbarDetail({
      isSaved,
      onSave: handleSave,
    });
  }, [isSaved, handleSave, setNavbarDetail]);

  // پاک‌کردن وضعیت هنگام خروج از صفحه
  useEffect(() => {
    return () => {
      setNavbarDetail({
        isSaved: false,
        onSave: undefined,
      });
    };
  }, [setNavbarDetail]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !course) {
    return (
      <Box sx={{ px: 2, py: 4 }}>
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => void refetch()}>
              تلاش دوباره
            </Button>
          }
        >
          خطا در دریافت اطلاعات دوره
        </Alert>
      </Box>
    );
  }

  if (!Number.isInteger(courseId) || courseId <= 0) {
    return (
      <Box sx={{ px: 2, py: 4 }}>
        <Typography>شناسهٔ دوره معتبر نیست.</Typography>
      </Box>
    );
  }

  return <CourseDetails course={course} />;
}
