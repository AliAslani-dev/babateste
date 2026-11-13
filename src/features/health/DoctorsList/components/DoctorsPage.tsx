
"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, CircularProgress, Alert, Button } from "@mui/material";

import { FilterBar } from "@/components/ui/common/FilterBar";
import { useDoctors } from "@/features/health/api";

import {
  ALL_DOCTOR_CHIP_ID,
  DOCTOR_CHIPS,
  inferDoctorCategory,
} from "../types/DoctorList.types";

import DoctorsListGrid from "./DoctorListGrid/DoctorListGrid";

import { useAddDoctorFavorite, useRemoveDoctorFavorite } from "@/features/health/api";
import { useDoctorFavorites } from "@/features/health/api";


export default function DoctorsList() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [activeChips, setActiveChips] = useState<string[]>([
    ALL_DOCTOR_CHIP_ID,
  ]);

  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useDoctors();

  const {
    data: favorites,
    isLoading: isFavoritesLoading,
  } = useDoctorFavorites();

  const addFavorite = useAddDoctorFavorite();
  const removeFavorite = useRemoveDoctorFavorite();

  // استخراج شناسه پزشک‌های ذخیره‌شده از پاسخ API
  const savedIds = useMemo(
    () =>
      (favorites ?? [])
        .map((favorite) => Number(favorite.id))
        .filter((id) => Number.isFinite(id) && id > 0),
    [favorites],
  );

  const filteredDoctors = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const doctors = data ?? [];

    return doctors.filter((doctor) => {
      const matchesSearch =
        !normalizedSearch ||
        doctor.name.toLowerCase().includes(normalizedSearch) ||
        doctor.specialityText.toLowerCase().includes(normalizedSearch) ||
        doctor.location.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        activeChips.includes(ALL_DOCTOR_CHIP_ID) ||
        activeChips.includes(
          inferDoctorCategory(doctor.specialityText),
        );

      return matchesSearch && matchesCategory;
    });
  }, [data, search, activeChips]);

  const handleSaveToggle = useCallback(
    async (doctorId: number) => {
      const isSaved = savedIds.includes(doctorId);

      try {
        if (isSaved) {
          await removeFavorite.mutateAsync({
            DoctorId: String(doctorId),
          });
        } else {
          await addFavorite.mutateAsync({
            DoctorId: String(doctorId),
          });
        }
      } catch (error) {
        console.error(
          "خطا در تغییر علاقه‌مندی پزشک:",
          error,
        );
      }
    },
    [savedIds, addFavorite, removeFavorite],
  );

  const handleDoctorClick = (doctorId: number) => {
    router.push(
      `/health/doctors-list/doctor-detail/${doctorId}`,
    );
  };

  return (
    <Box sx={{ width: "100%", minWidth: 0 }}>
      <FilterBar
        searchValue={search}
        onSearchChange={setSearch}
        onSearchSubmit={(value) => setSearch(value)}
        chips={DOCTOR_CHIPS}
        activeChipIds={activeChips}
        onChipChange={setActiveChips}
        allChipId={ALL_DOCTOR_CHIP_ID}
        onFilterClick={() =>
          console.log("open doctor filter")
        }
        onSortClick={() =>
          console.log("open doctor sort")
        }
      />

      {(isLoading || isFavoritesLoading) && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 6,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {isError && (
        <Alert
          severity="error"
          sx={{ my: 3 }}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => void refetch()}
            >
              تلاش دوباره
            </Button>
          }
        >
          خطا در دریافت پزشک‌ها
        </Alert>
      )}

      {!isLoading &&
        !isFavoritesLoading &&
        !isError && (
          <DoctorsListGrid
            doctors={filteredDoctors}
            savedIds={savedIds}
            onSaveToggle={handleSaveToggle}
            onCardClick={handleDoctorClick}
          />
        )}
    </Box>
  );
}
