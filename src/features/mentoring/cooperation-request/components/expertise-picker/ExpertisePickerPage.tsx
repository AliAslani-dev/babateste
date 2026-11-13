// src/features/mentoring/components/cooperation-request/expertise-picker/ExpertisePickerPage.tsx
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Typography } from "@mui/material";

import { POPULAR_EXPERTISES, ALL_EXPERTISES } from "../form/step2/expertises.constants";
import {
  expertisePickerRootSx,
  searchContainerSx,
  searchIconWrapperSx,
  searchInputSx,
  sectionTitleSx,
  allExpertisesTitleSx,
  popularChipsRowSx,
  popularChipSx,
  expertiseListSx,
  expertiseRowSx,
  expertiseRowIconSx,
  expertiseRowLabelSx,
  emptyStateSx,
} from "./ExpertisePicker.styles";

// ─── Icons ────────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ExpertiseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.5 14c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Patch expertise into the step-2 draft ───────────────────────────────────
const DRAFT_KEY = "expertiseStep.draft";

function patchDraftWithExpertise(value: string) {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    const draft = raw ? JSON.parse(raw) : {};
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ ...draft, expertise: value }));
  } catch {}
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ExpertisePickerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo") ?? "/mentoring/cooperation-request";

  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? ALL_EXPERTISES.filter((e) => e.label.includes(query.trim()))
    : ALL_EXPERTISES;

  const handleSelect = (value: string) => {
    patchDraftWithExpertise(value);
    // Navigate back with no extra params — step reads result from sessionStorage
    router.replace(returnTo);
  };

  return (
    <Box sx={expertisePickerRootSx}>

      {/* ── Search ──────────────────────────────────────────────── */}
      <Box sx={searchContainerSx}>
        <Box component="span" sx={searchIconWrapperSx}>
          <SearchIcon />
        </Box>
        <Box
          component="input"
          type="search"
          placeholder="جستجوی حوزه تخصص…"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          sx={searchInputSx}
        />
      </Box>

      {/* ── Popular expertises ───────────────────────────────────── */}
      {!query.trim() && (
        <Box>
          <Typography component="span" sx={sectionTitleSx}>
            حوزه‌های پرکاربرد
          </Typography>
          <Box sx={popularChipsRowSx}>
            {POPULAR_EXPERTISES.map((exp) => (
              <Box
                key={exp.value}
                component="button"
                type="button"
                onClick={() => handleSelect(exp.value)}
                sx={popularChipSx}
              >
                {exp.label}
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* ── All / filtered expertises ────────────────────────────── */}
      <Box>
        {!query.trim() && (
          <Typography component="span" sx={allExpertisesTitleSx}>
            همه حوزه‌ها
          </Typography>
        )}

        {filtered.length === 0 ? (
          <Typography component="span" sx={emptyStateSx}>
            حوزه‌ای یافت نشد
          </Typography>
        ) : (
          <Box component="ul" sx={expertiseListSx}>
            {filtered.map((exp, idx) => (
              <Box
                key={exp.value}
                component="li"
                onClick={() => handleSelect(exp.value)}
                sx={expertiseRowSx(idx === filtered.length - 1)}
              >
                <Box component="span" sx={expertiseRowIconSx}>
                  <ExpertiseIcon />
                </Box>
                <Typography component="span" sx={expertiseRowLabelSx}>
                  {exp.label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>

    </Box>
  );
}
