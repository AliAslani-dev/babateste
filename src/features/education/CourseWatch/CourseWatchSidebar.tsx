"use client";

import { Box, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import type { CourseEpisode } from "../api";

import {
  sidebarWrapperStyles,
  sidebarHeaderStyles,
  sidebarTitleStyles,
  sidebarCountStyles,
  sidebarListStyles,
  sidebarItemStyles,
  sidebarItemActiveStyles,
  sidebarIndexStyles,
  sidebarItemContentStyles,
  sidebarItemTitleStyles,
  sidebarItemMetaStyles,
  sidebarPlayIconStyles,
} from "./CourseWatchSidebar.styles";
import type { SxProps, Theme } from "@mui/material/styles";

interface CourseWatchSidebarProps {
  episodes: CourseEpisode[];
  activeEpisodeId: number;
  onSelect: (id: number) => void;
}

const toFa = (n: number) =>
  String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
const mergeSx = (
  base: SxProps<Theme>,
  active?: SxProps<Theme>,
): SxProps<Theme> => {
  const baseStyles = Array.isArray(base) ? base : [base];
  const activeStyles = active
    ? Array.isArray(active)
      ? active
      : [active]
    : [];

  return [...baseStyles, ...activeStyles];
};
export function CourseWatchSidebar({
  episodes,
  activeEpisodeId,
  onSelect,
}: CourseWatchSidebarProps) {
  return (
    <Box sx={sidebarWrapperStyles}>
      <Box sx={sidebarHeaderStyles}>
        <Typography variant="boldBase" sx={sidebarTitleStyles}>
          سرفصل‌ها
        </Typography>
        <Box sx={sidebarCountStyles}>{toFa(episodes.length)} قسمت</Box>
      </Box>

      <Box sx={sidebarListStyles}>
        {episodes.map((ep, index) => {
          const isActive = ep.id === activeEpisodeId;

          return (
            <Box
              key={ep.id}
              component="button"
              type="button"
              onClick={() => onSelect(ep.id)}
              aria-pressed={isActive}
              sx={mergeSx(
                sidebarItemStyles,
                isActive ? sidebarItemActiveStyles : undefined,
              )}
            >
              <Box sx={sidebarIndexStyles(isActive)}>{toFa(index + 1)}</Box>

              <Box sx={sidebarItemContentStyles}>
                <Typography variant="mediumSm" sx={sidebarItemTitleStyles}>
                  {ep.title}
                </Typography>
                <Typography variant="mediumXs" sx={sidebarItemMetaStyles}>
                  {isActive ? "در حال پخش" : `قسمت ${toFa(index + 1)}`}
                </Typography>
              </Box>

              <PlayArrowRoundedIcon sx={sidebarPlayIconStyles} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
