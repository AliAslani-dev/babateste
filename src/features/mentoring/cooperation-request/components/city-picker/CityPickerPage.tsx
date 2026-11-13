// src/features/mentoring/components/cooperation-request/city-picker/CityPickerPage.tsx
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Typography } from "@mui/material";

import { POPULAR_CITIES, ALL_CITIES } from "../form/step1/cities.constants";
import {
  cityPickerRootSx,
  searchContainerSx,
  searchIconWrapperSx,
  searchInputSx,
  sectionTitleSx,
  allCitiesTitleSx,
  popularChipsRowSx,
  popularChipSx,
  cityListSx,
  cityRowSx,
  cityRowIconSx,
  cityRowLabelSx,
  emptyStateSx,
} from "./CityPicker.styles";

// ─── Icons ────────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5C12.5 3.515 10.485 1.5 8 1.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// ─── Patch city into the step-1 draft ────────────────────────────────────────
const DRAFT_KEY = "basicInfoStep.draft";

function patchDraftWithCity(value: string) {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    const draft = raw ? JSON.parse(raw) : {};
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ ...draft, city: value }));
  } catch {}
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CityPickerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo") ?? "/mentoring/cooperation-request";

  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? ALL_CITIES.filter((c) => c.label.includes(query.trim()))
    : ALL_CITIES;

  const handleSelect = (value: string) => {
    patchDraftWithCity(value);
    // Navigate back with no extra params — step reads result from sessionStorage
    router.replace(returnTo);
  };

  return (
    <Box sx={cityPickerRootSx}>

      {/* ── Search ──────────────────────────────────────────────── */}
      <Box sx={searchContainerSx}>
        <Box component="span" sx={searchIconWrapperSx}>
          <SearchIcon />
        </Box>
        <Box
          component="input"
          type="search"
          placeholder="جستجوی شهر…"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          sx={searchInputSx}
        />
      </Box>

      {/* ── Popular cities ──────────────────────────────────────── */}
      {!query.trim() && (
        <Box>
          <Typography component="span" sx={sectionTitleSx}>
            شهرهای پرکاربرد
          </Typography>
          <Box sx={popularChipsRowSx}>
            {POPULAR_CITIES.map((city) => (
              <Box
                key={city.value}
                component="button"
                type="button"
                onClick={() => handleSelect(city.value)}
                sx={popularChipSx}
              >
                {city.label}
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* ── All / filtered cities ───────────────────────────────── */}
      <Box>
        {!query.trim() && (
          <Typography component="span" sx={allCitiesTitleSx}>
            همه شهرها
          </Typography>
        )}

        {filtered.length === 0 ? (
          <Typography component="span" sx={emptyStateSx}>
            شهری یافت نشد
          </Typography>
        ) : (
          <Box component="ul" sx={cityListSx}>
            {filtered.map((city, idx) => (
              <Box
                key={city.value}
                component="li"
                onClick={() => handleSelect(city.value)}
                sx={cityRowSx(idx === filtered.length - 1)}
              >
                <Box component="span" sx={cityRowIconSx}>
                  <LocationIcon />
                </Box>
                <Typography component="span" sx={cityRowLabelSx}>
                  {city.label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>

    </Box>
  );
}
