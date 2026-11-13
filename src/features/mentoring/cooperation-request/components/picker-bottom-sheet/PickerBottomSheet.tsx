// src/features/mentoring/components/cooperation-request/PickerBottomSheet.tsx
"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";

import {
  backdropSx,
  sheetSx,
  handleWrapperSx,
  handleBarSx,
  headerRowSx,
  headerTitleSx,
  closeButtonSx,
  searchOuterSx,
  searchRowSx,
  searchIconWrapperSx,
  searchInputSx,
  scrollableContentSx,
  popularSectionWrapperSx,
  sectionTitleSx,
  allSectionTitleSx,
  popularChipsGridSx,
  popularChipSx,
  listSx,
  listRowSx,
  rowIconWrapperSx,
  rowLabelSx,
  emptyStateSx,
} from "./PickerBottomSheet.styles";

export interface PickerOption {
  value: string;
  label: string;
}

export interface PickerBottomSheetProps {
  open: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  options: PickerOption[];
  popularOptions?: PickerOption[];
  searchPlaceholder: string;
  popularSectionTitle: string;
  allSectionTitle: string;
  emptyText: string;
  /** Icon rendered next to each row in the full list */
  rowIcon: React.ReactNode;
  title: string;
}

// ─── Icons ─────────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function PickerBottomSheet({
  open,
  onClose,
  onSelect,
  options,
  popularOptions,
  searchPlaceholder,
  popularSectionTitle,
  allSectionTitle,
  emptyText,
  rowIcon,
  title,
}: PickerBottomSheetProps) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? options.filter((o) => o.label.includes(query.trim()))
    : options;

  const handleSelect = (value: string) => {
    onSelect(value);
    setQuery("");
    onClose();
  };

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <Box onClick={handleClose} sx={backdropSx} />
      )}

      {/* Sheet */}
      <Box role="dialog" aria-modal="true" sx={sheetSx(open)}>

        {/* Handle */}
        <Box sx={handleWrapperSx}>
          <Box sx={handleBarSx} />
        </Box>

        {/* Header row: title + close */}
        <Box sx={headerRowSx}>
          <Typography component="span" sx={headerTitleSx}>
            {title}
          </Typography>
          <Box
            component="button"
            type="button"
            onClick={handleClose}
            sx={closeButtonSx}
          >
            <CloseIcon />
          </Box>
        </Box>

        {/* Search */}
        <Box sx={searchOuterSx}>
          <Box sx={searchRowSx}>
            <Box component="span" sx={searchIconWrapperSx}>
              <SearchIcon />
            </Box>
            <Box
              component="input"
              type="search"
              placeholder={searchPlaceholder}
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              sx={searchInputSx}
            />
          </Box>
        </Box>

        {/* Scrollable content */}
        <Box sx={scrollableContentSx}>

          {/* Popular chips — hidden during search */}
          {!query.trim() && popularOptions && popularOptions.length > 0 && (
            <Box sx={popularSectionWrapperSx}>
              <Typography component="span" sx={sectionTitleSx}>
                {popularSectionTitle}
              </Typography>
              <Box sx={popularChipsGridSx}>
                {popularOptions.map((opt) => (
                  <Box
                    key={opt.value}
                    component="button"
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    sx={popularChipSx}
                  >
                    {opt.label}
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* All / filtered list */}
          <Box>
            {!query.trim() && (
              <Typography component="span" sx={allSectionTitleSx}>
                {allSectionTitle}
              </Typography>
            )}

            {filtered.length === 0 ? (
              <Typography component="span" sx={emptyStateSx}>
                {emptyText}
              </Typography>
            ) : (
              <Box component="ul" sx={listSx}>
                {filtered.map((opt) => (
                  <Box
                    key={opt.value}
                    component="li"
                    onClick={() => handleSelect(opt.value)}
                    sx={listRowSx}
                  >
                    <Box component="span" sx={rowIconWrapperSx}>
                      {rowIcon}
                    </Box>
                    <Typography component="span" sx={rowLabelSx}>
                      {opt.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

        </Box>
      </Box>
    </>
  );
}
