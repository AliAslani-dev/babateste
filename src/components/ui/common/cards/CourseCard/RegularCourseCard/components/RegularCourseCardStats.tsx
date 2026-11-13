"use client";

import { Box, Typography } from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import type { FeaturedCardStats } from "../../FeaturedCard/FeaturedCard.types";
import {
  regularStatsRowStyles,
  regularStatItemStyles,
  regularStatTextStyles,
} from "../RegularCourseCard.styles";

interface Props {
  stats: FeaturedCardStats;
}

export const RegularCourseCardStats = ({ stats }: Props) => (
  <Box sx={regularStatsRowStyles}>
    <Box sx={regularStatItemStyles}>
      <MenuBookOutlinedIcon sx={{ fontSize: 14 }} />
      <Typography sx={regularStatTextStyles}>{stats.chapters}</Typography>
    </Box>

    <Box sx={regularStatItemStyles}>
      <AccessTimeOutlinedIcon sx={{ fontSize: 13 }} />
      <Typography sx={regularStatTextStyles}>{stats.duration}</Typography>
    </Box>

    <Box sx={regularStatItemStyles}>
      <PersonOutlineOutlinedIcon sx={{ fontSize: 13 }} />
      <Typography sx={regularStatTextStyles}>{stats.students}</Typography>
    </Box>
  </Box>
);