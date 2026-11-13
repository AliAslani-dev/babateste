"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  CircularProgress,
  Alert,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import { FilterBar } from "@/components/ui/common/FilterBar";

import CoursesListGrid from "./components/CoursesListGrid";
import { useFilteredCourses } from "./hooks/useFilteredCourses";
import {
  COURSE_CHIPS,
  COURSE_SORT_OPTIONS,
  ALL_CHIP_ID,
  inferCategory,
  type CourseCardItem,
  type CourseSortKey,
} from "./types/courses.types";
import {
  useAddCourseFavorite,
  useRemoveCourseFavorite,
  useCourseFavorites
} from "@/features/education/api";

type CoursesListPageProps = {
  courses: CourseCardItem[];
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  initialSearch?: string;
};

function resolveChipIdsFromTitle(title: string): string[] {
  if (!title) return [ALL_CHIP_ID];
  const category = inferCategory(title);
  const exists = COURSE_CHIPS.some((chip) => chip.id === category);
  return exists ? [category] : [ALL_CHIP_ID];
}

export default function CoursesListPage({
  courses,
  isLoading = false,
  isError = false,
  onRetry,
  initialSearch = "",
}: CoursesListPageProps) {
  const [search, setSearch] = useState(initialSearch);
  const [activeChips, setActiveChips] = useState<string[]>(() =>
    resolveChipIdsFromTitle(initialSearch),
  );
  const [sortKey, setSortKey] = useState<CourseSortKey | null>(null);
  const [sortAnchorEl, setSortAnchorEl] = useState<HTMLElement | null>(null);

  const prevInitialRef = useRef(initialSearch);
  const { data: favorites = [], isLoading: isFavoritesLoading } =
    useCourseFavorites();

  const addFavorite = useAddCourseFavorite();
  const removeFavorite = useRemoveCourseFavorite();

  const savedIds = favorites.map((favorite) => Number(favorite.id));

  const handleSaveToggle = async (courseId: number) => {
    if (
      !Number.isInteger(courseId) ||
      courseId <= 0 ||
      addFavorite.isPending ||
      removeFavorite.isPending
    ) {
      return;
    }

    const isSaved = savedIds.includes(courseId);

    try {
      if (isSaved) {
        await removeFavorite.mutateAsync({
          CourseId: String(courseId),
        });
      } else {
        await addFavorite.mutateAsync({
          CourseId: String(courseId),
        });
      }
    } catch (error) {
      console.error("خطا در تغییر علاقه‌مندی دوره:", error);
    }
  };
  useEffect(() => {
    if (prevInitialRef.current !== initialSearch) {
      prevInitialRef.current = initialSearch;
      setSearch(initialSearch);
      setActiveChips(resolveChipIdsFromTitle(initialSearch));
    }
  }, [initialSearch]);

  const filteredCourses = useFilteredCourses({
    search,
    activeChipIds: activeChips,
    allChipId: ALL_CHIP_ID,
    courses,
    sortKey,
  });

  return (
    <Box>
      <FilterBar
        searchValue={search}
        onSearchChange={(value) => {
          setSearch(value);
          if (value.trim()) {
            setActiveChips([ALL_CHIP_ID]);
          }
        }}
        onSearchSubmit={(v) => console.log("search:", v)}
        chips={COURSE_CHIPS}
        activeChipIds={activeChips}
        onChipChange={(ids) => {
          setActiveChips(ids);
          if (ids.length === 1 && ids[0] === ALL_CHIP_ID) {
            setSearch("");
          }
        }}
        allChipId={ALL_CHIP_ID}
        onFilterClick={() => console.log("open filter")}
        sortLabel={
          COURSE_SORT_OPTIONS.find((option) => option.id === sortKey)?.label ??
          "مرتب سازی"
        }
        onSortClick={(event) => setSortAnchorEl(event.currentTarget)}
      />

      <Menu
        anchorEl={sortAnchorEl}
        open={Boolean(sortAnchorEl)}
        onClose={() => setSortAnchorEl(null)}
      >
        {COURSE_SORT_OPTIONS.map((option) => (
          <MenuItem
            key={option.id}
            selected={option.id === sortKey}
            onClick={() => {
              setSortKey(option.id);
              setSortAnchorEl(null);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>

      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      )}

      {isError && (
        <Alert
          severity="error"
          sx={{ my: 3 }}
          action={
            <Button color="inherit" size="small" onClick={onRetry}>
              تلاش دوباره
            </Button>
          }
        >
          خطا در دریافت دوره‌ها
        </Alert>
      )}

      {!isLoading && !isError && (
        <CoursesListGrid
          courses={filteredCourses.map((course) => ({
            ...course,
            isSaved: savedIds.includes(Number(course.id)),
          }))}
          onActionClick={(id) => console.log("open course:", id)}
          onSaveToggle={handleSaveToggle}
        />
      )}
    </Box>
  );
}
