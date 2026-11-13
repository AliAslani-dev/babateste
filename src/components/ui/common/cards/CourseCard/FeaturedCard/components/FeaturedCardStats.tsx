import { Box, Typography } from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import type { FeaturedCardStats as StatsType } from "../FeaturedCard.types";
import {
  statItemStyles,
  statTextStyles,
  statsRowStyles,
} from "../FeaturedCard.styles";

interface Props {
  stats: StatsType;
}

export const FeaturedCardStats = ({ stats }: Props) => (
  <Box sx={statsRowStyles}>
    <Box sx={statItemStyles}>
      <MenuBookOutlinedIcon sx={{ fontSize: 22 }} />
      <Typography variant="medium2xs" sx={statTextStyles}>{stats.chapters}</Typography>
    </Box>

    <Box sx={statItemStyles}>
      <AccessTimeOutlinedIcon sx={{ fontSize: 21 }} />
      <Typography  variant="medium2xs" sx={statTextStyles}>{stats.duration}</Typography>
    </Box>

    <Box sx={statItemStyles}>
      <PersonOutlineOutlinedIcon sx={{ fontSize: 21 }} />
      <Typography  variant="medium2xs" sx={statTextStyles}>{stats.students}</Typography>
    </Box>
  </Box>
);