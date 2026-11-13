"use client";

import { useMemo, useState } from "react";
import { Box, CircularProgress, Menu, MenuItem, Typography } from "@mui/material";
import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";

import RequestConsultaionCard from "@/components/ui/common/cards/mentor/Request-counsulution";
import { FilterBar } from "@/components/ui/common/FilterBar";
import { useMentors } from "@/features/mentoring/api";

const ALL_CHIP_ID = "all";

// chip id == مقدار area_of_expertise سرور (فارسی)
const chips = [
  { id: ALL_CHIP_ID, label: "همه" },
  { id: "کسب‌وکار", label: "کسب‌وکار" },
  { id: "مالی", label: "مالی" },
  { id: "حقوقی", label: "حقوقی" },
  { id: "خانواده", label: "خانواده" },
];

type SortOption = "default" | "rating" | "experience";

export default function RequestConsultationPage() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [activeChipIds, setActiveChipIds] = useState<string[]>([ALL_CHIP_ID]);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [sortAnchor, setSortAnchor] = useState<HTMLElement | null>(null);

  const { data, isLoading, isError } = useMentors();
  const mentors = data ?? [];

  const handleSortClick = (event?: MouseEvent<HTMLElement>) => {
    if (event?.currentTarget) setSortAnchor(event.currentTarget);
  };

  const handleSortClose = () => setSortAnchor(null);

  const filteredMentors = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    const filtered = mentors.filter((mentor) => {
      const matchesSearch =
        !normalizedSearch ||
        [mentor.name, mentor.areaOfExpertise, mentor.descriptions].some(
          (val) => String(val ?? "").toLowerCase().includes(normalizedSearch),
        );

      const matchesCategory =
        activeChipIds.includes(ALL_CHIP_ID) ||
        activeChipIds.includes(mentor.areaOfExpertise);

      return matchesSearch && matchesCategory;
    });

    const sorted = [...filtered];
    switch (sortOption) {
      case "rating":
        sorted.sort((a, b) => b.score - a.score);
        break;
      case "experience":
        sorted.sort((a, b) => b.experienceYears - a.experienceYears);
        break;
    }

    return sorted;
  }, [mentors, searchValue, activeChipIds, sortOption]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", minWidth: 0 }}>
      <FilterBar
        searchValue={searchValue}
        searchPlaceholder="جستجوی منتور یا حوزه تخصص"
        onSearchChange={setSearchValue}
        onSearchSubmit={setSearchValue}
        chips={chips}
        activeChipIds={activeChipIds}
        onChipChange={setActiveChipIds}
        allChipId={ALL_CHIP_ID}
        sortLabel={
          sortOption === "rating"
            ? "بیشترین امتیاز"
            : sortOption === "experience"
              ? "بیشترین تجربه"
              : "مرتب‌سازی"
        }
        onSortClick={handleSortClick}
      />

      <Menu anchorEl={sortAnchor} open={Boolean(sortAnchor)} onClose={handleSortClose}>
        <MenuItem onClick={() => { setSortOption("default"); handleSortClose(); }}>
          پیش‌فرض
        </MenuItem>
        <MenuItem onClick={() => { setSortOption("rating"); handleSortClose(); }}>
          بیشترین امتیاز
        </MenuItem>
        <MenuItem onClick={() => { setSortOption("experience"); handleSortClose(); }}>
          بیشترین تجربه
        </MenuItem>
      </Menu>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <Typography variant="regularSm" color="error">
            خطا در دریافت اطلاعات. لطفاً دوباره تلاش کنید.
          </Typography>
        </Box>
      ) : filteredMentors.length > 0 ? (
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px", width: "100%", minWidth: 0 }}>
          {filteredMentors.map((mentor) => (
            <RequestConsultaionCard
              key={mentor.id}
              imageSrc={mentor.imageUrl ?? "/images/RequestConsultation/consultaion-user.png"}
              name={mentor.name}
              title={mentor.areaOfExpertise}
              specialty={mentor.descriptions}
              rating={mentor.score}
              experience={mentor.experienceYears}
              buttonText="درخواست مشاوره"
              onCardClick={() =>
                router.push(`/mentoring/request-consultation/mentor-profile/${mentor.id}`)
              }
              onButtonClick={() =>
                router.push(`/mentoring/request-consultation/mentor-profile/${mentor.id}`)
              }
            />
          ))}
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 6, width: "100%" }}>
          <Typography variant="boldSm" color="text.secondary">
            منتوری با این فیلترها پیدا نشد
          </Typography>
        </Box>
      )}
    </Box>
  );
}
