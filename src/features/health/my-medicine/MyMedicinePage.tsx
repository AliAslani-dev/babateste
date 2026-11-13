"use client";

import { Box, Typography, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

import Alert from "@/components/ui/common/alert";
import MedicineCard from "@/components/ui/common/cards/medicine-card";
import Button from "@/components/ui/Button/Button";
import { semanticColors } from "@/theme";
import { toJalaliDate } from "@/lib/utils/toJalaliDate";
import type { MedicationItem } from "@/features/health/api";
import { useSetEditingMedicine, useMyMedications } from "@/features/health/api";
import {
  myMedicinePageWrapperStyles,
  myMedicinePageTabsContainerStyles,
  myMedicinePageTabStyles,
  myMedicinePageCardsListStyles,
  myMedicinePageAddButtonWrapperStyles,
} from "./MyMedicinePage.styles";
import { useState } from "react";

// ─── Helpers ─────────────────────────────────────────────────

function getConsumptionTime(item: MedicationItem): string {
  if (item.shouldTakeAtMorning) return "روزانه-صبح";
  if (item.shouldTakeAtNoon) return "روزانه-ظهر";
  if (item.shouldTakeAtNight) return "روزانه-شب";
  return "—";
}

function isActive(item: MedicationItem): boolean {
  if (!item.endDate) return true;
  return new Date(item.endDate) >= new Date();
}

// ─── Component ───────────────────────────────────────────────
export default function MyMedicinePage() {
  const router = useRouter();
  const setEditingMedicine = useSetEditingMedicine();
  const [activeTab, setActiveTab] = useState<"current" | "previous">("current");

  const { data, isLoading } = useMyMedications();

  const allItems = data?.items ?? [];
  const currentMedicines = allItems.filter(isActive);
  const previousMedicines = allItems.filter((item) => !isActive(item));

  const displayedMedicines =
    activeTab === "current" ? currentMedicines : previousMedicines;

  return (
    <Box sx={myMedicinePageWrapperStyles}>
      {/* Alert */}
      <Alert
        title="یادآوری هوشمند"
        description="با فعال کردن یادآوری، داروهای تان را فراموش نمی کنید."
      />

      {/* Tab toggle: داروهای فعال / داروهای قبلی */}
      <Box sx={myMedicinePageTabsContainerStyles}>
        {/* داروهای فعال */}
        <Box
          component="button"
          type="button"
          onClick={() => setActiveTab("current")}
          sx={myMedicinePageTabStyles(activeTab === "current")}
        >
          <Typography
            variant="mediumXs"
            sx={{
              color:
                activeTab === "current"
                  ? semanticColors.text.primary
                  : semanticColors.text.secondary,
              textAlign: "center",
            }}
          >
            داروهای فعال
          </Typography>
        </Box>

        {/* داروهای قبلی */}
        <Box
          component="button"
          type="button"
          onClick={() => setActiveTab("previous")}
          sx={myMedicinePageTabStyles(activeTab === "previous")}
        >
          <Typography
            variant="mediumXs"
            sx={{
              color:
                activeTab === "previous"
                  ? semanticColors.text.primary
                  : semanticColors.text.secondary,
              textAlign: "center",
            }}
          >
            داروهای قبلی
          </Typography>
        </Box>
      </Box>

      {/* Medicine cards list */}
      <Box sx={myMedicinePageCardsListStyles}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress size={32} />
          </Box>
        ) : (
          displayedMedicines.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              name={medicine.title}
              dose={medicine.amount}
              time={getConsumptionTime(medicine)}
              startDate={toJalaliDate(medicine.startDate)}
              active={medicine.hasReminder}
              onEdit={() => {
                setEditingMedicine(medicine);
                router.push("/health/medicine");
              }}
            />
          ))
        )}
      </Box>

      {/* Fixed add button */}
      <Box sx={myMedicinePageAddButtonWrapperStyles}>
        <Button
          appearance="solid"
          color="primary"
          shape="pill"
          size="lg"
          fullWidth
          onClick={() => setEditingMedicine(null)}
          href="/health/medicine"
        >
          + افزودن داروی جدید
        </Button>
      </Box>
    </Box>
  );
}
