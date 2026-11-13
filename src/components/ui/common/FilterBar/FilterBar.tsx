"use client";

import { Box } from "@mui/material";

import { SearchInput } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import {
  filterBarStyles,
  filterBarChipsRowStyles,
  filterBarBottomRowStyles,
  filterChipStyles,
  filterBarSortButtonStyles,
  filterBarFilterButtonStyles,
} from "./FilterBar.styles";

import { FilterBarProps } from "./FilterBar.types";
import ChevronDownIcon from "../../icons/arrows/ChevronDownIcon";
import FilterIcon from "../../icons/FilterIcon/FilterIcon";

export default function FilterBar({
  searchValue = "",
  searchPlaceholder = "جستجو",
  onSearchChange,
  onSearchSubmit,

  chips,
  activeChipIds = [],
  onChipChange,
  allChipId,

  filterLabel = "فیلترها",
  onFilterClick,

  sortLabel = "مرتب سازی",
  onSortClick,
}: FilterBarProps) {
  /* ────────────────────────────────────────────────
   * Toggle یه چیپ با منطق «همه»
   * ──────────────────────────────────────────────── */
  // const handleChipToggle = (chipId: string) => {
  //   // حالت ۱: چیپ «همه» کلیک شد → فقط همون
  //   if (allChipId && chipId === allChipId) {
  //     onChipChange?.([allChipId]);
  //     return;
  //   }

  //   // حالت ۲: یه چیپ دیگه کلیک شد → «همه» رو حذف کن
  //   const withoutAll = allChipId
  //     ? activeChipIds.filter((id) => id !== allChipId)
  //     : [...activeChipIds];

  //   const isSelected = withoutAll.includes(chipId);

  //   const nextIds = isSelected
  //     ? withoutAll.filter((id) => id !== chipId)
  //     : [...withoutAll, chipId];

  //   // حالت ۳: اگه هیچی نموند → «همه» برگرده
  //   if (allChipId && nextIds.length === 0) {
  //     onChipChange?.([allChipId]);
  //     return;
  //   }

  //   onChipChange?.(nextIds);
  // };

  const handleChipToggle = (chipId: string) => {
    // هر بار فقط یک فیلتر فعال باشد
    onChipChange?.([chipId]);
  };
  /* ────────────────────────────────────────────────
   * تعداد فیلترهای فعال (به جز «همه»)
   * ──────────────────────────────────────────────── */
  const filterCount = allChipId
    ? activeChipIds.filter((id) => id !== allChipId).length
    : activeChipIds.length;

  /* ────────────────────────────────────────────────
   * آیا چیپ فعاله؟
   * ──────────────────────────────────────────────── */
  const isChipActive = (chipId: string) => activeChipIds.includes(chipId);

  return (
    <Box sx={filterBarStyles}>
      {/* ── Search Input ─────────────────────────────── */}
      <SearchInput
        value={searchValue}
        placeholder={searchPlaceholder}
        onChange={(e) => onSearchChange?.(e.target.value)}
        onSearch={onSearchSubmit}
        size="lg"
        fullWidth
      />

      {/* ── Chips (Multi Select) ─────────────────────── */}
      <Box sx={filterBarChipsRowStyles}>
        {chips.map((chip) => {
          const isActive = isChipActive(chip.id);

          return (
            <Button
              key={chip.id}
              appearance="outlined"
              color="neutral"
              size="sm"
              shape="rounded"
              onClick={() => handleChipToggle(chip.id)}
              sx={filterChipStyles(isActive)}
            >
              {chip.label}
            </Button>
          );
        })}
      </Box>
      {/* ── Bottom: Sort + Filter ────────────────────── */}
      <Box sx={filterBarBottomRowStyles}>
        {/* Sort */}
        <Button
          appearance="outlined"
          color="neutral"
          size="md"
          shape="rounded"
          onClick={onSortClick}
          icon={<ChevronDownIcon />}
          iconPosition="end"
          sx={filterBarSortButtonStyles}
        >
          {sortLabel}
        </Button>

        {/* Filter — count خودکار */}
        {/* <Button
          appearance="outlined"
          color="neutral"
          size="md"
          shape="rounded"
          onClick={onFilterClick}
          icon={<FilterIcon />}
          iconPosition="end"
          sx={filterBarFilterButtonStyles}
        >
          {filterCount > 0 ? `${filterLabel} (${filterCount})` : filterLabel}
        </Button> */}
      </Box>
    </Box>
  );
}
