
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { useParams } from "next/navigation";
import {
  Box,
  CircularProgress,
  Alert,
  Button,
  Typography,
} from "@mui/material";

import { useDoctorDetail } from "@/features/health/api";

import DoctorDetails from "@/features/health/DoctorDetail/components/DoctorDetail/DoctorDetail";

import { useNavbarDetail } from "@/components/layout/navbar-up/components/NavbarDetail/NavbarDetailContext";

import {
  useAddDoctorFavorite,
  useRemoveDoctorFavorite,
} from "@/features/health/api";

import { useDoctorFavorites } from "@/features/health/api";

export default function DoctorDetailPage() {
  const params = useParams<{ id: string }>();
  const doctorId = Number(params.id);

  const {
    data: doctor,
    isLoading,
    isError,
    refetch,
  } = useDoctorDetail(params.id);

  const {
    data: favorites,
    isLoading: isFavoritesLoading,
  } = useDoctorFavorites();

  const { setNavbarDetail } = useNavbarDetail();

  const {
    mutateAsync: addDoctorFavorite,
    isPending: isAddingFavorite,
  } = useAddDoctorFavorite();

  const {
    mutateAsync: removeDoctorFavorite,
    isPending: isRemovingFavorite,
  } = useRemoveDoctorFavorite();

  const [isSaved, setIsSaved] = useState(false);

  // بررسی وضعیت واقعی علاقه‌مندی پزشک
  useEffect(() => {
    if (isFavoritesLoading) return;

    const saved = (favorites ?? []).some(
      (favorite) => Number(favorite.id) === doctorId,
    );

    setIsSaved(saved);
  }, [favorites, isFavoritesLoading, doctorId]);

  // افزودن یا حذف علاقه‌مندی
  const handleSave = useCallback(async () => {
    if (
      !Number.isInteger(doctorId) ||
      doctorId <= 0 ||
      isAddingFavorite ||
      isRemovingFavorite
    ) {
      return;
    }

    const previousValue = isSaved;
    const nextValue = !previousValue;

    // تغییر فوری آیکون
    setIsSaved(nextValue);

    try {
      if (nextValue) {
        await addDoctorFavorite({
          DoctorId: String(doctorId),
        });
      } else {
        await removeDoctorFavorite({
          DoctorId: String(doctorId),
        });
      }
    } catch (error) {
      setIsSaved(previousValue);

      console.error(
        "خطا در تغییر علاقه‌مندی پزشک:",
        error,
      );
    }
  }, [
    doctorId,
    isSaved,
    isAddingFavorite,
    isRemovingFavorite,
    addDoctorFavorite,
    removeDoctorFavorite,
  ]);

  // اتصال وضعیت علاقه‌مندی به نوار بالای صفحه
  useEffect(() => {
    setNavbarDetail({
      isSaved,
      onSave: handleSave,
    });
  }, [isSaved, handleSave, setNavbarDetail]);

  // پاک کردن وضعیت هنگام خروج از صفحه
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 6,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          دریافت اطلاعات پزشک با خطا مواجه شد.
        </Alert>

        <Button onClick={() => void refetch()}>
          تلاش دوباره
        </Button>
      </Box>
    );
  }

  if (!doctor || !Number.isInteger(doctorId) || doctorId <= 0) {
    return (
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography variant="regularXs">
          اطلاعات پزشک پیدا نشد.
        </Typography>
      </Box>
    );
  }

  return (
    <DoctorDetails
      doctor={doctor}
      doctorId={doctorId}
    />
  );
}
